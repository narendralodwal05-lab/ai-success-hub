"use client";

import { useState } from "react";

export default function StreakPage() {
  const [streak, setStreak] = useState(0);

  const increaseStreak = () => {
    setStreak(streak + 1);
  };

  const resetStreak = () => {
    setStreak(0);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">
        Streak System
      </h1>

      <div className="text-7xl font-bold mb-8">
        🔥 {streak}
      </div>

      <div className="flex gap-4">
        <button
          onClick={increaseStreak}
          className="bg-green-600 px-6 py-3 rounded"
        >
          Complete Today
        </button>

        <button
          onClick={resetStreak}
          className="bg-red-600 px-6 py-3 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}