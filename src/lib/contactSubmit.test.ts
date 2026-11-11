import { afterEach, describe, expect, it, vi } from "vitest";

describe("submitSiteContact", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
    vi.resetModules();
  });

  it("does not fetch when the access key is missing", async () => {
    vi.stubEnv("VITE_WEB3FORMS_ACCESS_KEY", "");
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const { submitSiteContact } = await import("./contactSubmit");

    const result = await submitSiteContact({
      name: "Ada",
      email: "ada@example.com",
      message: "Hello",
    });

    expect(result).toEqual({ ok: false, error: "Contact form is not configured." });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("tags the site and folds phone into the message", async () => {
    vi.stubEnv("VITE_WEB3FORMS_ACCESS_KEY", "test-key");
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
    vi.stubGlobal("fetch", fetchMock);
    const { submitSiteContact } = await import("./contactSubmit");

    const result = await submitSiteContact({
      name: "  Ada  ",
      email: " ada@example.com ",
      message: "Hello",
      phone: "9876543210",
      botcheck: "",
    });

    expect(result).toEqual({ ok: true });
    const body = fetchMock.mock.calls[0][1].body as FormData;
    expect(body.get("access_key")).toBe("test-key");
    expect(body.get("name")).toBe("Ada");
    expect(body.get("email")).toBe("ada@example.com");
    expect(body.get("message")).toBe("Hello\n\nPhone: 9876543210");
    expect(body.get("project_name")).toBe("sourceandcode.in");
    expect(body.get("from_name")).toBe("SourceandcodE");
    expect(body.get("subject")).toBe("[sourceandcode.in] Contact from Ada");
    expect(body.get("source")).toBe("contact-page");
    expect(body.get("botcheck")).toBe("");
  });
});
