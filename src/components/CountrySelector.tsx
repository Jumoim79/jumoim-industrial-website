"use client";

import { useRouter, usePathname } from "next/navigation";

const countries = [
  { code: "en", label: "United States" },
  { code: "de", label: "Germany" },
  { code: "fr", label: "France" },
  { code: "es", label: "Spain" },
  { code: "it", label: "Italy" },
  { code: "ja", label: "Japan" },
  { code: "ko", label: "Korea" },
  { code: "zh", label: "China" }
];

export default function CountrySelector() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLang = (lang: string) => {
    // 用 ?lang=xx 控制语言（稳定版）
    router.push(`${pathname}?lang=${lang}`);
  };

  return (
    <select
      onChange={(e) => switchLang(e.target.value)}
      style={{
        background: "#111827",
        color: "white",
        padding: 6,
        border: "1px solid #374151"
      }}
    >
      <option>🌍 Select Country</option>
      {countries.map(c => (
        <option key={c.code} value={c.code}>
          {c.label}
        </option>
      ))}
    </select>
  );
}