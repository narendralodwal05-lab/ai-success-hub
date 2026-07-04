export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-blue-500">
          AI Success Hub
        </h1>

        <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700">
          Logout
        </button>
      </header>

      {/* Dashboard */}
      <main className="p-10">

        <h2 className="text-4xl font-bold mb-8">
          Dashboard
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold">🤖 AI Chat</h3>
            <p className="mt-3 text-gray-400">
              Ask coding and career questions.
            </p>

            <button className="mt-5 bg-blue-600 px-4 py-2 rounded">
              Open
            </button>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold">📄 Resume Builder</h3>
            <p className="mt-3 text-gray-400">
              Create ATS Friendly Resume.
            </p>

            <button className="mt-5 bg-blue-600 px-4 py-2 rounded">
              Open
            </button>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold">🎯 ATS Checker</h3>
            <p className="mt-3 text-gray-400">
              Check Resume ATS Score.
            </p>

            <button className="mt-5 bg-blue-600 px-4 py-2 rounded">
              Open
            </button>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold">🎤 Interview Coach</h3>
            <p className="mt-3 text-gray-400">
              Practice interview with AI.
            </p>

            <button className="mt-5 bg-blue-600 px-4 py-2 rounded">
              Open
            </button>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold">✉️ Cover Letter</h3>
            <p className="mt-3 text-gray-400">
              Generate professional cover letters.
            </p>

            <button className="mt-5 bg-blue-600 px-4 py-2 rounded">
              Open
            </button>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold">⚙️ Settings</h3>
            <p className="mt-3 text-gray-400">
              Manage profile and account.
            </p>

            <button className="mt-5 bg-blue-600 px-4 py-2 rounded">
              Open
            </button>
          </div>

        </div>

      </main>

    </div>
  );
}