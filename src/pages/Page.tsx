import Navbar from "../components/Navbar";

// In your App.js or page.js
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-32">
        <h1 className="text-5xl font-bold mb-4">Complex ideas into smooth...</h1>
        <p className="text-gray-400 text-lg">
          Building intuitive app experiences with modern design systems.
        </p>

        <div className="mt-12 h-[500px] bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
           Case Study Component
        </div>
      </main>
    </div>
  );
}
