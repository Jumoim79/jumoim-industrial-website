"use client";

import { useEffect, useState } from "react";

type UpdateItem = {
  id: number;
  title: string;
  category: string;
  content: string;
  date: string;
};

export default function UpdateSection() {
  const [updates, setUpdates] =
    useState<UpdateItem[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadUpdates() {
      try {
        const res = await fetch(
          "/api/openwebui/updates"
        );

        const data = await res.json();

        if (data.success) {
          setUpdates(data.data);
        }
      } catch (error) {
        console.error(
          "Failed to load updates",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    loadUpdates();
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Manufacturing Updates
          </h2>

          <p className="text-gray-600 text-lg">
            Latest precision manufacturing
            capabilities and engineering
            breakthroughs from JUMOIM.
          </p>
        </div>

        {loading ? (
          <p>Loading updates...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">

            {updates.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 shadow-sm border"
              >
                <div className="text-sm text-gray-500 mb-3 uppercase">
                  {item.category}
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {item.content}
                </p>

                <div className="text-sm text-gray-400">
                  {new Date(
                    item.date
                  ).toLocaleDateString()}
                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </section>
  );
}