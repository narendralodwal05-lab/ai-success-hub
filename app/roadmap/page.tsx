"use client";

import { useState } from "react";

export default function RoadmapPage() {
  const [goal, setGoal] = useState("");
  const [roadmap, setRoadmap] = useState("");

  const generateRoadmap = () => {
    if (!goal) {
      setRoadmap("Please enter your goal.");
      return;
    }

    setRoadmap(`
Career Roadmap for ${goal}

Step 1: Learn Basics
Step 2: Build Strong Fundamentals
Step 3: Practice Daily
Step 4: Make Real Projects
Step 5: Learn Advanced Topics
Step 6: Build Portfolio
Step 7: Apply for Jobs / Freelancing
Step 8: Keep Improving
    `);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Roadmap Generator
      </h1>

      <input
        type="text"
        placeholder="Enter your career goal..."
        className="w-full p-4 rounded bg-gray-800"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />

      <button
        onClick={generateRoadmap}
        className="mt-4 bg-green-600 px-6 py-3 rounded"
      >
        Generate Roadmap
      </button>

      {roadmap && (
        <div className="mt-8 bg-gray-900 p-6 rounded whitespace-pre-line">
          <h2 className="text-2xl font-bold mb-4">Your Roadmap</h2>
          <p>{roadmap}</p>
        </div>
      )}
    </div>
  );
}