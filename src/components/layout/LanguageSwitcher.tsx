"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLang = (lang: string) => {
    const segments = pathname.split("/");
    segments[1] = lang;
    router.push(segments.join("/"));
  };

  return (
    <div className="lang-switch">
      <button onClick={() => switchLang("en")}>EN</button>
      <button onClick={() => switchLang("de")}>DE</button>
      <button onClick={() => switchLang("fr")}>FR</button>
      <button onClick={() => switchLang("es")}>ES</button>
    </div>
  );
}