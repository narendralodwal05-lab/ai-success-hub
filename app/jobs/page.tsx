"use client";

import { useState } from "react";

export default function JobsPage() {
  const [role, setRole] = useState("");
  const [jobs, setJobs] = useState<string[]>([]);

  const findJobs = () => {
    if (!role) return;

    const sampleJobs = [
      `${role} Intern at Google`,
      `${role} Developer at Microsoft`,
      `${role} Engineer at Amazon`,
      `${role} Analyst at Infosys`,
      `${role} Intern at TCS`,
    ];

    setJobs(sampleJobs);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Job Finder
      </h1>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Enter job role..."
          className="w-full p-4 rounded bg-gray-800"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button
          onClick={findJobs}
          className="bg-blue-600 px-6 py-3 rounded"
        >
          Search
        </button>
      </div>

      <div className="mt-8">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded mb-4"
          >
            {job}
          </div>
        ))}
      </div>
    </div>
  );
}