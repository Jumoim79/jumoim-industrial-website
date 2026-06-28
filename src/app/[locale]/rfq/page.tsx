"use client";

import { useState } from "react";

export default function RFQPage() {
  const [form, setForm] = useState({
    message: "",
    company: "",
    email: "",
    whatsapp: "",
    country: "",
  });

  const [sent, setSent] = useState(false);

  const update = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const submit = async () => {
    const res = await fetch("/api/rfq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) setSent(true);
  };

  if (sent) {
    return (
      <div style={{ padding: 40 }}>
        <h2>RFQ Submitted Successfully</h2>
        <p>Our engineering team will contact you soon.</p>

        <a
          href={`https://wa.me/${form.whatsapp}`}
          target="_blank"
        >
          Contact via WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 40 }}>
      <h1>JUMOIM RFQ Inquiry</h1>
      <p>Precision Mold / CNC / Manufacturing Request Form</p>

      <textarea
        placeholder="Describe your requirement: CNC mold, injection parts, tolerance, material..."
        style={{ width: "100%", height: 120, marginTop: 20 }}
        onChange={(e) => update("message", e.target.value)}
      />

      <input
        placeholder="Company Name"
        style={{ width: "100%", marginTop: 10 }}
        onChange={(e) => update("company", e.target.value)}
      />

      <input
        placeholder="Email"
        style={{ width: "100%", marginTop: 10 }}
        onChange={(e) => update("email", e.target.value)}
      />

      <input
        placeholder="WhatsApp (with country code)"
        style={{ width: "100%", marginTop: 10 }}
        onChange={(e) => update("whatsapp", e.target.value)}
      />

      <input
        placeholder="Country"
        style={{ width: "100%", marginTop: 10 }}
        onChange={(e) => update("country", e.target.value)}
      />

      <button
        onClick={submit}
        style={{
          marginTop: 20,
          padding: "12px 24px",
          background: "#000",
          color: "#fff",
        }}
      >
        Submit RFQ
      </button>
    </div>
  );
}