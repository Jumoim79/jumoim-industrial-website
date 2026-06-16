"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        borderBottom: "1px solid #eee",
        background: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "18px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/en"
          style={{
            fontSize: 26,
            fontWeight: 700,
            textDecoration: "none",
            color: "#111",
          }}
        >
          JUMOIM
        </Link>

        <nav
          style={{
            display: "flex",
            gap: 24,
            alignItems: "center",
          }}
        >
          <Link href="/en/plastic-mold">
            Plastic Mold
          </Link>

          <Link href="/en/metal-mold">
            Metal Mold
          </Link>

          <Link href="/en/cnc-metal-3d">
            CNC + Metal 3D
          </Link>

          <Link href="/en/about">
            About
          </Link>

          <Link href="/en/contact">
            Contact
          </Link>

          <Link
            href="/en/rfq"
            style={{
              background: "#111",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            Get RFQ
          </Link>
        </nav>
      </div>
    </header>
  );
}