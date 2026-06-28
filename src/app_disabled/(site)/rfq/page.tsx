"use client";

import { useState } from "react";

export default function RFQPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const data = {
      name: form.elements.namedItem("name").value,
      email: form.elements.namedItem("email").value,
      material: form.elements.namedItem("material").value,
      quantity: form.elements.namedItem("quantity").value,
      message: form.elements.namedItem("message").value,
    };

    await fetch("/api/rfq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setSuccess(true);
    setLoading(false);
    form.reset();
  }

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 40 }}>
      <h1>Request for Quotation</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name / Company" required /><br /><br />
        <input name="email" placeholder="Email" required /><br /><br />
        <input name="material" placeholder="Material" /><br /><br />
        <input name="quantity" placeholder="Quantity" /><br /><br />
        <textarea name="message" placeholder="Project details" /><br /><br />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit RFQ"}
        </button>
      </form>

      {success && (
        <p style={{ marginTop: 20, color: "green" }}>
          Request submitted. Our engineering team will contact you.
        </p>
      )}
    </div>
  );
}