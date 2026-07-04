"use client";

import { useState, useEffect } from "react";

export default function PomodoroPage() {
  const [time, setTime] = useState(1500); // 25 min
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (running && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running, time]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const resetTimer = () => {
    setTime(1500);
    setRunning(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-8">
        Pomodoro Timer
      </h1>

      <div className="text-7xl font-bold mb-8">
        {formatTime()}
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setRunning(true)}
          className="bg-green-600 px-6 py-3 rounded"
        >
          Start
        </button>

        <button
          onClick={() => setRunning(false)}
          className="bg-yellow-600 px-6 py-3 rounded"
        >
          Pause
        </button>

        <button
          onClick={resetTimer}
          className="bg-red-600 px-6 py-3 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}