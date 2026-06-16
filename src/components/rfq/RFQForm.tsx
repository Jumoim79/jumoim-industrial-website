"use client";

import { useState } from "react";

export default function RFQForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/rfq/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error("RFQ submit error:", error);
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-xl border p-8 text-center">
        <h3 className="text-2xl font-bold">
          RFQ Submitted Successfully
        </h3>
        <p className="mt-3 text-gray-500">
          Our engineering team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input
        name="name"
        placeholder="Your Name"
        required
        className="w-full rounded-lg border p-4"
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        required
        className="w-full rounded-lg border p-4"
      />

      <input
        name="company"
        placeholder="Company Name"
        className="w-full rounded-lg border p-4"
      />

      <textarea
        name="message"
        placeholder="Project Details"
        rows={6}
        className="w-full rounded-lg border p-4"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-black px-8 py-4 text-white"
      >
        {loading ? "Submitting..." : "Submit RFQ"}
      </button>
    </form>
  );
}