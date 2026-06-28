"use client";

import { useEffect, useState } from "react";

type MediaItem = {
  url: string;
  name: string;
};

export default function HomePage() {
  const [images, setImages] = useState<MediaItem[]>([]);
  const [videos, setVideos] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        // 🔵 图片
        const imgRes = await fetch("/api/latest-images");
        const imgText = await imgRes.text();
        const imgData = imgText ? JSON.parse(imgText) : [];
        setImages(Array.isArray(imgData) ? imgData : []);

        // 🔵 视频
        const videoRes = await fetch("/api/latest-videos");
        const videoText = await videoRes.text();
        const videoData = videoText ? JSON.parse(videoText) : [];
        setVideos(Array.isArray(videoData) ? videoData : []);
      } catch (err) {
        console.error("API parse error:", err);
        setImages([]);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <main style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>JUMOIM AI OUTPUTS</h1>

      {loading && <p>Loading...</p>}

      {/* ================= IMAGES ================= */}
      <section>
        <h2>Latest Images</h2>

        {images.length === 0 ? (
          <p>No images found</p>
        ) : (
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {images.map((img, i) => (
              <div key={i} style={{ width: 200 }}>
                <img
                  src={img.url}
                  alt={img.name}
                  style={{ width: "100%", borderRadius: 8 }}
                />
                <p style={{ fontSize: 12 }}>{img.name}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ================= VIDEOS ================= */}
      <section style={{ marginTop: 40 }}>
        <h2>Latest Videos</h2>

        {videos.length === 0 ? (
          <p>No videos found</p>
        ) : (
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {videos.map((vid, i) => (
              <div key={i} style={{ width: 320 }}>
                <video
                  src={vid.url}
                  controls
                  style={{ width: "100%", borderRadius: 8 }}
                />
                <p style={{ fontSize: 12 }}>{vid.name}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}