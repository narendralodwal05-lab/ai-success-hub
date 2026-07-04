export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">

      <div className="bg-blue-600 p-5 text-3xl font-bold">
        AI Career Chat
      </div>

      <div className="flex-1 p-6">

        <div className="bg-gray-900 p-5 rounded-lg mb-5">
          👋 Hello Narendra! Ask me anything about coding, resume or interviews.
        </div>

      </div>

      <div className="p-5 flex gap-3">

        <input
          type="text"
          placeholder="Ask anything..."
          className="flex-1 p-3 rounded bg-gray-800"
        />

        <button className="bg-blue-600 px-6 rounded">
          Send
        </button>

      </div>

    </div>
  );
}