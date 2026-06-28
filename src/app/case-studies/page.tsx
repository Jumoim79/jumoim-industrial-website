export default async function Page() {
  const res = await fetch("http://localhost:3001/api/cases", {
    cache: "no-store",
  });

  const cases = await res.json();

  return (
    <div style={{ padding: 40, background: "#0b0f14", color: "white" }}>
      <h1>JUMOIM Industrial Case Studies</h1>

      <div style={{ display: "grid", gap: 20, marginTop: 20 }}>
        {cases.map((item: any) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #2a3441",
              padding: 20,
              borderRadius: 12,
              background: "#111824",
            }}
          >
            {/* 图片 */}
            {item.image && (
              <img
                src={item.image}
                style={{ width: "100%", borderRadius: 10 }}
              />
            )}

            <h2>{item.title}</h2>
            <p>Industry: {item.industry}</p>
            <p>Material: {item.materials}</p>
            <p>Tolerance: {item.tolerance}</p>
            <p>Status: {item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}