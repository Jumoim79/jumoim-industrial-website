import Link from "next/link";

export default function Page() {
  return (
    <div style={{ padding: 40 }}>
      <h1>JUMOIM Manufacturing</h1>

      <p>Precision Industrial Manufacturing</p>

      <ul>
        <li><Link href="/en/plastic-mold">Plastic Mold</Link></li>
        <li><Link href="/en/metal-mold">Metal Mold</Link></li>
        <li><Link href="/en/cnc-metal-3d">CNC + Metal 3D</Link></li>
        <li><Link href="/en/rfq">RFQ</Link></li>
      </ul>
    </div>
  );
}