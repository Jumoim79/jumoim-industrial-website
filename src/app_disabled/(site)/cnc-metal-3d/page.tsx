
import Link from "next/link";

export default function CNCPage() {
  return (
    <main>

      <section className="hero-dark">
        <div className="container-jumoim section-padding">

          <h1
            style={{
              fontSize: 58,
              fontWeight: 700,
            }}
          >
            CNC + Metal Additive
            Manufacturing
          </h1>

          <p
            style={{
              color: "#d1d5db",
              marginTop: 24,
              maxWidth: 720,
            }}
          >
            Precision CNC machining
            and complex geometry
            metal manufacturing.
          </p>

        </div>
      </section>

      <section className="section-padding">
        <div className="container-jumoim">
          <h2 className="section-title">
            CNC Capability
          </h2>
        </div>
      </section>

      <section className="gray-section section-padding">
        <div className="container-jumoim">
          <h2 className="section-title">
            Metal 3D Printing Capability
          </h2>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-jumoim">
          <h2 className="section-title">
            Tight Tolerance Manufacturing
          </h2>
        </div>
      </section>

      <section className="gray-section section-padding">
        <div className="container-jumoim">
          <h2 className="section-title">
            Complex Geometry Solution
          </h2>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-jumoim">
          <h2 className="section-title">
            Trust Building
          </h2>
        </div>
      </section>

      <section className="gray-section section-padding">
        <div className="container-jumoim">
          <h2 className="section-title">
            Knowledge / Update Center
          </h2>
        </div>
      </section>

      <section className="dark-section section-padding">
        <div className="container-jumoim">

          <Link
            href="/rfq"
            className="btn-primary"
          >
            Request RFQ
          </Link>

        </div>
      </section>

    </main>
  );
}
