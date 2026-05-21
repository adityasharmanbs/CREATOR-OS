import { motion } from "framer-motion";
import { Wand2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card gradient-border rounded-[32px] p-8 md:p-12 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full"></div>

        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/20 px-4 py-2 rounded-full text-cyan-300 text-sm mb-6">
            <Wand2 className="w-4 h-4" />
            AI Creator Operating System
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Build Viral Content
            <span className="block bg-gradient-to-r from-cyan-300 to-purple-400 text-transparent bg-clip-text">
              With AI Automation
            </span>
          </h1>

          <p className="text-gray-300 text-lg mb-8">
            Generate reels, captions, websites, thumbnails, and viral hooks
            instantly using futuristic creator AI workflows.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold hover:scale-105 transition">
              Launch Studio
            </button>

            <button className="px-7 py-4 rounded-2xl glass-card hover:bg-white/10 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;