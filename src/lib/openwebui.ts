export async function getUpdates() {
  const res = await fetch("/api/openwebui/updates");
  const data = await res.json();
  return data.success ? data.data : [];
}