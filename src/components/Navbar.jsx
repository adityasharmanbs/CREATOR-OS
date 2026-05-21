import { Bell, Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/20"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-cyan-400 to-purple-500 p-2 rounded-xl">
            <Sparkles className="w-5 h-5 text-white" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 to-purple-400 text-transparent bg-clip-text">
            CreatorOS
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-3 glass-card px-4 py-2 rounded-2xl w-[320px]">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search AI tools..."
            className="bg-transparent outline-none text-sm flex-1"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="glass-card p-3 rounded-xl hover:scale-105 transition">
            <Bell className="w-5 h-5 text-cyan-300" />
          </button>

          <img
            src="https://i.pravatar.cc/100"
            alt="avatar"
            className="w-11 h-11 rounded-full border border-cyan-400"
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;