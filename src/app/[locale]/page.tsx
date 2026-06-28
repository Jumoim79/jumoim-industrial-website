export default async function Page({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main style={{ padding: 40 }}>
      JUMOIM {locale}
    </main>
  );
}