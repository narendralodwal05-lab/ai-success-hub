"use client";

import { useState } from "react";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const handleAsk = async () => {
    if (!message) return;

    setReply("Thinking...");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setReply(data.reply);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">🤖 AI Chat Assistant</h1>

      <textarea
        className="w-full p-4 rounded bg-gray-900 text-white"
        rows={5}
        placeholder="Ask anything..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={handleAsk}
        className="mt-4 bg-blue-600 px-6 py-3 rounded"
      >
        Ask AI
      </button>

      {reply && (
        <div className="mt-8 bg-gray-900 p-6 rounded">
          <h2 className="text-xl font-bold mb-2">AI Reply:</h2>
          <p>{reply}</p>
        </div>
      )}
    </div>
  );
}