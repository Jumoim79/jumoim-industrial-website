export default function RFQPage() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Request for Quotation</h1>

      <form>
        <input placeholder="Company Email" />
        <br />
        <textarea placeholder="Project Details" />
        <br />
        <button type="submit">Submit RFQ</button>
      </form>
    </main>
  );
}