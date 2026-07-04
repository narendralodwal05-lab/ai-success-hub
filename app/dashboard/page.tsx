import Link from "next/link";

const cards = [
  { title: "🤖 AI Chat", path: "/chat" },
  { title: "📄 Resume Builder", path: "/resume" },
  { title: "📊 ATS Checker", path: "/ats" },
  { title: "🎤 Interview Coach", path: "/interview" },
  { title: "📚 Study Planner", path: "/study" },
  { title: "📝 Notes Generator", path: "/notes" },
  { title: "🛣️ Roadmap Generator", path: "/roadmap" },
  { title: "✅ Task Tracker", path: "/tasks" },
  { title: "💰 Expense Tracker", path: "/expense" },
  { title: "🔥 Habit Tracker", path: "/habits" },
  { title: "🎯 Goal Tracker", path: "/goals" },
  { title: "📖 Daily Journal", path: "/journal" },
  { title: "⏱️ Pomodoro Timer", path: "/pomodoro" },
  { title: "📂 Summary Tool", path: "/summary" },
  { title: "💼 Job Finder", path: "/jobs" },
  { title: "⚡ Motivation Quotes", path: "/motivation" },
  { title: "🏆 Streak System", path: "/streak" },
  { title: "👤 Profile", path: "/profile" },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        🚀 AI Success Hub Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Link
            key={index}
            href={card.path}
            className="bg-gray-900 p-6 rounded-xl block hover:bg-gray-800 transition"
          >
            <h2 className="text-2xl font-bold">{card.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}