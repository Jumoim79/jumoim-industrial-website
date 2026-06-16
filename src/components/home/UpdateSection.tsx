import Link from "next/link";

export default function UpdateSection() {
  return (
    <section className="section-padding">
      <div className="container-jumoim">

        <h2 className="section-title">
          Capability Update Center
        </h2>

        <div className="grid-3">

          <div className="card-industrial">
            Conformal Cooling Optimization
          </div>

          <div className="card-industrial">
            Mold Flow Improvement
          </div>

          <div className="card-industrial">
            CNC Precision Upgrade
          </div>

        </div>

        <div style={{ marginTop: 40 }}>
          <Link href="/capability-center" className="btn-secondary">
            View All Updates
          </Link>
        </div>

      </div>
    </section>
  );
}