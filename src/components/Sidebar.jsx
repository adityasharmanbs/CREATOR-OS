import {
  LayoutDashboard,
  Sparkles,
  Video,
  Image,
  Globe,
  PenSquare,
  Flame,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Sparkles, label: "AI Studio" },
  { icon: Video, label: "Reel Generator" },
  { icon: Image, label: "Thumbnail Maker" },
  { icon: Globe, label: "Website Builder" },
  { icon: PenSquare, label: "Caption AI" },
  { icon: Flame, label: "Viral Hooks" },
  { icon: Settings, label: "Settings" },
];

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex fixed left-0 top-[73px] h-[calc(100vh-73px)] w-[260px] border-r border-white/10 bg-black/20 backdrop-blur-xl flex-col p-5">
      <div className="space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-300 hover:bg-white/10 hover:text-white transition-all"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-auto glass-card rounded-3xl p-5 gradient-border">
        <h3 className="text-lg font-semibold mb-2">Upgrade to Pro</h3>

        <p className="text-sm text-gray-300 mb-4">
          Unlock advanced AI creator tools & analytics.
        </p>

        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold">
          Upgrade
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;