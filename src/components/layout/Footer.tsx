export default function Footer() {
  return (
    <footer
      style={{
        background: "#111",
        color: "#fff",
        marginTop: 80,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "60px 24px",
        }}
      >
        <h2>JUMOIM</h2>

        <p style={{ color: "#bbb" }}>
          Precision Manufacturing
          Partner for Global Industry
        </p>

        <div style={{ marginTop: 20 }}>
          Medical · Automotive ·
          Industrial Equipment
        </div>

        <div
          style={{
            marginTop: 30,
            color: "#777",
          }}
        >
          © 2026 JUMOIM. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}