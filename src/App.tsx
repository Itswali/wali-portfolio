import { Github, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
        Hello, I'm a Developer
      </h1>
      <p className="text-slate-400 text-lg mb-8">Building the future with React and Tailwind.</p>

      <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-all">
          <Github size={20} /> GitHub
        </button>
        <button className="flex items-center gap-2 border border-slate-700 hover:bg-slate-800 px-6 py-2 rounded-full transition-all">
          View Projects <ExternalLink size={18} />
        </button>
      </div>
    </div>
  );
}

export default App;
