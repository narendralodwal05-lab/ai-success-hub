import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        🚀 AI Success Hub Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* AI Chat */}
        <Link
          href="/chat"
          className="bg-gray-900 p-6 rounded-xl block hover:bg-gray-800"
        >
          <h2 className="text-2xl font-bold">🤖 AI Chat</h2>
          <p className="text-gray-400 mt-2">
            Ask AI anything.
          </p>
        </Link>

        {/* Resume Builder */}
        <Link
          href="/resume"
          className="bg-gray-900 p-6 rounded-xl block hover:bg-gray-800"
        >
          <h2 className="text-2xl font-bold">📄 Resume Builder</h2>
          <p className="text-gray-400 mt-2">
            Create ATS Friendly Resume.
          </p>
        </Link>

        {/* ATS Checker */}
        <Link
          href="/ats"
          className="bg-gray-900 p-6 rounded-xl block hover:bg-gray-800"
        >
          <h2 className="text-2xl font-bold">📊 ATS Checker</h2>
          <p className="text-gray-400 mt-2">
            Check Resume Score.
          </p>
        </Link>

        {/* Interview Coach */}
        <Link
          href="/interview"
          className="bg-gray-900 p-6 rounded-xl block hover:bg-gray-800"
        >
          <h2 className="text-2xl font-bold">🎤 Interview Coach</h2>
          <p className="text-gray-400 mt-2">
            Practice Interviews.
          </p>
        </Link>

        {/* Study Planner */}
        <Link
          href="/study"
          className="bg-gray-900 p-6 rounded-xl block hover:bg-gray-800"
        >
          <h2 className="text-2xl font-bold">📚 Study Planner</h2>
          <p className="text-gray-400 mt-2">
            Create your daily study plan.
          </p>
        </Link>

        {/* Settings */}
        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">⚙️ Settings</h2>
          <p className="text-gray-400 mt-2">
            Coming Soon...
          </p>
        </div>

      </div>
    </main>
  );
}