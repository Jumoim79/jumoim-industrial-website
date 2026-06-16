import Link from "next/link";

export default function CoreCapability() {
  return (
    <section className="section-padding">
      <div className="container-jumoim">

        <h2 className="section-title">
          Core Manufacturing Capability
        </h2>

        <div className="grid-3">

          <div className="card-industrial">
            <h3>Precision Plastic Mold</h3>
            <p>Conformal cooling mold systems</p>
            <Link href="/plastic-mold">View →</Link>
          </div>

          <div className="card-industrial">
            <h3>Precision Metal Mold</h3>
            <p>High volume tooling & stamping</p>
            <Link href="/metal-mold">View →</Link>
          </div>

          <div className="card-industrial">
            <h3>CNC + Additive</h3>
            <p>Precision parts manufacturing</p>
            <Link href="/cnc-metal-3d">View →</Link>
          </div>

        </div>

      </div>
    </section>
  );
}