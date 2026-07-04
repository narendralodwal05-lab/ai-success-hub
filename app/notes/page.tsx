"use client";

import { useState } from "react";

export default function NotesPage() {
  const [topic, setTopic] = useState("");
  const [notes, setNotes] = useState("");

  const generateNotes = () => {
    if (!topic) {
      setNotes("Please enter a topic.");
      return;
    }

    setNotes(`
Topic: ${topic}

1. Introduction of ${topic}
2. Important concepts of ${topic}
3. Advantages and disadvantages
4. Real-world applications
5. Summary of ${topic}
    `);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Notes Generator
      </h1>

      <input
        type="text"
        placeholder="Enter topic..."
        className="w-full p-4 rounded bg-gray-800"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button
        onClick={generateNotes}
        className="mt-4 bg-blue-600 px-6 py-3 rounded"
      >
        Generate Notes
      </button>

      {notes && (
        <div className="mt-8 bg-gray-900 p-6 rounded whitespace-pre-line">
          <h2 className="text-2xl font-bold mb-4">Generated Notes</h2>
          <p>{notes}</p>
        </div>
      )}
    </div>
  );
}