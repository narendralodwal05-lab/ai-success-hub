"use client";

import { useState } from "react";

export default function MotivationPage() {
  const quotes = [
    "Success comes from consistency.",
    "Small progress is still progress.",
    "Discipline beats motivation.",
    "Learn daily, improve daily.",
    "Dream big, work hard.",
    "Your future depends on what you do today.",
  ];

  const [quote, setQuote] = useState("");

  const generateQuote = () => {
    const random =
      quotes[Math.floor(Math.random() * quotes.length)];

    setQuote(random);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">
        Motivation Quotes
      </h1>

      <button
        onClick={generateQuote}
        className="bg-blue-600 px-6 py-3 rounded"
      >
        Get Motivation
      </button>

      {quote && (
        <div className="mt-8 bg-gray-900 p-6 rounded max-w-xl text-center">
          <p className="text-2xl">{quote}</p>
        </div>
      )}
    </div>
  );
}