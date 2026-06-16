import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        background: "#0a0f1a",
        color: "#fff",
        minHeight: "100vh",
        padding: "60px",
      }}
    >
      <h1
        style={{
          fontSize: "52px",
          marginBottom: "20px",
        }}
      >
        JUMOIM
      </h1>

      <p
        style={{
          fontSize: "24px",
          maxWidth: "900px",
          marginBottom: "50px",
          lineHeight: 1.8,
        }}
      >
        Precision Manufacturing for Global Industrial Clients
      </p>

      <div
        style={{
          display: "grid",
          gap: "20px",
        }}
      >
        <Link href="/plastic-mold">
          Precision Plastic Mold →
        </Link>

        <Link href="/metal-mold">
          Precision Metal Mold →
        </Link>

        <Link href="/cnc-metal-3d">
          CNC + Metal Additive →
        </Link>

        <Link href="/rfq">
          Submit RFQ →
        </Link>
      </div>
    </main>
  );
}