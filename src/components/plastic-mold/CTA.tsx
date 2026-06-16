import Link from "next/link";

export default function CTA() {
  return (
    <section className="dark-section section-padding">
      <div className="container-jumoim">

        <h2 className="section-title">
          Start Your Mold Project
        </h2>

        <p style={{ color: "#d1d5db", maxWidth: 700 }}>
          Submit engineering requirements for evaluation and quotation.
        </p>

        <div style={{ marginTop: 30 }}>
          <Link href="/rfq" className="btn-primary">
            Submit RFQ
          </Link>
        </div>

      </div>
    </section>
  );
}