export default function Success() {
  return (
    <div className="max-w-xl mx-auto text-center p-10">
      <h1 className="text-2xl font-bold">RFQ Submitted</h1>

      <p className="mt-4 text-gray-600">
        Engineering team will review your request shortly.
      </p>

      <a href="/" className="inline-block mt-6 underline">
        Back to Home
      </a>
    </div>
  );
}