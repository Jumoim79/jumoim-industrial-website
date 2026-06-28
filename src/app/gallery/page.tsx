"use client"

import { useEffect, useState } from "react"

export default function Gallery() {

  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    fetch("/api/images")
      .then(r => r.json())
      .then(d => setImages(d.images || []))
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Industrial Gallery</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "10px"
      }}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            style={{ width: "100%", borderRadius: 6 }}
          />
        ))}
      </div>
    </div>
  )
}