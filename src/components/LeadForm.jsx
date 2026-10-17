"use client";

import { useState } from "react";
import config from "@/config/site.config";

export default function LeadForm({ formId, submitLabel, labels, placeholders }) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const founder = config.site.founder;

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fullName = String(data.get("full_name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone_number") || "").trim();

    if (fullName.length < 2) {
      setError("Please add your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      setError("Enter a valid phone number, including the country code if needed.");
      return;
    }

    setError("");
    setName(fullName);
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-3xl p-6 sm:p-7">
        <h3 className="font-display text-xl font-bold text-navy">Thank you, {name}.</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          An official enquiry inbox is not connected yet, so this message stays on your device.
          Continue with founder and mentor{" "}
          <a
            href={founder.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue underline decoration-blue/30 underline-offset-2"
          >
            {founder.name}
          </a>{" "}
          at {founder.urlLabel} and mention the batch, your phone number, and what you want to learn.
        </p>
        <button
          type="button"
          className="btn-primary mt-5 inline-flex"
          onClick={() => {
            setStatus("idle");
            setName("");
          }}
        >
          Write another note
        </button>
      </div>
    );
  }

  return (
    <form id={formId} onSubmit={handleSubmit} className="space-y-4" noValidate>
      <Field
        id={`${formId}-name`}
        name="full_name"
        type="text"
        autoComplete="name"
        label={labels.name}
        placeholder={placeholders.name}
        required
      />
      <Field
        id={`${formId}-email`}
        name="email"
        type="email"
        autoComplete="email"
        label={labels.email}
        placeholder={placeholders.email}
        required
      />
      <Field
        id={`${formId}-phone`}
        name="phone_number"
        type="tel"
        autoComplete="tel"
        label={labels.phone}
        placeholder={placeholders.phone}
        required
      />
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-navy" htmlFor={`${formId}-message`}>
          {labels.message}
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={4}
          placeholder={placeholders.message}
          className="field min-h-28 resize-y px-3 py-3 text-sm"
        />
      </div>
      {error ? (
        <p role="alert" className="text-sm font-medium text-red-700">
          {error}
        </p>
      ) : null}
      <button type="submit" className="btn-primary inline-flex w-full">
        {submitLabel}
      </button>
    </form>
  );
}

function Field({ id, label, ...props }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-navy" htmlFor={id}>
        {label}
      </label>
      <input id={id} className="field h-12 px-3 text-sm" {...props} />
    </div>
  );
}
