"use client"

import { useState } from "react"

export default function RFQPage() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [country, setCountry] = useState("")
  const [message, setMessage] = useState("")

  async function submitRFQ(e: any) {
    e.preventDefault()

    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          company,
          country,
          message
        })
      })

      const data = await res.json()

      // 🔥 WhatsApp自动打开（核心转化）
      if (data.whatsapp_url) {
        window.open(data.whatsapp_url, "_blank")
      }

      alert("RFQ submitted successfully")

    } catch (err) {
      console.log(err)
      alert("Failed to send RFQ")
    }
  }

  return (
    <div style={{ padding: 40, maxWidth: 600, margin: "0 auto" }}>

      <h1>Request for Quotation (RFQ)</h1>

      <form onSubmit={submitRFQ}>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />

        <input
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />

        <input
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />

        <textarea
          placeholder="Describe your project..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ width: "100%", padding: 10, height: 120, marginBottom: 10 }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: 12,
            background: "black",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Submit RFQ
        </button>

      </form>

    </div>
  )
}