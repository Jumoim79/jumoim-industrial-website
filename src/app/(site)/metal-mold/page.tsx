
import Link from "next/link";

export default function MetalMoldPage() {
  return (
    <main>

      <section className="hero-dark">
        <div className="container-jumoim section-padding">

          <p>Precision Metal Mold</p>

          <h1
            style={{
              fontSize: 58,
              fontWeight: 700,
              maxWidth: 900,
            }}
          >
            Precision Tooling &
            High Volume Manufacturing
          </h1>

          <p
            style={{
              maxWidth: 700,
              color: "#d1d5db",
              marginTop: 24,
            }}
          >
            Precision stamping mold,
            structural tooling and
            stable volume production.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 40,
            }}
          >
            <Link
              href="/rfq"
              className="btn-primary"
            >
              Request RFQ
            </Link>
          </div>

        </div>
      </section>

      <section className="section-padding">
        <div className="container-jumoim">
          <h2 className="section-title">
            Precision Tooling Capability
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(4,1fr)",
              gap: 24,
              marginTop: 40,
            }}
          >
            <div className="card-industrial">
              Progressive Tooling
            </div>

            <div className="card-industrial">
              Structural Parts Mold
            </div>

            <div className="card-industrial">
              Tight Tolerance
            </div>

            <div className="card-industrial">
              Stable Production
            </div>
          </div>
        </div>
      </section>

      <section className="gray-section section-padding">
        <div className="container-jumoim">

          <h2 className="section-title">
            Structural Tooling Capability
          </h2>

          <p className="section-subtitle">
            High precision structure
            tooling and reliable
            mass production.
          </p>

        </div>
      </section>

      <section className="section-padding">
        <div className="container-jumoim">

          <h2 className="section-title">
            High Volume Manufacturing
          </h2>

          <p className="section-subtitle">
            Stable production for
            industrial manufacturing.
          </p>

        </div>
      </section>

      <section className="gray-section section-padding">
        <div className="container-jumoim">

          <h2 className="section-title">
            Manufacturing Solution
          </h2>

          <p>
            Cost optimization,
            structure reliability,
            manufacturing efficiency.
          </p>

        </div>
      </section>

      <section className="section-padding">
        <div className="container-jumoim">

          <h2 className="section-title">
            Trust Building
          </h2>

          <p>
            Engineering support,
            quality system,
            global manufacturing.
          </p>

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

          <h2 className="section-title">
            Start Your Project
          </h2>

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

