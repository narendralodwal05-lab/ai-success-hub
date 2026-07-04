"use client";

import { useState } from "react";

export default function StudyPage() {
  const [subject, setSubject] = useState("");
  const [hours, setHours] = useState("");
  const [plan, setPlan] = useState("");

  const generatePlan = () => {
    if (!subject || !hours) {
      setPlan("Please fill all fields.");
      return;
    }

    setPlan(
      `Study Plan:
      
1. Spend ${hours} hours daily on ${subject}
2. Revise previous topics for 30 minutes
3. Practice questions for 1 hour
4. Make short notes
5. Weekly revision on Sunday`
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        📚 Study Planner
      </h1>

      <div className="space-y-4 max-w-xl">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          className="w-full p-3 rounded bg-gray-800"
          onChange={(e) => setSubject(e.target.value)}
        />

        <input
          type="number"
          placeholder="Hours per day"
          value={hours}
          className="w-full p-3 rounded bg-gray-800"
          onChange={(e) => setHours(e.target.value)}
        />

        <button
          onClick={generatePlan}
          className="w-full bg-green-600 p-3 rounded"
        >
          Generate Plan
        </button>
      </div>

      {plan && (
        <div className="mt-8 bg-gray-900 p-6 rounded-xl whitespace-pre-line">
          <h2 className="text-2xl font-bold mb-4">Your Plan</h2>
          <p>{plan}</p>
        </div>
      )}
    </div>
  );
}