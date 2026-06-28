"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const locales = ["en", "de", "fr", "es", "ja"];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [current, setCurrent] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setCurrent(saved);
  }, []);

  function switchLang(lang: string) {
    localStorage.setItem("lang", lang);
    setCurrent(lang);

    const parts = pathname.split("/");
    parts[1] = lang;
    router.push(parts.join("/"));
  }

  return (
    <div style={{ display: "flex", gap: 10 }}>
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => switchLang(l)}
          style={{
            padding: "6px 10px",
            border: l === current ? "2px solid black" : "1px solid gray",
            background: "white",
            cursor: "pointer",
          }}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}