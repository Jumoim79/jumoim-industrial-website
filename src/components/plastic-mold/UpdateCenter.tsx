import Link from "next/link";

export default function UpdateCenter() {
  return (
    <section className="section-padding">
      <div className="container-jumoim">

        <h2 className="section-title">
          Capability Update Center
        </h2>

        <div className="grid-3">

          <div className="card-industrial">
            Cooling channel optimization
          </div>

          <div className="card-industrial">
            Mold structure enhancement
          </div>

          <div className="card-industrial">
            Injection stability upgrade
          </div>

        </div>

        <div style={{ marginTop: 40 }}>
          <Link href="/capability-center" className="btn-secondary">
            View Updates
          </Link>
        </div>

      </div>
    </section>
  );
}