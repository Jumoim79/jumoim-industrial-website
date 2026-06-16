
import Link from "next/link";

export default function PlasticMoldPage() {
  return (
    <main>

      {/* Hero */}
      <section className="hero-dark">
        <div className="container-jumoim section-padding">

          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: 4,
              color: "#9ca3af",
            }}
          >
            Precision Plastic Mold
          </p>

          <h1
            style={{
              fontSize: 58,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            High Precision Mold
            Manufacturing Capability
          </h1>

          <p
            style={{
              marginTop: 24,
              maxWidth: 760,
              color: "#d1d5db",
              fontSize: 18,
            }}
          >
            Precision mold engineering,
            conformal cooling capability
            and stable manufacturing
            support for demanding
            production requirements.
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

            <Link
              href="/contact"
              className="btn-secondary"
            >
              Customer Support
            </Link>
          </div>

        </div>
      </section>

      {/* Precision Mold Capability */}
      <section className="section-padding">
        <div className="container-jumoim">

          <h2 className="section-title">
            Precision Mold Capability
          </h2>

          <p className="section-subtitle">
            Precision tooling capability
            for demanding mold structure
            and production stability.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(4,1fr)",
              gap: 24,
              marginTop: 50,
            }}
          >

            <div className="card-industrial">
              <h3>
                Injection Mold
              </h3>
              <p>
                Precision mold
                development.
              </p>
            </div>

            <div className="card-industrial">
              <h3>
                Complex Structure
              </h3>
              <p>
                Complex mold
                engineering.
              </p>
            </div>

            <div className="card-industrial">
              <h3>
                Multi-Cavity Mold
              </h3>
              <p>
                Production stability.
              </p>
            </div>

            <div className="card-industrial">
              <h3>
                Stable Production
              </h3>
              <p>
                High repeatability.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Conformal Cooling */}
      <section className="gray-section section-padding">
        <div className="container-jumoim">

          <h2 className="section-title">
            Conformal Cooling Capability
          </h2>

          <p className="section-subtitle">
            Advanced cooling channel
            design to improve cooling
            efficiency and production
            performance.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(4,1fr)",
              gap: 24,
              marginTop: 50,
            }}
          >

            <div className="card-industrial">
              <h3>
                Cooling Optimization
              </h3>
            </div>

            <div className="card-industrial">
              <h3>
                Cycle Time Reduction
              </h3>
            </div>

            <div className="card-industrial">
              <h3>
                Complex Cooling
              </h3>
            </div>

            <div className="card-industrial">
              <h3>
                Stable Production
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* Manufacturing Solution */}
      <section className="section-padding">
        <div className="container-jumoim">

          <h2 className="section-title">
            Manufacturing Solution
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(4,1fr)",
              gap: 24,
              marginTop: 50,
            }}
          >

            <div>
              Cooling Challenge
            </div>

            <div>
              Complex Geometry
            </div>

            <div>
              Production Stability
            </div>

            <div>
              Manufacturing Efficiency
            </div>

          </div>

        </div>
      </section>

      {/* Trust */}
      <section className="gray-section section-padding">
        <div className="container-jumoim">

          <h2 className="section-title">
            Trust Building
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(4,1fr)",
              gap: 24,
              marginTop: 50,
            }}
          >

            <div>
              Engineering Team
            </div>

            <div>
              Quality Control
            </div>

            <div>
              Rapid Support
            </div>

            <div>
              Global Capability
            </div>

          </div>

        </div>
      </section>

      {/* Update */}
      <section className="section-padding">
        <div className="container-jumoim">

          <h2 className="section-title">
            Knowledge / Update Center
          </h2>

          <p className="section-subtitle">
            Capability update,
            cooling innovation
            and manufacturing
            insight.
          </p>

        </div>
      </section>

      {/* RFQ */}
      <section className="dark-section section-padding">
        <div className="container-jumoim">

          <h2 className="section-title">
            Ready For Your Project?
          </h2>

          <p
            style={{
              marginTop: 20,
              color: "#d1d5db",
            }}
          >
            Upload drawing and
            discuss your requirement
            with customer support.
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
              Upload Drawing
            </Link>

            <Link
              href="/rfq"
              className="btn-secondary"
            >
              Request Quote
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
