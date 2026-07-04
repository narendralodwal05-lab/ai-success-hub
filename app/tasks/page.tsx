"use client";

import { useState } from "react";

export default function TasksPage() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (!task) return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (index: number) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Task Tracker
      </h1>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Enter task..."
          className="w-full p-4 rounded bg-gray-800"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          onClick={addTask}
          className="bg-blue-600 px-6 py-3 rounded"
        >
          Add
        </button>
      </div>

      <div className="mt-8">
        {tasks.map((t, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded mb-4 flex justify-between"
          >
            <span>{t}</span>

            <button
              onClick={() => removeTask(index)}
              className="bg-red-600 px-4 py-2 rounded"
            >
              Done
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}