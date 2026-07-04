"use client";

import { useState } from "react";

export default function InterviewPage() {
  const [question, setQuestion] = useState(
    "Tell me about yourself."
  );
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const evaluateAnswer = () => {
    let score = 0;
    let tips = [];

    if (answer.length > 50) score += 30;
    else tips.push("Answer should be longer");

    if (
      answer.toLowerCase().includes("skills") ||
      answer.toLowerCase().includes("experience")
    )
      score += 30;
    else tips.push("Mention skills and experience");

    if (
      answer.toLowerCase().includes("project")
    )
      score += 20;
    else tips.push("Mention projects");

    if (
      answer.toLowerCase().includes("goal")
    )
      score += 20;
    else tips.push("Mention career goals");

    setFeedback(
      `Score: ${score}/100 | Suggestions: ${tips.join(", ")}`
    );
  };

  const nextQuestion = () => {
    const questions = [
      "Why should we hire you?",
      "What are your strengths?",
      "Tell me about your projects.",
      "Where do you see yourself in 5 years?",
    ];

    const random =
      questions[Math.floor(Math.random() * questions.length)];

    setQuestion(random);
    setAnswer("");
    setFeedback("");
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Interview Coach
      </h1>

      <div className="bg-gray-900 p-6 rounded">
        <h2 className="text-2xl font-bold">Question:</h2>
        <p className="mt-2">{question}</p>
      </div>

      <textarea
        className="w-full h-40 p-4 mt-6 rounded bg-gray-800"
        placeholder="Write your answer..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <div className="mt-4 flex gap-4">
        <button
          onClick={evaluateAnswer}
          className="bg-blue-600 px-6 py-3 rounded"
        >
          Get Feedback
        </button>

        <button
          onClick={nextQuestion}
          className="bg-green-600 px-6 py-3 rounded"
        >
          Next Question
        </button>
      </div>

      {feedback && (
        <div className="mt-8 bg-gray-900 p-6 rounded">
          <h2 className="text-xl font-bold">Feedback</h2>
          <p className="mt-2">{feedback}</p>
        </div>
      )}
    </div>
  );
}