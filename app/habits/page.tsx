"use client";

import { useState } from "react";

export default function HabitsPage() {
  const [habit, setHabit] = useState("");
  const [habits, setHabits] = useState<
    { name: string; done: boolean }[]
  >([]);

  const addHabit = () => {
    if (!habit) return;

    setHabits([
      ...habits,
      { name: habit, done: false },
    ]);

    setHabit("");
  };

  const toggleHabit = (index: number) => {
    const updated = [...habits];
    updated[index].done = !updated[index].done;
    setHabits(updated);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Habit Tracker
      </h1>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Enter habit..."
          className="w-full p-4 rounded bg-gray-800"
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
        />

        <button
          onClick={addHabit}
          className="bg-green-600 px-6 py-3 rounded"
        >
          Add
        </button>
      </div>

      <div className="mt-8">
        {habits.map((h, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded mb-4 flex justify-between"
          >
            <span
              className={
                h.done ? "line-through text-green-400" : ""
              }
            >
              {h.name}
            </span>

            <button
              onClick={() => toggleHabit(index)}
              className="bg-blue-600 px-4 py-2 rounded"
            >
              {h.done ? "Undo" : "Done"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}