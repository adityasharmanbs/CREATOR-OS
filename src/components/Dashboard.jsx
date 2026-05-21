import { motion } from "framer-motion";
import {
  PenTool,
  Video,
  Image,
  Globe,
  Type,
  Flame,
  Link2,
} from "lucide-react";

const tools = [
  {
    title: "AI Writing Studio",
    icon: PenTool,
    desc: "Generate scripts, tweets & blogs instantly.",
  },
  {
    title: "Reel Generator",
    icon: Video,
    desc: "Create viral AI reels in seconds.",
  },
  {
    title: "Thumbnail Maker",
    icon: Image,
    desc: "Generate YouTube thumbnails with AI.",
  },
  {
    title: "Website Builder",
    icon: Globe,
    desc: "Create futuristic websites automatically.",
  },
  {
    title: "Caption Generator",
    icon: Type,
    desc: "Smart captions for social media creators.",
  },
  {
    title: "Viral Hooks Generator",
    icon: Flame,
    desc: "Generate hooks optimized for engagement.",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-8 pb-20">
      {/* AI Prompt Box */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card rounded-[28px] p-6 gradient-border"
      >
        <h2 className="text-2xl font-bold mb-4">
          AI Content Command Center
        </h2>

        <textarea
          placeholder="Describe what you want AI to create..."
          className="w-full h-36 rounded-2xl bg-white/5 border border-white/10 p-5 outline-none resize-none text-white"
        />

        <div className="flex flex-col md:flex-row gap-4 mt-5">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-4 rounded-2xl flex-1">
            <Link2 className="w-5 h-5 text-cyan-300" />

            <input
              type="text"
              placeholder="Paste YouTube or Instagram link..."
              className="bg-transparent outline-none w-full"
            />
          </div>

          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold hover:scale-105 transition">
            Generate
          </button>
        </div>
      </motion.div>

      {/* Tool Cards */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Creator Tools</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="glass-card gradient-border rounded-[28px] p-6 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 blur-[70px] rounded-full"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center mb-5">
                  <tool.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {tool.title}
                </h3>

                <p className="text-gray-300 mb-6">
                  {tool.desc}
                </p>

                <button className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
                  Open Tool
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;