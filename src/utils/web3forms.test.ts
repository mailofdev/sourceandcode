import { afterEach, describe, expect, it, vi } from "vitest";
import { isWeb3FormsConfigured, submitContactViaWeb3Forms, type Web3FormsConfig } from "./web3forms";

const config: Web3FormsConfig = {
  accessKey: "test-key",
  projectName: "sourceandcode.in",
  fromName: "SourceandcodE",
};

const payload = {
  name: "Ada",
  email: "ada@example.com",
  message: "Hello",
  source: "contact-page",
};

describe("web3forms", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("reports configured only when the access key is non-empty", () => {
    expect(isWeb3FormsConfigured("test-key")).toBe(true);
    expect(isWeb3FormsConfigured("")).toBe(false);
    expect(isWeb3FormsConfigured("   ")).toBe(false);
    expect(isWeb3FormsConfigured(undefined)).toBe(false);
  });

  it("returns a clear error and does not fetch when the key is missing", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    const result = await submitContactViaWeb3Forms({ ...config, accessKey: "  " }, payload);

    expect(result).toEqual({ ok: false, error: "Contact form is not configured." });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("posts FormData to Web3Forms and maps success", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
    vi.stubGlobal("fetch", fetchMock);

    const result = await submitContactViaWeb3Forms(config, {
      ...payload,
      templateName: "batch-enquiry",
    });

    expect(result).toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.web3forms.com/submit",
      expect.objectContaining({ method: "POST" }),
    );
    const body = fetchMock.mock.calls[0][1].body as FormData;
    expect(body.get("access_key")).toBe("test-key");
    expect(body.get("name")).toBe("Ada");
    expect(body.get("email")).toBe("ada@example.com");
    expect(body.get("replyto")).toBe("ada@example.com");
    expect(body.get("message")).toBe("Hello");
    expect(body.get("project_name")).toBe("sourceandcode.in");
    expect(body.get("from_name")).toBe("SourceandcodE");
    expect(body.get("subject")).toBe("[sourceandcode.in] Contact from Ada");
    expect(body.get("source")).toBe("contact-page");
    expect(body.get("template")).toBe("batch-enquiry");
    expect(body.get("botcheck")).toBe("");
  });

  it("silently accepts honeypot-filled submissions without calling the API", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    const result = await submitContactViaWeb3Forms(config, {
      ...payload,
      botcheck: "filled-by-bot",
    });

    expect(result).toEqual({ ok: true });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("returns the API error message when submit fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ success: false, message: "Invalid access key" }),
      }),
    );

    const result = await submitContactViaWeb3Forms(config, payload);
    expect(result).toEqual({ ok: false, error: "Invalid access key" });
  });

  it("returns a network error when fetch throws", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));

    const result = await submitContactViaWeb3Forms(config, payload);
    expect(result).toEqual({
      ok: false,
      error: "Network error. Please try again or email us directly.",
    });
  });
});
