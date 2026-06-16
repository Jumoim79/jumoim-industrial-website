async function getData() {
  const res = await fetch(
    "http://localhost:3001/api/openwebui/updates",
    { cache: "no-store" }
  );
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div style={{ padding: "60px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: 32, fontWeight: 700 }}>
        Manufacturing Updates
      </h1>

      <p style={{ color: "#666", marginBottom: 40 }}>
        Engineering & Production Intelligence
      </p>

      <div style={{ display: "grid", gap: 20 }}>
        {data.data.map((item: any) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #eee",
              padding: 20,
              borderRadius: 10,
              background: "#fff",
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 600 }}>
              {item.title}
            </div>

            <div style={{ fontSize: 13, color: "#888", marginTop: 6 }}>
              {item.category} · {item.date}
            </div>

            <p style={{ marginTop: 10, color: "#333" }}>
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}