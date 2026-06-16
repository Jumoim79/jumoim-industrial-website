export default function CTA() {
  return (
    <section className="py-24 bg-black text-white text-center">
      <h2 className="text-3xl font-bold">Start Engineering Inquiry</h2>

      <p className="mt-4 text-gray-300">
        Submit your RFQ for CNC or metal additive manufacturing support.
      </p>

      <a
        href="/rfq"
        className="inline-block mt-8 px-8 py-4 bg-white text-black font-semibold"
      >
        Submit RFQ
      </a>
    </section>
  );
}