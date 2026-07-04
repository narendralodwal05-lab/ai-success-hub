"use client";

import { useState } from "react";

export default function JournalPage() {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState<string[]>([]);

  const saveEntry = () => {
    if (!entry) return;

    setEntries([...entries, entry]);
    setEntry("");
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Daily Journal
      </h1>

      <textarea
        className="w-full h-40 p-4 rounded bg-gray-800"
        placeholder="Write your thoughts, learning, progress..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />

      <button
        onClick={saveEntry}
        className="mt-4 bg-blue-600 px-6 py-3 rounded"
      >
        Save Entry
      </button>

      <div className="mt-8">
        {entries.map((e, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded mb-4"
          >
            <p>{e}</p>
          </div>
        ))}
      </div>
    </div>
  );
}