export default async function Page() {
  let cases = [];

  try {
    const res = await fetch("http://localhost:3000/data/cases.json", {
      cache: "no-store"
    });
    cases = await res.json();
  } catch (e) {
    cases = [];
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>JUMOIM Case Studies</h1>

      {cases.map((item: any) => (
        <div key={item.id} style={{ marginBottom: 30 }}>
          <h2>{item.title}</h2>
          <p>{item.industry}</p>
          <p>{item.outcome}</p>
        </div>
      ))}
    </div>
  );
}