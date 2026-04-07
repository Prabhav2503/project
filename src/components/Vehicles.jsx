import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import {
  Zap, ArrowRight, ArrowLeft, ArrowDown, Shield, Users, CheckCircle, Clock,
  Lock, Menu, X, Bell, ChevronDown, ChevronRight, MapPin, Calendar,
  IndianRupee, Ban, Repeat, Battery, BatteryCharging, Bike, User, Phone,
  MoreVertical, Plus, Download, Filter, CircleDot, Gauge, Wrench,
  AlertCircle, Tag, CircleCheck, CircleX, Settings, BarChart3, Package,
  RefreshCw, Power, Wifi, WifiOff, Plug, Unplug, Eye, ShieldCheck,
  ShieldAlert, Truck, ArrowUpDown, LayoutGrid, Columns3, GripVertical,
  RotateCcw, CheckCircle2, XCircle, AlertTriangle, Layers, Cpu,
  Signal, SignalZero, Smartphone, Hash, FileText, Send, ExternalLink,
  Handshake, Puzzle, Cog, Timer, Globe, Car, KeyRound, LockKeyhole,
  Unlock, StopCircle, Play, PauseCircle, Radio, ScanLine, ClipboardCheck,
  ClipboardList, TrendingUp, TrendingDown, Zap as ZapIcon,
} from "lucide-react";

// ─── Nav ──────────────────────────────────────────────
function VMNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-500 ${
        scrolled ? "py-2.5 bg-black/70 backdrop-blur-2xl border-b border-white/[0.06]" : "py-4 sm:py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#cd1d1d] rounded-lg flex items-center justify-center shadow-lg shadow-[#cd1d1d]/20">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-white tracking-tight" style={{ fontWeight: 600, fontSize: "17px" }}>
            Dash<span className="text-gray-500" style={{ fontWeight: 400 }}>Mobility</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center bg-white/[0.03] border border-white/[0.06] rounded-full p-1">
          {["Dashboard", "Features", "Capabilities"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[13px] text-gray-400 hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/[0.06]">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link to="/" className="hidden md:flex text-[13px] text-gray-400 hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/[0.06] items-center gap-1.5">
            <ArrowLeft className="w-3.5 h-3.5" /> Home
          </Link>
          <button className="hidden sm:flex bg-white text-black px-5 py-2 rounded-full hover:bg-gray-100 transition-all items-center gap-1.5 text-[13px] shadow-lg shadow-white/5" style={{ fontWeight: 500 }}>
            Get Started <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden overflow-hidden">
            <div className="py-4 space-y-1 border-t border-white/[0.06] mt-3">
              {["Dashboard", "Features", "Capabilities"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-gray-300 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all text-sm" onClick={() => setMobileOpen(false)}>{item}</a>
              ))}
              <Link to="/" className="block text-gray-300 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all text-sm" onClick={() => setMobileOpen(false)}>← Back to Home</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ─── Hero ─────────────────────────────────────────────
function VMHero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-12 px-4 sm:px-6 overflow-hidden">
      <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-[10%] right-[20%] w-[500px] h-[500px] bg-[#cd1d1d] rounded-full blur-[200px] pointer-events-none" />
      <motion.div animate={{ scale: [1.1, 1, 1.1], opacity: [0.05, 0.09, 0.05] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-[30%] left-[10%] w-[400px] h-[400px] bg-cyan-600 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_75%)] pointer-events-none" />

      <div className="max-w-[900px] mx-auto text-center relative z-10">


        <motion.h1 initial={{ opacity: 0, y: 30, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="text-[clamp(2.5rem,7vw,5rem)] font-bold text-white leading-[1.05] tracking-tight mb-2">
          Every vehicle.
        </motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 30, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.55, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.05] tracking-tight mb-6">
          <span className="bg-gradient-to-r from-[#cd1d1d] via-[#ff4444] to-cyan-400 bg-clip-text text-transparent">
            Total control.
          </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="text-base sm:text-lg text-gray-400 mb-10 max-w-[620px] mx-auto leading-relaxed">
          Assign, track, lock, swap, maintain, and return — manage the entire vehicle lifecycle
          from a single command center. Integrated with Battery Smart & Mooving out of the box.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
          <button className="group bg-[#cd1d1d] text-white px-7 py-3.5 rounded-full hover:bg-[#b11919] transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2 shadow-xl shadow-[#cd1d1d]/25 text-[15px]" style={{ fontWeight: 500 }}>
            Start Managing Fleet <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white/[0.04] border border-white/[0.08] text-white px-7 py-3.5 rounded-full hover:bg-white/[0.08] transition-all text-[15px]" style={{ fontWeight: 500 }}>
            Watch Demo
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="flex flex-wrap items-center justify-center gap-2 mt-10">
          {[
            { icon: Bike, label: "Assignment" }, { icon: Battery, label: "Swapping" },
            { icon: Lock, label: "Remote Lock" }, { icon: StopCircle, label: "Kill Switch" },
            { icon: Wrench, label: "Maintenance" }, { icon: Columns3, label: "Kanban" },
            { icon: Puzzle, label: "Integrations" }, { icon: RotateCcw, label: "Returns" },
            { icon: Shield, label: "Approvals" },
          ].map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 + i * 0.05, type: "spring", stiffness: 200 }} className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1.5 hover:bg-white/[0.06] transition-colors">
                <Icon className="w-3 h-3 text-gray-500" />
                <span className="text-[11px] text-gray-400" style={{ fontWeight: 500 }}>{cap.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="flex justify-center mt-14">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="w-5 h-5 text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Cursor Glow Card ─────────────────────────────────
function GlowCard({ children, className = "", glowColor = "#cd1d1d" }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  return (
    <div className={`relative overflow-hidden ${className}`} onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {isHovered && (
        <div className="absolute pointer-events-none z-0 transition-opacity duration-300" style={{ left: mousePos.x - 150, top: mousePos.y - 150, width: 300, height: 300, background: `radial-gradient(circle, ${glowColor}15 0%, transparent 70%)`, opacity: 1 }} />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// ─── TabWrapper ───────────────────────────────────────
function TabWrapper({ children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
      {children}
    </motion.div>
  );
}

// ─── Interactive Dashboard Mockup ─────────────────────
function DashboardSection() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { key: "overview", label: "Fleet Overview", icon: LayoutGrid },
    { key: "assignment", label: "Assignment", icon: Bike },
    { key: "remote", label: "Remote Control", icon: Radio },
    { key: "kanban", label: "Kanban Board", icon: Columns3 },
    { key: "integrations", label: "Integrations", icon: Puzzle },
    { key: "returns", label: "Returns", icon: RotateCcw },
  ];

  return (
    <section id="dashboard" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[250px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Your fleet,{" "}
            <span className="bg-gradient-to-r from-[#cd1d1d] to-cyan-400 bg-clip-text text-transparent">reimagined</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[550px] mx-auto">
            Click through the tabs — this is what managing your fleet actually looks like in Dash.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-b from-[#cd1d1d]/8 via-cyan-500/3 to-transparent rounded-[2rem] blur-[40px] pointer-events-none" />
            <div className="relative bg-gradient-to-b from-zinc-900/90 to-zinc-950/95 border border-white/[0.08] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
              {/* Window chrome */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="hidden sm:flex items-center gap-2 bg-white/[0.04] rounded-lg px-3 py-1.5">
                  <Lock className="w-3 h-3 text-gray-500" />
                  <span className="text-[11px] text-gray-500">dash-mobility.app/admin/vehicles</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-gray-600" />
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#cd1d1d] to-cyan-500 flex items-center justify-center text-[9px] text-white" style={{ fontWeight: 700 }}>AK</div>
                </div>
              </div>

              {/* Breadcrumb */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 py-3 border-b border-white/[0.06] gap-3">
                <div className="flex items-center gap-2 text-[12px]">
                  <span className="text-gray-600">Fleet</span>
                  <ChevronRight className="w-3 h-3 text-gray-700" />
                  <span className="text-white" style={{ fontWeight: 500 }}>Vehicle Management</span>
                  <span className="text-[10px] bg-cyan-500/15 text-cyan-400 px-2 py-0.5 rounded-full ml-1" style={{ fontWeight: 600 }}>248 vehicles</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-1.5 text-[11px] text-gray-400 hover:bg-white/[0.06] transition-colors">
                    <Filter className="w-3 h-3" /> Filter
                  </button>
                  <button className="flex items-center gap-1.5 bg-[#cd1d1d]/15 border border-[#cd1d1d]/20 rounded-lg px-3 py-1.5 text-[11px] text-[#cd1d1d] hover:bg-[#cd1d1d]/25 transition-colors" style={{ fontWeight: 500 }}>
                    <Plus className="w-3 h-3" /> Add Vehicle
                  </button>
                </div>
              </div>

              {/* Fleet Summary Bar */}
              <div className="px-4 sm:px-6 py-4 border-b border-white/[0.06]">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                  {[
                    { label: "Total Fleet", value: "248", icon: Bike, color: "#cd1d1d" },
                    { label: "Active", value: "186", icon: CircleCheck, color: "#22c55e" },
                    { label: "In Maintenance", value: "24", icon: Wrench, color: "#f59e0b" },
                    { label: "Unallotted", value: "18", icon: Package, color: "#8b5cf6" },
                    { label: "Locked", value: "12", icon: Lock, color: "#ef4444" },
                    { label: "Pending Return", value: "8", icon: RotateCcw, color: "#06b6d4" },
                  ].map((s, i) => {
                    const SIcon = s.icon;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-3 text-center">
                        <SIcon className="w-3.5 h-3.5 mx-auto mb-1" style={{ color: s.color }} />
                        <div className="text-lg text-white" style={{ fontWeight: 700 }}>{s.value}</div>
                        <div className="text-[9px] text-gray-600 uppercase tracking-wider">{s.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Tabs */}
              <div className="px-4 sm:px-6 py-2 border-b border-white/[0.06] overflow-x-auto scrollbar-hide">
                <div className="flex items-center gap-0.5 min-w-max">
                  {tabs.map((tab) => {
                    const TIcon = tab.icon;
                    return (
                      <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`flex items-center gap-1.5 text-[11px] px-3.5 py-2 rounded-lg transition-all whitespace-nowrap ${
                          activeTab === tab.key
                            ? "bg-[#cd1d1d]/15 text-[#cd1d1d] border border-[#cd1d1d]/20"
                            : "text-gray-500 hover:text-gray-300 hover:bg-white/[0.04]"
                        }`}
                        style={{ fontWeight: activeTab === tab.key ? 600 : 400 }}
                      >
                        <TIcon className="w-3.5 h-3.5" /> {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-4 sm:p-6 min-h-[420px]">
                <AnimatePresence mode="wait">
                  {activeTab === "overview" && <OverviewTab key="overview" />}
                  {activeTab === "assignment" && <AssignmentTab key="assignment" />}
                  {activeTab === "remote" && <RemoteControlTab key="remote" />}
                  {activeTab === "kanban" && <KanbanTab key="kanban" />}
                  {activeTab === "integrations" && <IntegrationsTab key="integrations" />}
                  {activeTab === "returns" && <ReturnsTab key="returns" />}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Overview Tab ─────────────────────────────────────
function OverviewTab() {
  return (
    <TabWrapper>
      {/* Vehicle List */}
      <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl overflow-hidden mb-4">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.05]">
          <span className="text-[11px] text-gray-400" style={{ fontWeight: 600 }}>Active Vehicles</span>
          <div className="flex items-center gap-2 text-[10px] text-gray-500">
            <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.04] rounded-lg px-2.5 py-1">
              <Filter className="w-3 h-3" /> Status: All <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>
        <div className="divide-y divide-white/[0.03]">
          {[
            { id: "VH-0042", model: "Ola S1 Pro", plate: "KA-01-AB-1234", driver: "Rajesh Kumar", bat: "84%", status: "active", odo: "4,230 km", health: "Good" },
            { id: "VH-0089", model: "Ather 450X", plate: "KA-01-CD-5678", driver: "Suresh Patel", bat: "62%", status: "active", odo: "6,120 km", health: "Good" },
            { id: "VH-0123", model: "Ola S1 Pro", plate: "KA-01-EF-9012", driver: "Amit Singh", bat: "23%", status: "low-battery", odo: "8,910 km", health: "Fair" },
            { id: "VH-0156", model: "Bounce Infinity", plate: "KA-01-GH-3456", driver: "—", bat: "100%", status: "unallotted", odo: "1,200 km", health: "Good" },
            { id: "VH-0201", model: "Ola S1 Pro", plate: "KA-01-IJ-7890", driver: "—", bat: "—", status: "maintenance", odo: "12,340 km", health: "Service Due" },
          ].map((v, i) => (
            <motion.div key={v.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }} className="grid grid-cols-[auto_1fr_1fr_0.8fr_0.6fr_0.6fr_0.6fr] gap-3 items-center px-4 py-3 hover:bg-white/[0.02] transition-colors text-[11px]">
              <span className="text-gray-500 font-mono text-[10px]">{v.id}</span>
              <div>
                <span className="text-gray-300" style={{ fontWeight: 500 }}>{v.model}</span>
                <span className="text-gray-600 ml-2 text-[10px]">{v.plate}</span>
              </div>
              <span className={`${v.driver === "—" ? "text-gray-600 italic" : "text-gray-400"}`}>{v.driver}</span>
              <div className="flex items-center gap-1.5">
                <Battery className={`w-3 h-3 ${v.bat === "—" ? "text-gray-700" : parseInt(v.bat) < 30 ? "text-red-400" : "text-emerald-400"}`} />
                <span className={`${v.bat === "—" ? "text-gray-700" : parseInt(v.bat) < 30 ? "text-red-400" : "text-gray-300"}`}>{v.bat}</span>
              </div>
              <span className="text-gray-500">{v.odo}</span>
              <span className={`text-[9px] px-1.5 py-0.5 rounded-full text-center ${
                v.status === "active" ? "bg-emerald-500/15 text-emerald-400" :
                v.status === "low-battery" ? "bg-amber-500/15 text-amber-400" :
                v.status === "unallotted" ? "bg-violet-500/15 text-violet-400" :
                "bg-red-500/15 text-red-400"
              }`}>{v.status === "low-battery" ? "Low Bat" : v.status === "unallotted" ? "Free" : v.status.charAt(0).toUpperCase() + v.status.slice(1)}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4">
          <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-3" style={{ fontWeight: 600 }}>Fleet Health Distribution</div>
          <div className="space-y-2">
            {[
              { label: "Good", count: 186, pct: 75, color: "#22c55e" },
              { label: "Fair", count: 38, pct: 15, color: "#f59e0b" },
              { label: "Service Due", count: 18, pct: 7, color: "#ef4444" },
              { label: "Critical", count: 6, pct: 3, color: "#dc2626" },
            ].map((h, i) => (
              <div key={h.label}>
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[10px] text-gray-400">{h.label}</span>
                  <span className="text-[10px] text-gray-300" style={{ fontWeight: 600 }}>{h.count}</span>
                </div>
                <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${h.pct}%` }} transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }} className="h-full rounded-full" style={{ backgroundColor: h.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4">
          <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-3" style={{ fontWeight: 600 }}>Recent Activity</div>
          <div className="space-y-2.5">
            {[
              { event: "VH-0042 assigned to Rajesh Kumar", time: "10 min ago", icon: Bike, color: "#22c55e" },
              { event: "VH-0201 moved to Maintenance", time: "1 hour ago", icon: Wrench, color: "#f59e0b" },
              { event: "VH-0089 battery swapped at Hub #08", time: "2 hours ago", icon: Repeat, color: "#8b5cf6" },
              { event: "VH-0178 remotely locked — penalty", time: "3 hours ago", icon: Lock, color: "#ef4444" },
              { event: "VH-0156 return approved by Admin AK", time: "5 hours ago", icon: CircleCheck, color: "#06b6d4" },
            ].map((a, i) => {
              const AIcon = a.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 + i * 0.05 }} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${a.color}15` }}>
                    <AIcon className="w-3 h-3" style={{ color: a.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] text-gray-300" style={{ fontWeight: 500 }}>{a.event}</div>
                    <div className="text-[9px] text-gray-600">{a.time}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </TabWrapper>
  );
}

// ─── Assignment Tab ───────────────────────────────────
function AssignmentTab() {
  return (
    <TabWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-5">
        {/* Assignment Card */}
        <div>
          <div className="text-sm text-white mb-3" style={{ fontWeight: 600 }}>Quick Assignment</div>
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 space-y-4">
            <div>
              <label className="text-[10px] text-gray-500 uppercase tracking-wider mb-1.5 block" style={{ fontWeight: 600 }}>Select Vehicle</label>
              <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2.5">
                <Bike className="w-4 h-4 text-gray-500" />
                <span className="text-[12px] text-gray-300">VH-0156 • Bounce Infinity • KA-01-GH-3456</span>
                <ChevronDown className="w-3 h-3 text-gray-600 ml-auto" />
              </div>
            </div>
            <div>
              <label className="text-[10px] text-gray-500 uppercase tracking-wider mb-1.5 block" style={{ fontWeight: 600 }}>Assign to Driver</label>
              <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2.5">
                <User className="w-4 h-4 text-gray-500" />
                <span className="text-[12px] text-gray-300">Vikram Mehta • DRV-2103</span>
                <ChevronDown className="w-3 h-3 text-gray-600 ml-auto" />
              </div>
            </div>
            <div className="bg-emerald-500/8 border border-emerald-500/15 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1.5">
                <BatteryCharging className="w-4 h-4 text-emerald-400" />
                <span className="text-[11px] text-emerald-400" style={{ fontWeight: 600 }}>Auto-Enabled on Assignment</span>
              </div>
              <div className="text-[10px] text-gray-400 leading-relaxed">
                Battery swapping will be automatically enabled for this driver at all Battery Smart & Mooving hubs in Bangalore.
              </div>
            </div>
            <button className="w-full bg-[#cd1d1d] text-white py-2.5 rounded-lg text-[12px] hover:bg-[#b11919] transition-all flex items-center justify-center gap-2" style={{ fontWeight: 600 }}>
              <CheckCircle className="w-3.5 h-3.5" /> Assign Vehicle
            </button>
          </div>
        </div>

        {/* Assignment History */}
        <div>
          <div className="text-sm text-white mb-3" style={{ fontWeight: 600 }}>Assignment Timeline — VH-0042</div>
          <div className="space-y-0">
            {[
              { driver: "Rajesh Kumar", period: "14 Mar 2025 → Present", status: "current", days: "127 days", condition: "Good" },
              { driver: "Priya Sharma", period: "10 Dec 2024 → 13 Mar 2025", status: "returned", days: "93 days", condition: "Good" },
              { driver: "Mohammed Irfan", period: "15 Aug 2024 → 8 Dec 2024", status: "returned", days: "115 days", condition: "Fair" },
              { driver: "Unallotted", period: "1 Aug 2024 → 14 Aug 2024", status: "idle", days: "14 days", condition: "—" },
              { driver: "Deepak Yadav", period: "1 May 2024 → 31 Jul 2024", status: "terminated", days: "91 days", condition: "Damaged" },
            ].map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }} className="flex items-start gap-3">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-3 h-3 rounded-full border-2 ${
                    a.status === "current" ? "bg-emerald-500 border-emerald-500" :
                    a.status === "terminated" ? "bg-red-500 border-red-500" :
                    a.status === "idle" ? "bg-gray-600 border-gray-600" :
                    "bg-transparent border-gray-600"
                  }`} />
                  {i < 4 && <div className="w-px h-12 bg-white/[0.06]" />}
                </div>
                <div className="pb-4 flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[11px] text-white" style={{ fontWeight: 500 }}>{a.driver}</span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                      a.status === "current" ? "bg-emerald-500/15 text-emerald-400" :
                      a.status === "terminated" ? "bg-red-500/15 text-red-400" :
                      a.status === "idle" ? "bg-gray-500/15 text-gray-400" :
                      "bg-blue-500/15 text-blue-400"
                    }`}>{a.status}</span>
                  </div>
                  <div className="text-[10px] text-gray-500">{a.period} • {a.days}</div>
                  <div className="text-[10px] text-gray-600">Condition: {a.condition}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </TabWrapper>
  );
}

// ─── Remote Control Tab ───────────────────────────────
function RemoteControlTab() {
  const [vehicleLocked, setVehicleLocked] = useState(false);
  const [swapBlocked, setSwapBlocked] = useState(false);
  const [killSwitch, setKillSwitch] = useState(false);

  return (
    <TabWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr] gap-5">
        {/* Vehicle Card */}
        <div>
          <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/80 border border-white/[0.08] rounded-2xl p-5">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-xl bg-[#cd1d1d]/10 border border-[#cd1d1d]/15 flex items-center justify-center">
                <Bike className="w-7 h-7 text-[#cd1d1d]" />
              </div>
              <div>
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>VH-0042 • Ola S1 Pro</div>
                <div className="text-[11px] text-gray-500">KA-01-AB-1234 • Rajesh Kumar</div>
              </div>
              <div className="ml-auto">
                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] ${vehicleLocked || killSwitch ? "bg-red-500/15 text-red-400" : "bg-emerald-500/15 text-emerald-400"}`} style={{ fontWeight: 600 }}>
                  <div className={`w-1.5 h-1.5 rounded-full ${vehicleLocked || killSwitch ? "bg-red-400 animate-pulse" : "bg-emerald-400"}`} />
                  {killSwitch ? "STOPPED" : vehicleLocked ? "LOCKED" : "ONLINE"}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-5">
              {[
                { label: "Battery", value: "84%", icon: Battery, color: "text-emerald-400" },
                { label: "Speed", value: killSwitch ? "0 km/h" : "32 km/h", icon: Gauge, color: killSwitch ? "text-red-400" : "text-blue-400" },
                { label: "Signal", value: "Strong", icon: Signal, color: "text-emerald-400" },
              ].map((v, i) => {
                const VIcon = v.icon;
                return (
                  <div key={i} className="bg-black/30 rounded-lg p-2.5 text-center">
                    <VIcon className={`w-3.5 h-3.5 ${v.color} mx-auto mb-1`} />
                    <div className="text-[11px] text-white" style={{ fontWeight: 600 }}>{v.value}</div>
                    <div className="text-[9px] text-gray-600">{v.label}</div>
                  </div>
                );
              })}
            </div>
            <div className="bg-black/20 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-3 h-3 text-gray-500" />
                <span className="text-[10px] text-gray-400">Last Location</span>
              </div>
              <span className="text-[11px] text-gray-300" style={{ fontWeight: 500 }}>Koramangala 5th Block, Bangalore — 2 min ago</span>
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="space-y-3">
          <div className="text-sm text-white mb-1" style={{ fontWeight: 600 }}>Remote Controls</div>

          {/* Lock/Unlock */}
          <div className={`border rounded-xl p-4 transition-all duration-300 ${vehicleLocked ? "bg-red-500/5 border-red-500/15" : "bg-white/[0.02] border-white/[0.05]"}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${vehicleLocked ? "bg-red-500/15" : "bg-white/[0.06]"}`}>
                  {vehicleLocked ? <Lock className="w-5 h-5 text-red-400" /> : <Unlock className="w-5 h-5 text-gray-400" />}
                </div>
                <div>
                  <div className="text-[12px] text-white" style={{ fontWeight: 500 }}>Vehicle Lock</div>
                  <div className="text-[10px] text-gray-500">Prevent ignition remotely</div>
                </div>
              </div>
              <button onClick={() => setVehicleLocked(!vehicleLocked)} className={`relative w-11 h-6 rounded-full transition-all duration-300 ${vehicleLocked ? "bg-red-500" : "bg-white/[0.1]"}`}>
                <motion.div animate={{ x: vehicleLocked ? 20 : 2 }} className="absolute top-1 w-4 h-4 bg-white rounded-full shadow" />
              </button>
            </div>
          </div>

          {/* Block Swapping */}
          <div className={`border rounded-xl p-4 transition-all duration-300 ${swapBlocked ? "bg-amber-500/5 border-amber-500/15" : "bg-white/[0.02] border-white/[0.05]"}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${swapBlocked ? "bg-amber-500/15" : "bg-white/[0.06]"}`}>
                  <Ban className={`w-5 h-5 ${swapBlocked ? "text-amber-400" : "text-gray-400"}`} />
                </div>
                <div>
                  <div className="text-[12px] text-white" style={{ fontWeight: 500 }}>Block Battery Swapping</div>
                  <div className="text-[10px] text-gray-500">Disables swap at all partner hubs</div>
                </div>
              </div>
              <button onClick={() => setSwapBlocked(!swapBlocked)} className={`relative w-11 h-6 rounded-full transition-all duration-300 ${swapBlocked ? "bg-amber-500" : "bg-white/[0.1]"}`}>
                <motion.div animate={{ x: swapBlocked ? 20 : 2 }} className="absolute top-1 w-4 h-4 bg-white rounded-full shadow" />
              </button>
            </div>
          </div>

          {/* Kill Switch */}
          <div className={`border rounded-xl p-4 transition-all duration-300 ${killSwitch ? "bg-red-600/10 border-red-600/20" : "bg-white/[0.02] border-white/[0.05]"}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${killSwitch ? "bg-red-600/20" : "bg-white/[0.06]"}`}>
                  <StopCircle className={`w-5 h-5 ${killSwitch ? "text-red-400 animate-pulse" : "text-gray-400"}`} />
                </div>
                <div>
                  <div className="text-[12px] text-white flex items-center gap-2" style={{ fontWeight: 500 }}>
                    Kill Switch
                    <span className="text-[8px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded" style={{ fontWeight: 700 }}>EMERGENCY</span>
                  </div>
                  <div className="text-[10px] text-gray-500">Stop vehicle immediately — use with caution</div>
                </div>
              </div>
              <button onClick={() => setKillSwitch(!killSwitch)} className={`relative w-11 h-6 rounded-full transition-all duration-300 ${killSwitch ? "bg-red-600" : "bg-white/[0.1]"}`}>
                <motion.div animate={{ x: killSwitch ? 20 : 2 }} className="absolute top-1 w-4 h-4 bg-white rounded-full shadow" />
              </button>
            </div>
          </div>

          {killSwitch && (
            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <div className="text-[10px] text-red-300 leading-relaxed">
                <span style={{ fontWeight: 600 }}>Vehicle stopped.</span> The motor has been disabled remotely. The driver will see a notification. A log entry has been created with timestamp and admin ID.
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </TabWrapper>
  );
}

// ─── Kanban Tab ───────────────────────────────────────
function KanbanTab() {
  const columns = [
    {
      title: "Unallotted",
      color: "#8b5cf6",
      icon: Package,
      count: 18,
      vehicles: [
        { id: "VH-0156", model: "Bounce Infinity", bat: "100%", health: "Good", days: 3 },
        { id: "VH-0167", model: "Ola S1 Pro", bat: "95%", health: "Good", days: 1 },
        { id: "VH-0189", model: "Ather 450X", bat: "88%", health: "Good", days: 7 },
      ],
    },
    {
      title: "Allotted",
      color: "#22c55e",
      icon: CircleCheck,
      count: 186,
      vehicles: [
        { id: "VH-0042", model: "Ola S1 Pro", bat: "84%", health: "Good", days: 127 },
        { id: "VH-0089", model: "Ather 450X", bat: "62%", health: "Good", days: 89 },
        { id: "VH-0103", model: "Ola S1 Pro", bat: "71%", health: "Fair", days: 45 },
      ],
    },
    {
      title: "Service",
      color: "#06b6d4",
      icon: Wrench,
      count: 16,
      vehicles: [
        { id: "VH-0201", model: "Ola S1 Pro", bat: "—", health: "Tire replace", days: 2 },
        { id: "VH-0218", model: "Bounce Infinity", bat: "—", health: "Motor check", days: 1 },
      ],
    },
    {
      title: "Maintenance",
      color: "#f59e0b",
      icon: AlertCircle,
      count: 8,
      vehicles: [
        { id: "VH-0134", model: "Ola S1 Pro", bat: "—", health: "Controller issue", days: 5 },
        { id: "VH-0177", model: "Ather 450X", bat: "—", health: "Battery fault", days: 3 },
      ],
    },
  ];

  return (
    <TabWrapper>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm text-white" style={{ fontWeight: 600 }}>Vehicle Kanban Board</div>
          <div className="text-[11px] text-gray-500">Drag vehicles across stages. Click to open details.</div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-1.5 text-[10px] text-gray-400 hover:bg-white/[0.06] transition-colors">
            <LayoutGrid className="w-3 h-3" /> Board View
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {columns.map((col, ci) => {
          const ColIcon = col.icon;
          return (
            <motion.div key={col.title} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: ci * 0.08 }} className="bg-white/[0.015] border border-white/[0.05] rounded-xl overflow-hidden">
              <div className="px-3 py-2.5 border-b border-white/[0.05] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ColIcon className="w-3.5 h-3.5" style={{ color: col.color }} />
                  <span className="text-[11px] text-white" style={{ fontWeight: 600 }}>{col.title}</span>
                </div>
                <span className="text-[10px] bg-white/[0.06] text-gray-400 px-2 py-0.5 rounded-full" style={{ fontWeight: 600 }}>{col.count}</span>
              </div>
              <div className="p-2 space-y-2 min-h-[200px]">
                {col.vehicles.map((v, vi) => (
                  <motion.div key={v.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: ci * 0.08 + vi * 0.04 }} className="bg-white/[0.03] border border-white/[0.04] rounded-lg p-2.5 hover:bg-white/[0.05] hover:border-white/[0.08] transition-all cursor-pointer group">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] text-gray-400 font-mono">{v.id}</span>
                      <GripVertical className="w-3 h-3 text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-[11px] text-gray-300 mb-1" style={{ fontWeight: 500 }}>{v.model}</div>
                    <div className="flex items-center gap-2">
                      {v.bat !== "—" && (
                        <span className="flex items-center gap-0.5 text-[9px] text-gray-500">
                          <Battery className="w-2.5 h-2.5" /> {v.bat}
                        </span>
                      )}
                      <span className="text-[9px]" style={{ color: col.color }}>{v.health}</span>
                    </div>
                    <div className="text-[8px] text-gray-600 mt-1">{v.days}d in this stage</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </TabWrapper>
  );
}

// ─── Integrations Tab ─────────────────────────────────
function IntegrationsTab() {
  return (
    <TabWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Battery Smart */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-gradient-to-br from-emerald-500/5 to-emerald-600/3 border border-emerald-500/15 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
              <BatteryCharging className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="text-sm text-white flex items-center gap-2" style={{ fontWeight: 600 }}>
                Battery Smart
                <span className="text-[9px] bg-emerald-500/15 text-emerald-400 px-1.5 py-0.5 rounded-full" style={{ fontWeight: 600 }}>Connected</span>
              </div>
              <div className="text-[11px] text-gray-500">India's largest battery swapping network</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { label: "Hubs Nearby", value: "23", color: "text-emerald-400" },
              { label: "Swaps Today", value: "142", color: "text-white" },
              { label: "Avg Wait", value: "4 min", color: "text-emerald-400" },
            ].map(s => (
              <div key={s.label} className="bg-black/20 rounded-lg p-2 text-center">
                <div className={`text-[13px] ${s.color}`} style={{ fontWeight: 700 }}>{s.value}</div>
                <div className="text-[8px] text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="space-y-1.5">
            {["Auto-assign swap permissions on vehicle allotment", "Real-time swap history sync", "Block/unblock swap per vehicle via API", "Hub availability & queue status"].map((f, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                <span className="text-[10px] text-gray-400">{f}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mooving */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-gradient-to-br from-blue-500/5 to-blue-600/3 border border-blue-500/15 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center">
              <Globe className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-sm text-white flex items-center gap-2" style={{ fontWeight: 600 }}>
                Mooving
                <span className="text-[9px] bg-blue-500/15 text-blue-400 px-1.5 py-0.5 rounded-full" style={{ fontWeight: 600 }}>Connected</span>
              </div>
              <div className="text-[11px] text-gray-500">EV fleet management & telematics</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { label: "Vehicles Synced", value: "248", color: "text-blue-400" },
              { label: "Telemetry", value: "Live", color: "text-white" },
              { label: "Uptime", value: "99.8%", color: "text-blue-400" },
            ].map(s => (
              <div key={s.label} className="bg-black/20 rounded-lg p-2 text-center">
                <div className={`text-[13px] ${s.color}`} style={{ fontWeight: 700 }}>{s.value}</div>
                <div className="text-[8px] text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="space-y-1.5">
            {["Vehicle location & speed in real-time", "Remote lock/unlock & kill switch via API", "OTA firmware updates", "Battery health monitoring & alerts"].map((f, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-blue-400 flex-shrink-0" />
                <span className="text-[10px] text-gray-400">{f}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* API Status */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-5 bg-white/[0.02] border border-white/[0.05] rounded-xl p-4">
        <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-3" style={{ fontWeight: 600 }}>API Health Monitor</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { name: "Battery Smart API", status: "Healthy", latency: "45ms", color: "#22c55e" },
            { name: "Mooving Telemetry", status: "Healthy", latency: "32ms", color: "#22c55e" },
            { name: "Lock/Unlock API", status: "Healthy", latency: "120ms", color: "#22c55e" },
            { name: "Swap Webhook", status: "Healthy", latency: "18ms", color: "#22c55e" },
          ].map((api, i) => (
            <div key={api.name} className="bg-white/[0.02] border border-white/[0.04] rounded-lg p-2.5">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: api.color }} />
                <span className="text-[10px] text-gray-400" style={{ fontWeight: 500 }}>{api.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-emerald-400">{api.status}</span>
                <span className="text-[9px] text-gray-600">{api.latency}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </TabWrapper>
  );
}

// ─── Returns Tab ──────────────────────────────────────
function ReturnsTab() {
  return (
    <TabWrapper>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm text-white" style={{ fontWeight: 600 }}>Vehicle Return Approvals</div>
          <div className="text-[11px] text-gray-500">8 pending returns • 3 require inspection</div>
        </div>
      </div>

      <div className="space-y-3">
        {[
          {
            id: "VH-0098", model: "Ola S1 Pro", driver: "Ankit Verma", reason: "Plan ended — did not renew",
            requestDate: "25 Mar 2026", condition: "Good", dues: "₹0", deposit: "₹5,000",
            status: "pending", inspected: true, checklist: 5, checklistDone: 5,
          },
          {
            id: "VH-0134", model: "Ather 450X", driver: "Deepak Yadav", reason: "Voluntary return — personal reasons",
            requestDate: "24 Mar 2026", condition: "Fair — minor scratches", dues: "₹1,200", deposit: "₹5,000",
            status: "pending", inspected: true, checklist: 5, checklistDone: 4,
          },
          {
            id: "VH-0178", model: "Bounce Infinity", driver: "Ramesh Gupta", reason: "Penalty escalation — vehicle locked for 7 days",
            requestDate: "23 Mar 2026", condition: "Pending inspection", dues: "₹3,800", deposit: "₹5,000",
            status: "inspection", inspected: false, checklist: 5, checklistDone: 0,
          },
        ].map((r, i) => (
          <motion.div key={r.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 hover:bg-white/[0.03] transition-colors">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] text-gray-500 font-mono">{r.id}</span>
                  <span className="text-[12px] text-white" style={{ fontWeight: 500 }}>{r.model}</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${r.status === "pending" ? "bg-amber-500/15 text-amber-400" : "bg-blue-500/15 text-blue-400"}`}>
                    {r.status === "pending" ? "Pending Approval" : "Needs Inspection"}
                  </span>
                </div>
                <div className="text-[11px] text-gray-400 mb-1">
                  <span style={{ fontWeight: 500 }}>{r.driver}</span> • Requested {r.requestDate}
                </div>
                <div className="text-[10px] text-gray-500 mb-2">{r.reason}</div>
                <div className="flex flex-wrap gap-3 text-[10px]">
                  <span className="text-gray-500">Condition: <span className="text-gray-300">{r.condition}</span></span>
                  <span className="text-gray-500">Dues: <span className={r.dues === "₹0" ? "text-emerald-400" : "text-red-400"}>{r.dues}</span></span>
                  <span className="text-gray-500">Deposit: <span className="text-gray-300">{r.deposit}</span></span>
                  <span className="text-gray-500">Checklist: <span className="text-gray-300">{r.checklistDone}/{r.checklist}</span></span>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {r.inspected ? (
                  <>
                    <button className="flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 text-[11px] px-4 py-2 rounded-lg hover:bg-emerald-500/25 transition-colors" style={{ fontWeight: 500 }}>
                      <CheckCircle className="w-3.5 h-3.5" /> Approve Return
                    </button>
                    <button className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.06] text-gray-400 text-[11px] px-4 py-2 rounded-lg hover:bg-white/[0.06] transition-colors">
                      <XCircle className="w-3.5 h-3.5" /> Reject
                    </button>
                  </>
                ) : (
                  <button className="flex items-center gap-1.5 bg-blue-500/15 border border-blue-500/20 text-blue-400 text-[11px] px-4 py-2 rounded-lg hover:bg-blue-500/25 transition-colors" style={{ fontWeight: 500 }}>
                    <ClipboardCheck className="w-3.5 h-3.5" /> Start Inspection
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Return Checklist Preview */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-5 bg-white/[0.02] border border-white/[0.05] rounded-xl p-4">
        <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-3" style={{ fontWeight: 600 }}>Return Checklist — VH-0098</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { item: "Body condition documented", done: true },
            { item: "Battery level recorded (≥20%)", done: true },
            { item: "All accessories returned", done: true },
            { item: "Outstanding dues cleared", done: true },
            { item: "Photos uploaded (4 angles)", done: true },
          ].map((c, i) => (
            <div key={i} className="flex items-center gap-2">
              {c.done ? <CircleCheck className="w-3.5 h-3.5 text-emerald-400" /> : <CircleDot className="w-3.5 h-3.5 text-gray-600" />}
              <span className={`text-[11px] ${c.done ? "text-gray-300" : "text-gray-600"}`}>{c.item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </TabWrapper>
  );
}

// ─── Live Metrics Strip ───────────────────────────────
function AnimatedCounter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elRef = useRef(null);

  useEffect(() => {
    if (hasAnimated || !elRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          const duration = 1500;
          const steps = 40;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) { setCount(value); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(elRef.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return <span ref={elRef}>{count.toLocaleString("en-IN")}{suffix}</span>;
}

function LiveMetricsStrip() {
  return (
    <section className="relative py-16 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-white/[0.02] via-white/[0.04] to-white/[0.02] border border-white/[0.06] rounded-2xl p-1">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
            {[
              { value: 248, suffix: "", label: "Fleet Size", sub: "Across 3 cities", color: "#cd1d1d" },
              { value: 186, suffix: "", label: "Active Vehicles", sub: "75% utilization", color: "#22c55e" },
              { value: 4, suffix: " min", label: "Avg Swap Time", sub: "Battery Smart + Mooving", color: "#8b5cf6" },
              { value: 99, suffix: ".8%", label: "Remote Uptime", sub: "Lock/unlock/kill", color: "#06b6d4" },
            ].map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center py-6 px-4">
                <div className="text-2xl sm:text-3xl text-white mb-1" style={{ fontWeight: 800 }}>
                  <AnimatedCounter value={m.value} suffix={m.suffix} />
                </div>
                <div className="text-xs text-gray-400 mb-0.5" style={{ fontWeight: 500 }}>{m.label}</div>
                <div className="text-[10px]" style={{ color: m.color }}>{m.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Mini Dashboards ──────────────────────────────────
function MiniAssignmentFlow() {
  return (
    <div className="bg-black/40 border border-white/[0.06] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontWeight: 600 }}>Assignment Flow</span>
        <span className="text-[10px] text-emerald-400" style={{ fontWeight: 600 }}>Avg 2 min</span>
      </div>
      <div className="space-y-2">
        {[
          { step: "Select Vehicle", icon: Bike, pct: 100, color: "#cd1d1d" },
          { step: "Choose Driver", icon: User, pct: 100, color: "#8b5cf6" },
          { step: "Auto-Enable Swaps", icon: BatteryCharging, pct: 100, color: "#22c55e" },
          { step: "Notify Driver", icon: Smartphone, pct: 100, color: "#06b6d4" },
          { step: "Live in 2 min", icon: CircleCheck, pct: 100, color: "#22c55e" },
        ].map((s, i) => {
          const SIcon = s.icon;
          return (
            <motion.div key={s.step} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.08 }} className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: `${s.color}15` }}>
                <SIcon className="w-3 h-3" style={{ color: s.color }} />
              </div>
              <div className="flex-1 h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }} className="h-full rounded-full" style={{ backgroundColor: s.color }} />
              </div>
              <span className="text-[9px] text-gray-400 w-24">{s.step}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function MiniRemoteControls() {
  return (
    <div className="bg-black/40 border border-white/[0.06] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontWeight: 600 }}>Remote Actions</span>
        <span className="text-[10px] text-[#cd1d1d]" style={{ fontWeight: 600 }}>Real-time</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Lock Vehicle", icon: Lock, count: "12 active", color: "#ef4444" },
          { label: "Kill Switch", icon: StopCircle, count: "3 active", color: "#dc2626" },
          { label: "Block Swap", icon: Ban, count: "8 blocked", color: "#f59e0b" },
          { label: "Force Update", icon: RefreshCw, count: "OTA ready", color: "#8b5cf6" },
        ].map((a, i) => {
          const AIcon = a.icon;
          return (
            <motion.div key={a.label} initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }} className="bg-white/[0.03] border border-white/[0.04] rounded-lg p-2.5 text-center">
              <AIcon className="w-4 h-4 mx-auto mb-1" style={{ color: a.color }} />
              <div className="text-[10px] text-gray-300" style={{ fontWeight: 500 }}>{a.label}</div>
              <div className="text-[8px] text-gray-600">{a.count}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function MiniKanbanPreview() {
  const cols = [
    { label: "Unallotted", count: 18, color: "#8b5cf6" },
    { label: "Allotted", count: 186, color: "#22c55e" },
    { label: "Service", count: 16, color: "#06b6d4" },
    { label: "Maintenance", count: 8, color: "#f59e0b" },
  ];
  const total = cols.reduce((a, c) => a + c.count, 0);
  return (
    <div className="bg-black/40 border border-white/[0.06] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontWeight: 600 }}>Kanban Distribution</span>
        <span className="text-[10px] text-gray-400" style={{ fontWeight: 600 }}>{total} vehicles</span>
      </div>
      <div className="flex gap-0.5 h-8 rounded-lg overflow-hidden mb-3">
        {cols.map((c, i) => (
          <motion.div key={c.label} initial={{ width: 0 }} whileInView={{ width: `${(c.count / total) * 100}%` }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }} className="h-full flex items-center justify-center" style={{ backgroundColor: c.color }}>
            <span className="text-[8px] text-white" style={{ fontWeight: 700 }}>{c.count}</span>
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-1">
        {cols.map(c => (
          <div key={c.label} className="text-center">
            <div className="flex items-center justify-center gap-1"><div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: c.color }} /></div>
            <div className="text-[8px] text-gray-500 mt-0.5">{c.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniIntegrationsStatus() {
  return (
    <div className="bg-black/40 border border-white/[0.06] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontWeight: 600 }}>Integrations</span>
        <span className="text-[10px] text-emerald-400" style={{ fontWeight: 600 }}>All healthy</span>
      </div>
      <div className="space-y-2.5">
        {[
          { name: "Battery Smart", status: "Connected", calls: "12.4K/day", latency: "45ms", color: "#22c55e" },
          { name: "Mooving", status: "Connected", calls: "8.2K/day", latency: "32ms", color: "#3b82f6" },
        ].map((int, i) => (
          <motion.div key={int.name} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="bg-white/[0.03] border border-white/[0.04] rounded-lg p-2.5">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: int.color }} />
                <span className="text-[10px] text-gray-300" style={{ fontWeight: 500 }}>{int.name}</span>
              </div>
              <span className="text-[9px] text-emerald-400">{int.status}</span>
            </div>
            <div className="flex items-center justify-between text-[8px] text-gray-600">
              <span>{int.calls}</span>
              <span>{int.latency} avg</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MiniReturnsPipeline() {
  return (
    <div className="bg-black/40 border border-white/[0.06] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontWeight: 600 }}>Return Pipeline</span>
        <span className="text-[10px] text-cyan-400" style={{ fontWeight: 600 }}>8 pending</span>
      </div>
      <div className="space-y-2">
        {[
          { stage: "Requested", count: 8, pct: 100, color: "#64748b" },
          { stage: "Inspection", count: 5, pct: 62, color: "#f59e0b" },
          { stage: "Dues Cleared", count: 4, pct: 50, color: "#8b5cf6" },
          { stage: "Approved", count: 3, pct: 37, color: "#22c55e" },
          { stage: "Completed", count: 2, pct: 25, color: "#06b6d4" },
        ].map((s, i) => (
          <motion.div key={s.stage} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }} className="flex items-center gap-2">
            <span className="w-16 text-[9px] text-gray-500 text-right">{s.stage}</span>
            <div className="flex-1 h-3 bg-white/[0.03] rounded-sm overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.pct}%` }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.08, duration: 0.8 }} className="h-full rounded-sm flex items-center justify-end pr-1" style={{ backgroundColor: `${s.color}50` }}>
                <span className="text-[7px] text-white" style={{ fontWeight: 600 }}>{s.count}</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MiniMaintenanceChart() {
  const months = ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];
  const values = [6, 10, 8, 14, 24, 18];
  const maxVal = Math.max(...values);
  return (
    <div className="bg-black/40 border border-white/[0.06] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontWeight: 600 }}>Maintenance Trend</span>
        <span className="text-[10px] text-amber-400" style={{ fontWeight: 600 }}>↑ 12% this month</span>
      </div>
      <div className="flex items-end gap-2 h-20">
        {months.map((m, i) => (
          <div key={m} className="flex-1 flex flex-col items-center gap-1">
            <motion.div initial={{ height: 0 }} whileInView={{ height: `${(values[i] / maxVal) * 100}%` }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="w-full rounded-t-sm bg-gradient-to-t from-amber-500/60 to-amber-400" style={{ minHeight: 4 }} />
            <span className="text-[8px] text-gray-600">{m}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Feature Sections ─────────────────────────────────
const features = [
  {
    id: "assignment",
    icon: Bike,
    title: "Vehicle Assignment",
    subtitle: "One click. Driver assigned. Swaps enabled.",
    color: "#22c55e",
    description: "Assign any vehicle to any driver in seconds. The moment you assign, battery swapping is automatically enabled across all Battery Smart and Mooving partner hubs. The driver gets notified instantly.",
    bullets: [
      "One-click vehicle assignment from dashboard",
      "Auto-enables battery swapping on assignment",
      "Battery Smart & Mooving hub access synced",
      "Driver notification via app + SMS",
      "Assignment history with condition log",
      "Reassign to another driver instantly",
    ],
    miniDashboard: MiniAssignmentFlow,
  },
  {
    id: "remote",
    icon: Radio,
    title: "Remote Lock & Kill Switch",
    subtitle: "Lock. Block. Stop. From anywhere.",
    color: "#ef4444",
    description: "Lock the vehicle remotely to prevent ignition. Block battery swapping at all partner hubs. Use the emergency kill switch to stop the motor instantly. Every action is logged with admin ID and timestamp.",
    bullets: [
      "Remote lock — prevents ignition",
      "Block battery swapping per vehicle",
      "Emergency kill switch — stops motor",
      "All actions logged with audit trail",
      "Driver sees real-time status in app",
      "Works via Mooving telematics API",
    ],
    miniDashboard: MiniRemoteControls,
  },
  {
    id: "kanban",
    icon: Columns3,
    title: "Kanban Lifecycle Board",
    subtitle: "Unallotted → Allotted → Service → Maintenance",
    color: "#8b5cf6",
    description: "Visual kanban board to manage every vehicle across lifecycle stages. Drag vehicles between columns, set alerts for vehicles stuck too long in any stage, and track turnaround times.",
    bullets: [
      "4 lifecycle stages with visual board",
      "Drag-and-drop between stages",
      "Alert if vehicle stuck > X days",
      "Turnaround time tracking per stage",
      "Bulk move vehicles between stages",
      "Filter by city, model, health status",
    ],
    miniDashboard: MiniKanbanPreview,
  },
  {
    id: "integrations",
    icon: Puzzle,
    title: "Battery Smart & Mooving",
    subtitle: "Third-party integrations. Out of the box.",
    color: "#3b82f6",
    description: "Deep integrations with India's largest battery swapping network (Battery Smart) and EV telematics platform (Mooving). Swap history, remote controls, OTA updates, and battery health — all synced in real-time.",
    bullets: [
      "Battery Smart — swap permissions & history",
      "Mooving — telematics & remote control",
      "Real-time API health monitoring",
      "Webhook-based event sync",
      "Block/unblock swap via API",
      "OTA firmware updates via Mooving",
    ],
    miniDashboard: MiniIntegrationsStatus,
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & Service",
    subtitle: "Track every service. Predict every issue.",
    color: "#f59e0b",
    description: "Log maintenance events, track service history per vehicle, set recurring service schedules, and get alerts when odometer or time-based thresholds are hit. Never miss a service window again.",
    bullets: [
      "Service history log per vehicle",
      "Odometer & time-based service alerts",
      "Maintenance cost tracking",
      "Vendor/workshop assignment",
      "Spare parts inventory tracking",
      "Downtime analytics per vehicle",
    ],
    miniDashboard: MiniMaintenanceChart,
  },
  {
    id: "returns",
    icon: RotateCcw,
    title: "Vehicle Return Approval",
    subtitle: "Inspect. Clear dues. Approve. Done.",
    color: "#06b6d4",
    description: "Structured return workflow — driver requests return, field team inspects, admin reviews condition + dues + deposit, approves or rejects. Every step tracked with checklist and photo evidence.",
    bullets: [
      "Driver-initiated return request",
      "Field inspection with checklist",
      "Auto-calculate deposit refund vs dues",
      "4-angle photo documentation",
      "Admin approval with one click",
      "Deposit refund initiated on approval",
    ],
    miniDashboard: MiniReturnsPipeline,
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-4 sm:px-6">
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[280px] pointer-events-none" />
      <div className="max-w-[1300px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Full vehicle{" "}
            <span className="bg-gradient-to-r from-[#cd1d1d] to-cyan-400 bg-clip-text text-transparent">lifecycle</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[550px] mx-auto">
            From the moment a vehicle enters your fleet to the day it's returned — every step is managed.
          </p>
        </motion.div>

        <div className="space-y-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            const MiniDash = feat.miniDashboard;
            const isEven = idx % 2 === 0;
            return (
              <motion.div key={feat.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
                <GlowCard className="bg-white/[0.015] border border-white/[0.06] rounded-3xl overflow-hidden hover:border-white/[0.12] transition-all duration-500" glowColor={feat.color}>
                  <div className={`grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-0`}>
                    <div className={`p-7 sm:p-10 ${!isEven ? "lg:order-2" : ""}`}>
                      <div className="flex items-center gap-3 mb-5">
                        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${feat.color}15` }}>
                          <Icon className="w-5 h-5" style={{ color: feat.color }} />
                        </motion.div>
                        <div>
                          <h3 className="text-xl sm:text-2xl text-white" style={{ fontWeight: 700 }}>{feat.title}</h3>
                          <p className="text-sm text-gray-500" style={{ fontWeight: 500 }}>{feat.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-gray-400 leading-relaxed mb-6 max-w-[550px]">{feat.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                        {feat.bullets.map((b, i) => (
                          <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.04 }} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: feat.color }} />
                            <span className="text-sm text-gray-300">{b}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div className={`p-5 sm:p-7 flex items-center ${!isEven ? "lg:order-1" : ""}`}>
                      <div className="w-full"><MiniDash /></div>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Before/After ─────────────────────────────────────
function BeforeAfterSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6">
      <div className="max-w-[1000px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            From guesswork to{" "}
            <span className="bg-gradient-to-r from-[#cd1d1d] to-cyan-400 bg-clip-text text-transparent">precision</span>
          </h2>
          <p className="text-lg text-gray-400">How fleet operators managed vehicles before Dash</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-red-500/15 flex items-center justify-center"><CircleX className="w-4 h-4 text-red-400" /></div>
              <span className="text-sm text-red-400" style={{ fontWeight: 600 }}>Before Dash</span>
            </div>
            <div className="space-y-3">
              {[
                "Vehicle assignments tracked in Excel spreadsheets",
                "No way to remotely lock or stop a vehicle",
                "Battery swap status unknown — call the hub",
                "Maintenance logged in notebooks — no history",
                "Vehicle returns took 3-5 days of back & forth",
                "No integration with Battery Smart or Mooving",
                "Can't block a specific vehicle's swap access",
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-start gap-2.5">
                  <X className="w-3.5 h-3.5 text-red-400/60 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-500">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-emerald-500/[0.03] border border-emerald-500/10 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center"><CircleCheck className="w-4 h-4 text-emerald-400" /></div>
              <span className="text-sm text-emerald-400" style={{ fontWeight: 600 }}>With Dash</span>
            </div>
            <div className="space-y-3">
              {[
                "One-click assignment with auto swap enablement",
                "Remote lock, swap block & kill switch — instant",
                "Real-time swap history synced from Battery Smart",
                "Visual Kanban board for vehicle lifecycle",
                "Structured return workflow with photo checklist",
                "Battery Smart + Mooving integrated natively",
                "Per-vehicle swap blocking via API",
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-start gap-2.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Capabilities Grid ────────────────────────────────
function CapabilitiesSection() {
  const capabilities = [
    { icon: Bike, title: "Fleet Inventory", desc: "Full inventory of every vehicle — model, VIN, registration, insurance, condition, and current assignment", color: "#cd1d1d", metric: "248", metricLabel: "Vehicles", details: [{ label: "Models tracked", value: "4 types" }, { label: "Data points", value: "32/vehicle" }, { label: "Search", value: "< 100ms" }, { label: "Export", value: "CSV/PDF" }] },
    { icon: Radio, title: "Telematics", desc: "Real-time location, speed, battery level, and signal strength for every vehicle via Mooving integration", color: "#3b82f6", metric: "Live", metricLabel: "Tracking", details: [{ label: "Update freq", value: "Every 10s" }, { label: "History", value: "90 days" }, { label: "Geofencing", value: "Supported" }, { label: "Accuracy", value: "3m GPS" }] },
    { icon: Shield, title: "Insurance & Docs", desc: "Track insurance expiry, RC validity, pollution certificates. Auto-alerts before any document lapses", color: "#ec4899", metric: "30d", metricLabel: "Early alerts", details: [{ label: "Doc types", value: "6 tracked" }, { label: "Alerts", value: "SMS+Email" }, { label: "Storage", value: "Cloud" }, { label: "Compliance", value: "100%" }] },
    { icon: BatteryCharging, title: "Battery Health", desc: "Track battery degradation, cycle count, swap frequency, and charge patterns across your entire fleet", color: "#22c55e", metric: "92%", metricLabel: "Avg health", details: [{ label: "Monitoring", value: "Real-time" }, { label: "Alerts", value: "< 70% health" }, { label: "Cycle tracking", value: "Per battery" }, { label: "Reports", value: "Weekly" }] },
    { icon: IndianRupee, title: "Cost Tracking", desc: "Per-vehicle cost breakdown — maintenance, service, swap costs, insurance. Know your true TCO per vehicle", color: "#f59e0b", metric: "₹2.1/km", metricLabel: "Avg TCO", details: [{ label: "Categories", value: "8 cost types" }, { label: "Depreciation", value: "Auto-calc" }, { label: "Comparison", value: "Vehicle vs fleet" }, { label: "Reports", value: "Monthly" }] },
    { icon: BarChart3, title: "Utilization Reports", desc: "Vehicle utilization rates, idle time, assignment gaps. Optimize fleet size with data-driven decisions", color: "#8b5cf6", metric: "75%", metricLabel: "Utilization", details: [{ label: "Idle alerts", value: "> 3 days" }, { label: "Benchmarks", value: "City-wise" }, { label: "Right-sizing", value: "Suggestions" }, { label: "Dashboards", value: "Real-time" }] },
  ];

  return (
    <section id="capabilities" className="relative py-24 px-4 sm:px-6">
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#cd1d1d]/5 rounded-full blur-[250px] pointer-events-none" />
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Built for{" "}
            <span className="bg-gradient-to-r from-[#cd1d1d] to-cyan-400 bg-clip-text text-transparent">EV fleets</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[500px] mx-auto">
            Every feature designed for electric vehicle fleet operations in India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <GlowCard className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.12] transition-all duration-500 h-full" glowColor={item.color}>
                  <div className="flex items-start justify-between mb-4">
                    <motion.div whileHover={{ scale: 1.15, rotate: -5 }} className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
                      <Icon className="w-5 h-5" style={{ color: item.color }} />
                    </motion.div>
                    <div className="text-right">
                      <div className="text-lg text-white" style={{ fontWeight: 700 }}>{item.metric}</div>
                      <div className="text-[8px] text-gray-600 uppercase tracking-wider">{item.metricLabel}</div>
                    </div>
                  </div>
                  <h3 className="text-sm text-white mb-1.5" style={{ fontWeight: 600 }}>{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{item.desc}</p>
                  <div className="border-t border-white/[0.04] pt-3 space-y-1.5">
                    {item.details.map((d, j) => (
                      <div key={j} className="flex items-center justify-between">
                        <span className="text-[10px] text-gray-600">{d.label}</span>
                        <span className="text-[10px] text-gray-400" style={{ fontWeight: 500 }}>{d.value}</span>
                      </div>
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────
function VMCTA() {
  return (
    <section className="relative py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#cd1d1d]/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#cd1d1d]/15 rounded-full blur-[250px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cd1d1d06_1px,transparent_1px),linear-gradient(to_bottom,#cd1d1d06_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-[700px] mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="inline-flex items-center justify-center w-16 h-16 bg-[#cd1d1d]/15 border border-[#cd1d1d]/20 rounded-2xl mb-8">
            <Bike className="w-7 h-7 text-[#cd1d1d]" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05]">
            Stop managing vehicles
            <br />
            <span className="bg-gradient-to-r from-[#cd1d1d] to-cyan-400 bg-clip-text text-transparent">in spreadsheets</span>
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-[500px] mx-auto">
            Every vehicle. Every swap. Every lock. One dashboard. Zero chaos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="group bg-white text-black px-10 py-4 rounded-full flex items-center gap-2 shadow-2xl shadow-white/10" style={{ fontWeight: 500, fontSize: "15px" }}>
              Book Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────
function VMFooter() {
  return (
    <footer className="border-t border-white/[0.05] py-10 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#cd1d1d] rounded-lg flex items-center justify-center"><Zap className="w-3.5 h-3.5 text-white" /></div>
          <span className="text-sm text-gray-500">Dash Mobility</span>
        </Link>
        <div className="flex items-center gap-4 text-[11px] text-gray-600">
          <Link to="/drivers" className="hover:text-gray-400 transition-colors">Driver Management</Link>
          <Link to="/kyc" className="hover:text-gray-400 transition-colors">KYC Pipeline</Link>
        </div>
        <span className="text-xs text-gray-600">© 2026 Dash Mobility Technologies Pvt. Ltd.</span>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────
export default function VehicleManagementPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-clip" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />
      <VMHero />
      <DashboardSection />
      <FeaturesSection />
      <CapabilitiesSection />
      <VMCTA />
    </div>
  );
}
