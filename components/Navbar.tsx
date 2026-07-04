export default function Navbar() {
  return (
    <nav className="bg-black text-white p-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-500">
        AI Success Hub
      </h1>

      <div className="space-x-6">
        <a href="/">Home</a>
        <a href="/features">Features</a>
        <a href="/pricing">Pricing</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}