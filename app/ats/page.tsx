"use client";

import { useState } from "react";

export default function ATSPage() {
  const [resumeText, setResumeText] = useState("");
  const [score, setScore] = useState<number | null>(null);

  const checkATS = () => {
    let points = 0;

    if (resumeText.includes("Python")) points += 20;
    if (resumeText.includes("JavaScript")) points += 20;
    if (resumeText.includes("C++")) points += 20;
    if (resumeText.includes("Projects")) points += 20;
    if (resumeText.includes("Skills")) points += 20;

    setScore(points);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">ATS Resume Checker</h1>

      <textarea
        className="w-full p-4 rounded bg-gray-800"
        rows={10}
        placeholder="Paste your resume here..."
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
      />

      <button
        onClick={checkATS}
        className="mt-4 bg-green-600 px-6 py-3 rounded"
      >
        Check ATS Score
      </button>

      {score !== null && (
        <div className="mt-8 bg-gray-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">ATS Score: {score}/100</h2>

          {score < 60 ? (
            <p className="text-red-400 mt-2">
              Improve your resume by adding more skills and projects.
            </p>
          ) : (
            <p className="text-green-400 mt-2">
              Great! Your resume looks strong.
            </p>
          )}
        </div>
      )}
    </div>
  );
}