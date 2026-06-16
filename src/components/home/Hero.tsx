import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-dark">
      <div className="container-jumoim section-padding">

        <p style={{ letterSpacing: 2, color: "#9ca3af" }}>
          JUMOIM Manufacturing
        </p>

        <h1 style={{ fontSize: 64, fontWeight: 700, maxWidth: 900 }}>
          Precision Mold · Metal Mold · CNC Manufacturing
        </h1>

        <p style={{ marginTop: 20, maxWidth: 760, color: "#d1d5db" }}>
          High-end manufacturing capability for global industrial clients.
        </p>

        <div style={{ marginTop: 40, display: "flex", gap: 16 }}>
          <Link href="/rfq" className="btn-primary">
            Request RFQ
          </Link>

          <Link href="/capability-center" className="btn-secondary">
            View Capability
          </Link>
        </div>

      </div>
    </section>
  );
}