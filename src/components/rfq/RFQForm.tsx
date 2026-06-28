"use client";

import { useState } from "react";

export default function RFQForm() {
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault();


setLoading(true);

const form = e.currentTarget;

const formData = {
  name: (form.elements.namedItem("name") as HTMLInputElement)?.value || "",
  email: (form.elements.namedItem("email") as HTMLInputElement)?.value || "",
  material: (form.elements.namedItem("material") as HTMLInputElement)?.value || "",
  quantity: (form.elements.namedItem("quantity") as HTMLInputElement)?.value || "",
  message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "",
};

try {
  await fetch("/api/rfq", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  setSuccess(true);
  form.reset();
} catch (error) {
  console.error(error);
}

setLoading(false);


}

return ( <form onSubmit={handleSubmit}> <input name="name" placeholder="Name / Company" required /> <br /> <br />

```
  <input name="email" type="email" placeholder="Email" required />
  <br />
  <br />

  <input name="material" placeholder="Material" />
  <br />
  <br />

  <input name="quantity" placeholder="Quantity" />
  <br />
  <br />

  <textarea name="message" placeholder="Project Details" />
  <br />
  <br />

  <button type="submit" disabled={loading}>
    {loading ? "Submitting..." : "Submit RFQ"}
  </button>

  {success && (
    <p>
      Your request has been received. Our engineering team will contact you.
    </p>
  )}
</form>


);
}
