import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  Zap,
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  Shield,
  Users,
  CheckCircle,
  Clock,
  Lock,
  BadgeCheck,
  Smartphone,
  Eye,
  Menu,
  X,
  AlertTriangle,
  Search,
  Bell,
  ChevronDown,
  ChevronRight,
  MapPin,
  Calendar,
  FileText,
  Send,
  CreditCard,
  IndianRupee,
  Wallet,
  TrendingUp,
  TrendingDown,
  Ban,
  Gift,
  Repeat,
  Battery,
  BatteryCharging,
  Bike,
  User,
  Phone,
  Mail,
  Hash,
  MoreVertical,
  Plus,
  Download,
  Filter,
  ChevronLeft,
  CircleDot,
  Star,
  Gauge,
  Wrench,
  AlertCircle,
  Tag,
  Receipt,
  Banknote,
  CircleCheck,
  CircleX,
  Timer,
  Package,
  RefreshCw,
  Settings,
  BarChart3,
  Fingerprint,
  Landmark,
  MessageSquare,
} from "lucide-react";

// ─── Nav ──────────────────────────────────────────────
function DMNav() {
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
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[13px] text-gray-400 hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/[0.06]"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link to="/" className="hidden md:flex text-[13px] text-gray-400 hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/[0.06] items-center gap-1.5">
            <ArrowLeft className="w-3.5 h-3.5" />
            Home
          </Link>
          <button className="hidden sm:flex bg-white text-black px-5 py-2 rounded-full hover:bg-gray-100 transition-all items-center gap-1.5 text-[13px] shadow-lg shadow-white/5" style={{ fontWeight: 500 }}>
            Get Started
            <ArrowRight className="w-3.5 h-3.5" />
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
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-gray-300 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all text-sm" onClick={() => setMobileOpen(false)}>
                  {item}
                </a>
              ))}
              <Link to="/" className="block text-gray-300 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all text-sm" onClick={() => setMobileOpen(false)}>
                ← Back to Home
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ─── Hero ─────────────────────────────────────────────
function DMHero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-12 px-4 sm:px-6 overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[#cd1d1d] rounded-full blur-[200px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-orange-600 rounded-full blur-[180px] pointer-events-none"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_75%)] pointer-events-none" />

      <div className="max-w-[900px] mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,7vw,5rem)] font-bold text-white leading-[1.05] tracking-tight mb-2"
        >
          Every driver.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.55, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.05] tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-[#cd1d1d] via-[#ff4444] to-orange-400 bg-clip-text text-transparent">
            One dashboard.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-base sm:text-lg text-gray-400 mb-10 max-w-[620px] mx-auto leading-relaxed"
        >
          Vehicle assignments, payments, dues, swap history, plans, penalties, onboarding, KYC —
          manage the entire driver lifecycle from a single screen. No more juggling WhatsApp, Excel & Tally.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4"
        >
          <button className="group bg-[#cd1d1d] text-white px-7 py-3.5 rounded-full hover:bg-[#b11919] transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2 shadow-xl shadow-[#cd1d1d]/25 text-[15px]" style={{ fontWeight: 500 }}>
            Start Managing Drivers
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white/[0.04] border border-white/[0.08] text-white px-7 py-3.5 rounded-full hover:bg-white/[0.08] transition-all text-[15px]" style={{ fontWeight: 500 }}>
            Watch Demo
          </button>
        </motion.div>

        {/* Capability pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mt-10"
        >
          {[
            { icon: User, label: "Profiles" },
            { icon: Bike, label: "Vehicles" },
            { icon: IndianRupee, label: "Payments" },
            { icon: Wallet, label: "Dues" },
            { icon: Repeat, label: "Swaps" },
            { icon: Tag, label: "Plans" },
            { icon: Ban, label: "Penalties" },
            { icon: Shield, label: "KYC" },
            { icon: Gift, label: "Gift Cards" },
          ].map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 + i * 0.05, type: "spring", stiffness: 200 }}
                className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1.5 hover:bg-white/[0.06] transition-colors"
              >
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

// ─── Interactive Dashboard Mockup ─────────────────────
function DashboardSection() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { key: "overview", label: "Overview", icon: User },
    { key: "payments", label: "Payments & Dues", icon: IndianRupee },
    { key: "penalties", label: "Penalties", icon: Ban },
    { key: "swaps", label: "Swap History", icon: Repeat },
    { key: "plans", label: "Plans", icon: Tag },
    { key: "onboarding", label: "Onboarding", icon: Shield },
  ];

  return (
    <section id="dashboard" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#cd1d1d]/5 rounded-full blur-[250px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            The driver profile{" "}
            <span className="bg-gradient-to-r from-[#cd1d1d] to-orange-400 bg-clip-text text-transparent">
              reimagined
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[550px] mx-auto">
            Click through the tabs below — this is what managing a driver actually looks like in Dash.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-b from-[#cd1d1d]/8 via-[#cd1d1d]/3 to-transparent rounded-[2rem] blur-[40px] pointer-events-none" />

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
                  <span className="text-[11px] text-gray-500">dash-mobility.app/admin/drivers/DRV-1847</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-gray-600" />
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#cd1d1d] to-orange-500 flex items-center justify-center text-[9px] text-white" style={{ fontWeight: 700 }}>AK</div>
                </div>
              </div>

              {/* Breadcrumb & Actions */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 py-3 border-b border-white/[0.06] gap-3">
                <div className="flex items-center gap-2 text-[12px]">
                  <span className="text-gray-600">Drivers</span>
                  <ChevronRight className="w-3 h-3 text-gray-700" />
                  <span className="text-white" style={{ fontWeight: 500 }}>Rajesh Kumar</span>
                  <span className="text-[10px] bg-emerald-500/15 text-emerald-400 px-2 py-0.5 rounded-full ml-1" style={{ fontWeight: 600 }}>Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-1.5 text-[11px] text-gray-400 hover:bg-white/[0.06] transition-colors">
                    <Phone className="w-3 h-3" /> Call
                  </button>
                  <button className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-1.5 text-[11px] text-gray-400 hover:bg-white/[0.06] transition-colors">
                    <MessageSquare className="w-3 h-3" /> Message
                  </button>
                  <button className="flex items-center gap-1 bg-white/[0.04] border border-white/[0.06] rounded-lg px-2 py-1.5 text-gray-500 hover:bg-white/[0.06] transition-colors">
                    <MoreVertical className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Driver Header Card */}
              <div className="px-4 sm:px-6 py-5 border-b border-white/[0.06]">
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#cd1d1d] to-orange-500 flex items-center justify-center text-xl text-white flex-shrink-0"
                    style={{ fontWeight: 700 }}
                  >
                    RK
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h3 className="text-lg text-white" style={{ fontWeight: 700 }}>Rajesh Kumar</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] bg-white/[0.06] text-gray-400 px-2 py-0.5 rounded font-mono">DRV-1847</span>
                        <span className="text-[10px] bg-blue-500/15 text-blue-400 px-2 py-0.5 rounded-full">Pro Plan</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-gray-500">
                      <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +91 98765 67890</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Koramangala, Bangalore</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Joined 14 Mar 2025</span>
                      <span className="flex items-center gap-1"><Bike className="w-3 h-3 text-emerald-400" /> Ola S1 Pro — KA-01-AB-1234</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="text-center bg-white/[0.03] border border-white/[0.05] rounded-xl px-4 py-2.5">
                      <div className="text-lg font-bold text-white">₹2,400</div>
                      <div className="text-[9px] text-red-400 uppercase tracking-wider" style={{ fontWeight: 600 }}>Dues</div>
                    </div>
                    <div className="text-center bg-white/[0.03] border border-white/[0.05] rounded-xl px-4 py-2.5">
                      <div className="text-lg font-bold text-white">127</div>
                      <div className="text-[9px] text-gray-500 uppercase tracking-wider" style={{ fontWeight: 600 }}>Days Active</div>
                    </div>
                  </div>
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
                        <TIcon className="w-3.5 h-3.5" />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-4 sm:p-6 min-h-[380px]">
                <AnimatePresence mode="wait">
                  {activeTab === "overview" && <OverviewTab key="overview" />}
                  {activeTab === "payments" && <PaymentsTab key="payments" />}
                  {activeTab === "penalties" && <PenaltiesTab key="penalties" />}
                  {activeTab === "swaps" && <SwapsTab key="swaps" />}
                  {activeTab === "plans" && <PlansTab key="plans" />}
                  {activeTab === "onboarding" && <OnboardingTab key="onboarding" />}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TabWrapper({ children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
      {children}
    </motion.div>
  );
}

function OverviewTab() {
  return (
    <TabWrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        {[
          { label: "Total Paid", value: "₹1,24,800", sub: "since joining", icon: IndianRupee, color: "#22c55e", trend: "+₹8,400 this month" },
          { label: "Outstanding Dues", value: "₹2,400", sub: "2 invoices pending", icon: Wallet, color: "#ef4444", trend: "Due in 3 days" },
          { label: "Total Penalties", value: "₹1,200", sub: "3 penalties", icon: Ban, color: "#f59e0b", trend: "₹600 unpaid" },
          { label: "Swaps Done", value: "14", sub: "avg 1.1/week", icon: Repeat, color: "#8b5cf6", trend: "Last: 2 days ago" },
        ].map((stat, i) => {
          const SIcon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3.5"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontWeight: 600 }}>{stat.label}</span>
                <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: `${stat.color}15` }}>
                  <SIcon className="w-3 h-3" style={{ color: stat.color }} />
                </div>
              </div>
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-[10px] text-gray-600 mt-0.5">{stat.sub}</div>
              <div className="text-[9px] mt-1.5" style={{ color: stat.color }}>{stat.trend}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Current Vehicle & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Current Vehicle */}
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4">
          <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-3" style={{ fontWeight: 600 }}>Assigned Vehicle</div>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center">
              <Bike className="w-7 h-7 text-emerald-400" />
            </div>
            <div>
              <div className="text-sm text-white" style={{ fontWeight: 600 }}>Ola S1 Pro</div>
              <div className="text-[11px] text-gray-500">KA-01-AB-1234 • VIN: MOLA2024S1P7890</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Battery", value: "78%", icon: Battery, color: "text-emerald-400" },
              { label: "Odometer", value: "4,230 km", icon: Gauge, color: "text-blue-400" },
              { label: "Health", value: "Good", icon: CheckCircle, color: "text-emerald-400" },
            ].map((v, i) => {
              const VIcon = v.icon;
              return (
                <div key={i} className="bg-white/[0.02] rounded-lg p-2.5 text-center">
                  <VIcon className={`w-3.5 h-3.5 ${v.color} mx-auto mb-1`} />
                  <div className="text-[11px] text-white" style={{ fontWeight: 600 }}>{v.value}</div>
                  <div className="text-[9px] text-gray-600">{v.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4">
          <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-3" style={{ fontWeight: 600 }}>Recent Activity</div>
          <div className="space-y-2.5">
            {[
              { event: "Payment received — ₹8,400", time: "Today, 10:15 AM", icon: IndianRupee, color: "#22c55e" },
              { event: "Battery swapped at Hub #12", time: "Yesterday, 6:30 PM", icon: Repeat, color: "#8b5cf6" },
              { event: "Penalty: Late payment — ₹200", time: "22 Mar, 2:00 PM", icon: Ban, color: "#f59e0b" },
              { event: "Plan renewed — Pro Monthly", time: "15 Mar, 9:00 AM", icon: Tag, color: "#06b6d4" },
              { event: "Vehicle assigned — Ola S1 Pro", time: "14 Mar, 11:00 AM", icon: Bike, color: "#cd1d1d" },
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

function PaymentsTab() {
  return (
    <TabWrapper>
      {/* Payment Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
        <div className="bg-emerald-500/10 border border-emerald-500/15 rounded-xl p-4">
          <div className="text-[10px] text-gray-400 mb-1">Total Collected</div>
          <div className="text-2xl font-bold text-emerald-400">₹1,24,800</div>
          <div className="text-[10px] text-emerald-400/60 mt-1">14 payments • 127 days</div>
        </div>
        <div className="bg-red-500/10 border border-red-500/15 rounded-xl p-4">
          <div className="text-[10px] text-gray-400 mb-1">Outstanding Dues</div>
          <div className="text-2xl font-bold text-red-400">₹2,400</div>
          <div className="text-[10px] text-red-400/60 mt-1">2 invoices • Due in 3 days</div>
        </div>
        <div className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-4">
          <div className="text-[10px] text-gray-400 mb-1">Next Due Date</div>
          <div className="text-2xl font-bold text-white">29 Mar</div>
          <div className="text-[10px] text-gray-500 mt-1">Monthly plan renewal</div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.05]">
          <span className="text-[11px] text-gray-400" style={{ fontWeight: 600 }}>Transaction History</span>
          <button className="text-[10px] text-gray-500 flex items-center gap-1 hover:text-gray-300 transition-colors">
            <Download className="w-3 h-3" /> Export
          </button>
        </div>
        <div className="divide-y divide-white/[0.03]">
          {[
            { date: "26 Mar", desc: "Monthly Plan — March", amount: "₹8,400", status: "paid", method: "UPI" },
            { date: "22 Mar", desc: "Late Payment Penalty", amount: "₹200", status: "due", method: "—" },
            { date: "15 Mar", desc: "Security Deposit (Partial)", amount: "₹2,000", status: "due", method: "—" },
            { date: "26 Feb", desc: "Monthly Plan — February", amount: "₹8,400", status: "paid", method: "UPI" },
            { date: "26 Jan", desc: "Monthly Plan — January", amount: "₹8,400", status: "paid", method: "Cash" },
            { date: "14 Jan", desc: "Gift Card Applied — ₹500", amount: "-₹500", status: "credit", method: "Gift Card" },
            { date: "26 Dec", desc: "Monthly Plan — December", amount: "₹8,400", status: "paid", method: "UPI" },
          ].map((txn, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }} className="flex items-center px-4 py-2.5 hover:bg-white/[0.02] transition-colors">
              <div className="w-16 flex-shrink-0">
                <span className="text-[10px] text-gray-600">{txn.date}</span>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[11px] text-gray-300" style={{ fontWeight: 500 }}>{txn.desc}</span>
              </div>
              <div className="w-16 text-right flex-shrink-0">
                <span className="text-[10px] text-gray-500">{txn.method}</span>
              </div>
              <div className="w-20 text-right flex-shrink-0">
                <span className={`text-[11px] ${txn.status === "credit" ? "text-blue-400" : "text-white"}`} style={{ fontWeight: 600 }}>{txn.amount}</span>
              </div>
              <div className="w-16 text-right flex-shrink-0">
                {txn.status === "paid" ? (
                  <span className="text-[9px] bg-emerald-500/15 text-emerald-400 px-1.5 py-0.5 rounded-full">Paid</span>
                ) : txn.status === "due" ? (
                  <span className="text-[9px] bg-red-500/15 text-red-400 px-1.5 py-0.5 rounded-full">Due</span>
                ) : (
                  <span className="text-[9px] bg-blue-500/15 text-blue-400 px-1.5 py-0.5 rounded-full">Credit</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </TabWrapper>
  );
}

function PenaltiesTab() {
  return (
    <TabWrapper>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm text-white" style={{ fontWeight: 600 }}>Penalties & Fines</div>
          <div className="text-[11px] text-gray-500">3 penalties • ₹1,200 total • ₹600 unpaid</div>
        </div>
        <button className="flex items-center gap-1.5 bg-[#cd1d1d]/15 border border-[#cd1d1d]/20 text-[#cd1d1d] text-[11px] px-3.5 py-2 rounded-lg hover:bg-[#cd1d1d]/25 transition-colors" style={{ fontWeight: 500 }}>
          <Plus className="w-3 h-3" /> Add Penalty
        </button>
      </div>

      <div className="space-y-3">
        {[
          {
            title: "Late Payment",
            reason: "Monthly plan payment delayed by 5 days",
            amount: "₹200",
            date: "22 Mar 2026",
            status: "unpaid",
            type: "auto",
          },
          {
            title: "Vehicle Damage — Side Mirror",
            reason: "Left side mirror cracked. Deducted from security deposit.",
            amount: "₹400",
            date: "10 Mar 2026",
            status: "unpaid",
            type: "manual",
          },
          {
            title: "Late Payment",
            reason: "February payment delayed by 3 days",
            amount: "₹200",
            date: "1 Mar 2026",
            status: "paid",
            type: "auto",
          },
          {
            title: "Traffic Violation — No Helmet",
            reason: "Reported by field team. Driver warned.",
            amount: "₹400",
            date: "15 Feb 2026",
            status: "paid",
            type: "manual",
          },
        ].map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 hover:bg-white/[0.03] transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${p.status === "unpaid" ? "bg-red-500/15" : "bg-white/[0.04]"}`}>
                  <Ban className={`w-4 h-4 ${p.status === "unpaid" ? "text-red-400" : "text-gray-600"}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] text-white" style={{ fontWeight: 500 }}>{p.title}</span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded ${p.type === "auto" ? "bg-blue-500/15 text-blue-400" : "bg-purple-500/15 text-purple-400"}`}>
                      {p.type === "auto" ? "Auto" : "Manual"}
                    </span>
                  </div>
                  <div className="text-[10px] text-gray-500 mt-0.5">{p.reason}</div>
                  <div className="text-[10px] text-gray-600 mt-1">{p.date}</div>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>{p.amount}</div>
                {p.status === "unpaid" ? (
                  <span className="text-[9px] bg-red-500/15 text-red-400 px-1.5 py-0.5 rounded-full">Unpaid</span>
                ) : (
                  <span className="text-[9px] bg-emerald-500/15 text-emerald-400 px-1.5 py-0.5 rounded-full">Paid</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </TabWrapper>
  );
}

function SwapsTab() {
  return (
    <TabWrapper>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm text-white" style={{ fontWeight: 600 }}>Battery Swap History</div>
          <div className="text-[11px] text-gray-500">14 swaps total • Avg 1.1 swaps/week</div>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-gray-500">
          <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.04] rounded-lg px-2.5 py-1.5">
            <Filter className="w-3 h-3" />
            <span>This Month</span>
            <ChevronDown className="w-3 h-3" />
          </div>
        </div>
      </div>

      <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-6 gap-2 px-4 py-2.5 border-b border-white/[0.05] text-[10px] text-gray-600 uppercase tracking-wider" style={{ fontWeight: 600 }}>
          <span>Date</span>
          <span>Hub</span>
          <span>Old Battery</span>
          <span>New Battery</span>
          <span className="text-center">Charge In</span>
          <span className="text-center">Charge Out</span>
        </div>
        {[
          { date: "24 Mar, 6:20 PM", hub: "Hub #12 — Koramangala", oldBat: "BAT-0892", newBat: "BAT-1204", chargeIn: "12%", chargeOut: "98%" },
          { date: "21 Mar, 7:15 AM", hub: "Hub #08 — Indiranagar", oldBat: "BAT-1107", newBat: "BAT-0892", chargeIn: "8%", chargeOut: "96%" },
          { date: "17 Mar, 5:45 PM", hub: "Hub #12 — Koramangala", oldBat: "BAT-0756", newBat: "BAT-1107", chargeIn: "15%", chargeOut: "100%" },
          { date: "14 Mar, 8:30 AM", hub: "Hub #03 — HSR Layout", oldBat: "BAT-0634", newBat: "BAT-0756", chargeIn: "5%", chargeOut: "97%" },
          { date: "10 Mar, 6:00 PM", hub: "Hub #12 — Koramangala", oldBat: "BAT-0512", newBat: "BAT-0634", chargeIn: "18%", chargeOut: "95%" },
        ].map((swap, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className="grid grid-cols-6 gap-2 px-4 py-2.5 border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors text-[11px]"
          >
            <span className="text-gray-400">{swap.date}</span>
            <span className="text-gray-300 truncate" style={{ fontWeight: 500 }}>{swap.hub}</span>
            <span className="text-gray-500 font-mono">{swap.oldBat}</span>
            <span className="text-gray-300 font-mono">{swap.newBat}</span>
            <span className="text-center text-red-400">{swap.chargeIn}</span>
            <span className="text-center text-emerald-400">{swap.chargeOut}</span>
          </motion.div>
        ))}
      </div>
    </TabWrapper>
  );
}

function PlansTab() {
  return (
    <TabWrapper>
      {/* Current Plan */}
      <div className="bg-gradient-to-br from-[#cd1d1d]/10 to-orange-500/10 border border-[#cd1d1d]/15 rounded-xl p-5 mb-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] text-[#cd1d1d] uppercase tracking-wider" style={{ fontWeight: 600 }}>Current Plan</span>
              <span className="text-[9px] bg-emerald-500/15 text-emerald-400 px-1.5 py-0.5 rounded-full">Active</span>
            </div>
            <div className="text-2xl text-white" style={{ fontWeight: 700 }}>Pro Monthly</div>
            <div className="text-[11px] text-gray-500 mt-1">
              ₹8,400/month • Includes unlimited swaps • Roadside assistance
            </div>
            <div className="flex items-center gap-3 mt-2 text-[10px] text-gray-500">
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Started: 14 Mar 2025</span>
              <span className="flex items-center gap-1"><RefreshCw className="w-3 h-3" /> Renews: 29 Mar 2026</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-[11px] bg-white/[0.06] border border-white/[0.08] text-gray-300 px-4 py-2 rounded-lg hover:bg-white/[0.1] transition-colors" style={{ fontWeight: 500 }}>
              Change Plan
            </button>
          </div>
        </div>
      </div>

      {/* Available Plans */}
      <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-3" style={{ fontWeight: 600 }}>Available Plans</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { name: "Basic", price: "₹5,400", period: "/month", features: ["5 swaps/month", "Basic support", "Standard vehicle"], color: "#64748b", current: false },
          { name: "Pro", price: "₹8,400", period: "/month", features: ["Unlimited swaps", "Priority support", "Premium vehicle", "Roadside assist"], color: "#cd1d1d", current: true },
          { name: "Enterprise", price: "₹11,200", period: "/month", features: ["Unlimited swaps", "Dedicated manager", "Premium vehicle", "Insurance included", "Gift cards"], color: "#8b5cf6", current: false },
        ].map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className={`rounded-xl p-4 ${plan.current ? "bg-[#cd1d1d]/10 border-2 border-[#cd1d1d]/30" : "bg-white/[0.02] border border-white/[0.05]"}`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-white" style={{ fontWeight: 600 }}>{plan.name}</span>
              {plan.current && <span className="text-[9px] bg-[#cd1d1d]/20 text-[#cd1d1d] px-1.5 py-0.5 rounded-full" style={{ fontWeight: 600 }}>Current</span>}
            </div>
            <div className="text-xl font-bold text-white">{plan.price}<span className="text-xs text-gray-500">{plan.period}</span></div>
            <div className="mt-3 space-y-1.5">
              {plan.features.map((f, j) => (
                <div key={j} className="flex items-center gap-1.5 text-[10px] text-gray-400">
                  <CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: plan.color }} />
                  {f}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </TabWrapper>
  );
}

function OnboardingTab() {
  return (
    <TabWrapper>
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-sm text-white" style={{ fontWeight: 600 }}>Onboarding & KYC Status</div>
          <div className="text-[11px] text-gray-500">Completed on 14 Mar 2025 • All checks passed</div>
        </div>
        <Link to="/kyc" className="flex items-center gap-1 text-[11px] text-[#cd1d1d] hover:text-[#ff4444] transition-colors" style={{ fontWeight: 500 }}>
          KYC Pipeline Details <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* KYC Steps */}
        <div className="space-y-2">
          {[
            { step: "Phone Verification (OTP)", icon: Smartphone, status: "passed", detail: "+91 98765 67890", date: "14 Mar, 11:02 AM", color: "#cd1d1d" },
            { step: "Aadhaar (DigiLocker)", icon: Fingerprint, status: "passed", detail: "XXXX XXXX 7890", date: "14 Mar, 11:03 AM", color: "#8b5cf6" },
            { step: "PAN Card", icon: CreditCard, status: "passed", detail: "ABCPR1234K", date: "14 Mar, 11:03 AM", color: "#f59e0b" },
            { step: "Bank Account", icon: Landmark, status: "passed", detail: "SBI •••4521 — Penny drop ✓", date: "14 Mar, 11:04 AM", color: "#06b6d4" },
            { step: "References (3/3 OTP verified)", icon: Users, status: "passed", detail: "All references verified", date: "14 Mar, 11:08 AM", color: "#ec4899" },
            { step: "Admin Approval", icon: BadgeCheck, status: "passed", detail: "Approved by Admin AK", date: "14 Mar, 11:15 AM", color: "#22c55e" },
          ].map((s, i) => {
            const SIcon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.05] rounded-xl p-3"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${s.color}15` }}>
                  <SIcon className="w-4 h-4" style={{ color: s.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] text-white" style={{ fontWeight: 500 }}>{s.step}</div>
                  <div className="text-[10px] text-gray-500 truncate">{s.detail}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <CircleCheck className="w-4 h-4 text-emerald-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Documents & Details */}
        <div>
          <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-2" style={{ fontWeight: 600 }}>Verified Documents</div>
          <div className="space-y-2 mb-4">
            {[
              { doc: "Aadhaar Card", source: "DigiLocker", icon: Fingerprint },
              { doc: "PAN Card", source: "NSDL", icon: CreditCard },
              { doc: "Bank Passbook", source: "Penny Drop", icon: Landmark },
              { doc: "Driving License", source: "Parivahan", icon: FileText },
            ].map((d, i) => {
              const DIcon = d.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.05 }} className="flex items-center justify-between bg-white/[0.02] border border-white/[0.04] rounded-lg p-2.5">
                  <div className="flex items-center gap-2">
                    <DIcon className="w-3.5 h-3.5 text-gray-500" />
                    <span className="text-[11px] text-gray-300" style={{ fontWeight: 500 }}>{d.doc}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] text-gray-600">{d.source}</span>
                    <span className="text-[9px] bg-emerald-500/15 text-emerald-400 px-1.5 py-0.5 rounded-full">Verified</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-3">
            <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-2" style={{ fontWeight: 600 }}>Onboarding Summary</div>
            <div className="space-y-2">
              {[
                { label: "Total Time", value: "13 minutes" },
                { label: "Approved By", value: "Admin AK" },
                { label: "Vehicle Assigned", value: "Same day" },
                { label: "First Ride", value: "14 Mar, 2:30 PM" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-[10px] text-gray-500">{item.label}</span>
                  <span className="text-[10px] text-white" style={{ fontWeight: 500 }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TabWrapper>
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
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          className="absolute pointer-events-none z-0 transition-opacity duration-300"
          style={{
            left: mousePos.x - 150,
            top: mousePos.y - 150,
            width: 300,
            height: 300,
            background: `radial-gradient(circle, ${glowColor}15 0%, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// ─── Mini Dashboard: Payment Chart ────────────────────
function MiniPaymentChart() {
  const months = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
  const payments = [8400, 8400, 8400, 7900, 8400, 8400];
  const maxVal = Math.max(...payments);
  return (
    <div className="bg-black/40 border border-white/[0.06] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontWeight: 600 }}>Monthly Collections</span>
        <span className="text-[10px] text-emerald-400" style={{ fontWeight: 600 }}>₹50,400 total</span>
      </div>
      <div className="flex items-end gap-2 h-20">
        {months.map((m, i) => (
          <div key={m} className="flex-1 flex flex-col items-center gap-1">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${(payments[i] / maxVal) * 100}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full rounded-t-sm"
              style={{ backgroundColor: payments[i] < 8400 ? "#f59e0b" : "#22c55e", minHeight: 4 }}
            />
            <span className="text-[8px] text-gray-600">{m}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/[0.04]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /><span className="text-[8px] text-gray-600">On time</span></div>
          <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /><span className="text-[8px] text-gray-600">Partial</span></div>
        </div>
        <span className="text-[8px] text-gray-600">Last 6 months</span>
      </div>
    </div>
  );
}

// ─── Mini Dashboard: Penalty Breakdown ────────────────
function MiniPenaltyDashboard() {
  const penalties = [
    { type: "Late Payment", count: 5, amount: "₹1,000", pct: 42 },
    { type: "Vehicle Damage", count: 2, amount: "₹800", pct: 33 },
    { type: "Traffic Violation", count: 1, amount: "₹400", pct: 17 },
    { type: "No-show", count: 1, amount: "₹200", pct: 8 },
  ];
  return (
    <div className="bg-black/40 border border-white/[0.06] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontWeight: 600 }}>Penalty Breakdown</span>
        <span className="text-[10px] text-amber-400" style={{ fontWeight: 600 }}>9 total</span>
      </div>
      <div className="space-y-2.5">
        {penalties.map((p, i) => (
          <motion.div key={p.type} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.08 }}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-gray-400">{p.type}</span>
              <span className="text-[10px] text-gray-300" style={{ fontWeight: 600 }}>{p.amount}</span>
            </div>
            <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${p.pct}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Mini Dashboard: Swap Heatmap ─────────────────────
function MiniSwapHeatmap() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = ["6AM", "12PM", "6PM", "10PM"];
  const data = [
    [0, 1, 2, 0], [1, 0, 1, 0], [0, 2, 3, 1], [1, 1, 2, 0],
    [2, 1, 2, 1], [3, 2, 1, 0], [1, 0, 1, 0],
  ];
  const getColor = (v) => {
    if (v === 0) return "bg-white/[0.02]";
    if (v === 1) return "bg-violet-500/20";
    if (v === 2) return "bg-violet-500/40";
    return "bg-violet-500/70";
  };
  return (
    <div className="bg-black/40 border border-white/[0.06] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontWeight: 600 }}>Swap Frequency</span>
        <span className="text-[10px] text-violet-400" style={{ fontWeight: 600 }}>14 this month</span>
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-1 ml-8">
          {hours.map(h => <span key={h} className="flex-1 text-[7px] text-gray-600 text-center">{h}</span>)}
        </div>
        {days.map((d, di) => (
          <div key={d} className="flex items-center gap-1">
            <span className="w-7 text-[8px] text-gray-600 text-right">{d}</span>
            {data[di].map((v, hi) => (
              <motion.div
                key={hi}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (di * 4 + hi) * 0.02 }}
                className={`flex-1 h-4 rounded-sm ${getColor(v)}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 mt-2.5 justify-end">
        <span className="text-[7px] text-gray-600">Less</span>
        {[0, 1, 2, 3].map(v => <div key={v} className={`w-3 h-3 rounded-sm ${getColor(v)}`} />)}
        <span className="text-[7px] text-gray-600">More</span>
      </div>
    </div>
  );
}

// ─── Mini Dashboard: Plan Comparison ──────────────────
function MiniPlanComparison() {
  return (
    <div className="bg-black/40 border border-white/[0.06] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontWeight: 600 }}>Plan Distribution</span>
        <span className="text-[10px] text-cyan-400" style={{ fontWeight: 600 }}>248 drivers</span>
      </div>
      <div className="flex gap-1 h-6 rounded-full overflow-hidden mb-3">
        <motion.div initial={{ width: 0 }} whileInView={{ width: "25%" }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }} className="bg-gray-500 rounded-l-full" />
        <motion.div initial={{ width: 0 }} whileInView={{ width: "55%" }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8 }} className="bg-[#cd1d1d]" />
        <motion.div initial={{ width: 0 }} whileInView={{ width: "20%" }} viewport={{ once: true }} transition={{ delay: 0.7, duration: 0.8 }} className="bg-violet-500 rounded-r-full" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { name: "Basic", count: 62, pct: "25%", color: "bg-gray-500" },
          { name: "Pro", count: 136, pct: "55%", color: "bg-[#cd1d1d]" },
          { name: "Enterprise", count: 50, pct: "20%", color: "bg-violet-500" },
        ].map(p => (
          <div key={p.name} className="text-center">
            <div className="flex items-center justify-center gap-1 mb-0.5">
              <div className={`w-1.5 h-1.5 rounded-full ${p.color}`} />
              <span className="text-[9px] text-gray-400">{p.name}</span>
            </div>
            <div className="text-[13px] text-white" style={{ fontWeight: 700 }}>{p.count}</div>
            <div className="text-[8px] text-gray-600">{p.pct}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Mini Dashboard: Vehicle Status ───────────────────
function MiniVehicleStatus() {
  return (
    <div className="bg-black/40 border border-white/[0.06] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontWeight: 600 }}>Fleet Status</span>
        <span className="text-[10px] text-[#cd1d1d]" style={{ fontWeight: 600 }}>Live</span>
      </div>
      <div className="space-y-2">
        {[
          { label: "Active", count: 186, total: 248, color: "#22c55e" },
          { label: "Idle", count: 34, total: 248, color: "#f59e0b" },
          { label: "Maintenance", count: 18, total: 248, color: "#ef4444" },
          { label: "Unassigned", count: 10, total: 248, color: "#64748b" },
        ].map((v, i) => (
          <motion.div key={v.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.08 }}>
            <div className="flex items-center justify-between mb-0.5">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: v.color }} />
                <span className="text-[10px] text-gray-400">{v.label}</span>
              </div>
              <span className="text-[10px] text-gray-300" style={{ fontWeight: 600 }}>{v.count}</span>
            </div>
            <div className="h-1 bg-white/[0.04] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(v.count / v.total) * 100}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.8 }}
                className="h-full rounded-full"
                style={{ backgroundColor: v.color }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Mini Dashboard: KYC Pipeline ─────────────────────
function MiniKYCPipeline() {
  const steps = [
    { label: "OTP", pct: 100, color: "#cd1d1d" },
    { label: "Aadhaar", pct: 96, color: "#8b5cf6" },
    { label: "PAN", pct: 94, color: "#f59e0b" },
    { label: "Bank", pct: 92, color: "#06b6d4" },
    { label: "Refs", pct: 88, color: "#ec4899" },
    { label: "Approved", pct: 85, color: "#22c55e" },
  ];
  return (
    <div className="bg-black/40 border border-white/[0.06] rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontWeight: 600 }}>KYC Funnel</span>
        <span className="text-[10px] text-emerald-400" style={{ fontWeight: 600 }}>85% pass rate</span>
      </div>
      <div className="space-y-1.5">
        {steps.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }} className="flex items-center gap-2">
            <span className="w-14 text-[9px] text-gray-500 text-right">{s.label}</span>
            <div className="flex-1 h-3.5 bg-white/[0.03] rounded-sm overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.pct}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.8 }}
                className="h-full rounded-sm flex items-center justify-end pr-1"
                style={{ backgroundColor: `${s.color}40` }}
              >
                <span className="text-[7px] text-white" style={{ fontWeight: 600 }}>{s.pct}%</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-3 pt-2 border-t border-white/[0.04] flex items-center justify-between">
        <span className="text-[8px] text-gray-600">Avg. time: 13 min</span>
        <span className="text-[8px] text-gray-600">248 drivers onboarded</span>
      </div>
    </div>
  );
}

// ─── Live Metrics Strip ───────────────────────────────
function AnimatedCounter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
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
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    const el = document.getElementById(`counter-${value}-${suffix}`);
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix, hasAnimated]);

  return <span id={`counter-${value}-${suffix}`}>{count.toLocaleString("en-IN")}{suffix}</span>;
}

function LiveMetricsStrip() {
  return (
    <section className="relative py-16 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-white/[0.02] via-white/[0.04] to-white/[0.02] border border-white/[0.06] rounded-2xl p-1"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
            {[
              { value: 248, suffix: "+", label: "Active Drivers", sub: "Across 3 cities", color: "#22c55e" },
              { value: 186, suffix: "", label: "Vehicles Assigned", sub: "75% utilization", color: "#cd1d1d" },
              { value: 98, suffix: "%", label: "Collection Rate", sub: "Industry avg: 72%", color: "#8b5cf6" },
              { value: 13, suffix: " min", label: "Avg Onboarding", sub: "From signup to ride", color: "#06b6d4" },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center py-6 px-4"
              >
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

// ─── Feature Sections ─────────────────────────────────
const features = [
  {
    id: "payments",
    icon: IndianRupee,
    title: "Payments & Dues",
    subtitle: "Track every rupee. Automate collections.",
    color: "#22c55e",
    description: "Complete payment lifecycle from invoicing to collection. Track outstanding dues, auto-generate invoices, send payment reminders via SMS, and reconcile cash + UPI + bank transfers — all from the driver's profile.",
    bullets: [
      "Auto-generated monthly invoices per plan",
      "Track UPI, cash, bank transfer & gift card payments",
      "Outstanding dues with aging breakdown",
      "Automated SMS reminders for overdue payments",
      "Payment history export (CSV/PDF)",
      "Adjust dues with credits, waivers & gift cards",
    ],
    miniDashboard: MiniPaymentChart,
  },
  {
    id: "penalties",
    icon: Ban,
    title: "Penalties & Fines",
    subtitle: "Auto & manual penalties. Full transparency.",
    color: "#f59e0b",
    description: "Apply penalties automatically (late payments, SLA violations) or manually (vehicle damage, traffic violations). Every penalty has a clear reason, amount, and status — visible to both admin and driver.",
    bullets: [
      "Auto-penalties for late payments & SLA breaches",
      "Manual penalties with reason & photo evidence",
      "Penalty templates for common violations",
      "Drivers see penalties in their app with full details",
      "Deduct from security deposit or add to dues",
      "Dispute resolution workflow",
    ],
    miniDashboard: MiniPenaltyDashboard,
  },
  {
    id: "swaps",
    icon: Repeat,
    title: "Swap History",
    subtitle: "Every battery swap. Logged & tracked.",
    color: "#8b5cf6",
    description: "Complete battery swap log for every driver — which hub, which battery, charge levels in & out, timestamps. Spot patterns, identify abuse, and ensure fair usage across the fleet.",
    bullets: [
      "Full swap log with hub location & timestamp",
      "Battery ID tracking (old → new)",
      "Charge level at drop-off and pickup",
      "Swap frequency analytics per driver",
      "Flag unusual patterns (too frequent, low charge-in)",
      "Hub-wise swap distribution",
    ],
    miniDashboard: MiniSwapHeatmap,
  },
  {
    id: "plans",
    icon: Tag,
    title: "Plans & Pricing",
    subtitle: "Flexible plans. Easy upgrades. Gift cards.",
    color: "#06b6d4",
    description: "Assign, change, or upgrade a driver's plan in seconds. Create custom plans per city, vehicle type, or driver tier. Apply gift cards and promotional credits directly to their account.",
    bullets: [
      "Multiple plan tiers (Basic, Pro, Enterprise)",
      "Plan change with pro-rata adjustments",
      "City-wise & vehicle-wise pricing",
      "Gift card & promo code application",
      "Custom plan creation for special cases",
      "Plan renewal reminders & auto-renewal",
    ],
    miniDashboard: MiniPlanComparison,
  },
  {
    id: "vehicles",
    icon: Bike,
    title: "Vehicle Assignment",
    subtitle: "Assign. Track. Reassign. Instantly.",
    color: "#cd1d1d",
    description: "Assign vehicles to drivers with one click. See real-time battery level, odometer, health status, and location. Reassign vehicles instantly when needed — the old driver is automatically notified.",
    bullets: [
      "One-click vehicle assignment & reassignment",
      "Real-time battery, odometer & health data",
      "Vehicle history per driver (which vehicle, when)",
      "Automatic driver notification on changes",
      "Vehicle condition logging at handover",
      "Maintenance alerts tied to driver",
    ],
    miniDashboard: MiniVehicleStatus,
  },
  {
    id: "onboarding",
    icon: Shield,
    title: "Onboarding & KYC",
    subtitle: "Verify. Approve. Assign. Under 15 minutes.",
    color: "#ec4899",
    description: "Complete the entire driver onboarding from the driver's profile — trigger KYC verification, review results, approve the driver, assign a plan, and assign a vehicle. All in one place.",
    bullets: [
      "Trigger full 6-layer KYC from profile",
      "View verification results inline",
      "Approve/reject with one click",
      "Assign plan immediately after approval",
      "Assign vehicle in the same workflow",
      "Onboarding time tracked per driver",
    ],
    miniDashboard: MiniKYCPipeline,
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-4 sm:px-6">
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#cd1d1d]/5 rounded-full blur-[280px] pointer-events-none" />
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Everything under{" "}
            <span className="bg-gradient-to-r from-[#cd1d1d] to-orange-400 bg-clip-text text-transparent">
              one roof
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[550px] mx-auto">
            Each capability lives inside the driver's profile. No more switching between tools.
          </p>
        </motion.div>

        <div className="space-y-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            const MiniDash = feat.miniDashboard;
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlowCard
                  className="bg-white/[0.015] border border-white/[0.06] rounded-3xl overflow-hidden hover:border-white/[0.12] transition-all duration-500"
                  glowColor={feat.color}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-0">
                    <div className={`p-7 sm:p-10 ${!isEven ? "lg:order-2" : ""}`}>
                      <div className="flex items-center gap-3 mb-5">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-11 h-11 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${feat.color}15` }}
                        >
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
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + i * 0.04 }}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: feat.color }} />
                            <span className="text-sm text-gray-300">{b}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className={`p-5 sm:p-7 flex items-center ${!isEven ? "lg:order-1" : ""}`}>
                      <div className="w-full">
                        <MiniDash />
                      </div>
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

// ─── Capabilities Grid ────────────────────────────────
function CapabilitiesSection() {
  const capabilities = [
    {
      icon: Users, title: "Access Control", desc: "Role-based permissions — city managers, hub operators, and super admins see different things", color: "#cd1d1d",
      metric: "4", metricLabel: "Roles", details: [
        { label: "Super Admin", value: "Full access" },
        { label: "City Manager", value: "City-scoped" },
        { label: "Hub Operator", value: "Hub-scoped" },
        { label: "Viewer", value: "Read-only" },
      ],
    },
    {
      icon: BarChart3, title: "Data Logging", desc: "Every action is logged with timestamps, user, and IP. Complete audit trail for compliance", color: "#8b5cf6",
      metric: "1.2M+", metricLabel: "Events/mo", details: [
        { label: "Actions logged", value: "All CRUD" },
        { label: "Retention", value: "2 years" },
        { label: "Export", value: "CSV/JSON" },
        { label: "Search", value: "< 200ms" },
      ],
    },
    {
      icon: Gift, title: "Gift Cards", desc: "Issue gift cards to drivers as rewards or promotional credits. Apply directly to dues", color: "#ec4899",
      metric: "₹2.4L", metricLabel: "Issued", details: [
        { label: "Active cards", value: "142" },
        { label: "Redeemed", value: "89%" },
        { label: "Avg value", value: "₹500" },
        { label: "Expiry", value: "90 days" },
      ],
    },
    {
      icon: IndianRupee, title: "Dues Management", desc: "Track outstanding dues with aging. Auto-escalate overdue payments. Partial payment support", color: "#22c55e",
      metric: "98%", metricLabel: "Recovery", details: [
        { label: "Auto-reminders", value: "SMS+App" },
        { label: "Escalation", value: "3 levels" },
        { label: "Partial pay", value: "Supported" },
        { label: "Aging report", value: "Real-time" },
      ],
    },
    {
      icon: Ban, title: "Penalty System", desc: "Auto & manual penalties with templates. Deduct from deposit or add to dues. Driver visibility", color: "#f59e0b",
      metric: "12", metricLabel: "Templates", details: [
        { label: "Auto rules", value: "8 active" },
        { label: "Manual", value: "4 types" },
        { label: "Disputes", value: "Workflow" },
        { label: "Driver view", value: "In-app" },
      ],
    },
    {
      icon: Download, title: "Bulk Operations", desc: "Export driver data, bulk assign plans, send mass notifications. Save hours of manual work", color: "#06b6d4",
      metric: "5 min", metricLabel: "Avg saved/op", details: [
        { label: "Bulk assign", value: "Plans/vehicles" },
        { label: "Mass notify", value: "SMS+Push" },
        { label: "Export", value: "CSV/PDF" },
        { label: "Batch size", value: "Up to 1000" },
      ],
    },
  ];

  return (
    <section id="capabilities" className="relative py-24 px-4 sm:px-6">
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[250px] pointer-events-none" />
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Built for{" "}
            <span className="bg-gradient-to-r from-[#cd1d1d] to-[#ff4444] bg-clip-text text-transparent">
              Indian fleets
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[500px] mx-auto">
            Every feature is designed for the realities of fleet operations in India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <GlowCard
                  className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.12] transition-all duration-500 h-full"
                  glowColor={item.color}
                >
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
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

// ─── Before/After ─────────────────────────────────────
function BeforeAfterSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            From chaos to{" "}
            <span className="bg-gradient-to-r from-[#cd1d1d] to-orange-400 bg-clip-text text-transparent">
              clarity
            </span>
          </h2>
          <p className="text-lg text-gray-400">How fleet operators managed drivers before Dash</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-red-500/15 flex items-center justify-center">
                <CircleX className="w-4 h-4 text-red-400" />
              </div>
              <span className="text-sm text-red-400" style={{ fontWeight: 600 }}>Before Dash</span>
            </div>
            <div className="space-y-3">
              {[
                "Driver info scattered across WhatsApp groups",
                "Payment tracking in Excel — error-prone",
                "Penalties scribbled in notebooks",
                "No swap history — batteries went missing",
                "Manual KYC with photocopies — took 3 days",
                "No audit trail — disputes impossible to resolve",
                "Tally for accounting — no driver-level view",
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-start gap-2.5">
                  <X className="w-3.5 h-3.5 text-red-400/60 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-500">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-500/[0.03] border border-emerald-500/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                <CircleCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-sm text-emerald-400" style={{ fontWeight: 600 }}>With Dash</span>
            </div>
            <div className="space-y-3">
              {[
                "Complete driver profile — one screen, everything",
                "Automated invoices, UPI tracking, dues aging",
                "Penalty system with templates & driver visibility",
                "Full swap log with battery IDs & charge levels",
                "6-layer automated KYC — under 2 minutes",
                "Every action logged with timestamp & admin ID",
                "Real-time financial view per driver",
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

// ─── CTA ──────────────────────────────────────────────
function DMCTA() {
  return (
    <section className="relative py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#cd1d1d]/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#cd1d1d]/15 rounded-full blur-[250px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cd1d1d06_1px,transparent_1px),linear-gradient(to_bottom,#cd1d1d06_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-[700px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-16 h-16 bg-[#cd1d1d]/15 border border-[#cd1d1d]/20 rounded-2xl mb-8"
          >
            <Users className="w-7 h-7 text-[#cd1d1d]" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05]">
            Stop managing drivers
            <br />
            <span className="bg-gradient-to-r from-[#cd1d1d] to-orange-400 bg-clip-text text-transparent">
              in WhatsApp
            </span>
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-[500px] mx-auto">
            Everything about every driver. One dashboard. Zero spreadsheets.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white text-black px-10 py-4 rounded-full flex items-center gap-2 shadow-2xl shadow-white/10"
              style={{ fontWeight: 500, fontSize: "15px" }}
            >
              Book Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────
function DMFooter() {
  return (
    <footer className="border-t border-white/[0.05] py-10 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#cd1d1d] rounded-lg flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-sm text-gray-500">Dash Mobility</span>
        </Link>
        <span className="text-xs text-gray-600">© 2026 Dash Mobility Technologies Pvt. Ltd.</span>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────
export default function DriverManagementPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-clip" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />
      <DMHero />
      <DashboardSection />
      <FeaturesSection />
      <CapabilitiesSection />
      <DMCTA />
    </div>
  );
}
