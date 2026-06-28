export default function FileUpload() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">
        Upload Engineering Files
      </h2>

      <input
        type="file"
        className="block w-full border p-4 rounded-lg"
      />

      <p className="text-sm text-gray-500 mt-2">
        STEP / STP / PDF / CAD Files
      </p>
    </div>
  );
}