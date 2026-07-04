"use client";

import { useState } from "react";

export default function GoalsPage() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState<
    { name: string; progress: number }[]
  >([]);

  const addGoal = () => {
    if (!goal) return;

    setGoals([
      ...goals,
      { name: goal, progress: 0 },
    ]);

    setGoal("");
  };

  const updateProgress = (index: number) => {
    const updated = [...goals];

    if (updated[index].progress < 100) {
      updated[index].progress += 20;
    }

    setGoals(updated);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Goal Tracker
      </h1>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Enter goal..."
          className="w-full p-4 rounded bg-gray-800"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />

        <button
          onClick={addGoal}
          className="bg-green-600 px-6 py-3 rounded"
        >
          Add Goal
        </button>
      </div>

      <div className="mt-8">
        {goals.map((g, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded mb-4"
          >
            <h2 className="text-xl font-bold">{g.name}</h2>

            <div className="w-full bg-gray-700 rounded h-4 mt-3">
              <div
                className="bg-blue-500 h-4 rounded"
                style={{ width: `${g.progress}%` }}
              ></div>
            </div>

            <p className="mt-2">{g.progress}% Completed</p>

            <button
              onClick={() => updateProgress(index)}
              className="mt-3 bg-blue-600 px-4 py-2 rounded"
            >
              Update Progress
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}