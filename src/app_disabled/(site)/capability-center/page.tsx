import Link from "next/link";

export default function CapabilityCenterPage() {
  return (
    <main>

      {/* Hero */}
      <section className="hero-dark">
        <div className="container-jumoim section-padding">

          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: 3,
              color: "#9ca3af",
            }}
          >
            Capability Center
          </p>

          <h1
            style={{
              fontSize: 58,
              fontWeight: 700,
              maxWidth: 900,
              lineHeight: 1.1,
            }}
          >
            Manufacturing Capability
            Update Center
          </h1>

          <p
            style={{
              marginTop: 24,
              maxWidth: 760,
              color: "#d1d5db",
              fontSize: 18,
            }}
          >
            Explore manufacturing
            capability, engineering
            improvement and precision
            production updates.
          </p>

        </div>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <div className="container-jumoim">

          <h2 className="section-title">
            Core Capability
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3,1fr)",
              gap: 24,
              marginTop: 50,
            }}
          >

            <div className="card-industrial">
              <h3>
                Plastic Mold
              </h3>

              <p>
                Precision mold &
                conformal cooling.
              </p>
            </div>

            <div className="card-industrial">
              <h3>
                Metal Mold
              </h3>

              <p>
                Precision tooling
                and stamping.
              </p>
            </div>

            <div className="card-industrial">
              <h3>
                CNC + Additive
              </h3>

              <p>
                Precision machining
                capability.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Update Feed */}
      <section className="gray-section section-padding">
        <div className="container-jumoim">

          <h2 className="section-title">
            Latest Capability Updates
          </h2>

          <div
            style={{
              display: "grid",
              gap: 20,
              marginTop: 40,
            }}
          >

            <div className="card-industrial">
              Mold Cooling Optimization
            </div>

            <div className="card-industrial">
              Precision Tooling Update
            </div>

            <div className="card-industrial">
              CNC Manufacturing
              Improvement
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="dark-section section-padding">
        <div className="container-jumoim">

          <h2 className="section-title">
            Start Your RFQ
          </h2>

          <div
            style={{
              marginTop: 30,
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

    </main>
  );
}

