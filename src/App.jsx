import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Settings,
  Users,
  Sparkles,
  Menu,
  X,
  Search,
  Bell,
  User,
  LogOut,
  ChevronRight,
  Zap,
  TrendingUp,
} from "lucide-react";

function App() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  const [activeNav, setActiveNav] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedTool, setSelectedTool] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [loadingTool, setLoadingTool] = useState(null);

  const isMobile = windowWidth < 900;

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      if (windowWidth > 900) setSidebarOpen(true);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "ai-studio", label: "AI Studio", icon: Sparkles },
    { id: "analytics", label: "Analytics", icon: TrendingUp },
    { id: "creators", label: "Creators", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const tools = [
    { id: 1, title: "AI Writing Studio", desc: "Narratives, scripts, briefs.", icon: "✍️" },
    { id: 2, title: "Reel Generator", desc: "Instant social clips.", icon: "🎬" },
    { id: 3, title: "Thumbnail Maker", desc: "Click-worthy visuals.", icon: "🖼️" },
    { id: 4, title: "Website Builder", desc: "Creator landing pages.", icon: "🌐" },
    { id: 5, title: "Caption Generator", desc: "Magnetic micro-copy.", icon: "✨" },
    { id: 6, title: "Viral Hooks", desc: "Trend-ready hooks.", icon: "🔥" },
    { id: 7, title: "AI Video Editor", desc: "Automated scene polish.", icon: "🎥" },
    { id: 8, title: "Script Generator", desc: "Studio-ready scripts.", icon: "📝" },
  ];

  const analytics = [
    { label: "Engagement Rate", value: "82.4%", detail: "+18.7% this week", icon: TrendingUp },
    { label: "Watch Time", value: "12.3h", detail: "+9.2% versus last month", icon: Zap },
    { label: "AI Tasks", value: "1.8k", detail: "Active automations", icon: Sparkles },
  ];

  const creators = [
    { id: 1, name: "Nova Chen", handle: "@novacreates", score: "96", avatar: "NC" },
    { id: 2, name: "Mika Torres", handle: "@mika.motion", score: "92", avatar: "MT" },
    { id: 3, name: "Avery Lane", handle: "@avery.art", score: "88", avatar: "AL" },
  ];

  const activity = [
    { id: 1, title: "Generated reel concept", subtitle: "Reel Generator", time: "2m ago", icon: "🎬" },
    { id: 2, title: "Analyzed Instagram link", subtitle: "Link Analyzer", time: "12m ago", icon: "📊" },
    { id: 3, title: "Updated prompt library", subtitle: "AI Writing Studio", time: "1h ago", icon: "💾" },
  ];

  const notifications = [
    { id: 1, title: "New AI model available", desc: "Upgrade to access latest features", time: "1h ago", unread: true },
    { id: 2, title: "Your reel is ready", desc: "Thumbnail Maker completed your task", time: "3h ago", unread: true },
    { id: 3, title: "Weekly report", desc: "Your creator analytics are in", time: "1d ago", unread: false },
  ];

  const handleToolClick = (tool) => {
    setLoadingTool(tool.id);
    setTimeout(() => {
      setSelectedTool(tool);
      setLoadingTool(null);
    }, 800);
  };

  const handleGenerateBrief = () => {
    setLoadingTool("brief");
    setTimeout(() => setLoadingTool(null), 1500);
  };

  const filteredTools = tools.filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div style={{ minHeight: "100vh", width: "100%", overflowX: "hidden", background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 25%, #0f0f23 50%, #1a1a3f 75%, #0f172a 100%)", backgroundAttachment: "fixed", color: "#f1f5f9", fontFamily: "'Inter', system-ui, sans-serif", position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @keyframes float { 0%, 100% { transform: translateY(0px) translateX(0px); } 25% { transform: translateY(-30px) translateX(15px); } 50% { transform: translateY(-60px) translateX(0px); } 75% { transform: translateY(-30px) translateX(-15px); } }
        @keyframes float-reverse { 0%, 100% { transform: translateY(0px) translateX(0px); } 25% { transform: translateY(-30px) translateX(-15px); } 50% { transform: translateY(-60px) translateX(0px); } 75% { transform: translateY(-30px) translateX(15px); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        * { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
        ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #06b6d4, #7c3aed); border-radius: 10px; }
      `}</style>

      {/* Animated Background Orbs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-160px", right: "-80px", width: "384px", height: "384px", background: "radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(48px)", animation: "float 12s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "-128px", left: "-80px", width: "320px", height: "320px", background: "radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(48px)", animation: "float-reverse 14s ease-in-out infinite" }} />
        <div style={{ position: "absolute", top: "33%", left: "-160px", width: "288px", height: "288px", background: "radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(48px)", animation: "float 12s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "25%", right: "33%", width: "256px", height: "256px", background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(48px)", animation: "float 12s ease-in-out infinite" }} />
      </div>

      <div style={{ display: "flex", position: "relative", zIndex: 10, minHeight: "100vh" }}>
        {/* Sidebar */}
        <AnimatePresence>
          {(sidebarOpen || !isMobile) && (
            <motion.aside
              initial={{ x: isMobile ? -400 : 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isMobile ? -400 : 0, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              style={{
                width: "320px",
                minHeight: "100vh",
                background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.8))",
                backdropFilter: "blur(32px)",
                borderRight: "1px solid rgba(255, 255, 255, 0.05)",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                position: isMobile ? "fixed" : "relative",
                left: 0,
                top: 0,
                zIndex: isMobile ? 40 : 0,
              }}
            >
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                <div style={{ fontSize: "36px", fontWeight: 900, background: "linear-gradient(to right, #06b6d4, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "8px" }}>CreatorOS</div>
                <p style={{ fontSize: "12px", color: "#64748b", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>AI Creator Platform</p>
              </motion.div>

              <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                {navItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = activeNav === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => { setActiveNav(item.id); if (isMobile) setSidebarOpen(false); }}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "12px 16px",
                        borderRadius: "12px",
                        border: isActive ? "1px solid rgba(6, 182, 212, 0.5)" : "1px solid transparent",
                        background: isActive ? "linear-gradient(to right, rgba(6, 182, 212, 0.2), rgba(147, 51, 234, 0.2))" : "transparent",
                        color: isActive ? "#22d3ee" : "#94a3b8",
                        fontSize: "15px",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 200ms",
                        position: "relative",
                        fontFamily: "'Inter', system-ui, sans-serif",
                        boxShadow: isActive ? "0 0 16px rgba(6, 182, 212, 0.3)" : "none",
                      }}
                      onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"; e.currentTarget.style.color = "#cbd5e1"; } }}
                      onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#94a3b8"; } }}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </motion.button>
                  );
                })}
              </nav>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} style={{ background: "linear-gradient(to bottom right, rgba(6, 182, 212, 0.1), rgba(147, 51, 234, 0.1))", backdropFilter: "blur(48px)", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: "24px", padding: "24px", cursor: "pointer" }}>
                <div style={{ marginBottom: "16px" }}>
                  <div style={{ fontSize: "12px", color: "rgba(6, 182, 212, 0.8)", fontWeight: 900, marginBottom: "8px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Premium</div>
                  <h3 style={{ fontSize: "18px", fontWeight: 900, color: "#ffffff", marginBottom: "8px" }}>Creator Pass</h3>
                </div>
                <p style={{ fontSize: "14px", color: "#cbd5e1", marginBottom: "16px" }}>Unlock unlimited AI tools and analytics.</p>
                <motion.button whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)" }} whileTap={{ scale: 0.95 }} style={{ width: "100%", background: "linear-gradient(to right, #06b6d4, #7c3aed)", color: "#ffffff", fontWeight: 700, padding: "10px", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "14px", transition: "all 300ms" }}>
                  Upgrade →
                </motion.button>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} style={{ background: "linear-gradient(to bottom right, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))", backdropFilter: "blur(48px)", border: "1px solid rgba(147, 51, 234, 0.2)", borderRadius: "24px", padding: "24px", cursor: "pointer" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                  <div>
                    <div style={{ fontSize: "12px", color: "rgba(147, 51, 234, 0.8)", fontWeight: 900, marginBottom: "8px", letterSpacing: "0.1em", textTransform: "uppercase" }}>AI Copilot</div>
                    <h3 style={{ fontSize: "18px", fontWeight: 900, color: "#ffffff" }}>Nova</h3>
                  </div>
                  <span style={{ fontSize: "24px" }}>🤖</span>
                </div>
                <p style={{ fontSize: "14px", color: "#cbd5e1", marginBottom: "16px" }}>AI-powered creative assistant.</p>
                <motion.button whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)" }} style={{ width: "100%", background: "transparent", border: "1px solid rgba(147, 51, 234, 0.5)", color: "#d8b4fe", fontWeight: 700, padding: "10px", borderRadius: "8px", cursor: "pointer", fontSize: "14px", transition: "all 300ms" }}>
                  Open Nova
                </motion.button>
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main style={{ flex: 1, overflowY: "auto", paddingTop: 0, marginLeft: isMobile ? 0 : "320px" }}>
          <div style={{ minHeight: "100vh", paddingBottom: "48px" }}>
            {/* Header */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "48px", gap: "24px", padding: isMobile ? "24px" : "24px 48px", flexDirection: isMobile ? "column" : "row" }}>
              <div style={{ flex: 1 }}>
                <h1 style={{ fontSize: isMobile ? "32px" : "56px", fontWeight: 900, lineHeight: 1.2, marginBottom: "8px", background: "linear-gradient(to right, #f8fafc, #cbd5e1, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {navItems.find(n => n.id === activeNav)?.label || "Dashboard"}
                </h1>
                <p style={{ color: "#94a3b8", fontSize: "15px", fontWeight: 500 }}>Welcome back! Here's your AI creative workspace.</p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ position: "relative" }}>
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => setNotificationsOpen(!notificationsOpen)} style={{ position: "relative", padding: "12px", borderRadius: "12px", background: "rgba(255, 255, 255, 0.05)", border: notificationsOpen ? "1px solid rgba(6, 182, 212, 0.5)" : "1px solid rgba(255, 255, 255, 0.1)", color: notificationsOpen ? "#06b6d4" : "#94a3b8", cursor: "pointer", transition: "all 200ms", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Bell size={20} />
                    {notifications.some(n => n.unread) && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ position: "absolute", top: "8px", right: "8px", width: "12px", height: "12px", background: "linear-gradient(to right, #06b6d4, #7c3aed)", borderRadius: "50%", animation: "pulse 2s infinite", boxShadow: "0 0 8px rgba(6, 182, 212, 0.6)" }} />}
                  </motion.button>

                  <AnimatePresence>
                    {notificationsOpen && (
                      <motion.div initial={{ opacity: 0, y: -10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.95 }} style={{ position: "absolute", right: 0, marginTop: "12px", width: "384px", background: "linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))", backdropFilter: "blur(48px)", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: "24px", padding: "16px", zIndex: 50 }}>
                        <h3 style={{ fontWeight: 700, color: "#ffffff", marginBottom: "16px" }}>Notifications</h3>
                        <div style={{ maxHeight: "384px", overflowY: "auto" }}>
                          {notifications.map((notif, idx) => (
                            <motion.div key={notif.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }} style={{ padding: "12px", borderRadius: "8px", border: notif.unread ? "1px solid rgba(6, 182, 212, 0.3)" : "1px solid rgba(255, 255, 255, 0.1)", background: notif.unread ? "rgba(6, 182, 212, 0.1)" : "rgba(255, 255, 255, 0.05)", marginBottom: "12px" }}>
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                <div>
                                  <p style={{ fontWeight: 600, fontSize: "14px", color: "#ffffff" }}>{notif.title}</p>
                                  <p style={{ fontSize: "12px", color: "#94a3b8", marginTop: "4px" }}>{notif.desc}</p>
                                </div>
                                <span style={{ fontSize: "12px", color: "#64748b", whiteSpace: "nowrap" }}>{notif.time}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div style={{ position: "relative" }}>
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => setProfileOpen(!profileOpen)} style={{ position: "relative", padding: "12px", borderRadius: "12px", background: "linear-gradient(to right, rgba(6, 182, 212, 0.1), rgba(147, 51, 234, 0.1))", border: profileOpen ? "1px solid rgba(147, 51, 234, 0.5)" : "1px solid rgba(255, 255, 255, 0.1)", color: profileOpen ? "#d8b4fe" : "#94a3b8", cursor: "pointer", transition: "all 200ms", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <User size={20} />
                  </motion.button>

                  <AnimatePresence>
                    {profileOpen && (
                      <motion.div initial={{ opacity: 0, y: -10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.95 }} style={{ position: "absolute", right: 0, marginTop: "12px", width: "224px", background: "linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))", backdropFilter: "blur(48px)", border: "1px solid rgba(147, 51, 234, 0.2)", borderRadius: "24px", padding: "16px", zIndex: 50 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingBottom: "16px", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", marginBottom: "16px" }}>
                          <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: "linear-gradient(to right, #06b6d4, #7c3aed)" }} />
                          <div>
                            <p style={{ fontWeight: 700, fontSize: "14px", color: "#ffffff" }}>Alex Creator</p>
                            <p style={{ fontSize: "12px", color: "#94a3b8" }}>@alexcreator</p>
                          </div>
                        </div>
                        <motion.button whileHover={{ x: 4 }} style={{ width: "100%", textAlign: "left", padding: "8px 12px", background: "transparent", border: "none", borderRadius: "8px", color: "#cbd5e1", fontSize: "14px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", transition: "all 200ms" }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                          <User size={16} /> Profile
                        </motion.button>
                        <motion.button whileHover={{ x: 4 }} style={{ width: "100%", textAlign: "left", padding: "8px 12px", background: "transparent", border: "none", borderRadius: "8px", color: "#f87171", fontSize: "14px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", transition: "all 200ms" }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(248, 113, 113, 0.1)"} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                          <LogOut size={16} /> Logout
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {isMobile && (
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => setSidebarOpen(!sidebarOpen)} style={{ position: "relative", padding: "12px", borderRadius: "12px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "#94a3b8", cursor: "pointer", transition: "all 200ms", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.button>
                )}
              </div>
            </motion.div>

            {/* Search Bar */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ display: "flex", alignItems: "center", gap: "12px", background: "linear-gradient(to right, rgba(6, 182, 212, 0.05), rgba(147, 51, 234, 0.05))", backdropFilter: "blur(48px)", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: "24px", padding: "16px 24px", margin: isMobile ? "0 16px 24px 16px" : "0 48px 32px 48px" }}>
              <Search size={20} style={{ color: "#06b6d4" }} />
              <input type="text" placeholder="Search AI tools, creators, or analytics..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#ffffff", fontSize: "15px", fontFamily: "'Inter', system-ui, sans-serif", padding: "4px 8px" }} />
            </motion.div>

            {/* Overview Page */}
            {activeNav === "overview" && (
              <motion.div key="overview" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} style={{ paddingLeft: isMobile ? "24px" : "48px", paddingRight: isMobile ? "24px" : "48px", display: "flex", flexDirection: "column", gap: "32px" }}>
                {/* Analytics Cards */}
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
                  {analytics.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(6, 182, 212, 0.1)" }} style={{ background: "linear-gradient(to bottom right, rgba(6, 182, 212, 0.1), rgba(147, 51, 234, 0.1))", backdropFilter: "blur(48px)", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: "24px", padding: "32px", cursor: "pointer", transition: "all 300ms", position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
                          <div>
                            <p style={{ fontSize: "12px", color: "#94a3b8", fontWeight: 700, marginBottom: "8px", letterSpacing: "0.05em", textTransform: "uppercase" }}>{item.label}</p>
                            <p style={{ fontSize: "48px", fontWeight: 900, background: "linear-gradient(to right, #ffffff, #e2e8f0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{item.value}</p>
                          </div>
                          <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 3 }} style={{ padding: "12px", borderRadius: "8px", background: "linear-gradient(to bottom right, rgba(6, 182, 212, 0.2), rgba(147, 51, 234, 0.2))", color: "#ffffff" }}>
                            <IconComponent size={24} />
                          </motion.div>
                        </div>
                        <p style={{ fontSize: "14px", color: "#cbd5e1" }}>{item.detail}</p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Tools Grid */}
                <div>
                  <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "32px", background: "linear-gradient(to right, #ffffff, #cbd5e1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>AI Tools</h2>
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : windowWidth < 1200 ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: "24px" }}>
                    {filteredTools.map((tool, idx) => (
                      <motion.div key={tool.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} whileHover={{ y: -8 }} onClick={() => handleToolClick(tool)} style={{ background: "linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))", backdropFilter: "blur(48px)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "24px", padding: "32px", cursor: "pointer", transition: "all 300ms", position: "relative", overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
                        <div style={{ position: "relative", zIndex: 10, flex: 1 }}>
                          <div style={{ fontSize: "48px", marginBottom: "16px", transition: "all 300ms" }}>{tool.icon}</div>
                          <h3 style={{ fontWeight: 700, fontSize: "18px", marginBottom: "8px", color: "#ffffff" }}>{tool.title}</h3>
                          <p style={{ fontSize: "14px", color: "#94a3b8", marginBottom: "24px", minHeight: "40px" }}>{tool.desc}</p>
                          <motion.div whileHover={{ x: 4 }} style={{ display: "flex", alignItems: "center", gap: "8px", color: "#06b6d4", fontSize: "14px", fontWeight: 600 }}>
                            Launch <ChevronRight size={16} />
                          </motion.div>
                        </div>

                        {loadingTool === tool.id && (
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ position: "absolute", inset: 0, background: "rgba(0, 0, 0, 0.5)", borderRadius: "24px", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 20, backdropFilter: "blur(8px)" }}>
                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} style={{ width: "32px", height: "32px", border: "3px solid #06b6d4", borderTopColor: "transparent", borderRadius: "50%" }} />
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Creators Section */}
                <div>
                  <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "32px", background: "linear-gradient(to right, #ffffff, #cbd5e1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Top Creators</h2>
                  <motion.div style={{ background: "linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))", backdropFilter: "blur(48px)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "24px", padding: "32px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {creators.map((creator, idx) => (
                        <motion.div key={creator.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} whileHover={{ x: 8 }} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px", borderRadius: "12px", cursor: "pointer", transition: "all 200ms" }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            <div style={{ width: "48px", height: "48px", borderRadius: "8px", background: "linear-gradient(to bottom right, #06b6d4, #7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "14px", color: "#ffffff" }}>{creator.avatar}</div>
                            <div>
                              <p style={{ fontWeight: 700, color: "#ffffff" }}>{creator.name}</p>
                              <p style={{ fontSize: "14px", color: "#94a3b8" }}>{creator.handle}</p>
                            </div>
                          </div>
                          <div style={{ textAlign: "right" }}>
                            <p style={{ fontWeight: 900, fontSize: "18px", background: "linear-gradient(to right, #22d3ee, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{creator.score}</p>
                            <p style={{ fontSize: "12px", color: "#64748b" }}>score</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Activity Feed */}
                <div>
                  <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "32px", background: "linear-gradient(to right, #ffffff, #cbd5e1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Recent Activity</h2>
                  <motion.div style={{ background: "linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))", backdropFilter: "blur(48px)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "24px", padding: "32px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {activity.map((item, idx) => (
                        <motion.div key={item.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px", borderRadius: "12px", transition: "all 200ms" }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            <div style={{ fontSize: "28px" }}>{item.icon}</div>
                            <div>
                              <p style={{ fontWeight: 700, color: "#ffffff" }}>{item.title}</p>
                              <p style={{ fontSize: "14px", color: "#94a3b8" }}>{item.subtitle}</p>
                            </div>
                          </div>
                          <p style={{ fontSize: "14px", color: "#64748b", whiteSpace: "nowrap" }}>{item.time}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Other Pages Placeholder */}
            {activeNav !== "overview" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ background: "linear-gradient(to bottom right, rgba(6, 182, 212, 0.05), rgba(147, 51, 234, 0.05))", backdropFilter: "blur(48px)", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: "24px", marginLeft: isMobile ? "24px" : "48px", marginRight: isMobile ? "24px" : "48px", padding: "32px", textAlign: "center", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} style={{ marginBottom: "24px" }}>
                  <Sparkles size={64} style={{ color: "#06b6d4", margin: "0 auto" }} />
                </motion.div>
                <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "12px", background: "linear-gradient(to right, #06b6d4, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Coming Soon</h2>
                <p style={{ color: "#94a3b8", maxWidth: "448px" }}>This section is being enhanced with powerful new features.</p>
              </motion.div>
            )}
          </div>
        </main>
      </div>

      {/* Tool Detail Modal */}
      <AnimatePresence>
        {selectedTool && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedTool(null)} style={{ position: "fixed", inset: 0, background: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(16px)", zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} transition={{ type: "spring", damping: 25, stiffness: 200 }} onClick={(e) => e.stopPropagation()} style={{ background: "linear-gradient(to bottom right, rgba(15, 23, 42, 0.95), rgba(30, 27, 75, 0.9))", backdropFilter: "blur(48px)", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: "24px", padding: "32px", width: "100%", maxWidth: "768px", maxHeight: "90vh", overflowY: "auto" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "32px" }}>
                <div>
                  <div style={{ fontSize: "48px", marginBottom: "24px" }}>{selectedTool.icon}</div>
                  <h2 style={{ fontSize: "32px", fontWeight: 900, marginBottom: "12px", color: "#ffffff" }}>{selectedTool.title}</h2>
                  <p style={{ color: "#94a3b8", fontSize: "18px" }}>{selectedTool.desc}</p>
                </div>
                <motion.button whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.95 }} onClick={() => setSelectedTool(null)} style={{ padding: "12px", background: "transparent", border: "none", borderRadius: "8px", cursor: "pointer", color: "#94a3b8", transition: "all 200ms" }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)"} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                  <X size={24} />
                </motion.button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "32px" }}>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ background: "rgba(6, 182, 212, 0.1)", backdropFilter: "blur(32px)", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: "16px", padding: "24px" }}>
                  <h3 style={{ fontWeight: 700, color: "#ffffff", marginBottom: "12px", fontSize: "18px" }}>What it does</h3>
                  <p style={{ color: "#cbd5e1", lineHeight: 1.6 }}>Transform your creative ideas into polished outputs using advanced AI algorithms optimized specifically for creators. Generate, edit, and refine content in seconds.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ background: "rgba(147, 51, 234, 0.1)", backdropFilter: "blur(32px)", border: "1px solid rgba(147, 51, 234, 0.2)", borderRadius: "16px", padding: "24px" }}>
                  <h3 style={{ fontWeight: 700, color: "#ffffff", marginBottom: "16px", fontSize: "18px" }}>Features</h3>
                  <ul style={{ color: "#cbd5e1", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "#06b6d4" }}>✓</span> AI-powered intelligent generation</li>
                    <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "#06b6d4" }}>✓</span> One-click instant creation</li>
                    <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "#06b6d4" }}>✓</span> Fully customizable outputs</li>
                    <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "#06b6d4" }}>✓</span> Export to all platforms</li>
                  </ul>
                </motion.div>
              </div>

              <motion.button whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }} whileTap={{ scale: 0.95 }} onClick={handleGenerateBrief} disabled={loadingTool === "brief"} style={{ width: "100%", background: "linear-gradient(to right, #06b6d4, #7c3aed)", color: "#ffffff", fontWeight: 700, padding: "16px 24px", borderRadius: "12px", boxShadow: "0 8px 32px rgba(6, 182, 212, 0.3)", border: "none", cursor: "pointer", fontSize: "18px", transition: "all 200ms", opacity: loadingTool === "brief" ? 0.5 : 1 }}>
                {loadingTool === "brief" ? (
                  <motion.div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }} animate={{ opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 2 }}>
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}>⚙️</motion.div>
                    Launching...
                  </motion.div>
                ) : (
                  `Launch ${selectedTool.title} →`
                )}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
