export default function UpdateCenter() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Capability Updates</h2>

        <p className="mt-4 text-gray-700">
          Latest machining capabilities, process improvements, and engineering updates.
        </p>

        <div className="mt-6">
          <a href="/api/openwebui/updates" className="text-blue-600 underline">
            View latest updates
          </a>
        </div>
      </div>
    </section>
  );
}