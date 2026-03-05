import { Home, User, Briefcase, Sun } from 'lucide-react';
// import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed bottom-6 md:bottom-auto md:top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl">

        <button className="p-2 bg-white/10 rounded-xl text-white transition-colors">
          <Home size={20} strokeWidth={1.5} />
        </button>

        {/* About Icon */}
        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
          <User size={20} strokeWidth={1.5} />
        </button>

        {/* Work Icon */}
        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
          <Briefcase size={20} strokeWidth={1.5} />
        </button>

        {/* Divider */}
        <div className="w-px h-4 bg-white/10 mx-1" />

        {/* Theme Toggle (as seen in your image) */}
        <button className="p-2 text-gray-400 hover:text-white transition-colors">
          <Sun size={20} strokeWidth={1.5} />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
