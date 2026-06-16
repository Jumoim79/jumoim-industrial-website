export default function Hero() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold">
          CNC + Metal Additive Manufacturing
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Precision machining & metal 3D printing for high-complexity industrial components.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="/rfq" className="px-6 py-3 bg-white text-black font-semibold">
            Request RFQ
          </a>
          <a href="/contact" className="px-6 py-3 border border-white">
            Engineering Contact
          </a>
        </div>
      </div>
    </section>
  );
}