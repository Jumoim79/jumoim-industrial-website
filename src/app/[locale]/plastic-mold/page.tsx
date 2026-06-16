import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } =
    await params;

  return (
    <main>

      <section className="hero-dark">
        <div className="container-jumoim section-padding">

          <p>
            Precision Plastic Mold
          </p>

          <h1
            style={{
              fontSize: 58,
              fontWeight: 700,
              maxWidth: 900,
            }}
          >
            Precision Mold &
            Conformal Cooling
            Capability
          </h1>

          <p
            style={{
              marginTop: 24,
              maxWidth: 760,
              color: "#d1d5db",
            }}
          >
            High precision mold
            manufacturing and
            conformal cooling
            capability for stable
            production.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 40,
            }}
          >
            <Link
              href={`/${locale}/rfq`}
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
            Precision Mold Capability
          </h2>

          <p className="section-subtitle">
            High precision mold
            engineering and stable
            manufacturing.
          </p>

        </div>
      </section>

      <section className="gray-section section-padding">
        <div className="container-jumoim">

          <h2 className="section-title">
            Conformal Cooling Capability
          </h2>

        </div>
      </section>

      <section className="section-padding">
        <div className="container-jumoim">

          <h2 className="section-title">
            Manufacturing Solution
          </h2>

        </div>
      </section>

      <section className="gray-section section-padding">
        <div className="container-jumoim">

          <h2 className="section-title">
            Trust Building
          </h2>

        </div>
      </section>

      <section className="section-padding">
        <div className="container-jumoim">

          <h2 className="section-title">
            Knowledge / Update Center
          </h2>

        </div>
      </section>

    </main>
  );
}

