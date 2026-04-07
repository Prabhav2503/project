import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import {
  Zap, ArrowRight, ArrowLeft, ArrowDown, Shield, CheckCircle, Clock,
  Lock, Menu, X, Bell, ChevronRight, MapPin, Calendar,
  IndianRupee, Battery, Bike, User, Phone,
  Plus, Download, Filter, Wrench,
  AlertCircle, CircleCheck, Settings, BarChart3, Package,
  RefreshCw, Eye, AlertTriangle, Layers,
  Hash, FileText, Send, ExternalLink,
  Timer, LayoutGrid, ClipboardCheck,
  ClipboardList, TrendingUp, TrendingDown,
  Search, CircleDot, Tag, Archive, Truck,
  ShoppingCart, Box, Gauge, Camera, Navigation,
} from "lucide-react";

// ─── Nav ──────────────────────────────────────────────
function MaintNav() {
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
function MaintHero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-12 px-4 sm:px-6 overflow-hidden">
      <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-[10%] right-[20%] w-[500px] h-[500px] bg-[#cd1d1d] rounded-full blur-[200px] pointer-events-none" />
      <motion.div animate={{ scale: [1.1, 1, 1.1], opacity: [0.05, 0.09, 0.05] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-[30%] left-[10%] w-[400px] h-[400px] bg-amber-500 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_75%)] pointer-events-none" />

      <div className="max-w-[900px] mx-auto text-center relative z-10">


        <motion.h1 initial={{ opacity: 0, y: 30, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="text-[clamp(2.5rem,7vw,5rem)] font-bold text-white leading-[1.05] tracking-tight mb-2">
          Maintenance &
        </motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 30, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.55, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.05] tracking-tight mb-6">
          <span className="bg-gradient-to-r from-[#cd1d1d] via-[#ff4444] to-amber-400 bg-clip-text text-transparent">
            spare parts.
          </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="text-base sm:text-lg text-gray-400 mb-10 max-w-[620px] mx-auto leading-relaxed">
          Tickets, on-road breakdowns, parts invoicing, spare parts inventory with
          low-stock alerts, and auto-scheduled maintenance — all from one place.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
          <button className="group bg-[#cd1d1d] text-white px-7 py-3.5 rounded-full hover:bg-[#b11919] transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2 shadow-xl shadow-[#cd1d1d]/25 text-[15px]" style={{ fontWeight: 500 }}>
            Start Managing Maintenance <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white/[0.04] border border-white/[0.08] text-white px-7 py-3.5 rounded-full hover:bg-white/[0.08] transition-all text-[15px]" style={{ fontWeight: 500 }}>
            Watch Demo
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="flex flex-wrap items-center justify-center gap-2 mt-10">
          {[
            { icon: ClipboardList, label: "Tickets" }, { icon: MapPin, label: "On-Road" },
            { icon: Package, label: "Spare Parts" }, { icon: IndianRupee, label: "Invoicing" },
            { icon: AlertTriangle, label: "Low Stock" }, { icon: Calendar, label: "Auto-Schedule" },
            { icon: Wrench, label: "Service" }, { icon: BarChart3, label: "Analytics" },
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

// ─── Tickets Tab ──────────────────────────────────────
function TicketsTab() {
  const tickets = [
    { id: "MT-0312", vehicle: "VH-0042", model: "Ola S1 Pro", type: "Scheduled", priority: "Low", status: "in-progress", driver: "Rajesh Kumar", issue: "3,000 km service — brake pads, throttle calibration", created: "24 Mar 2026", eta: "26 Mar 2026", parts: 2, cost: "₹1,240" },
    { id: "MT-0311", vehicle: "VH-0089", model: "Ather 450X", type: "On-Road", priority: "High", status: "open", driver: "Suresh Patel", issue: "Flat tyre on MG Road — driver stranded", created: "26 Mar 2026", eta: "26 Mar 2026", parts: 1, cost: "₹650", lat: 12.9716, lng: 77.5946 },
    { id: "MT-0310", vehicle: "VH-0123", model: "Ola S1 Pro", type: "Breakdown", priority: "Critical", status: "open", driver: "Amit Singh", issue: "Motor controller error — vehicle won't start", created: "26 Mar 2026", eta: "27 Mar 2026", parts: 1, cost: "₹4,500", lat: 12.9352, lng: 77.6245 },
    { id: "MT-0309", vehicle: "VH-0067", model: "Bounce Infinity", type: "Scheduled", priority: "Medium", status: "completed", driver: "Karan Mehta", issue: "6,000 km service — full inspection + tyre rotation", created: "22 Mar 2026", eta: "23 Mar 2026", parts: 4, cost: "₹2,870" },
    { id: "MT-0308", vehicle: "VH-0201", model: "Ola S1 Pro", type: "Repair", priority: "Medium", status: "in-progress", driver: "Vikram Das", issue: "Headlight assembly replacement — accident damage", created: "23 Mar 2026", eta: "27 Mar 2026", parts: 2, cost: "₹3,200" },
  ];

  const statusColors = {
    "open": { bg: "bg-red-500/15", text: "text-red-400", label: "Open" },
    "in-progress": { bg: "bg-amber-500/15", text: "text-amber-400", label: "In Progress" },
    "completed": { bg: "bg-emerald-500/15", text: "text-emerald-400", label: "Completed" },
  };

  const priorityColors = {
    "Low": "text-gray-400", "Medium": "text-amber-400", "High": "text-orange-400", "Critical": "text-red-400",
  };

  return (
    <TabWrapper>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm text-white" style={{ fontWeight: 600 }}>Maintenance Tickets</div>
          <div className="text-[11px] text-gray-500">5 tickets • 2 on-road emergencies</div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-1.5 text-[11px] text-gray-400 hover:bg-white/[0.06] transition-colors">
            <Filter className="w-3 h-3" /> Filter
          </button>
          <button className="flex items-center gap-1.5 bg-[#cd1d1d]/15 border border-[#cd1d1d]/20 rounded-lg px-3 py-1.5 text-[11px] text-[#cd1d1d] hover:bg-[#cd1d1d]/25 transition-colors" style={{ fontWeight: 500 }}>
            <Plus className="w-3 h-3" /> New Ticket
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {tickets.map((t, i) => {
          const s = statusColors[t.status];
          return (
            <motion.div key={t.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
              className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 hover:border-white/[0.1] transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="font-mono text-[10px] text-gray-500">{t.id}</span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${s.bg} ${s.text}`} style={{ fontWeight: 600 }}>{s.label}</span>
                    <span className={`text-[9px] ${priorityColors[t.priority]}`} style={{ fontWeight: 600 }}>{t.priority}</span>
                    {t.type === "On-Road" && (
                      <span className="text-[9px] bg-orange-500/15 text-orange-400 px-1.5 py-0.5 rounded-full flex items-center gap-1" style={{ fontWeight: 600 }}>
                        <MapPin className="w-2.5 h-2.5" /> On-Road
                      </span>
                    )}
                    {t.type === "Breakdown" && (
                      <span className="text-[9px] bg-red-500/15 text-red-400 px-1.5 py-0.5 rounded-full flex items-center gap-1" style={{ fontWeight: 600 }}>
                        <AlertTriangle className="w-2.5 h-2.5" /> Breakdown
                      </span>
                    )}
                  </div>
                  <div className="text-[12px] text-white mb-1" style={{ fontWeight: 500 }}>{t.issue}</div>
                  <div className="flex items-center gap-3 text-[10px] text-gray-500 flex-wrap">
                    <span className="flex items-center gap-1"><Bike className="w-3 h-3" />{t.vehicle} • {t.model}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" />{t.driver}</span>
                    <span className="flex items-center gap-1"><Package className="w-3 h-3" />{t.parts} parts</span>
                    <span className="flex items-center gap-1"><IndianRupee className="w-3 h-3" />{t.cost}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {(t.lat && t.lng) && (
                    <button className="flex items-center gap-1.5 bg-blue-500/15 border border-blue-500/20 text-blue-400 text-[10px] px-3 py-1.5 rounded-lg hover:bg-blue-500/25 transition-colors" style={{ fontWeight: 500 }}>
                      <Navigation className="w-3 h-3" /> View on Map
                    </button>
                  )}
                  <button className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.06] text-gray-400 text-[10px] px-3 py-1.5 rounded-lg hover:bg-white/[0.06] transition-colors">
                    <Eye className="w-3 h-3" /> Details
                  </button>
                </div>
              </div>

              {/* On-Road Map Preview */}
              {(t.lat && t.lng) && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-3 bg-black/30 border border-white/[0.04] rounded-lg overflow-hidden">
                  <div className="relative h-[100px] bg-gradient-to-br from-zinc-900 to-zinc-800">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:20px_20px]" />
                    {/* Simulated map */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute -inset-8 bg-red-500/10 rounded-full animate-ping" />
                        <div className="absolute -inset-4 bg-red-500/20 rounded-full" />
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
                          <MapPin className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                      <span className="text-[9px] text-gray-300">{t.lat?.toFixed(4)}°N, {t.lng?.toFixed(4)}°E</span>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                      <span className="text-[9px] text-orange-400" style={{ fontWeight: 500 }}>Driver stranded • Pickup requested</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </TabWrapper>
  );
}

// ─── Parts & Invoicing Tab ────────────────────────────
function PartsInvoicingTab() {
  return (
    <TabWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Active Ticket with Parts */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-white" style={{ fontWeight: 600 }}>Ticket MT-0312</div>
              <div className="text-[10px] text-gray-500">VH-0042 • Ola S1 Pro • 3,000 km service</div>
            </div>
            <span className="text-[9px] bg-amber-500/15 text-amber-400 px-2 py-0.5 rounded-full" style={{ fontWeight: 600 }}>In Progress</span>
          </div>

          <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-2" style={{ fontWeight: 600 }}>Parts Added</div>
          <div className="space-y-1.5 mb-4">
            {[
              { part: "Brake Pad Set (Front)", sku: "BP-OLA-F01", qty: 1, price: "₹680", stock: 24 },
              { part: "Throttle Cable Assembly", sku: "TC-OLA-01", qty: 1, price: "₹560", stock: 8 },
            ].map((p, i) => (
              <div key={i} className="flex items-center justify-between bg-white/[0.02] border border-white/[0.04] rounded-lg p-2.5">
                <div>
                  <div className="text-[11px] text-gray-300" style={{ fontWeight: 500 }}>{p.part}</div>
                  <div className="text-[9px] text-gray-600">SKU: {p.sku} • Stock: {p.stock}</div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-white" style={{ fontWeight: 600 }}>{p.price}</div>
                  <div className="text-[9px] text-gray-600">Qty: {p.qty}</div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full flex items-center justify-center gap-1.5 bg-white/[0.03] border border-dashed border-white/[0.1] rounded-lg py-2 text-[11px] text-gray-500 hover:text-gray-300 hover:border-white/[0.15] transition-colors mb-4">
            <Plus className="w-3 h-3" /> Add Part from Inventory
          </button>

          <div className="border-t border-white/[0.04] pt-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-gray-500">Parts Total</span>
              <span className="text-[11px] text-gray-300">₹1,240</span>
            </div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-gray-500">Labour</span>
              <span className="text-[11px] text-gray-300">₹500</span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-white/[0.04]">
              <span className="text-[11px] text-white" style={{ fontWeight: 600 }}>Total Invoice</span>
              <span className="text-[13px] text-white" style={{ fontWeight: 700 }}>₹1,740</span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <button className="flex-1 flex items-center justify-center gap-1.5 bg-[#cd1d1d]/15 border border-[#cd1d1d]/20 text-[#cd1d1d] text-[11px] py-2 rounded-lg hover:bg-[#cd1d1d]/25 transition-colors" style={{ fontWeight: 500 }}>
              <Send className="w-3 h-3" /> Generate Invoice & Charge Driver
            </button>
            <button className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.06] text-gray-400 text-[11px] px-3 py-2 rounded-lg hover:bg-white/[0.06] transition-colors">
              <Download className="w-3 h-3" /> PDF
            </button>
          </div>
        </motion.div>

        {/* Invoice Preview */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-5">
          <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-3" style={{ fontWeight: 600 }}>Generated Invoice Preview</div>

          <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.04]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-[#cd1d1d] rounded-lg flex items-center justify-center">
                  <Zap className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <div className="text-[11px] text-white" style={{ fontWeight: 600 }}>Dash Mobility</div>
                  <div className="text-[8px] text-gray-600">Service Invoice</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-gray-400" style={{ fontWeight: 500 }}>#INV-2026-0312</div>
                <div className="text-[8px] text-gray-600">26 Mar 2026</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4 text-[10px]">
              <div>
                <div className="text-gray-600 mb-0.5">Driver</div>
                <div className="text-gray-300" style={{ fontWeight: 500 }}>Rajesh Kumar</div>
              </div>
              <div>
                <div className="text-gray-600 mb-0.5">Vehicle</div>
                <div className="text-gray-300" style={{ fontWeight: 500 }}>VH-0042 • Ola S1 Pro</div>
              </div>
            </div>

            <div className="space-y-1.5 mb-3">
              {[
                { item: "Brake Pad Set (Front)", qty: "1", amount: "₹680" },
                { item: "Throttle Cable Assembly", qty: "1", amount: "₹560" },
                { item: "Service Labour (3K km)", qty: "1", amount: "₹500" },
              ].map((l, i) => (
                <div key={i} className="flex items-center justify-between text-[10px]">
                  <span className="text-gray-400">{l.item}</span>
                  <span className="text-gray-300" style={{ fontWeight: 500 }}>{l.amount}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-white/[0.04]">
              <span className="text-[11px] text-white" style={{ fontWeight: 600 }}>Amount Due</span>
              <span className="text-[14px] text-[#cd1d1d]" style={{ fontWeight: 700 }}>₹1,740</span>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-[9px] text-gray-500">
              <CheckCircle className="w-3 h-3 text-emerald-400" />
              Auto-deducted from driver's next payout cycle
            </div>
          </div>

          {/* Recent Invoices */}
          <div className="mt-4">
            <div className="text-[10px] text-gray-600 mb-2" style={{ fontWeight: 500 }}>Recent Invoices</div>
            {[
              { id: "#INV-2026-0309", driver: "Karan Mehta", amount: "₹2,870", status: "Paid" },
              { id: "#INV-2026-0305", driver: "Priya Nair", amount: "₹890", status: "Pending" },
              { id: "#INV-2026-0301", driver: "Amit Singh", amount: "₹1,560", status: "Paid" },
            ].map((inv, i) => (
              <div key={i} className="flex items-center justify-between py-1.5 border-b border-white/[0.03] last:border-0">
                <div>
                  <span className="text-[10px] text-gray-400 font-mono">{inv.id}</span>
                  <span className="text-[10px] text-gray-500 ml-2">{inv.driver}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-300" style={{ fontWeight: 500 }}>{inv.amount}</span>
                  <span className={`text-[8px] px-1.5 py-0.5 rounded-full ${inv.status === "Paid" ? "bg-emerald-500/15 text-emerald-400" : "bg-amber-500/15 text-amber-400"}`} style={{ fontWeight: 600 }}>{inv.status}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </TabWrapper>
  );
}

// ─── Inventory Tab ────────────────────────────────────
function InventoryTab() {
  const parts = [
    { name: "Brake Pad Set (Front)", sku: "BP-OLA-F01", category: "Brakes", stock: 24, minStock: 10, price: "₹680", used30d: 18, status: "ok" },
    { name: "Throttle Cable Assembly", sku: "TC-OLA-01", category: "Controls", stock: 8, minStock: 10, price: "₹560", used30d: 12, status: "low" },
    { name: "Headlight Assembly", sku: "HL-OLA-01", category: "Electrical", stock: 3, minStock: 5, price: "₹2,400", used30d: 4, status: "critical" },
    { name: "Rear Tyre (3.00-10)", sku: "RT-UNI-10", category: "Tyres", stock: 32, minStock: 15, price: "₹650", used30d: 22, status: "ok" },
    { name: "Front Tyre (3.00-10)", sku: "FT-UNI-10", category: "Tyres", stock: 28, minStock: 15, price: "₹650", used30d: 14, status: "ok" },
    { name: "Controller Unit (MCU)", sku: "MC-OLA-01", category: "Electronics", stock: 2, minStock: 3, price: "₹4,500", used30d: 3, status: "critical" },
    { name: "Mirror Set (L+R)", sku: "MR-UNI-01", category: "Body", stock: 18, minStock: 8, price: "₹340", used30d: 9, status: "ok" },
    { name: "Indicator Bulb Set", sku: "IB-UNI-01", category: "Electrical", stock: 6, minStock: 10, price: "₹120", used30d: 15, status: "low" },
  ];

  const stockStatusColors = {
    "ok": { bg: "bg-emerald-500/10", text: "text-emerald-400", label: "In Stock" },
    "low": { bg: "bg-amber-500/10", text: "text-amber-400", label: "Low Stock" },
    "critical": { bg: "bg-red-500/10", text: "text-red-400", label: "Critical" },
  };

  return (
    <TabWrapper>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm text-white" style={{ fontWeight: 600 }}>Spare Parts Inventory</div>
          <div className="text-[11px] text-gray-500">8 part types • 2 critical alerts</div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-1.5 text-[11px] text-gray-400 hover:bg-white/[0.06] transition-colors">
            <Download className="w-3 h-3" /> Export
          </button>
          <button className="flex items-center gap-1.5 bg-[#cd1d1d]/15 border border-[#cd1d1d]/20 rounded-lg px-3 py-1.5 text-[11px] text-[#cd1d1d] hover:bg-[#cd1d1d]/25 transition-colors" style={{ fontWeight: 500 }}>
            <Plus className="w-3 h-3" /> Add Part
          </button>
        </div>
      </div>

      {/* Low Stock Alerts */}
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="bg-red-500/5 border border-red-500/15 rounded-xl p-3 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
          <span className="text-[11px] text-red-400" style={{ fontWeight: 600 }}>Low Stock Alerts</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {parts.filter(p => p.status !== "ok").map((p, i) => (
            <div key={i} className="flex items-center justify-between bg-red-500/5 rounded-lg px-3 py-2">
              <div>
                <span className="text-[11px] text-gray-300" style={{ fontWeight: 500 }}>{p.name}</span>
                <div className="text-[9px] text-gray-600">{p.stock} left • Min: {p.minStock}</div>
              </div>
              <button className="text-[9px] bg-red-500/15 text-red-400 px-2 py-1 rounded hover:bg-red-500/25 transition-colors" style={{ fontWeight: 500 }}>
                Reorder
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Parts Table */}
      <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl overflow-hidden">
        <div className="hidden sm:grid grid-cols-[1fr_0.6fr_0.5fr_0.5fr_0.5fr_0.4fr] gap-3 px-4 py-2.5 border-b border-white/[0.05] text-[9px] text-gray-600 uppercase tracking-wider" style={{ fontWeight: 600 }}>
          <span>Part</span><span>Category</span><span>Stock</span><span>Price</span><span>Used (30d)</span><span>Status</span>
        </div>
        {parts.map((p, i) => {
          const s = stockStatusColors[p.status];
          const stockPercent = Math.min((p.stock / (p.minStock * 3)) * 100, 100);
          return (
            <motion.div key={p.sku} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }}
              className="grid grid-cols-1 sm:grid-cols-[1fr_0.6fr_0.5fr_0.5fr_0.5fr_0.4fr] gap-2 sm:gap-3 items-center px-4 py-3 hover:bg-white/[0.02] transition-colors border-b border-white/[0.03] last:border-0"
            >
              <div>
                <div className="text-[11px] text-gray-300" style={{ fontWeight: 500 }}>{p.name}</div>
                <div className="text-[9px] text-gray-600 font-mono">{p.sku}</div>
              </div>
              <span className="text-[10px] text-gray-500">{p.category}</span>
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-[11px] text-gray-300" style={{ fontWeight: 600 }}>{p.stock}</span>
                  <span className="text-[9px] text-gray-600">/ {p.minStock} min</span>
                </div>
                <div className="w-full h-1 bg-white/[0.04] rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${p.status === "critical" ? "bg-red-400" : p.status === "low" ? "bg-amber-400" : "bg-emerald-400"}`} style={{ width: `${stockPercent}%` }} />
                </div>
              </div>
              <span className="text-[10px] text-gray-400">{p.price}</span>
              <span className="text-[10px] text-gray-400">{p.used30d}</span>
              <span className={`text-[9px] px-2 py-0.5 rounded-full text-center ${s.bg} ${s.text}`} style={{ fontWeight: 600 }}>{s.label}</span>
            </motion.div>
          );
        })}
      </div>
    </TabWrapper>
  );
}

// ─── Auto-Schedule Tab ────────────────────────────────
function AutoScheduleTab() {
  const schedules = [
    { interval: "Every 3,000 km", tasks: "Brake inspection, throttle calibration, tyre pressure, general check", vehicles: 186, nextDue: 12, color: "#22c55e" },
    { interval: "Every 6,000 km", tasks: "Full service — tyre rotation, controller diagnostics, body inspection", vehicles: 186, nextDue: 8, color: "#3b82f6" },
    { interval: "Every 10,000 km", tasks: "Major service — motor inspection, wiring check, suspension, full electrical", vehicles: 186, nextDue: 3, color: "#8b5cf6" },
    { interval: "Every 30 days", tasks: "Tyre pressure check, brake test, light check, mirror adjustment", vehicles: 186, nextDue: 24, color: "#f59e0b" },
  ];

  const upcomingServices = [
    { vehicle: "VH-0042", model: "Ola S1 Pro", driver: "Rajesh Kumar", odo: "2,890 km", service: "3K km service", dueIn: "110 km", urgency: "soon" },
    { vehicle: "VH-0089", model: "Ather 450X", driver: "Suresh Patel", odo: "5,820 km", service: "6K km service", dueIn: "180 km", urgency: "soon" },
    { vehicle: "VH-0123", model: "Ola S1 Pro", driver: "Amit Singh", odo: "8,910 km", service: "10K km service", dueIn: "1,090 km", urgency: "upcoming" },
    { vehicle: "VH-0067", model: "Bounce Infinity", driver: "Karan Mehta", odo: "1,200 km", service: "3K km service", dueIn: "1,800 km", urgency: "upcoming" },
    { vehicle: "VH-0156", model: "Bounce Infinity", driver: "—", odo: "950 km", service: "3K km service", dueIn: "2,050 km", urgency: "normal" },
  ];

  return (
    <TabWrapper>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm text-white" style={{ fontWeight: 600 }}>Auto-Scheduled Maintenance</div>
          <div className="text-[11px] text-gray-500">4 schedules active • 12 vehicles due this week</div>
        </div>
        <button className="flex items-center gap-1.5 bg-[#cd1d1d]/15 border border-[#cd1d1d]/20 rounded-lg px-3 py-1.5 text-[11px] text-[#cd1d1d] hover:bg-[#cd1d1d]/25 transition-colors" style={{ fontWeight: 500 }}>
          <Plus className="w-3 h-3" /> New Schedule
        </button>
      </div>

      {/* Schedule Rules */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
        {schedules.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
            className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${s.color}15` }}>
                  <RefreshCw className="w-4 h-4" style={{ color: s.color }} />
                </div>
                <div>
                  <div className="text-[12px] text-white" style={{ fontWeight: 600 }}>{s.interval}</div>
                  <div className="text-[9px] text-gray-600">{s.vehicles} vehicles enrolled</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[14px]" style={{ color: s.color, fontWeight: 700 }}>{s.nextDue}</div>
                <div className="text-[8px] text-gray-600">Due soon</div>
              </div>
            </div>
            <div className="text-[10px] text-gray-500 leading-relaxed">{s.tasks}</div>
          </motion.div>
        ))}
      </div>

      {/* Upcoming Services */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white/[0.02] border border-white/[0.05] rounded-xl overflow-hidden">
        <div className="px-4 py-2.5 border-b border-white/[0.05] flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-gray-500" />
          <span className="text-[10px] text-gray-600 uppercase tracking-wider" style={{ fontWeight: 600 }}>Upcoming Auto-Scheduled Services</span>
        </div>
        {upcomingServices.map((s, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-3 border-b border-white/[0.03] last:border-0 hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${s.urgency === "soon" ? "bg-amber-400" : s.urgency === "upcoming" ? "bg-blue-400" : "bg-gray-600"}`} />
              <div>
                <div className="text-[11px] text-gray-300" style={{ fontWeight: 500 }}>{s.vehicle} • {s.model}</div>
                <div className="text-[9px] text-gray-600">{s.driver} • Odo: {s.odo}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[11px] text-gray-300" style={{ fontWeight: 500 }}>{s.service}</div>
              <div className={`text-[9px] ${s.urgency === "soon" ? "text-amber-400" : "text-gray-600"}`}>Due in {s.dueIn}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </TabWrapper>
  );
}

// ─── Analytics Tab ────────────────────────────────────
function AnalyticsTab() {
  const weeklyData = [
    { day: "Mon", tickets: 8, cost: 12400 },
    { day: "Tue", tickets: 5, cost: 7800 },
    { day: "Wed", tickets: 12, cost: 18600 },
    { day: "Thu", tickets: 6, cost: 9200 },
    { day: "Fri", tickets: 9, cost: 14100 },
    { day: "Sat", tickets: 3, cost: 4500 },
    { day: "Sun", tickets: 2, cost: 2800 },
  ];
  const maxTickets = Math.max(...weeklyData.map(d => d.tickets));

  return (
    <TabWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Weekly Ticket Volume */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-5">
          <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-4" style={{ fontWeight: 600 }}>Weekly Ticket Volume</div>
          <div className="flex items-end gap-2 h-[120px]">
            {weeklyData.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[9px] text-gray-500" style={{ fontWeight: 600 }}>{d.tickets}</span>
                <motion.div initial={{ height: 0 }} animate={{ height: `${(d.tickets / maxTickets) * 80}px` }} transition={{ delay: i * 0.05, duration: 0.5 }} className="w-full bg-gradient-to-t from-[#cd1d1d]/40 to-[#cd1d1d]/80 rounded-t" />
                <span className="text-[8px] text-gray-600">{d.day}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cost Breakdown */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-5">
          <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-4" style={{ fontWeight: 600 }}>Cost Breakdown (This Month)</div>
          <div className="space-y-3">
            {[
              { label: "Parts & Components", amount: "₹48,600", percent: 42, color: "#cd1d1d" },
              { label: "Labour Charges", amount: "₹28,200", percent: 24, color: "#3b82f6" },
              { label: "Tyre Replacements", amount: "₹22,100", percent: 19, color: "#22c55e" },
              { label: "Electrical Repairs", amount: "₹12,400", percent: 11, color: "#f59e0b" },
              { label: "Body Work", amount: "₹4,800", percent: 4, color: "#8b5cf6" },
            ].map((c, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-gray-400">{c.label}</span>
                  <span className="text-[10px] text-gray-300" style={{ fontWeight: 600 }}>{c.amount}</span>
                </div>
                <div className="w-full h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${c.percent}%` }} transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }} className="h-full rounded-full" style={{ backgroundColor: c.color }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between">
            <span className="text-[11px] text-white" style={{ fontWeight: 600 }}>Total This Month</span>
            <span className="text-[14px] text-white" style={{ fontWeight: 700 }}>₹1,16,100</span>
          </div>
        </motion.div>
      </div>

      {/* Common Issues */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-5 bg-white/[0.02] border border-white/[0.05] rounded-xl p-4">
        <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-3" style={{ fontWeight: 600 }}>Top Issues This Month</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { issue: "Flat Tyres", count: 18, trend: "+12%", up: true, color: "#ef4444" },
            { issue: "Brake Wear", count: 14, trend: "-8%", up: false, color: "#f59e0b" },
            { issue: "Controller Errors", count: 6, trend: "+33%", up: true, color: "#cd1d1d" },
            { issue: "Headlight Issues", count: 4, trend: "0%", up: false, color: "#3b82f6" },
          ].map((iss, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/[0.04] rounded-lg p-3">
              <div className="text-[18px] text-white mb-0.5" style={{ fontWeight: 700 }}>{iss.count}</div>
              <div className="text-[10px] text-gray-400 mb-1" style={{ fontWeight: 500 }}>{iss.issue}</div>
              <div className={`flex items-center gap-1 text-[9px] ${iss.up ? "text-red-400" : "text-emerald-400"}`}>
                {iss.up ? <TrendingUp className="w-2.5 h-2.5" /> : <TrendingDown className="w-2.5 h-2.5" />}
                {iss.trend} vs last month
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </TabWrapper>
  );
}

// ─── On-Road Tab ──────────────────────────────────────
function OnRoadTab() {
  const onRoadTickets = [
    { id: "MT-0311", vehicle: "VH-0089", model: "Ather 450X", driver: "Suresh Patel", phone: "+91 98765 43210", issue: "Flat tyre — rear puncture", location: "MG Road, near Brigade Gateway", lat: 12.9716, lng: 77.5946, time: "14 min ago", status: "Pickup dispatched" },
    { id: "MT-0310", vehicle: "VH-0123", model: "Ola S1 Pro", driver: "Amit Singh", phone: "+91 98765 43211", issue: "Motor controller error — won't start", location: "Koramangala, 5th Block", lat: 12.9352, lng: 77.6245, time: "32 min ago", status: "Mechanic en route" },
    { id: "MT-0306", vehicle: "VH-0078", model: "Bounce Infinity", driver: "Deepak Joshi", phone: "+91 98765 43212", issue: "Brake failure — unsafe to ride", location: "HSR Layout, Sector 2", lat: 12.9081, lng: 77.6476, time: "1 hr ago", status: "Vehicle recovered" },
  ];

  return (
    <TabWrapper>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm text-white flex items-center gap-2" style={{ fontWeight: 600 }}>
            On-Road Breakdowns
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
          </div>
          <div className="text-[11px] text-gray-500">3 active incidents • Real-time tracking</div>
        </div>
      </div>

      {/* Map Overview */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/[0.05] rounded-xl overflow-hidden mb-5">
        <div className="relative h-[200px]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:30px_30px]" />
          {/* Simulated Bangalore map with pins */}
          {onRoadTickets.map((t, i) => {
            const positions = [
              { left: "45%", top: "30%" },
              { left: "60%", top: "55%" },
              { left: "55%", top: "75%" },
            ];
            const pos = positions[i];
            return (
              <div key={t.id} className="absolute" style={pos}>
                <div className="relative group cursor-pointer">
                  <div className="absolute -inset-4 bg-red-500/20 rounded-full animate-ping" />
                  <div className="absolute -inset-2 bg-red-500/10 rounded-full" />
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30 relative z-10">
                    <MapPin className="w-2.5 h-2.5 text-white" />
                  </div>
                  <div className="absolute left-7 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm rounded px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <div className="text-[9px] text-white" style={{ fontWeight: 500 }}>{t.id} • {t.driver}</div>
                    <div className="text-[8px] text-gray-400">{t.issue}</div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-red-400" />
            <span className="text-[10px] text-gray-300" style={{ fontWeight: 500 }}>Bangalore • 3 active incidents</span>
          </div>
          <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1">
            <span className="text-[8px] text-gray-500">Powered by Google Maps</span>
          </div>
        </div>
      </motion.div>

      {/* Incident Cards */}
      <div className="space-y-3">
        {onRoadTickets.map((t, i) => (
          <motion.div key={t.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
            className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="font-mono text-[10px] text-gray-500">{t.id}</span>
                  <span className="text-[9px] bg-red-500/15 text-red-400 px-1.5 py-0.5 rounded-full flex items-center gap-1" style={{ fontWeight: 600 }}>
                    <AlertTriangle className="w-2.5 h-2.5" /> On-Road
                  </span>
                  <span className="text-[9px] text-gray-600">{t.time}</span>
                </div>
                <div className="text-[12px] text-white mb-1" style={{ fontWeight: 500 }}>{t.issue}</div>
                <div className="flex items-center gap-3 text-[10px] text-gray-500 mb-2 flex-wrap">
                  <span className="flex items-center gap-1"><Bike className="w-3 h-3" />{t.vehicle} • {t.model}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" />{t.driver}</span>
                  <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{t.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-gray-500" />
                  <span className="text-[10px] text-gray-400">{t.location}</span>
                  <span className="text-[9px] text-gray-600">({t.lat.toFixed(4)}°N, {t.lng.toFixed(4)}°E)</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className={`text-[9px] px-2 py-1 rounded-full ${t.status === "Vehicle recovered" ? "bg-emerald-500/15 text-emerald-400" : "bg-amber-500/15 text-amber-400"}`} style={{ fontWeight: 600 }}>{t.status}</span>
                <div className="flex items-center gap-1.5">
                  <button className="flex items-center gap-1 bg-blue-500/15 border border-blue-500/20 text-blue-400 text-[10px] px-2.5 py-1.5 rounded-lg hover:bg-blue-500/25 transition-colors" style={{ fontWeight: 500 }}>
                    <Navigation className="w-3 h-3" /> Navigate
                  </button>
                  <button className="flex items-center gap-1 bg-white/[0.04] border border-white/[0.06] text-gray-400 text-[10px] px-2.5 py-1.5 rounded-lg hover:bg-white/[0.06] transition-colors">
                    <Phone className="w-3 h-3" /> Call Driver
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </TabWrapper>
  );
}

// ─── Interactive Dashboard ────────────────────────────
function DashboardSection() {
  const [activeTab, setActiveTab] = useState("tickets");

  const tabs = [
    { key: "tickets", label: "Tickets", icon: ClipboardList },
    { key: "parts", label: "Parts & Invoicing", icon: IndianRupee },
    { key: "inventory", label: "Inventory", icon: Package },
    { key: "schedule", label: "Auto-Schedule", icon: Calendar },
    { key: "onroad", label: "On-Road", icon: MapPin },
    { key: "analytics", label: "Analytics", icon: BarChart3 },
  ];

  return (
    <section id="dashboard" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[250px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Your workshop,{" "}
            <span className="bg-gradient-to-r from-[#cd1d1d] to-amber-400 bg-clip-text text-transparent">digitized</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[550px] mx-auto">
            Click through the tabs — this is what managing maintenance actually looks like in Dash.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-b from-[#cd1d1d]/8 via-amber-500/3 to-transparent rounded-[2rem] blur-[40px] pointer-events-none" />
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
                  <span className="text-[11px] text-gray-500">dash-mobility.app/admin/maintenance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-gray-600" />
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#cd1d1d] to-amber-500 flex items-center justify-center text-[9px] text-white" style={{ fontWeight: 700 }}>AK</div>
                </div>
              </div>

              {/* Breadcrumb */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 py-3 border-b border-white/[0.06] gap-3">
                <div className="flex items-center gap-2 text-[12px]">
                  <span className="text-gray-600">Fleet</span>
                  <ChevronRight className="w-3 h-3 text-gray-700" />
                  <span className="text-white" style={{ fontWeight: 500 }}>Maintenance & Inventory</span>
                  <span className="text-[10px] bg-amber-500/15 text-amber-400 px-2 py-0.5 rounded-full ml-1" style={{ fontWeight: 600 }}>47 tickets this month</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-1.5 text-[11px] text-gray-400 hover:bg-white/[0.06] transition-colors">
                    <Search className="w-3 h-3" /> Search
                  </button>
                  <button className="flex items-center gap-1.5 bg-[#cd1d1d]/15 border border-[#cd1d1d]/20 rounded-lg px-3 py-1.5 text-[11px] text-[#cd1d1d] hover:bg-[#cd1d1d]/25 transition-colors" style={{ fontWeight: 500 }}>
                    <Plus className="w-3 h-3" /> New Ticket
                  </button>
                </div>
              </div>

              {/* Summary Bar */}
              <div className="px-4 sm:px-6 py-4 border-b border-white/[0.06]">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {[
                    { label: "Open Tickets", value: "12", icon: ClipboardList, color: "#cd1d1d" },
                    { label: "In Progress", value: "8", icon: Wrench, color: "#f59e0b" },
                    { label: "On-Road", value: "3", icon: MapPin, color: "#ef4444" },
                    { label: "Parts Used", value: "84", icon: Package, color: "#8b5cf6" },
                    { label: "Low Stock", value: "4", icon: AlertTriangle, color: "#f97316" },
                    { label: "Due This Week", value: "12", icon: Calendar, color: "#06b6d4" },
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
                        <TIcon className="w-3.5 h-3.5" />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Content */}
              <div className="px-4 sm:px-6 py-5 min-h-[400px]">
                <AnimatePresence mode="wait">
                  {activeTab === "tickets" && <TicketsTab key="tickets" />}
                  {activeTab === "parts" && <PartsInvoicingTab key="parts" />}
                  {activeTab === "inventory" && <InventoryTab key="inventory" />}
                  {activeTab === "schedule" && <AutoScheduleTab key="schedule" />}
                  {activeTab === "onroad" && <OnRoadTab key="onroad" />}
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
              { value: 47, suffix: "", label: "Tickets This Month", sub: "↓18% from last month", color: "#cd1d1d" },
              { value: 84, suffix: "", label: "Parts Used", sub: "Across 32 part types", color: "#8b5cf6" },
              { value: 1, suffix: ".16L", label: "Monthly Spend", sub: "₹468/vehicle avg", color: "#f59e0b" },
              { value: 97, suffix: "%", label: "Fleet Uptime", sub: "Avg 1.2 days downtime", color: "#22c55e" },
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

// ─── Feature Cards with Mini Dashboards ───────────────
function MiniTicketTracker() {
  return (
    <div className="space-y-2">
      {[
        { id: "MT-0312", type: "Scheduled", status: "In Progress", vehicle: "VH-0042", priority: "Low", pColor: "text-gray-400", sBg: "bg-amber-500/15", sText: "text-amber-400" },
        { id: "MT-0311", type: "On-Road", status: "Open", vehicle: "VH-0089", priority: "High", pColor: "text-orange-400", sBg: "bg-red-500/15", sText: "text-red-400" },
        { id: "MT-0310", type: "Breakdown", status: "Open", vehicle: "VH-0123", priority: "Critical", pColor: "text-red-400", sBg: "bg-red-500/15", sText: "text-red-400" },
      ].map((t, i) => (
        <motion.div key={t.id} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
          className="flex items-center justify-between bg-white/[0.02] border border-white/[0.04] rounded-lg px-3 py-2"
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-[8px] text-gray-600">{t.id}</span>
            <span className={`text-[8px] ${t.pColor}`} style={{ fontWeight: 600 }}>{t.priority}</span>
          </div>
          <span className={`text-[8px] px-1.5 py-0.5 rounded-full ${t.sBg} ${t.sText}`} style={{ fontWeight: 600 }}>{t.status}</span>
        </motion.div>
      ))}
    </div>
  );
}

function MiniInventoryStatus() {
  return (
    <div className="space-y-2.5">
      {[
        { name: "Brake Pads", stock: 24, max: 30, color: "#22c55e" },
        { name: "Throttle Cable", stock: 8, max: 30, color: "#f59e0b" },
        { name: "Headlight Assy", stock: 3, max: 30, color: "#ef4444" },
        { name: "Rear Tyre", stock: 32, max: 40, color: "#22c55e" },
      ].map((p, i) => (
        <div key={i}>
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-[9px] text-gray-400">{p.name}</span>
            <span className="text-[9px] text-gray-300" style={{ fontWeight: 600 }}>{p.stock}</span>
          </div>
          <div className="w-full h-1 bg-white/[0.04] rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} whileInView={{ width: `${(p.stock / p.max) * 100}%` }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="h-full rounded-full" style={{ backgroundColor: p.color }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function MiniScheduleCalendar() {
  return (
    <div className="grid grid-cols-7 gap-1">
      {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
        <div key={i} className="text-[7px] text-gray-600 text-center">{d}</div>
      ))}
      {Array.from({ length: 28 }, (_, i) => {
        const hasService = [2, 5, 8, 12, 15, 19, 22, 26].includes(i);
        const isToday = i === 25;
        return (
          <div key={i} className={`w-full aspect-square rounded flex items-center justify-center text-[7px] ${isToday ? "bg-[#cd1d1d]/20 text-[#cd1d1d]" : hasService ? "bg-amber-500/10 text-amber-400" : "text-gray-700"}`} style={{ fontWeight: hasService || isToday ? 700 : 400 }}>
            {i + 1}
          </div>
        );
      })}
    </div>
  );
}

function MiniInvoiceSummary() {
  return (
    <div className="space-y-2">
      {[
        { id: "#INV-0312", driver: "Rajesh K.", amount: "₹1,740", status: "Pending", sColor: "text-amber-400", sBg: "bg-amber-500/15" },
        { id: "#INV-0309", driver: "Karan M.", amount: "₹2,870", status: "Paid", sColor: "text-emerald-400", sBg: "bg-emerald-500/15" },
        { id: "#INV-0305", driver: "Priya N.", amount: "₹890", status: "Pending", sColor: "text-amber-400", sBg: "bg-amber-500/15" },
      ].map((inv, i) => (
        <div key={i} className="flex items-center justify-between bg-white/[0.02] border border-white/[0.04] rounded-lg px-3 py-2">
          <div>
            <span className="text-[8px] text-gray-500 font-mono">{inv.id}</span>
            <span className="text-[9px] text-gray-400 ml-1.5">{inv.driver}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-gray-300" style={{ fontWeight: 600 }}>{inv.amount}</span>
            <span className={`text-[7px] px-1.5 py-0.5 rounded-full ${inv.sBg} ${inv.sColor}`} style={{ fontWeight: 600 }}>{inv.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function MiniOnRoadMap() {
  return (
    <div className="relative h-[100px] bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:15px_15px]" />
      {[
        { left: "30%", top: "25%" },
        { left: "55%", top: "50%" },
        { left: "70%", top: "70%" },
      ].map((pos, i) => (
        <div key={i} className="absolute" style={pos}>
          <div className="w-3 h-3 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
            <MapPin className="w-1.5 h-1.5 text-white" />
          </div>
        </div>
      ))}
      <div className="absolute bottom-1 left-1 bg-black/60 rounded px-1.5 py-0.5">
        <span className="text-[7px] text-gray-400">3 active incidents</span>
      </div>
    </div>
  );
}

function MiniCostChart() {
  const bars = [42, 24, 19, 11, 4];
  const colors = ["#cd1d1d", "#3b82f6", "#22c55e", "#f59e0b", "#8b5cf6"];
  const labels = ["Parts", "Labour", "Tyres", "Elec", "Body"];
  return (
    <div className="flex items-end gap-2 h-[70px]">
      {bars.map((b, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
          <span className="text-[7px] text-gray-500">{b}%</span>
          <motion.div initial={{ height: 0 }} whileInView={{ height: `${b * 1.2}px` }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }} className="w-full rounded-t" style={{ backgroundColor: colors[i] }} />
          <span className="text-[6px] text-gray-600">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: ClipboardList,
      title: "Maintenance Tickets",
      subtitle: "Every repair, tracked from open to close.",
      color: "#cd1d1d",
      description: "Create tickets for scheduled services, breakdowns, and on-road incidents. Track parts used, labour costs, and resolution time. Drivers can raise tickets from the app too.",
      bullets: [
        "Scheduled, breakdown, and on-road ticket types",
        "Priority levels — Low, Medium, High, Critical",
        "Parts auto-deducted from inventory on use",
        "Full cost tracking per ticket",
        "Driver can raise tickets from app",
        "Photo & video attachments",
      ],
      miniDashboard: <MiniTicketTracker />,
    },
    {
      icon: MapPin,
      title: "On-Road Breakdown Tracking",
      subtitle: "Stranded drivers? See them on the map.",
      color: "#ef4444",
      description: "When a driver reports an on-road issue, their GPS location is pinned on a map. Dispatch a pickup, send a mechanic, or guide the driver — all from the ticket view.",
      bullets: [
        "Real-time GPS location of stranded driver",
        "Map view with all active on-road incidents",
        "One-tap mechanic or pickup dispatch",
        "Driver can report via app with photos",
        "Location auto-populated from driver's phone",
        "Call driver directly from ticket",
      ],
      miniDashboard: <MiniOnRoadMap />,
    },
    {
      icon: IndianRupee,
      title: "Parts Invoicing & Driver Billing",
      subtitle: "Add parts → generate invoice → charge driver.",
      color: "#f59e0b",
      description: "Add parts from your inventory to any ticket. An invoice is auto-generated with parts cost + labour. The amount is deducted from the driver's next payout cycle automatically.",
      bullets: [
        "Add parts from inventory to any ticket",
        "Auto-generate invoice (parts + labour)",
        "Amount deducted from driver's next payout",
        "PDF invoice download",
        "Full invoice history per driver",
        "Dispute & adjustment workflow",
      ],
      miniDashboard: <MiniInvoiceSummary />,
    },
    {
      icon: Package,
      title: "Spare Parts Inventory",
      subtitle: "Full inventory with low-stock alerts.",
      color: "#8b5cf6",
      description: "Track every spare part — SKU, quantity, minimum stock level, usage rate. Get alerts when stock drops below threshold. Know exactly what you have and what you need to reorder.",
      bullets: [
        "Complete parts catalog with SKU tracking",
        "Real-time stock levels per part",
        "Configurable minimum stock thresholds",
        "Automatic low-stock alerts (SMS + dashboard)",
        "30-day usage rate per part",
        "Reorder directly from alerts",
      ],
      miniDashboard: <MiniInventoryStatus />,
    },
    {
      icon: Calendar,
      title: "Auto-Scheduled Maintenance",
      subtitle: "Never miss a service. It schedules itself.",
      color: "#06b6d4",
      description: "Set rules like \"service every 3,000 km\" or \"check brakes every 30 days\". Dash tracks odometer and time for every vehicle and auto-creates tickets when service is due.",
      bullets: [
        "Odometer-based service schedules (3K, 6K, 10K km)",
        "Time-based schedules (every 30 days, 90 days)",
        "Auto-creates ticket when due",
        "Notifies driver via app",
        "Upcoming services queue with countdown",
        "Configurable per vehicle model",
      ],
      miniDashboard: <MiniScheduleCalendar />,
    },
    {
      icon: BarChart3,
      title: "Maintenance Analytics",
      subtitle: "Data on every wrench turn.",
      color: "#22c55e",
      description: "Weekly ticket volume, cost breakdown by category, most common issues, per-vehicle maintenance cost, fleet uptime — everything you need to optimize maintenance operations.",
      bullets: [
        "Weekly/monthly ticket volume trends",
        "Cost breakdown — parts, labour, tyres, electrical",
        "Most common failure modes",
        "Per-vehicle maintenance cost tracking",
        "Fleet uptime & downtime metrics",
        "Exportable reports",
      ],
      miniDashboard: <MiniCostChart />,
    },
  ];

  return (
    <section id="features" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Deep dive into{" "}
            <span className="bg-gradient-to-r from-[#cd1d1d] to-amber-400 bg-clip-text text-transparent">each feature</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[550px] mx-auto">
            Every feature includes a live mini dashboard showing exactly what it looks like inside Dash.
          </p>
        </motion.div>

        <div className="space-y-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isEven = idx % 2 === 0;
            return (
              <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
                <GlowCard className="bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:border-white/[0.1] transition-all duration-500" glowColor={feature.color}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8 ${!isEven ? "lg:direction-rtl" : ""}`}>
                    <div className={!isEven ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${feature.color}15` }}>
                          <Icon className="w-6 h-6" style={{ color: feature.color }} />
                        </motion.div>
                        <div>
                          <h3 className="text-lg text-white" style={{ fontWeight: 700 }}>{feature.title}</h3>
                          <p className="text-[13px] text-gray-500">{feature.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed mb-5">{feature.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {feature.bullets.map((b, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: feature.color }} />
                            <span className="text-[12px] text-gray-400">{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`bg-white/[0.02] border border-white/[0.05] rounded-xl p-5 ${!isEven ? "lg:order-1" : ""}`}>
                      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.04]">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: feature.color }} />
                        <span className="text-[10px] text-gray-600 uppercase tracking-wider" style={{ fontWeight: 600 }}>{feature.title} — Live Preview</span>
                      </div>
                      {feature.miniDashboard}
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

// ─── Before / After Section ───────────────────────────
function BeforeAfterSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6">
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#cd1d1d]/5 rounded-full blur-[250px] pointer-events-none" />
      <div className="max-w-[1100px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Before Dash vs{" "}
            <span className="bg-gradient-to-r from-[#cd1d1d] to-amber-400 bg-clip-text text-transparent">After Dash</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[500px] mx-auto">
            How maintenance used to work vs how it works now
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Before */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg text-white" style={{ fontWeight: 700 }}>Before Dash</h3>
                <p className="text-[13px] text-gray-500">The spreadsheet & WhatsApp era</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                "Driver calls manager: 'scooter broke down on MG Road'",
                "Manager scrambles to find nearest mechanic on phone",
                "No idea what spare parts are in stock",
                "Parts costs tracked in a notebook (or not at all)",
                "Driver never billed for accidental damage — operator absorbs cost",
                "Scheduled services? Only when vehicle stops working",
                "No data on common failure modes or trends",
                "Downtime tracked by memory, not metrics",
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-start gap-2.5">
                  <AlertCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-400">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* After */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-[150px] h-[150px] bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="flex items-center gap-3 mb-6 relative">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg text-white" style={{ fontWeight: 700 }}>With Dash</h3>
                <p className="text-[13px] text-gray-500">Digital-first maintenance ops</p>
              </div>
            </div>
            <div className="space-y-3 relative">
              {[
                "Driver raises on-road ticket from app — GPS location auto-pinned on map",
                "Admin sees pin, dispatches pickup or mechanic with one click",
                "Full spare parts inventory with real-time stock & low-stock alerts",
                "Parts added to ticket → invoice auto-generated → driver auto-charged",
                "Accidental damage billed transparently via invoice workflow",
                "Auto-scheduled services based on odometer + time rules",
                "Analytics show common failure modes & cost trends",
                "Fleet uptime tracked in real-time — 97% and climbing",
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
    { icon: ClipboardList, title: "Ticket Management", desc: "Scheduled, breakdown, on-road — every maintenance event is a trackable ticket with full lifecycle", color: "#cd1d1d", metric: "47", metricLabel: "This month", details: [{ label: "Types", value: "4 ticket types" }, { label: "Avg resolution", value: "1.2 days" }, { label: "SLA tracking", value: "Built-in" }, { label: "Attachments", value: "Photos+Video" }] },
    { icon: Package, title: "Parts Inventory", desc: "Real-time stock tracking with SKU management, minimum thresholds, and automatic low-stock alerts", color: "#8b5cf6", metric: "32", metricLabel: "Part types", details: [{ label: "Stock tracking", value: "Real-time" }, { label: "Alerts", value: "SMS+Dashboard" }, { label: "Usage rate", value: "30d rolling" }, { label: "Reorder", value: "One-click" }] },
    { icon: IndianRupee, title: "Driver Billing", desc: "Parts + labour → invoice → auto-deduct from driver's next payout. Transparent, trackable, zero conflict", color: "#f59e0b", metric: "₹1.16L", metricLabel: "This month", details: [{ label: "Auto-deduct", value: "Yes" }, { label: "PDF invoice", value: "Auto-generated" }, { label: "Disputes", value: "Workflow" }, { label: "History", value: "Per driver" }] },
    { icon: MapPin, title: "On-Road Tracking", desc: "GPS-pinned on-road breakdowns. See where every stranded driver is and dispatch help instantly", color: "#ef4444", metric: "3", metricLabel: "Active now", details: [{ label: "GPS accuracy", value: "3m" }, { label: "Map view", value: "Real-time" }, { label: "Dispatch", value: "One-tap" }, { label: "Call driver", value: "Built-in" }] },
    { icon: Calendar, title: "Auto-Scheduling", desc: "Odometer and time-based rules automatically create service tickets. No vehicle misses scheduled maintenance", color: "#06b6d4", metric: "4", metricLabel: "Active rules", details: [{ label: "Odo-based", value: "3K/6K/10K km" }, { label: "Time-based", value: "30/90 days" }, { label: "Auto-ticket", value: "Yes" }, { label: "Driver notify", value: "Via app" }] },
    { icon: BarChart3, title: "Cost Analytics", desc: "Per-vehicle cost, fleet-wide trends, common failure modes, cost forecasting — maintenance ops, data-driven", color: "#22c55e", metric: "₹468", metricLabel: "Per vehicle/mo", details: [{ label: "Breakdowns", value: "By category" }, { label: "Trends", value: "Weekly/Monthly" }, { label: "Forecasting", value: "ML-ready" }, { label: "Export", value: "CSV/PDF" }] },
  ];

  return (
    <section id="capabilities" className="relative py-24 px-4 sm:px-6">
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#cd1d1d]/5 rounded-full blur-[250px] pointer-events-none" />
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Built for{" "}
            <span className="bg-gradient-to-r from-[#cd1d1d] to-amber-400 bg-clip-text text-transparent">zero downtime</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[500px] mx-auto">
            Every capability designed to keep your fleet on the road
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
function MaintCTA() {
  return (
    <section className="relative py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#cd1d1d]/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#cd1d1d]/15 rounded-full blur-[250px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cd1d1d06_1px,transparent_1px),linear-gradient(to_bottom,#cd1d1d06_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-[700px] mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="inline-flex items-center justify-center w-16 h-16 bg-[#cd1d1d]/15 border border-[#cd1d1d]/20 rounded-2xl mb-8">
            <Wrench className="w-7 h-7 text-[#cd1d1d]" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05]">
            Stop losing money
            <br />
            <span className="bg-gradient-to-r from-[#cd1d1d] to-amber-400 bg-clip-text text-transparent">on untracked repairs</span>
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-[500px] mx-auto">
            Every ticket. Every part. Every rupee. One dashboard. Zero leakage.
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
function MaintFooter() {
  return (
    <footer className="border-t border-white/[0.05] py-10 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#cd1d1d] rounded-lg flex items-center justify-center"><Zap className="w-3.5 h-3.5 text-white" /></div>
          <span className="text-sm text-gray-500">Dash Mobility</span>
        </Link>
        <div className="flex items-center gap-4 text-[11px] text-gray-600">
          <Link to="/drivers" className="hover:text-gray-400 transition-colors">Driver Management</Link>
          <Link to="/vehicles" className="hover:text-gray-400 transition-colors">Vehicle Management</Link>
          <Link to="/kyc" className="hover:text-gray-400 transition-colors">KYC Pipeline</Link>
          <Link to="/payments" className="hover:text-gray-400 transition-colors">Payments</Link>
        </div>
        <span className="text-xs text-gray-600">© 2026 Dash Mobility Technologies Pvt. Ltd.</span>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────
export default function MaintenancePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-clip" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />
      <MaintHero />
      <DashboardSection />
      <FeaturesSection />
      <CapabilitiesSection />
      <MaintCTA />
    </div>
  );
}
