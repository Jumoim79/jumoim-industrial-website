import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-dark">
      <div className="container-jumoim section-padding">

        <p>Precision Plastic Mold</p>

        <h1 style={{ fontSize: 60, fontWeight: 700, maxWidth: 900 }}>
          High Precision Mold &
          Conformal Cooling System
        </h1>

        <p style={{ marginTop: 20, maxWidth: 760, color: "#d1d5db" }}>
          Core manufacturing capability for high-performance injection mold systems.
        </p>

        <div style={{ marginTop: 40, display: "flex", gap: 16 }}>
          <Link href="/rfq" className="btn-primary">
            Request RFQ
          </Link>

          <Link href="/capability-center" className="btn-secondary">
            Capability Center
          </Link>
        </div>

      </div>
    </section>
  );
}