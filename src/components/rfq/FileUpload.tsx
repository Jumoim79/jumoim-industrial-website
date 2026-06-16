"use client";

export default function FileUpload() {
  return (
    <div className="border p-4">
      <label className="block font-medium">Upload Files (optional)</label>

      <input type="file" multiple className="mt-2" />

      <p className="text-sm text-gray-500 mt-2">
        STEP / STL / PDF supported
      </p>
    </div>
  );
}