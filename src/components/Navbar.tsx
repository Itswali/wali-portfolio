import { Link, useLocation } from "react-router-dom";
import { Home, User, Briefcase } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const getLinkStyle = (path: string) => {
    const isActive = location.pathname === path;
    return `flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
      isActive
        ? "bg-white/10 text-white"
        : "text-gray-400 hover:text-white hover:bg-white/5"
    }`;
  };

  return (
    <nav className="fixed bottom-6 md:top-6 md:bottom-auto left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 p-1 bg-[#1a1a1a]/80 backdrop-blur-lg border border-white/10 rounded-full shadow-2xl">

        {/* Home Link */}
        <Link to="/" className={getLinkStyle("/")}>
          <Home size={18} strokeWidth={1.5} />
        </Link>

        {/* About Link */}
        <Link to="/about" className={getLinkStyle("/about")}>
          <User size={18} strokeWidth={1.5} />
          <span className="hidden md:block text-xs font-medium">About</span>
        </Link>

        {/* Work Link */}
        <Link to="/work" className={getLinkStyle("/work")}>
          <Briefcase size={18} strokeWidth={1.5} />
          <span className="hidden md:block text-xs font-medium">Work</span>
        </Link>

        {/* <div className="w-px h-4 bg-white/20 mx-1" />

        <button className="p-2 text-gray-400 hover:text-white transition-colors">
          <Sun size={18} strokeWidth={1.5} />
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
