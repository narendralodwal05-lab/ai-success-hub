"use client";

import { useState } from "react";

export default function ATSPage() {
  const [resume, setResume] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");

  const checkATS = () => {
    let points = 0;
    let tips = [];

    if (resume.toLowerCase().includes("python")) points += 20;
    else tips.push("Add Python skill");

    if (resume.toLowerCase().includes("c++")) points += 20;
    else tips.push("Add C++ skill");

    if (resume.toLowerCase().includes("project")) points += 20;
    else tips.push("Add Projects");

    if (resume.toLowerCase().includes("education")) points += 20;
    else tips.push("Add Education");

    if (resume.length > 200) points += 20;
    else tips.push("Resume should be more detailed");

    setScore(points);
    setFeedback(tips.join(", "));
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">ATS Checker</h1>

      <textarea
        placeholder="Paste your resume here..."
        className="w-full h-64 p-4 rounded bg-gray-800"
        onChange={(e) => setResume(e.target.value)}
      />

      <button
        onClick={checkATS}
        className="mt-4 bg-blue-600 px-6 py-3 rounded"
      >
        Check ATS Score
      </button>

      {score !== null && (
        <div className="mt-8 bg-gray-900 p-6 rounded">
          <h2 className="text-2xl font-bold">Score: {score}/100</h2>
          <p className="mt-4">Suggestions: {feedback}</p>
        </div>
      )}
    </div>
  );
}