export default function Faq() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold">FAQ</h2>

        <div className="mt-6 space-y-4">
          <div>
            <h3 className="font-semibold">What is the lead time?</h3>
            <p className="text-gray-600">Depends on complexity and material.</p>
          </div>

          <div>
            <h3 className="font-semibold">Do you support prototypes?</h3>
            <p className="text-gray-600">Yes, full prototype to production support.</p>
          </div>
        </div>
      </div>
    </section>
  );
}