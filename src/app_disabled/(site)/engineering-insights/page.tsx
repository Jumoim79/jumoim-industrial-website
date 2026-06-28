async function getInsights() {
  const res = await fetch(
    "http://localhost:3001/api/openwebui/knowledge",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function Page() {
  const data = await getInsights();

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: 60,
      }}
    >
      <h1
        style={{
          fontSize: 38,
          fontWeight: 700,
        }}
      >
        Engineering Insights
      </h1>

      <p
        style={{
          color: "#777",
          marginBottom: 40,
        }}
      >
        Customer Manufacturing Needs
      </p>

      <div
        style={{
          display: "grid",
          gap: 20,
        }}
      >
        {data.data.map((item: any) => (
          <div
            key={item.id}
            style={{
              border:
                "1px solid #ddd",
              borderRadius: 12,
              padding: 25,
            }}
          >
            <div
              style={{
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              {item.title}
            </div>

            <div
              style={{
                marginTop: 10,
                color: "#666",
              }}
            >
              {item.content}
            </div>

            <div
              style={{
                marginTop: 12,
                fontSize: 12,
                color: "#999",
              }}
            >
              {item.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}