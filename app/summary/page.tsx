"use client";

import { useState } from "react";

export default function SummaryPage() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const generateSummary = () => {
    if (!text) {
      setSummary("Please paste some text.");
      return;
    }

    const short = text.split(" ").slice(0, 50).join(" ");

    setSummary(short + "...");
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        File / Notes Summary
      </h1>

      <textarea
        className="w-full h-64 p-4 rounded bg-gray-800"
        placeholder="Paste your notes or text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={generateSummary}
        className="mt-4 bg-blue-600 px-6 py-3 rounded"
      >
        Generate Summary
      </button>

      {summary && (
        <div className="mt-8 bg-gray-900 p-6 rounded">
          <h2 className="text-2xl font-bold mb-4">
            Summary
          </h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}