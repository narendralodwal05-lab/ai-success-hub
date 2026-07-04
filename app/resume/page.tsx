export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        Resume Builder
      </h1>

      <div className="grid gap-5 max-w-xl">

        <input
          type="text"
          placeholder="Full Name"
          className="p-3 rounded bg-gray-800"
        />

        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded bg-gray-800"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="p-3 rounded bg-gray-800"
        />

        <textarea
          placeholder="Skills"
          className="p-3 rounded bg-gray-800 h-28"
        />

        <textarea
          placeholder="Education"
          className="p-3 rounded bg-gray-800 h-28"
        />

        <textarea
          placeholder="Projects"
          className="p-3 rounded bg-gray-800 h-28"
        />

        <button className="bg-blue-600 p-3 rounded">
          Generate Resume
        </button>

      </div>

    </div>
  );
}