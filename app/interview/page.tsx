"use client";

import { useState } from "react";

export default function InterviewPage() {
  const [question] = useState(
    "Tell me about yourself."
  );
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const checkAnswer = () => {
    if (answer.length < 30) {
      setFeedback(
        "Your answer is too short. Try to explain more clearly."
      );
    } else if (
      answer.toLowerCase().includes("skills") ||
      answer.toLowerCase().includes("experience")
    ) {
      setFeedback(
        "Good answer! You included important points."
      );
    } else {
      setFeedback(
        "Decent answer, but try to mention your skills and experience."
      );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        AI Interview Coach
      </h1>

      <div className="bg-gray-900 p-6 rounded-xl">
        <h2 className="text-2xl mb-4">Question:</h2>
        <p>{question}</p>
      </div>

      <textarea
        className="w-full p-4 rounded bg-gray-800 mt-6"
        rows={8}
        placeholder="Write your answer..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button
        onClick={checkAnswer}
        className="mt-4 bg-blue-600 px-6 py-3 rounded"
      >
        Get Feedback
      </button>

      {feedback && (
        <div className="mt-8 bg-gray-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Feedback</h2>
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
}