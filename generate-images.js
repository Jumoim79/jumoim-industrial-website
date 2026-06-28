const fs = require("fs");
const path = require("path");

// 简单生成SVG工业风占位图
function createSVG(title, color) {
  return `
<svg width="1200" height="675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" x2="1">
      <stop offset="0%" stop-color="${color}" />
      <stop offset="100%" stop-color="#0a0f1c" />
    </linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#g)" />
  <text x="50%" y="50%" font-size="40" fill="white"
        text-anchor="middle" font-family="Arial">
    ${title}
  </text>
</svg>`;
}

const images = [
  { file: "hero-industrial.svg", title: "JUMOIM Precision Manufacturing", color: "#0ea5e9" },
  { file: "mold.svg", title: "Injection Mold / Conformal Cooling", color: "#2563eb" },
  { file: "cnc.svg", title: "CNC Precision Machining", color: "#1d4ed8" },
  { file: "metal3d.svg", title: "Metal 3D Printing", color: "#111827" },
  { file: "factory.svg", title: "Smart Manufacturing Factory", color: "#0f172a" },
  { file: "rfq.svg", title: "Engineering RFQ System", color: "#334155" }
];

const base = path.join(__dirname, "public/images");

for (const img of images) {
  const filePath = path.join(base, img.file);
  fs.writeFileSync(filePath, createSVG(img.title, img.color));
  console.log("Generated:", filePath);
}