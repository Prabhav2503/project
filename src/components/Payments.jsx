import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import {
  Zap, ArrowRight, ArrowLeft, ArrowDown, Shield, Users, CheckCircle, Clock,
  Lock, Menu, X, Bell, ChevronDown, ChevronRight, MapPin, Calendar,
  IndianRupee, Ban, Repeat, Battery, Bike, User, Phone,
  MoreVertical, Plus, Download, Filter, CircleDot, Gauge, Wrench,
  AlertCircle, Tag, CircleCheck, CircleX, Settings, BarChart3, Package,
  RefreshCw, Eye, AlertTriangle, Columns3,
  RotateCcw, Timer, FileText, Send, CreditCard, Wallet,
  TrendingUp, TrendingDown, Receipt, Banknote, Hash, Search,
  ChevronLeft, Star, Landmark, Gift, CalendarDays, CalendarCheck,
  ArrowUpRight, ArrowDownRight, PieChart, Activity, Percent, BadgeCheck,
  Building2, Smartphone, Mail, ClipboardCheck,
} from "lucide-react";

// ─── Nav ──────────────────────────────────────────────
function PMNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  return (
    <motion.nav
      initial={{ y: -100 }} animate={{ y: 0 }}
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
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[13px] text-gray-400 hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/[0.06]">{item}</a>
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
function PMHero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-12 px-4 sm:px-6 overflow-hidden">
      <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-emerald-600 rounded-full blur-[200px] pointer-events-none" />
      <motion.div animate={{ scale: [1.1, 1, 1.1], opacity: [0.05, 0.09, 0.05] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-[30%] right-[15%] w-[400px] h-[400px] bg-[#cd1d1d] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_75%)] pointer-events-none" />

      <div className="max-w-[900px] mx-auto text-center relative z-10">


        <motion.h1 initial={{ opacity: 0, y: 30, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="text-[clamp(2.5rem,7vw,5rem)] font-bold text-white leading-[1.05] tracking-tight mb-2">
          Every rupee.
        </motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 30, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.55, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.05] tracking-tight mb-6">
          <span className="bg-gradient-to-r from-emerald-400 via-[#22c55e] to-[#cd1d1d] bg-clip-text text-transparent">
            Accounted for.
          </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="text-base sm:text-lg text-gray-400 mb-10 max-w-[640px] mx-auto leading-relaxed">
          Approve payments, track dues, generate invoices with GST, manage deposits, and see real-time
          analytics — all from one financial command center. No more Tally + Excel + WhatsApp.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
          <button className="group bg-emerald-600 text-white px-7 py-3.5 rounded-full hover:bg-emerald-700 transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2 shadow-xl shadow-emerald-600/25 text-[15px]" style={{ fontWeight: 500 }}>
            Start Collecting <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white/[0.04] border border-white/[0.08] text-white px-7 py-3.5 rounded-full hover:bg-white/[0.08] transition-all text-[15px]" style={{ fontWeight: 500 }}>
            Watch Demo
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="flex flex-wrap items-center justify-center gap-2 mt-10">
          {[
            { icon: IndianRupee, label: "Collections" }, { icon: Receipt, label: "Invoices" },
            { icon: CalendarDays, label: "Dues Tracker" }, { icon: Wallet, label: "Deposits" },
            { icon: BarChart3, label: "Analytics" }, { icon: Percent, label: "GST" },
            { icon: CreditCard, label: "UPI / Cash" }, { icon: Gift, label: "Gift Cards" },
            { icon: Ban, label: "Penalties" },
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

// ─── Shared ───────────────────────────────────────────
function GlowCard({ children, className = "", glowColor = "#22c55e" }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`} onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); setMousePos({ x: e.clientX - r.left, y: e.clientY - r.top }); }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {isHovered && <div className="absolute pointer-events-none z-0" style={{ left: mousePos.x - 150, top: mousePos.y - 150, width: 300, height: 300, background: `radial-gradient(circle, ${glowColor}15 0%, transparent 70%)` }} />}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function TabWrapper({ children }) {
  return <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>{children}</motion.div>;
}

// ─── Dashboard Section ────────────────────────────────
function DashboardSection() {
  const [activeTab, setActiveTab] = useState("requests");
  const tabs = [
    { key: "requests", label: "Payment Requests", icon: ClipboardCheck },
    { key: "invoices", label: "Invoices & Tax", icon: Receipt },
    { key: "dues", label: "Dues Tracker", icon: CalendarDays },
    { key: "deposits", label: "Deposits", icon: Wallet },
    { key: "analytics", label: "Analytics", icon: BarChart3 },
  ];

  return (
    <section id="dashboard" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[250px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Payments,{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-[#cd1d1d] bg-clip-text text-transparent">reimagined</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[560px] mx-auto">
            Click through the tabs — this is how Dash handles the financial lifecycle of your fleet.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-b from-emerald-500/8 via-emerald-500/3 to-transparent rounded-[2rem] blur-[40px] pointer-events-none" />
            <div className="relative bg-gradient-to-b from-zinc-900/90 to-zinc-950/95 border border-white/[0.08] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
              {/* Chrome */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#ff5f57]" /><div className="w-3 h-3 rounded-full bg-[#febc2e]" /><div className="w-3 h-3 rounded-full bg-[#28c840]" /></div>
                <div className="hidden sm:flex items-center gap-2 bg-white/[0.04] rounded-lg px-3 py-1.5"><Lock className="w-3 h-3 text-gray-500" /><span className="text-[11px] text-gray-500">dash-mobility.app/admin/payments</span></div>
                <div className="flex items-center gap-2"><Bell className="w-4 h-4 text-gray-600" /><div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-[#cd1d1d] flex items-center justify-center text-[9px] text-white" style={{ fontWeight: 700 }}>AK</div></div>
              </div>

              {/* Summary bar */}
              <div className="px-4 sm:px-6 py-4 border-b border-white/[0.06]">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {[
                    { label: "Collected Today", value: "₹1,42,800", icon: IndianRupee, color: "#22c55e", sub: "+12% vs yesterday" },
                    { label: "Pending Requests", value: "23", icon: Clock, color: "#f59e0b", sub: "₹1,84,200 total" },
                    { label: "Overdue Dues", value: "₹4,82,000", icon: AlertCircle, color: "#ef4444", sub: "38 drivers" },
                    { label: "Invoices This Month", value: "248", icon: Receipt, color: "#8b5cf6", sub: "₹20,83,200" },
                    { label: "Deposits Held", value: "₹12,40,000", icon: Wallet, color: "#06b6d4", sub: "248 drivers" },
                    { label: "Collection Rate", value: "94.2%", icon: TrendingUp, color: "#22c55e", sub: "Industry avg: 72%" },
                  ].map((s, i) => {
                    const SIcon = s.icon;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-3">
                        <div className="flex items-center justify-between mb-1">
                          <SIcon className="w-3.5 h-3.5" style={{ color: s.color }} />
                          <span className="text-[8px] text-gray-600 uppercase tracking-wider">{s.label}</span>
                        </div>
                        <div className="text-base text-white" style={{ fontWeight: 700 }}>{s.value}</div>
                        <div className="text-[9px]" style={{ color: s.color }}>{s.sub}</div>
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
                      <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                        className={`flex items-center gap-1.5 text-[11px] px-3.5 py-2 rounded-lg transition-all whitespace-nowrap ${activeTab === tab.key ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20" : "text-gray-500 hover:text-gray-300 hover:bg-white/[0.04]"}`}
                        style={{ fontWeight: activeTab === tab.key ? 600 : 400 }}
                      >
                        <TIcon className="w-3.5 h-3.5" /> {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 min-h-[440px]">
                <AnimatePresence mode="wait">
                  {activeTab === "requests" && <RequestsTab key="requests" />}
                  {activeTab === "invoices" && <InvoicesTab key="invoices" />}
                  {activeTab === "dues" && <DuesTab key="dues" />}
                  {activeTab === "deposits" && <DepositsTab key="deposits" />}
                  {activeTab === "analytics" && <AnalyticsTab key="analytics" />}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Requests Tab ─────────────────────────────────────
function RequestsTab() {
  const [filter, setFilter] = useState("pending");
  const requests = [
    { id: "PAY-2847", driver: "Rajesh Kumar", drvId: "DRV-1847", amount: "₹8,400", type: "Monthly Plan", method: "UPI", date: "26 Mar, 10:15 AM", status: "pending", proof: "Screenshot attached" },
    { id: "PAY-2846", driver: "Suresh Patel", drvId: "DRV-2103", amount: "₹5,400", type: "Monthly Plan", method: "Cash", date: "26 Mar, 9:40 AM", status: "pending", proof: "Cash receipt #4821" },
    { id: "PAY-2845", driver: "Priya Sharma", drvId: "DRV-1562", amount: "₹2,000", type: "Security Deposit", method: "Bank Transfer", date: "26 Mar, 9:12 AM", status: "pending", proof: "NEFT ref attached" },
    { id: "PAY-2844", driver: "Amit Singh", drvId: "DRV-1903", amount: "₹400", type: "Penalty Payment", method: "UPI", date: "25 Mar, 6:30 PM", status: "pending", proof: "UPI ref: 384729183" },
    { id: "PAY-2843", driver: "Vikram Mehta", drvId: "DRV-2210", amount: "₹8,400", type: "Monthly Plan", method: "UPI", date: "25 Mar, 5:00 PM", status: "approved", proof: "Auto-verified" },
    { id: "PAY-2842", driver: "Deepak Yadav", drvId: "DRV-1445", amount: "₹8,400", type: "Monthly Plan", method: "Cash", date: "25 Mar, 3:20 PM", status: "rejected", proof: "Amount mismatch" },
  ];

  const filtered = filter === "all" ? requests : requests.filter(r => r.status === filter);

  return (
    <TabWrapper>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="text-sm text-white" style={{ fontWeight: 600 }}>Payment Requests</div>
          <div className="text-[11px] text-gray-500">23 pending • ₹1,84,200 awaiting approval</div>
        </div>
        <div className="flex items-center gap-1.5">
          {["all", "pending", "approved", "rejected"].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`text-[10px] px-3 py-1.5 rounded-lg transition-all ${filter === f ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20" : "text-gray-500 bg-white/[0.03] border border-white/[0.04] hover:bg-white/[0.06]"}`} style={{ fontWeight: filter === f ? 600 : 400 }}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2.5">
        {filtered.map((r, i) => (
          <motion.div key={r.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 hover:bg-white/[0.03] transition-colors">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 flex items-center justify-center flex-shrink-0">
                  <IndianRupee className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] text-gray-500 font-mono">{r.id}</span>
                    <span className="text-[12px] text-white" style={{ fontWeight: 500 }}>{r.driver}</span>
                    <span className="text-[10px] text-gray-600">{r.drvId}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[10px] text-gray-500">
                    <span>{r.type}</span>
                    <span>•</span>
                    <span>{r.method}</span>
                    <span>•</span>
                    <span>{r.date}</span>
                    <span>•</span>
                    <span className="text-gray-600 italic">{r.proof}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="text-right mr-2">
                  <div className="text-base text-white" style={{ fontWeight: 700 }}>{r.amount}</div>
                </div>
                {r.status === "pending" ? (
                  <div className="flex items-center gap-1.5">
                    <button className="flex items-center gap-1 bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 text-[10px] px-3 py-1.5 rounded-lg hover:bg-emerald-500/25 transition-colors" style={{ fontWeight: 600 }}>
                      <CheckCircle className="w-3 h-3" /> Approve
                    </button>
                    <button className="flex items-center gap-1 bg-white/[0.04] border border-white/[0.06] text-gray-400 text-[10px] px-3 py-1.5 rounded-lg hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20 transition-colors">
                      <CircleX className="w-3 h-3" /> Reject
                    </button>
                    <button className="flex items-center gap-1 bg-white/[0.04] border border-white/[0.06] text-gray-500 text-[10px] px-2 py-1.5 rounded-lg hover:bg-white/[0.06] transition-colors">
                      <Eye className="w-3 h-3" />
                    </button>
                  </div>
                ) : (
                  <span className={`text-[9px] px-2 py-1 rounded-full ${r.status === "approved" ? "bg-emerald-500/15 text-emerald-400" : "bg-red-500/15 text-red-400"}`} style={{ fontWeight: 600 }}>
                    {r.status.charAt(0).toUpperCase() + r.status.slice(1)}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </TabWrapper>
  );
}

// ─── Invoices Tab ─────────────────────────────────────
function InvoicesTab() {
  return (
    <TabWrapper>
      {/* Tax Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-5">
        {[
          { label: "Gross Revenue", value: "₹20,83,200", sub: "This month", color: "#22c55e" },
          { label: "GST Collected", value: "₹3,74,976", sub: "18% GST", color: "#8b5cf6" },
          { label: "Net Revenue", value: "₹17,08,224", sub: "After tax", color: "#06b6d4" },
          { label: "TDS Deducted", value: "₹41,664", sub: "2% TDS", color: "#f59e0b" },
        ].map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4">
            <div className="text-[10px] text-gray-500 mb-1">{s.label}</div>
            <div className="text-xl text-white" style={{ fontWeight: 700 }}>{s.value}</div>
            <div className="text-[10px] mt-0.5" style={{ color: s.color }}>{s.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* Invoice List */}
      <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.05]">
          <span className="text-[11px] text-gray-400" style={{ fontWeight: 600 }}>Recent Invoices</span>
          <div className="flex items-center gap-2">
            <button className="text-[10px] text-gray-500 flex items-center gap-1 hover:text-gray-300 transition-colors"><Filter className="w-3 h-3" /> Filter</button>
            <button className="text-[10px] text-gray-500 flex items-center gap-1 hover:text-gray-300 transition-colors"><Download className="w-3 h-3" /> Export</button>
          </div>
        </div>
        <div className="divide-y divide-white/[0.03]">
          {[
            { inv: "INV-2026-0312", driver: "Rajesh Kumar", amount: "₹8,400", gst: "₹1,512", total: "₹9,912", date: "26 Mar 2026", status: "paid", plan: "Pro Monthly" },
            { inv: "INV-2026-0311", driver: "Suresh Patel", amount: "₹5,400", gst: "₹972", total: "₹6,372", date: "26 Mar 2026", status: "pending", plan: "Basic Monthly" },
            { inv: "INV-2026-0310", driver: "Priya Sharma", amount: "₹8,400", gst: "₹1,512", total: "₹9,912", date: "25 Mar 2026", status: "paid", plan: "Pro Monthly" },
            { inv: "INV-2026-0309", driver: "Amit Singh", amount: "₹11,200", gst: "₹2,016", total: "₹13,216", date: "25 Mar 2026", status: "overdue", plan: "Enterprise Monthly" },
            { inv: "INV-2026-0308", driver: "Vikram Mehta", amount: "₹8,400", gst: "₹1,512", total: "₹9,912", date: "24 Mar 2026", status: "paid", plan: "Pro Monthly" },
            { inv: "INV-2026-0307", driver: "Mohammed Irfan", amount: "₹5,400", gst: "₹972", total: "₹6,372", date: "24 Mar 2026", status: "paid", plan: "Basic Monthly" },
          ].map((inv, i) => (
            <motion.div key={inv.inv} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }} className="grid grid-cols-[1fr_0.8fr_0.6fr_0.5fr_0.5fr_0.5fr_auto] gap-2 items-center px-4 py-3 hover:bg-white/[0.02] transition-colors text-[11px]">
              <div>
                <span className="text-gray-300" style={{ fontWeight: 500 }}>{inv.driver}</span>
                <span className="text-[9px] text-gray-600 ml-2">{inv.plan}</span>
              </div>
              <span className="text-gray-500 font-mono text-[10px]">{inv.inv}</span>
              <span className="text-gray-400">{inv.amount}</span>
              <span className="text-violet-400 text-[10px]">+{inv.gst}</span>
              <span className="text-white" style={{ fontWeight: 600 }}>{inv.total}</span>
              <span className="text-gray-600 text-[10px]">{inv.date}</span>
              <span className={`text-[9px] px-1.5 py-0.5 rounded-full text-center ${inv.status === "paid" ? "bg-emerald-500/15 text-emerald-400" : inv.status === "overdue" ? "bg-red-500/15 text-red-400" : "bg-amber-500/15 text-amber-400"}`}>
                {inv.status.charAt(0).toUpperCase() + inv.status.slice(1)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </TabWrapper>
  );
}

// ─── Dues Tab ─────────────────────────────────────────
function DuesTab() {
  const [view, setView] = useState("list");
  const today = 26;
  const calendarDues = {
    22: { count: 2, amount: "₹16.8K", severity: "high" },
    24: { count: 1, amount: "₹8.4K", severity: "med" },
    25: { count: 3, amount: "₹24.6K", severity: "high" },
    26: { count: 5, amount: "₹42K", severity: "high" },
    27: { count: 2, amount: "₹10.8K", severity: "med" },
    28: { count: 4, amount: "₹33.6K", severity: "high" },
    29: { count: 8, amount: "₹67.2K", severity: "high" },
    30: { count: 1, amount: "₹5.4K", severity: "low" },
    31: { count: 3, amount: "₹25.2K", severity: "med" },
  };

  return (
    <TabWrapper>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm text-white" style={{ fontWeight: 600 }}>Dues Tracker</div>
          <div className="text-[11px] text-gray-500">38 drivers with overdue payments • ₹4,82,000 outstanding</div>
        </div>
        <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.04] rounded-lg p-0.5">
          <button onClick={() => setView("list")} className={`text-[10px] px-3 py-1.5 rounded-md transition-all ${view === "list" ? "bg-emerald-500/15 text-emerald-400" : "text-gray-500 hover:text-gray-300"}`} style={{ fontWeight: 500 }}>
            List View
          </button>
          <button onClick={() => setView("calendar")} className={`text-[10px] px-3 py-1.5 rounded-md transition-all ${view === "calendar" ? "bg-emerald-500/15 text-emerald-400" : "text-gray-500 hover:text-gray-300"}`} style={{ fontWeight: 500 }}>
            Calendar
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {view === "list" ? (
          <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* Due Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-4">
              {[
                { label: "Overdue", count: 12, amount: "₹1,42,800", color: "#ef4444", icon: AlertCircle },
                { label: "Due Today", count: 5, amount: "₹42,000", color: "#f59e0b", icon: Clock },
                { label: "Due Tomorrow", count: 2, amount: "₹10,800", color: "#06b6d4", icon: Calendar },
                { label: "Due This Week", count: 19, amount: "₹2,86,400", color: "#8b5cf6", icon: CalendarDays },
              ].map((c, i) => {
                const CIcon = c.icon;
                return (
                  <motion.div key={c.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <CIcon className="w-3.5 h-3.5" style={{ color: c.color }} />
                      <span className="text-[10px] text-gray-400">{c.label}</span>
                    </div>
                    <div className="text-lg text-white" style={{ fontWeight: 700 }}>{c.amount}</div>
                    <div className="text-[9px]" style={{ color: c.color }}>{c.count} drivers</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Driver Dues List */}
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl overflow-hidden">
              <div className="divide-y divide-white/[0.03]">
                {[
                  { driver: "Deepak Yadav", id: "DRV-1445", due: "₹16,800", dueDate: "22 Mar", overdueDays: 4, plan: "Pro", phone: "+91 98765 12345" },
                  { driver: "Ramesh Gupta", id: "DRV-1678", due: "₹8,400", dueDate: "24 Mar", overdueDays: 2, plan: "Pro", phone: "+91 98765 23456" },
                  { driver: "Anil Kumar", id: "DRV-1890", due: "₹5,400", dueDate: "25 Mar", overdueDays: 1, plan: "Basic", phone: "+91 98765 34567" },
                  { driver: "Sanjay Verma", id: "DRV-2045", due: "₹8,400", dueDate: "26 Mar", overdueDays: 0, plan: "Pro", phone: "+91 98765 45678" },
                  { driver: "Manoj Tiwari", id: "DRV-2112", due: "₹11,200", dueDate: "26 Mar", overdueDays: 0, plan: "Enterprise", phone: "+91 98765 56789" },
                  { driver: "Ravi Shankar", id: "DRV-2190", due: "₹5,400", dueDate: "27 Mar", overdueDays: -1, plan: "Basic", phone: "+91 98765 67890" },
                ].map((d, i) => (
                  <motion.div key={d.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }} className="flex items-center px-4 py-3 hover:bg-white/[0.02] transition-colors gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[12px] text-white" style={{ fontWeight: 500 }}>{d.driver}</span>
                        <span className="text-[10px] text-gray-600">{d.id}</span>
                        <span className="text-[9px] bg-white/[0.06] text-gray-400 px-1.5 py-0.5 rounded">{d.plan}</span>
                      </div>
                      <div className="text-[10px] text-gray-500">{d.phone} • Due: {d.dueDate}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-sm text-white" style={{ fontWeight: 700 }}>{d.due}</div>
                      <span className={`text-[9px] ${d.overdueDays > 0 ? "text-red-400" : d.overdueDays === 0 ? "text-amber-400" : "text-gray-500"}`}>
                        {d.overdueDays > 0 ? `${d.overdueDays}d overdue` : d.overdueDays === 0 ? "Due today" : "Due tomorrow"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <button className="bg-white/[0.04] border border-white/[0.06] text-gray-400 text-[10px] px-2.5 py-1.5 rounded-lg hover:bg-white/[0.06] transition-colors">
                        <Send className="w-3 h-3" />
                      </button>
                      <button className="bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 text-[10px] px-2.5 py-1.5 rounded-lg hover:bg-emerald-500/25 transition-colors" style={{ fontWeight: 600 }}>
                        Collect
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div key="calendar" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <ChevronLeft className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-300 transition-colors" />
                  <span className="text-sm text-white" style={{ fontWeight: 600 }}>March 2026</span>
                  <ChevronRight className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-300 transition-colors" />
                </div>
                <div className="flex items-center gap-3 text-[9px]">
                  <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-sm bg-red-500/40" /><span className="text-gray-500">High (₹30K+)</span></div>
                  <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-sm bg-amber-500/40" /><span className="text-gray-500">Medium</span></div>
                  <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-sm bg-emerald-500/30" /><span className="text-gray-500">Low</span></div>
                </div>
              </div>
              {/* Day headers */}
              <div className="grid grid-cols-7 gap-1 mb-1">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(d => (
                  <div key={d} className="text-[9px] text-gray-600 text-center py-1" style={{ fontWeight: 600 }}>{d}</div>
                ))}
              </div>
              {/* Calendar grid — March 2026 starts on Sunday */}
              <div className="grid grid-cols-7 gap-1">
                {/* Offset: March 1 2026 is Sunday → 6 empty cells */}
                {Array.from({ length: 6 }, (_, i) => <div key={`e${i}`} />)}
                {Array.from({ length: 31 }, (_, i) => {
                  const day = i + 1;
                  const due = calendarDues[day];
                  const isToday = day === today;
                  const bgColor = due ? due.severity === "high" ? "bg-red-500/15 border-red-500/20" : due.severity === "med" ? "bg-amber-500/15 border-amber-500/20" : "bg-emerald-500/10 border-emerald-500/15" : "bg-white/[0.01] border-white/[0.03]";
                  return (
                    <motion.div key={day} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.02 * day }}
                      className={`relative border rounded-lg p-1.5 min-h-[56px] cursor-pointer hover:bg-white/[0.04] transition-all ${bgColor} ${isToday ? "ring-1 ring-emerald-500/40" : ""}`}
                    >
                      <div className={`text-[10px] mb-0.5 ${isToday ? "text-emerald-400" : "text-gray-500"}`} style={{ fontWeight: isToday ? 700 : 400 }}>{day}</div>
                      {due && (
                        <>
                          <div className="text-[9px] text-white" style={{ fontWeight: 600 }}>{due.amount}</div>
                          <div className="text-[7px] text-gray-500">{due.count} driver{due.count > 1 ? "s" : ""}</div>
                        </>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </TabWrapper>
  );
}

// ─── Deposits Tab ─────────────────────────────────────
function DepositsTab() {
  return (
    <TabWrapper>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-5">
        {[
          { label: "Total Held", value: "₹12,40,000", sub: "248 drivers", color: "#06b6d4" },
          { label: "Refund Pending", value: "₹35,000", sub: "7 drivers", color: "#f59e0b" },
          { label: "Adjusted (Damages)", value: "₹18,200", sub: "4 vehicles", color: "#ef4444" },
          { label: "Refunded This Month", value: "₹65,000", sub: "13 drivers", color: "#22c55e" },
        ].map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4">
            <div className="text-[10px] text-gray-500 mb-1">{s.label}</div>
            <div className="text-xl text-white" style={{ fontWeight: 700 }}>{s.value}</div>
            <div className="text-[10px] mt-0.5" style={{ color: s.color }}>{s.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* Refund Queue */}
      <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.05]">
          <span className="text-[11px] text-gray-400" style={{ fontWeight: 600 }}>Pending Refunds</span>
          <span className="text-[10px] text-amber-400" style={{ fontWeight: 600 }}>7 awaiting</span>
        </div>
        <div className="divide-y divide-white/[0.03]">
          {[
            { driver: "Ankit Verma", id: "DRV-2301", deposit: "₹5,000", deductions: "₹0", refund: "₹5,000", reason: "Vehicle returned — no damage", days: 2, bank: "SBI •••4521" },
            { driver: "Kiran Reddy", id: "DRV-1823", deposit: "₹5,000", deductions: "₹1,200", refund: "₹3,800", reason: "Minor scratches — ₹1,200 deducted", days: 3, bank: "HDFC •••7834" },
            { driver: "Naveen Kumar", id: "DRV-1956", deposit: "₹5,000", deductions: "₹2,400", refund: "₹2,600", reason: "Side mirror damage + late penalty", days: 5, bank: "ICICI •••2190" },
            { driver: "Priyanka Jain", id: "DRV-2087", deposit: "₹5,000", deductions: "₹0", refund: "₹5,000", reason: "Plan ended — clean return", days: 1, bank: "Axis •••6543" },
            { driver: "Rahul Mishra", id: "DRV-1734", deposit: "₹5,000", deductions: "₹5,000", refund: "₹0", reason: "Battery missing — full forfeiture", days: 7, bank: "—" },
          ].map((d, i) => (
            <motion.div key={d.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }} className="px-4 py-3 hover:bg-white/[0.02] transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[12px] text-white" style={{ fontWeight: 500 }}>{d.driver}</span>
                    <span className="text-[10px] text-gray-600">{d.id}</span>
                  </div>
                  <div className="text-[10px] text-gray-500">{d.reason}</div>
                  <div className="flex items-center gap-3 mt-1 text-[10px]">
                    <span className="text-gray-600">Deposit: <span className="text-gray-300">{d.deposit}</span></span>
                    <span className="text-gray-600">Deductions: <span className="text-red-400">{d.deductions}</span></span>
                    <span className="text-gray-600">Bank: <span className="text-gray-300">{d.bank}</span></span>
                    <span className="text-gray-600">Waiting: <span className="text-amber-400">{d.days}d</span></span>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="text-right">
                    <div className="text-sm text-white" style={{ fontWeight: 700 }}>{d.refund}</div>
                    <div className="text-[9px] text-gray-600">to refund</div>
                  </div>
                  {d.refund !== "₹0" ? (
                    <button className="flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 text-[10px] px-3.5 py-2 rounded-lg hover:bg-emerald-500/25 transition-colors" style={{ fontWeight: 600 }}>
                      <Send className="w-3 h-3" /> Initiate Refund
                    </button>
                  ) : (
                    <span className="text-[10px] text-red-400 bg-red-500/10 border border-red-500/15 px-3 py-2 rounded-lg">Forfeited</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </TabWrapper>
  );
}

// ─── Analytics Tab ────────────────────────────────────
function AnalyticsTab() {
  const revenueData = [
    { month: "Oct", value: 14.2 }, { month: "Nov", value: 16.8 },
    { month: "Dec", value: 15.4 }, { month: "Jan", value: 18.1 },
    { month: "Feb", value: 19.6 }, { month: "Mar", value: 20.8 },
  ];
  const maxRev = Math.max(...revenueData.map(d => d.value));

  return (
    <TabWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Revenue Chart */}
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-white" style={{ fontWeight: 600 }}>Monthly Revenue</div>
              <div className="text-[11px] text-gray-500">Last 6 months</div>
            </div>
            <div className="text-right">
              <div className="text-lg text-emerald-400" style={{ fontWeight: 700 }}>₹20.8L</div>
              <div className="flex items-center gap-1 text-[10px] text-emerald-400"><TrendingUp className="w-3 h-3" /> +6.1% MoM</div>
            </div>
          </div>
          <div className="flex items-end gap-3 h-32">
            {revenueData.map((d, i) => (
              <div key={d.month} className="flex-1 flex flex-col items-center gap-1.5">
                <motion.div
                  initial={{ height: 0 }} whileInView={{ height: `${(d.value / maxRev) * 100}%` }}
                  viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full rounded-t-md bg-gradient-to-t from-emerald-600 to-emerald-400" style={{ minHeight: 8 }}
                />
                <span className="text-[9px] text-gray-600">{d.month}</span>
                <span className="text-[8px] text-gray-500">₹{d.value}L</span>
              </div>
            ))}
          </div>
        </div>

        {/* Collection Breakdown */}
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
          <div className="text-sm text-white mb-4" style={{ fontWeight: 600 }}>Payment Method Mix</div>
          <div className="space-y-3">
            {[
              { method: "UPI (GPay, PhonePe)", pct: 62, amount: "₹12,91,584", color: "#8b5cf6" },
              { method: "Cash Collection", pct: 24, amount: "₹4,99,968", color: "#22c55e" },
              { method: "Bank Transfer (NEFT/IMPS)", pct: 10, amount: "₹2,08,320", color: "#06b6d4" },
              { method: "Gift Card / Credit", pct: 4, amount: "₹83,328", color: "#ec4899" },
            ].map((m, i) => (
              <motion.div key={m.method} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.06 }}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] text-gray-400">{m.method}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-500">{m.amount}</span>
                    <span className="text-[11px] text-white" style={{ fontWeight: 600 }}>{m.pct}%</span>
                  </div>
                </div>
                <div className="h-2 bg-white/[0.04] rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${m.pct}%` }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }} className="h-full rounded-full" style={{ backgroundColor: m.color }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
        {/* Collection efficiency */}
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4">
          <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-3" style={{ fontWeight: 600 }}>Collection Efficiency</div>
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="3" />
                <motion.circle cx="18" cy="18" r="15" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"
                  initial={{ strokeDasharray: "0 100" }} whileInView={{ strokeDasharray: "94.2 100" }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 1.2 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-base text-white" style={{ fontWeight: 700 }}>94.2%</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] text-gray-400">On-time: <span className="text-emerald-400" style={{ fontWeight: 600 }}>82%</span></div>
              <div className="text-[10px] text-gray-400">1-3 days late: <span className="text-amber-400" style={{ fontWeight: 600 }}>10%</span></div>
              <div className="text-[10px] text-gray-400">3+ days late: <span className="text-red-400" style={{ fontWeight: 600 }}>6%</span></div>
              <div className="text-[10px] text-gray-400">Default: <span className="text-red-400" style={{ fontWeight: 600 }}>2%</span></div>
            </div>
          </div>
        </div>

        {/* Top defaulters */}
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4">
          <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-3" style={{ fontWeight: 600 }}>Top Defaulters</div>
          <div className="space-y-2">
            {[
              { name: "Deepak Yadav", due: "₹16,800", days: 4 },
              { name: "Ramesh Gupta", due: "₹8,400", days: 2 },
              { name: "Anil Kumar", due: "₹5,400", days: 1 },
            ].map((d, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center text-[8px] text-red-400" style={{ fontWeight: 700 }}>{i + 1}</div>
                  <span className="text-[11px] text-gray-300">{d.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-red-400" style={{ fontWeight: 600 }}>{d.due}</span>
                  <span className="text-[8px] text-gray-600 ml-1">{d.days}d late</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily snapshot */}
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4">
          <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-3" style={{ fontWeight: 600 }}>Today's Snapshot</div>
          <div className="space-y-2">
            {[
              { label: "Payments received", value: "17", color: "#22c55e" },
              { label: "Amount collected", value: "₹1,42,800", color: "#22c55e" },
              { label: "Reminders sent", value: "23", color: "#f59e0b" },
              { label: "Requests pending", value: "6", color: "#ef4444" },
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-[10px] text-gray-500">{s.label}</span>
                <span className="text-[11px]" style={{ color: s.color, fontWeight: 600 }}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
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
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasAnimated(true);
        const steps = 40; const inc = value / steps; let cur = 0;
        const t = setInterval(() => { cur += inc; if (cur >= value) { setCount(value); clearInterval(t); } else setCount(Math.floor(cur)); }, 1500 / steps);
      }
    }, { threshold: 0.5 });
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
              { value: 94, suffix: ".2%", label: "Collection Rate", sub: "Industry avg: 72%", color: "#22c55e" },
              { value: 20, suffix: ".8L", label: "Monthly Revenue", sub: "+6.1% MoM growth", color: "#8b5cf6" },
              { value: 248, suffix: "", label: "Active Invoices", sub: "Auto-generated w/ GST", color: "#06b6d4" },
              { value: 13, suffix: "", label: "Avg Days to Collect", sub: "Down from 22 days", color: "#cd1d1d" },
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
function MiniApprovalQueue() {
  return (
    <div className="bg-black/40 border border-white/[0.06] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontWeight: 600 }}>Approval Queue</span>
        <span className="text-[10px] text-amber-400" style={{ fontWeight: 600 }}>23 pending</span>
      </div>
      <div className="space-y-2">
        {[
          { name: "Rajesh K.", amount: "₹8,400", method: "UPI", time: "2m ago" },
          { name: "Suresh P.", amount: "₹5,400", method: "Cash", time: "8m ago" },
          { name: "Priya S.", amount: "₹2,000", method: "NEFT", time: "15m ago" },
          { name: "Amit S.", amount: "₹400", method: "UPI", time: "22m ago" },
        ].map((r, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }} className="flex items-center justify-between bg-white/[0.03] border border-white/[0.04] rounded-lg px-2.5 py-2">
            <div>
              <div className="text-[10px] text-gray-300" style={{ fontWeight: 500 }}>{r.name}</div>
              <div className="text-[8px] text-gray-600">{r.method} • {r.time}</div>
            </div>
            <span className="text-[11px] text-white" style={{ fontWeight: 600 }}>{r.amount}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MiniInvoiceBreakdown() {
  return (
    <div className="bg-black/40 border border-white/[0.06] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontWeight: 600 }}>Invoice Breakdown</span>
        <span className="text-[10px] text-violet-400" style={{ fontWeight: 600 }}>248 this month</span>
      </div>
      <div className="space-y-2.5">
        {[
          { label: "Base Amount", value: "₹17,08,224", pct: 82, color: "#22c55e" },
          { label: "GST (18%)", value: "₹3,74,976", pct: 18, color: "#8b5cf6" },
          { label: "Penalties", value: "₹48,600", pct: 2, color: "#f59e0b" },
          { label: "Gift Card Credits", value: "-₹24,000", pct: 1, color: "#ec4899" },
        ].map((b, i) => (
          <motion.div key={b.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }}>
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[10px] text-gray-400">{b.label}</span>
              <span className="text-[10px] text-gray-300" style={{ fontWeight: 600 }}>{b.value}</span>
            </div>
            <div className="h-1 bg-white/[0.04] rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: `${b.pct}%` }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.1, duration: 0.8 }} className="h-full rounded-full" style={{ backgroundColor: b.color }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MiniDuesCalendar() {
  const days = Array.from({ length: 7 }, (_, i) => i + 25);
  const dues = [3, 5, 2, 4, 8, 1, 3];
  const maxDue = Math.max(...dues);
  return (
    <div className="bg-black/40 border border-white/[0.06] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontWeight: 600 }}>Upcoming Dues</span>
        <span className="text-[10px] text-amber-400" style={{ fontWeight: 600 }}>Next 7 days</span>
      </div>
      <div className="flex items-end gap-2 h-16 mb-2">
        {days.map((d, i) => (
          <div key={d} className="flex-1 flex flex-col items-center gap-1">
            <motion.div initial={{ height: 0 }} whileInView={{ height: `${(dues[i] / maxDue) * 100}%` }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.06, duration: 0.5 }}
              className={`w-full rounded-t-sm ${d === 26 ? "bg-emerald-500" : dues[i] >= 4 ? "bg-red-500/60" : "bg-amber-500/50"}`} style={{ minHeight: 4 }}
            />
            <span className={`text-[8px] ${d === 26 ? "text-emerald-400" : "text-gray-600"}`} style={{ fontWeight: d === 26 ? 700 : 400 }}>{d}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between text-[8px] text-gray-600 pt-1 border-t border-white/[0.04]">
        <span>Total: 26 drivers</span>
        <span>₹2,18,400 due</span>
      </div>
    </div>
  );
}

function MiniDepositTracker() {
  return (
    <div className="bg-black/40 border border-white/[0.06] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontWeight: 600 }}>Deposit Status</span>
        <span className="text-[10px] text-cyan-400" style={{ fontWeight: 600 }}>₹12.4L held</span>
      </div>
      <div className="flex gap-1 h-6 rounded-full overflow-hidden mb-3">
        <motion.div initial={{ width: 0 }} whileInView={{ width: "82%" }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }} className="bg-cyan-500 rounded-l-full" />
        <motion.div initial={{ width: 0 }} whileInView={{ width: "12%" }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8 }} className="bg-amber-500" />
        <motion.div initial={{ width: 0 }} whileInView={{ width: "6%" }} viewport={{ once: true }} transition={{ delay: 0.7, duration: 0.8 }} className="bg-red-500 rounded-r-full" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Active", value: "₹10.2L", color: "bg-cyan-500" },
          { label: "Refund Queue", value: "₹1.5L", color: "bg-amber-500" },
          { label: "Forfeited", value: "₹0.7L", color: "bg-red-500" },
        ].map(d => (
          <div key={d.label} className="text-center">
            <div className="flex items-center justify-center gap-1 mb-0.5"><div className={`w-1.5 h-1.5 rounded-full ${d.color}`} /></div>
            <div className="text-[10px] text-white" style={{ fontWeight: 600 }}>{d.value}</div>
            <div className="text-[8px] text-gray-600">{d.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniRevenueChart() {
  const data = [14.2, 16.8, 15.4, 18.1, 19.6, 20.8];
  const maxV = Math.max(...data);
  const months = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
  return (
    <div className="bg-black/40 border border-white/[0.06] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontWeight: 600 }}>Revenue Trend</span>
        <div className="flex items-center gap-1 text-[10px] text-emerald-400"><TrendingUp className="w-3 h-3" /><span style={{ fontWeight: 600 }}>+46%</span></div>
      </div>
      <div className="flex items-end gap-2 h-20">
        {data.map((v, i) => (
          <div key={months[i]} className="flex-1 flex flex-col items-center gap-1">
            <motion.div initial={{ height: 0 }} whileInView={{ height: `${(v / maxV) * 100}%` }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.06, duration: 0.6 }} className="w-full rounded-t-sm bg-gradient-to-t from-emerald-600 to-emerald-400" style={{ minHeight: 4 }} />
            <span className="text-[8px] text-gray-600">{months[i]}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 pt-2 border-t border-white/[0.04] flex items-center justify-between text-[8px] text-gray-600">
        <span>6-month total: ₹1.05Cr</span>
        <span>Avg: ₹17.5L/mo</span>
      </div>
    </div>
  );
}

// ─── Feature Sections ─────────────────────────────────
const features = [
  {
    id: "approvals", icon: ClipboardCheck, title: "Payment Approvals", subtitle: "Approve. Reject. Track every payment.", color: "#22c55e",
    description: "Drivers submit payment proof (UPI screenshot, cash receipt, bank ref). Admins review and approve or reject with one click. Every decision is logged with timestamp and reason. Auto-reconcile UPI payments.",
    bullets: ["One-click approve/reject workflow", "UPI screenshot + ref verification", "Cash collection with receipt tracking", "Bank transfer NEFT/IMPS matching", "Bulk approve multiple payments", "Auto-reconciliation for UPI"],
    miniDashboard: MiniApprovalQueue,
  },
  {
    id: "invoices", icon: Receipt, title: "Invoices & Tax", subtitle: "GST-compliant invoices. Auto-generated.", color: "#8b5cf6",
    description: "Every payment generates a GST-compliant invoice automatically. Track base amount, GST (18%), TDS deductions, and net payable. Export invoices as PDF, and generate monthly tax reports for your CA.",
    bullets: ["Auto-generated GST invoices", "18% GST + 2% TDS calculation", "PDF invoice download per transaction", "Monthly tax summary for CA", "Credit note generation", "HSN/SAC code mapping"],
    miniDashboard: MiniInvoiceBreakdown,
  },
  {
    id: "dues", icon: CalendarDays, title: "Dues Tracker", subtitle: "List view. Calendar view. Never miss a due date.", color: "#f59e0b",
    description: "See every driver whose payment is overdue, due today, due tomorrow, or due this week — in list or calendar view. Send payment reminders via SMS with one click. Auto-escalate overdue payments.",
    bullets: ["List view with overdue/today/upcoming", "Calendar view with due amounts per day", "One-click SMS payment reminder", "Auto-escalation for 3+ day overdue", "Aging breakdown (1-3d, 3-7d, 7d+)", "Filter by plan, city, amount"],
    miniDashboard: MiniDuesCalendar,
  },
  {
    id: "deposits", icon: Wallet, title: "Deposit Tracker", subtitle: "Hold. Adjust. Refund. Full transparency.", color: "#06b6d4",
    description: "Track security deposits for every driver — held amount, deductions for damages/penalties, and refund status. Initiate refunds with one click after vehicle return approval. Full audit trail.",
    bullets: ["Per-driver deposit ledger", "Auto-deduct for damages & penalties", "Refund queue with approval workflow", "Bank account verification before refund", "Partial refund support", "Forfeiture with documented reason"],
    miniDashboard: MiniDepositTracker,
  },
  {
    id: "analytics", icon: BarChart3, title: "Payment Analytics", subtitle: "Revenue. Trends. Insights. Real-time.", color: "#cd1d1d",
    description: "Real-time financial dashboards — monthly revenue trends, payment method breakdown, collection efficiency ring, top defaulters, and daily snapshots. Export reports for stakeholders and investors.",
    bullets: ["Monthly revenue trend charts", "Payment method breakdown (UPI/Cash/NEFT)", "Collection efficiency ring chart", "Top defaulters leaderboard", "City-wise revenue comparison", "Investor-ready PDF reports"],
    miniDashboard: MiniRevenueChart,
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-4 sm:px-6">
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[280px] pointer-events-none" />
      <div className="max-w-[1300px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Complete financial{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-[#cd1d1d] bg-clip-text text-transparent">control</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[560px] mx-auto">
            From payment collection to tax filing — every financial operation in one place.
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
                  <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-0">
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
            From leakage to{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-[#cd1d1d] bg-clip-text text-transparent">100% visibility</span>
          </h2>
          <p className="text-lg text-gray-400">How fleet operators handled payments before Dash</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5"><div className="w-8 h-8 rounded-lg bg-red-500/15 flex items-center justify-center"><CircleX className="w-4 h-4 text-red-400" /></div><span className="text-sm text-red-400" style={{ fontWeight: 600 }}>Before Dash</span></div>
            <div className="space-y-3">
              {["Payments tracked via WhatsApp screenshots", "Manual Excel entry — missed payments unnoticed", "No invoices — GST filing was guesswork", "Deposit refunds took 2-3 weeks", "No visibility into who owes how much", "Collection rate hovered around 72%", "Cash leakage — no audit trail"].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-start gap-2.5">
                  <X className="w-3.5 h-3.5 text-red-400/60 mt-0.5 flex-shrink-0" /><span className="text-sm text-gray-500">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-emerald-500/[0.03] border border-emerald-500/10 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5"><div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center"><CircleCheck className="w-4 h-4 text-emerald-400" /></div><span className="text-sm text-emerald-400" style={{ fontWeight: 600 }}>With Dash</span></div>
            <div className="space-y-3">
              {["One-click approve/reject with proof verification", "Auto-generated invoices with GST + TDS", "Calendar + list view dues tracker", "Deposit refund in 24 hours post approval", "Real-time dashboard — who owes what", "Collection rate at 94.2% and climbing", "Complete audit trail — every rupee tracked"].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-start gap-2.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" /><span className="text-sm text-gray-300">{item}</span>
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
  const caps = [
    { icon: CreditCard, title: "Multi-Method Support", desc: "UPI, cash, bank transfer, gift cards, promotional credits — every payment method used in Indian fleet ops", color: "#22c55e", metric: "4+", metricLabel: "Methods", details: [{ label: "UPI", value: "GPay, PhonePe" }, { label: "Cash", value: "Receipt tracking" }, { label: "Bank", value: "NEFT/IMPS" }, { label: "Credits", value: "Gift cards" }] },
    { icon: Receipt, title: "GST Compliance", desc: "Auto-generated GST invoices with HSN/SAC codes. Monthly GSTR reports ready for your CA. TDS auto-calculated", color: "#8b5cf6", metric: "100%", metricLabel: "Compliant", details: [{ label: "GST rate", value: "18% auto" }, { label: "TDS", value: "2% deducted" }, { label: "GSTR reports", value: "Monthly" }, { label: "Credit notes", value: "Supported" }] },
    { icon: Send, title: "Auto Reminders", desc: "Automated SMS reminders for upcoming and overdue payments. Escalation workflows for chronic defaulters", color: "#f59e0b", metric: "3x", metricLabel: "Faster collection", details: [{ label: "Channels", value: "SMS + Push" }, { label: "Timing", value: "1d, 3d, 7d" }, { label: "Escalation", value: "3 levels" }, { label: "Template", value: "Customizable" }] },
    { icon: Shield, title: "Fraud Prevention", desc: "Duplicate payment detection, screenshot verification, UPI ref cross-matching. Prevent double-crediting", color: "#ef4444", metric: "0", metricLabel: "Fraud incidents", details: [{ label: "Duplicate check", value: "Auto" }, { label: "UPI verify", value: "Ref matching" }, { label: "Screenshot", value: "AI review" }, { label: "Audit", value: "Full trail" }] },
    { icon: Gift, title: "Gift Cards & Credits", desc: "Issue promotional gift cards, apply credits to driver accounts, track redemption. Great for driver retention", color: "#ec4899", metric: "₹2.4L", metricLabel: "Issued", details: [{ label: "Active cards", value: "142" }, { label: "Redeemed", value: "89%" }, { label: "Avg value", value: "₹500" }, { label: "Expiry", value: "90 days" }] },
    { icon: Download, title: "Export & Reports", desc: "Export payment data, invoices, tax summaries in CSV/PDF. Investor-ready financial reports with one click", color: "#06b6d4", metric: "1-click", metricLabel: "Export", details: [{ label: "Formats", value: "CSV/PDF" }, { label: "Reports", value: "5 types" }, { label: "Scheduling", value: "Weekly/Monthly" }, { label: "Recipients", value: "Email" }] },
  ];

  return (
    <section id="capabilities" className="relative py-24 px-4 sm:px-6">
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[250px] pointer-events-none" />
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Built for{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-[#cd1d1d] bg-clip-text text-transparent">Indian payments</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[500px] mx-auto">UPI, cash, bank transfers — every payment method that matters in India</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {caps.map((item, i) => {
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
function PMCTA() {
  return (
    <section className="relative py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/15 rounded-full blur-[250px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e06_1px,transparent_1px),linear-gradient(to_bottom,#22c55e06_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="max-w-[700px] mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/15 border border-emerald-500/20 rounded-2xl mb-8">
            <IndianRupee className="w-7 h-7 text-emerald-400" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05]">
            Stop losing money
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-[#cd1d1d] bg-clip-text text-transparent">to spreadsheets</span>
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-[500px] mx-auto">Every payment. Every invoice. Every due date. One dashboard. Zero leakage.</p>
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
function PMFooter() {
  return (
    <footer className="border-t border-white/[0.05] py-10 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#cd1d1d] rounded-lg flex items-center justify-center"><Zap className="w-3.5 h-3.5 text-white" /></div>
          <span className="text-sm text-gray-500">Dash Mobility</span>
        </Link>
        <div className="flex items-center gap-4 text-[11px] text-gray-600">
          <Link to="/drivers" className="hover:text-gray-400 transition-colors">Drivers</Link>
          <Link to="/vehicles" className="hover:text-gray-400 transition-colors">Vehicles</Link>
          <Link to="/kyc" className="hover:text-gray-400 transition-colors">KYC</Link>
        </div>
        <span className="text-xs text-gray-600">© 2026 Dash Mobility Technologies Pvt. Ltd.</span>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────
export default function PaymentsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-black text-white overflow-x-clip" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />
      <PMHero />
      <DashboardSection />
      <FeaturesSection />
      <CapabilitiesSection />
      <PMCTA />
    </div>
  );
}
