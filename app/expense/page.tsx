"use client";

import { useState } from "react";

export default function ExpensePage() {
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [history, setHistory] = useState<number[]>([]);

  const addExpense = () => {
    if (!expense) return;
    setHistory([...history, Number(expense)]);
    setExpense("");
  };

  const totalExpense = history.reduce((a, b) => a + b, 0);
  const balance = Number(income) - totalExpense;

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Expense Tracker
      </h1>

      <input
        type="number"
        placeholder="Enter total income"
        className="w-full p-4 rounded bg-gray-800 mb-4"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />

      <div className="flex gap-4">
        <input
          type="number"
          placeholder="Enter expense"
          className="w-full p-4 rounded bg-gray-800"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />

        <button
          onClick={addExpense}
          className="bg-blue-600 px-6 py-3 rounded"
        >
          Add
        </button>
      </div>

      <div className="mt-8 bg-gray-900 p-6 rounded">
        <p>Total Income: ₹{income || 0}</p>
        <p>Total Expense: ₹{totalExpense}</p>
        <p>Balance: ₹{balance || 0}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Expense History</h2>

        {history.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded mb-3"
          >
            ₹{item}
          </div>
        ))}
      </div>
    </div>
  );
}