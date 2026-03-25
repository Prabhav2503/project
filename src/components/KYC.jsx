import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router";
import {
  Zap,
  ArrowRight,
  ArrowLeft,
  Shield,
  Fingerprint,
  CreditCard,
  Landmark,
  Users,
  CheckCircle,
  MessageSquare,
  Clock,
  Lock,
  BadgeCheck,
  Smartphone,
  Eye,
  FileCheck,
  UserCheck,
  ArrowDown,
  Sparkles,
  Menu,
  X,
  AlertTriangle,
  History,
  ThumbsUp,
  ThumbsDown,
  Search,
  Bell,
  ChevronDown,
  MapPin,
  Calendar,
  FileText,
  Send,
  CircleCheck,
} from "lucide-react";

// ─── Nav ──────────────────────────────────────────────
function KYCNav() {
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
          {["Pipeline", "Admin Approval", "Security"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
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
              {["Pipeline", "Admin Approval", "Security"].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="block text-gray-300 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all text-sm" onClick={() => setMobileOpen(false)}>
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

// ─── Pipeline Flow Visual ─────────────────────────────
const flowSteps = [
  { icon: Smartphone, label: "OTP", color: "#cd1d1d" },
  { icon: Fingerprint, label: "Aadhaar", color: "#8b5cf6" },
  { icon: CreditCard, label: "PAN", color: "#f59e0b" },
  { icon: Landmark, label: "Bank", color: "#06b6d4" },
  { icon: Users, label: "References", color: "#ec4899" },
  { icon: BadgeCheck, label: "Approval", color: "#22c55e" },
];

function PipelineFlowVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-[900px] mx-auto mt-16"
    >
      {/* Desktop flow */}
      <div className="hidden sm:flex items-center justify-center">
        {flowSteps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className="flex items-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.4 + i * 0.12, type: "spring", stiffness: 200 }}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all hover:scale-110"
                  style={{
                    backgroundColor: `${step.color}12`,
                    borderColor: `${step.color}30`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: step.color }} />
                </div>
                <span className="text-[11px] text-gray-500" style={{ fontWeight: 500 }}>{step.label}</span>
              </motion.div>
              {i < flowSteps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 1.5 + i * 0.12, duration: 0.4 }}
                  className="w-8 lg:w-14 h-px bg-gradient-to-r from-white/[0.1] to-white/[0.05] mx-1 mb-6 origin-left"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile flow - 2 rows */}
      <div className="sm:hidden grid grid-cols-3 gap-4">
        {flowSteps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4 + i * 0.1, type: "spring" }}
              className="flex flex-col items-center gap-1.5"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center border"
                style={{ backgroundColor: `${step.color}12`, borderColor: `${step.color}30` }}
              >
                <Icon className="w-5 h-5" style={{ color: step.color }} />
              </div>
              <span className="text-[10px] text-gray-500" style={{ fontWeight: 500 }}>{step.label}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

// ─── Hero ─────────────────────────────────────────────
function KYCHero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-12 px-4 sm:px-6 overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-[#cd1d1d] rounded-full blur-[200px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-emerald-600 rounded-full blur-[180px] pointer-events-none"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_75%)] pointer-events-none" />

      <div className="max-w-[900px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/15 rounded-full px-4 py-2 mb-8"
        >
          <div className="relative">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            <div className="absolute inset-0 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
          </div>
          <span className="text-[13px] text-emerald-300">State-of-the-Art Verification Pipeline</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,7vw,5rem)] font-bold text-white leading-[1.05] tracking-tight mb-2"
        >
          Six layers of trust.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.55, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.05] tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Zero compromises.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-base sm:text-lg text-gray-400 mb-10 max-w-[600px] mx-auto leading-relaxed"
        >
          Every driver is verified through OTP, Aadhaar via DigiLocker, PAN, bank account &
          references — before they touch a single vehicle. All automated. All instant.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4"
        >
          <button className="group bg-[#cd1d1d] text-white px-7 py-3.5 rounded-full hover:bg-[#b11919] transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2 shadow-xl shadow-[#cd1d1d]/25 text-[15px]" style={{ fontWeight: 500 }}>
            Book Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-x-1 gap-y-3 mt-8"
        >
          {[
            { value: "<5 min", label: "Avg. verification" },
            { value: "99.7%", label: "Accuracy rate" },
            { value: "₹0.50", label: "Per OTP (DLT)" },
            { value: "50K+", label: "Drivers verified" },
          ].map((s, i) => (
            <div key={i} className="text-center px-5 py-3 bg-white/[0.02] border border-white/[0.04] rounded-2xl">
              <div className="text-lg sm:text-xl font-bold text-white">{s.value}</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Pipeline Flow */}
        <PipelineFlowVisual />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="flex justify-center mt-14"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="w-5 h-5 text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Pipeline Steps (5 verification layers) ───────────
const verificationSteps = [
  {
    id: "otp",
    num: "01",
    icon: Smartphone,
    title: "OTP Verification",
    subtitle: "DLT-Registered • Low Cost • High Delivery",
    color: "#cd1d1d",
    description: "Phone number verification via DLT-registered SMS gateway. Pre-approved templates bypass spam filters, ensuring 99.5% delivery at a fraction of the cost.",
    features: [
      "DLT-compliant templates — zero spam filtering",
      "₹0.50/OTP vs ₹1.50 industry average (67% cheaper)",
      "99.5% delivery across all Indian carriers",
      "Auto-retry with voice OTP fallback",
    ],
    mockup: "otp",
  },
  {
    id: "aadhaar",
    num: "02",
    icon: Fingerprint,
    title: "Aadhaar Verification",
    subtitle: "DigiLocker Integration • No Physical Docs",
    color: "#8b5cf6",
    description: "Direct DigiLocker integration for Aadhaar verification. Drivers authenticate via their DigiLocker — no document uploads needed. UIDAI-compliant with masked Aadhaar.",
    features: [
      "Direct DigiLocker API — no document uploads",
      "Masked Aadhaar for privacy compliance",
      "Liveness detection to prevent spoofing",
      "Real-time UIDAI validation & address fetch",
    ],
    mockup: "aadhaar",
  },
  {
    id: "pan",
    num: "03",
    icon: CreditCard,
    title: "PAN Card Verification",
    subtitle: "Instant NSDL Validation • Cross-Match",
    color: "#f59e0b",
    description: "Real-time PAN verification against NSDL/UTI databases. Automatic name matching with Aadhaar to catch discrepancies. Validates PAN status instantly.",
    features: [
      "Real-time NSDL/UTI database lookup",
      "Auto name-match with Aadhaar data (fuzzy matching)",
      "PAN status validation (active/inactive/deactivated)",
      "Prevents duplicate PAN registrations across fleets",
    ],
    mockup: "pan",
  },
  {
    id: "bank",
    num: "04",
    icon: Landmark,
    title: "Bank Account Verification",
    subtitle: "Penny Drop • Instant Validation",
    color: "#06b6d4",
    description: "Penny-drop verification to confirm bank account ownership. We deposit ₹1 and verify the registered name matches the KYC profile. All major banks via IMPS.",
    features: [
      "Penny-drop verification (₹1 test deposit)",
      "IFSC code auto-detection & validation",
      "Name match with KYC profile (98%+ accuracy)",
      "All major banks supported via IMPS/NEFT",
    ],
    mockup: "bank",
  },
  {
    id: "references",
    num: "05",
    icon: Users,
    title: "References Verification",
    subtitle: "OTP-Verified Contacts • Simple & Reliable",
    color: "#ec4899",
    description: "Drivers provide 2-3 reference phone numbers. Each reference receives an OTP via DLT SMS — they verify their number and confirm they know the driver. Simple, tamper-proof, zero manual effort.",
    features: [
      "Driver submits 2-3 reference phone numbers",
      "Each reference receives an OTP to verify their number",
      "One-tap confirmation that they know the driver",
      "Unverified references flagged for admin review",
    ],
    mockup: "references",
  },
];

function OTPMockup() {
  return (
    <div className="bg-zinc-900/80 border border-white/[0.06] rounded-2xl p-5 w-full max-w-[320px] mx-auto">
      <div className="text-center mb-5">
        <div className="w-14 h-14 rounded-2xl bg-[#cd1d1d]/15 border border-[#cd1d1d]/20 flex items-center justify-center mx-auto mb-3">
          <Smartphone className="w-7 h-7 text-[#cd1d1d]" />
        </div>
        <div className="text-sm text-white" style={{ fontWeight: 600 }}>Verify Phone Number</div>
        <div className="text-xs text-gray-500 mt-1">OTP sent to +91 •••••67890</div>
      </div>
      <div className="flex items-center justify-center gap-2 mb-4">
        {["4", "7", "2", "9", "●", "●"].map((d, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.08, type: "spring" }}
            className={`w-10 h-12 rounded-lg flex items-center justify-center text-lg font-bold ${d === "●" ? "bg-white/[0.03] border border-white/[0.08] text-gray-600" : "bg-white/[0.06] border border-white/[0.1] text-white"}`}
          >
            {d}
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-between px-1 mb-4">
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <Clock className="w-3 h-3" />
          <span>Resend in 0:28</span>
        </div>
        <span className="text-[10px] text-gray-600">Voice fallback available</span>
      </div>
      <div className="bg-emerald-500/10 border border-emerald-500/15 rounded-lg p-2.5 flex items-center gap-2">
        <Lock className="w-3.5 h-3.5 text-emerald-400" />
        <div>
          <div className="text-[10px] text-emerald-400" style={{ fontWeight: 500 }}>DLT-Registered Template</div>
          <div className="text-[9px] text-gray-500">TRAI compliant • Entity ID: 11016XXXXX</div>
        </div>
      </div>
    </div>
  );
}

function AadhaarMockup() {
  return (
    <div className="bg-zinc-900/80 border border-white/[0.06] rounded-2xl p-5 w-full max-w-[320px] mx-auto">
      <div className="text-center mb-4">
        <div className="w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center mx-auto mb-3">
          <Fingerprint className="w-7 h-7 text-purple-400" />
        </div>
        <div className="text-sm text-white" style={{ fontWeight: 600 }}>Aadhaar via DigiLocker</div>
      </div>
      <div className="bg-gradient-to-br from-blue-600/15 to-purple-600/15 border border-blue-500/15 rounded-xl p-4 mb-3">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center">
            <Lock className="w-3.5 h-3.5 text-blue-300" />
          </div>
          <span className="text-[11px] text-blue-300" style={{ fontWeight: 600 }}>DigiLocker</span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-[9px] bg-emerald-500/15 text-emerald-400 px-1.5 py-0.5 rounded ml-auto"
          >
            Connected
          </motion.span>
        </div>
        <div className="space-y-2.5">
          {[
            { label: "Name", value: "Rajesh Kumar" },
            { label: "Aadhaar", value: "XXXX XXXX 7890" },
            { label: "DOB", value: "15/03/1995" },
            { label: "Address", value: "Koramangala, Bangalore" },
          ].map((r, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-[11px] text-gray-500">{r.label}</span>
              <span className="text-[11px] text-white">{r.value}</span>
            </div>
          ))}
          <div className="flex items-center justify-between pt-1 border-t border-white/[0.04]">
            <span className="text-[11px] text-gray-500">Status</span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="text-[10px] text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full flex items-center gap-1"
            >
              <CheckCircle className="w-3 h-3" /> Verified
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PANMockup() {
  return (
    <div className="bg-zinc-900/80 border border-white/[0.06] rounded-2xl p-5 w-full max-w-[320px] mx-auto">
      <div className="text-center mb-4">
        <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center mx-auto mb-3">
          <CreditCard className="w-7 h-7 text-amber-400" />
        </div>
        <div className="text-sm text-white" style={{ fontWeight: 600 }}>PAN Verification</div>
      </div>
      <div className="bg-gradient-to-br from-amber-600/10 to-orange-600/10 border border-amber-500/12 rounded-xl p-4 mb-3">
        <div className="text-center mb-3">
          <div className="text-xs text-gray-500 mb-1">PAN Number</div>
          <div className="text-xl text-white tracking-[0.15em]" style={{ fontWeight: 700 }}>ABCPR1234K</div>
        </div>
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-gray-500">Name on PAN</span>
            <span className="text-[11px] text-white">Rajesh Kumar</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-gray-500">Aadhaar Match</span>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-1"
            >
              <CheckCircle className="w-3 h-3 text-emerald-400" />
              <span className="text-[10px] text-emerald-400">98% match</span>
            </motion.div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-gray-500">Status</span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full">Active</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-gray-500">Type</span>
            <span className="text-[11px] text-white">Individual</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BankMockup() {
  return (
    <div className="bg-zinc-900/80 border border-white/[0.06] rounded-2xl p-5 w-full max-w-[320px] mx-auto">
      <div className="text-center mb-4">
        <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center mx-auto mb-3">
          <Landmark className="w-7 h-7 text-cyan-400" />
        </div>
        <div className="text-sm text-white" style={{ fontWeight: 600 }}>Bank Verification</div>
      </div>
      <div className="bg-gradient-to-br from-cyan-600/10 to-blue-600/10 border border-cyan-500/12 rounded-xl p-4 mb-3">
        <div className="space-y-2.5">
          <div>
            <div className="text-[10px] text-gray-500 mb-0.5">Account Number</div>
            <div className="text-sm text-white" style={{ fontWeight: 500 }}>•••• •••• •••• 4521</div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-gray-500">IFSC</span>
            <span className="text-[11px] text-white font-mono">SBIN0001234</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-gray-500">Bank</span>
            <span className="text-[11px] text-white">State Bank of India</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="bg-emerald-500/10 border border-emerald-500/12 rounded-lg p-2.5 flex items-center gap-2"
          >
            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <div>
              <div className="text-[10px] text-emerald-400" style={{ fontWeight: 500 }}>Penny drop successful</div>
              <div className="text-[9px] text-gray-500">₹1.00 deposited • Name matched</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ReferencesMockup() {
  return (
    <div className="bg-zinc-900/80 border border-white/[0.06] rounded-2xl p-5 w-full max-w-[320px] mx-auto">
      <div className="text-center mb-4">
        <div className="w-14 h-14 rounded-2xl bg-pink-500/15 border border-pink-500/20 flex items-center justify-center mx-auto mb-3">
          <Users className="w-7 h-7 text-pink-400" />
        </div>
        <div className="text-sm text-white" style={{ fontWeight: 600 }}>Reference Verification</div>
        <div className="text-xs text-gray-500 mt-1">OTP sent to each reference</div>
      </div>
      <div className="space-y-2">
        {[
          { name: "Suresh Yadav", phone: "+91 •••••12345", relation: "Former employer", status: "verified" },
          { name: "Meera Devi", phone: "+91 •••••67890", relation: "Family", status: "verified" },
          { name: "Arjun Singh", phone: "+91 •••••54321", relation: "Co-worker", status: "pending" },
        ].map((ref, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.12 }}
            className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-3"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-pink-500/15 flex items-center justify-center text-[9px] text-pink-300" style={{ fontWeight: 600 }}>
                  {ref.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-[11px] text-white" style={{ fontWeight: 500 }}>{ref.name}</div>
                  <div className="text-[9px] text-gray-600">{ref.phone}</div>
                </div>
              </div>
              {ref.status === "verified" ? (
                <span className="text-[9px] text-emerald-400 bg-emerald-500/15 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                  <CheckCircle className="w-2.5 h-2.5" /> OTP ✓
                </span>
              ) : (
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-[9px] text-amber-400 bg-amber-500/15 px-1.5 py-0.5 rounded-full"
                >
                  OTP Sent
                </motion.span>
              )}
            </div>
            <div className="text-[10px] text-gray-500 ml-8">{ref.relation}</div>
          </motion.div>
        ))}
      </div>
      <div className="mt-3 bg-white/[0.02] border border-white/[0.04] rounded-lg p-2.5 flex items-center justify-between px-3">
        <span className="text-[10px] text-gray-500">Verified</span>
        <span className="text-sm font-bold text-pink-400">2<span className="text-xs text-gray-600"> / 3</span></span>
      </div>
    </div>
  );
}

const mockupComponents = {
  otp: <OTPMockup />,
  aadhaar: <AadhaarMockup />,
  pan: <PANMockup />,
  bank: <BankMockup />,
  references: <ReferencesMockup />,
};

function PipelineSection() {
  return (
    <section id="pipeline" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">Verification Pipeline</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Five automated{" "}
            <span className="bg-gradient-to-r from-[#cd1d1d] to-[#ff4444] bg-clip-text text-transparent">
              verification layers
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[550px] mx-auto">
            Each layer runs independently and feeds results into the final admin approval dashboard.
          </p>
        </motion.div>

        <div className="space-y-6">
          {verificationSteps.map((step, idx) => {
            const Icon = step.icon;
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="bg-white/[0.015] border border-white/[0.06] rounded-3xl overflow-hidden hover:border-white/[0.1] transition-all">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className={`p-7 sm:p-10 flex flex-col justify-center ${!isEven ? "lg:order-2" : ""}`}>
                      <div className="flex items-center gap-3 mb-5">
                        <span className="text-5xl font-bold text-white/[0.05] select-none">{step.num}</span>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${step.color}12` }}>
                          <Icon className="w-5 h-5" style={{ color: step.color }} />
                        </div>
                      </div>
                      <h3 className="text-2xl sm:text-3xl text-white mb-2" style={{ fontWeight: 700 }}>{step.title}</h3>
                      <p className="text-sm text-gray-500 mb-4" style={{ fontWeight: 500 }}>{step.subtitle}</p>
                      <p className="text-gray-400 leading-relaxed mb-7 max-w-[480px]">{step.description}</p>
                      <div className="space-y-2.5">
                        {step.features.map((f, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 + i * 0.06 }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: step.color }} />
                            <span className="text-sm text-gray-300">{f}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div className={`p-7 sm:p-10 flex items-center justify-center bg-white/[0.01] border-t lg:border-t-0 ${!isEven ? "lg:order-1 lg:border-r border-white/[0.04]" : "lg:border-l border-white/[0.04]"}`}>
                      {mockupComponents[step.mockup]}
                    </div>
                  </div>
                </div>
                {idx < verificationSteps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: 24 }}
                      viewport={{ once: true }}
                      className="w-px bg-gradient-to-b from-white/[0.08] to-transparent"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── ADMIN APPROVAL — Full dedicated section ──────────
function AdminApprovalSection() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section id="admin-approval" className="relative py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[250px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/15 rounded-full px-4 py-2 mb-6">
            <BadgeCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Step 06 — Final Layer</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Admin Approval
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[600px] mx-auto">
            All five verification layers feed into one powerful admin console. See every result
            at a glance. One-click approve or reject with a complete audit trail.
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent rounded-[2rem] blur-[40px] pointer-events-none" />

            <div className="relative bg-gradient-to-b from-zinc-900/90 to-zinc-950/95 border border-white/[0.08] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/5 backdrop-blur-xl">
              {/* Window chrome */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="hidden sm:flex items-center gap-2 bg-white/[0.04] rounded-lg px-3 py-1.5">
                  <Lock className="w-3 h-3 text-gray-500" />
                  <span className="text-[11px] text-gray-500">dash-mobility.app/admin/kyc/review</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-gray-600" />
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-[9px] text-white" style={{ fontWeight: 700 }}>AK</div>
                </div>
              </div>

              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 py-3 border-b border-white/[0.06] gap-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-sm text-white" style={{ fontWeight: 600 }}>KYC Review</h3>
                  <span className="text-[10px] bg-amber-500/15 text-amber-400 px-2 py-0.5 rounded-full" style={{ fontWeight: 600 }}>3 Pending</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-1.5">
                    <Search className="w-3 h-3 text-gray-500" />
                    <span className="text-[11px] text-gray-600">Search drivers...</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/[0.04] border border-white/[0.06] rounded-lg px-2.5 py-1.5">
                    <span className="text-[11px] text-gray-400">Filter</span>
                    <ChevronDown className="w-3 h-3 text-gray-500" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] divide-y lg:divide-y-0 lg:divide-x divide-white/[0.05]">
                {/* Left sidebar — Queue */}
                <div className="p-4">
                  <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-3" style={{ fontWeight: 600 }}>Review Queue</div>
                  <div className="space-y-2">
                    {[
                      { name: "Rajesh Kumar", city: "Bangalore", checks: "5/5", status: "ready", time: "2m ago" },
                      { name: "Priya Sharma", city: "Delhi", checks: "4/5", status: "flagged", time: "15m ago" },
                      { name: "Amit Singh", city: "Mumbai", checks: "5/5", status: "ready", time: "1h ago" },
                    ].map((driver, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className={`p-3 rounded-xl cursor-pointer transition-all ${i === 0 ? "bg-emerald-500/10 border border-emerald-500/15" : "bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04]"}`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2.5">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] text-white ${i === 0 ? "bg-gradient-to-br from-emerald-500 to-cyan-500" : "bg-white/[0.08]"}`} style={{ fontWeight: 600 }}>
                              {driver.name.split(" ").map((n) => n[0]).join("")}
                            </div>
                            <div>
                              <div className="text-[12px] text-white" style={{ fontWeight: 500 }}>{driver.name}</div>
                              <div className="text-[10px] text-gray-500 flex items-center gap-1">
                                <MapPin className="w-2.5 h-2.5" />{driver.city}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`text-[10px] ${driver.checks === "5/5" ? "text-emerald-400" : "text-amber-400"}`} style={{ fontWeight: 600 }}>{driver.checks}</div>
                            <div className="text-[9px] text-gray-600">checks</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] text-gray-600">{driver.time}</span>
                          {driver.status === "flagged" ? (
                            <span className="text-[9px] bg-amber-500/15 text-amber-400 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                              <AlertTriangle className="w-2.5 h-2.5" />Incomplete
                            </span>
                          ) : (
                            <span className="text-[9px] bg-emerald-500/15 text-emerald-400 px-1.5 py-0.5 rounded-full">Ready</span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right — Detail View */}
                <div className="p-4 sm:p-5">
                  {/* Driver header */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-lg text-white" style={{ fontWeight: 700 }}>RK</div>
                      <div>
                        <div className="text-lg text-white" style={{ fontWeight: 700 }}>Rajesh Kumar</div>
                        <div className="text-xs text-gray-500 flex items-center gap-2 mt-0.5">
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />Koramangala, Bangalore</span>
                          <span className="text-gray-700">•</span>
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />Applied 2h ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-1.5 bg-emerald-500 text-white text-xs px-5 py-2.5 rounded-lg hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
                        style={{ fontWeight: 600 }}
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        Approve
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-1.5 bg-white/[0.05] border border-white/[0.08] text-gray-400 text-xs px-5 py-2.5 rounded-lg hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20 transition-all"
                        style={{ fontWeight: 500 }}
                      >
                        <ThumbsDown className="w-3.5 h-3.5" />
                        Reject
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.05] rounded-xl p-1 mb-5">
                    {["overview", "documents", "timeline"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-[11px] px-4 py-2 rounded-lg transition-all capitalize ${activeTab === tab ? "bg-white/[0.08] text-white" : "text-gray-500 hover:text-gray-300"}`}
                        style={{ fontWeight: activeTab === tab ? 600 : 400 }}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Tab content */}
                  <AnimatePresence mode="wait">
                    {activeTab === "overview" && (
                      <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Verification layers */}
                          <div className="space-y-2">
                            <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-2" style={{ fontWeight: 600 }}>Verification Layers</div>
                            {[
                              { label: "Phone (OTP)", icon: Smartphone, color: "#cd1d1d", status: "passed", detail: "+91 98765 67890" },
                              { label: "Aadhaar (DigiLocker)", icon: Fingerprint, color: "#8b5cf6", status: "passed", detail: "XXXX XXXX 7890" },
                              { label: "PAN Card", icon: CreditCard, color: "#f59e0b", status: "passed", detail: "ABCPR1234K • 98% match" },
                              { label: "Bank Account", icon: Landmark, color: "#06b6d4", status: "passed", detail: "SBI •••4521 • Penny drop ✓" },
                              { label: "References (2/3)", icon: Users, color: "#ec4899", status: "warning", detail: "1 OTP pending" },
                            ].map((layer, i) => {
                              const LIcon = layer.icon;
                              return (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.1 + i * 0.06 }}
                                  className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.05] rounded-xl p-3 hover:bg-white/[0.04] transition-colors"
                                >
                                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${layer.color}15` }}>
                                    <LIcon className="w-4 h-4" style={{ color: layer.color }} />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-[11px] text-white" style={{ fontWeight: 500 }}>{layer.label}</div>
                                    <div className="text-[10px] text-gray-500 truncate">{layer.detail}</div>
                                  </div>
                                  {layer.status === "passed" ? (
                                    <CircleCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                  ) : (
                                    <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                                  )}
                                </motion.div>
                              );
                            })}
                          </div>

                          {/* Verification Summary */}
                          <div>
                            <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-2" style={{ fontWeight: 600 }}>Verification Summary</div>

                            {/* Overall Status */}
                            <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/15 rounded-xl p-4 mb-3 text-center">
                              <div className="flex items-center justify-center gap-2 mb-2">
                                <BadgeCheck className="w-5 h-5 text-emerald-400" />
                                <span className="text-sm text-white" style={{ fontWeight: 600 }}>Ready for Review</span>
                              </div>
                              <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="text-4xl font-bold text-emerald-400"
                              >
                                5<span className="text-lg text-gray-500"> / 5</span>
                              </motion.div>
                              <div className="text-xs text-gray-500 mt-1">checks passed — <span className="text-amber-400">1 ref pending OTP</span></div>
                            </div>

                            {/* Driver Details */}
                            <div className="space-y-2">
                              {[
                                { label: "Full Name", value: "Rajesh Kumar" },
                                { label: "Phone", value: "+91 98765 67890" },
                                { label: "Aadhaar Address", value: "Koramangala, Bangalore" },
                                { label: "PAN Status", value: "Active • Individual" },
                                { label: "Bank", value: "SBI — Koramangala Branch" },
                              ].map((detail, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0 }}
                                  whileInView={{ opacity: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.6 + i * 0.05 }}
                                  className="bg-white/[0.02] rounded-lg p-2.5 flex items-center justify-between"
                                >
                                  <span className="text-[10px] text-gray-500">{detail.label}</span>
                                  <span className="text-[10px] text-white" style={{ fontWeight: 500 }}>{detail.value}</span>
                                </motion.div>
                              ))}
                            </div>

                            {/* References detail */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 1 }}
                              className="mt-3 bg-white/[0.02] border border-white/[0.04] rounded-xl p-3"
                            >
                              <div className="flex items-start gap-2">
                                <Users className="w-3.5 h-3.5 text-pink-400 mt-0.5 flex-shrink-0" />
                                <div>
                                  <div className="text-[10px] text-pink-300" style={{ fontWeight: 600 }}>References</div>
                                  <div className="text-[10px] text-gray-500 leading-relaxed mt-0.5">
                                    Suresh Yadav (employer) — <span className="text-emerald-400">OTP verified</span><br />
                                    Meera Devi (family) — <span className="text-emerald-400">OTP verified</span><br />
                                    Arjun Singh (co-worker) — <span className="text-amber-400">OTP pending</span>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "documents" && (
                      <motion.div key="documents" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            { title: "Aadhaar Card", source: "DigiLocker", status: "Verified", color: "#8b5cf6", icon: Fingerprint },
                            { title: "PAN Card", source: "NSDL Database", status: "Verified", color: "#f59e0b", icon: CreditCard },
                            { title: "Bank Passbook", source: "Penny Drop", status: "Verified", color: "#06b6d4", icon: Landmark },
                            { title: "Driving License", source: "Parivahan", status: "Verified", color: "#cd1d1d", icon: FileText },
                            { title: "Selfie / Liveness", source: "Camera Check", status: "Verified", color: "#22c55e", icon: Eye },
                            { title: "Address Proof", source: "DigiLocker", status: "Verified", color: "#ec4899", icon: MapPin },
                          ].map((doc, i) => {
                            const DIcon = doc.icon;
                            return (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.06 }}
                                className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 flex items-center gap-3 hover:bg-white/[0.04] transition-colors"
                              >
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${doc.color}12` }}>
                                  <DIcon className="w-5 h-5" style={{ color: doc.color }} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-[12px] text-white" style={{ fontWeight: 500 }}>{doc.title}</div>
                                  <div className="text-[10px] text-gray-500">Source: {doc.source}</div>
                                </div>
                                <div className="text-[9px] text-emerald-400 bg-emerald-500/15 px-2 py-1 rounded-full flex items-center gap-1 flex-shrink-0">
                                  <CheckCircle className="w-2.5 h-2.5" />
                                  {doc.status}
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "timeline" && (
                      <motion.div key="timeline" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                        <div className="space-y-0">
                          {[
                            { time: "Today, 2:34 PM", event: "Application submitted by driver", icon: Send, color: "#cd1d1d" },
                            { time: "Today, 2:34 PM", event: "OTP verified (+91 98765 67890)", icon: Smartphone, color: "#cd1d1d" },
                            { time: "Today, 2:35 PM", event: "Aadhaar fetched from DigiLocker", icon: Fingerprint, color: "#8b5cf6" },
                            { time: "Today, 2:35 PM", event: "PAN verified via NSDL — 98% name match", icon: CreditCard, color: "#f59e0b" },
                            { time: "Today, 2:36 PM", event: "Bank account verified — Penny drop successful", icon: Landmark, color: "#06b6d4" },
                            { time: "Today, 2:36 PM", event: "Reference OTPs sent to 3 contacts", icon: Users, color: "#ec4899" },
                            { time: "Today, 2:37 PM", event: "Reference 1 (Suresh Yadav) — OTP verified", icon: CheckCircle, color: "#ec4899" },
                            { time: "Today, 2:38 PM", event: "Reference 2 (Meera Devi) — OTP verified", icon: CheckCircle, color: "#ec4899" },
                            { time: "Now", event: "Awaiting admin approval (1 ref OTP pending)", icon: Clock, color: "#f59e0b" },
                          ].map((entry, i) => {
                            const EIcon = entry.icon;
                            return (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: i * 0.06 }}
                                className="flex items-start gap-3 relative"
                              >
                                {/* Vertical line */}
                                {i < 8 && <div className="absolute left-[13px] top-[28px] w-px h-full bg-white/[0.05]" />}
                                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 z-10" style={{ backgroundColor: `${entry.color}15` }}>
                                  <EIcon className="w-3.5 h-3.5" style={{ color: entry.color }} />
                                </div>
                                <div className="pb-4 flex-1">
                                  <div className="text-[11px] text-white" style={{ fontWeight: 500 }}>{entry.event}</div>
                                  <div className="text-[10px] text-gray-600 mt-0.5">{entry.time}</div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Admin Notes */}
                  <div className="mt-5 border-t border-white/[0.05] pt-4">
                    <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.05] rounded-xl px-4 py-2.5">
                      <MessageSquare className="w-4 h-4 text-gray-600" />
                      <input type="text" placeholder="Add a note before approving..." className="flex-1 bg-transparent text-[12px] text-gray-300 placeholder-gray-600 outline-none" readOnly />
                      <Send className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-400 transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature callouts below dashboard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {[
            { icon: CheckCircle, title: "One-Glance Review", desc: "See all 5 verification results on a single screen — no switching tabs", color: "#8b5cf6" },
            { icon: History, title: "Full Audit Trail", desc: "Every verification step, timestamp, and admin action is permanently logged", color: "#06b6d4" },
            { icon: Bell, title: "Smart Alerts", desc: "Get notified when applications are ready or have incomplete checks", color: "#f59e0b" },
            { icon: Shield, title: "Role-Based Access", desc: "Only authorized admins can approve — configurable per fleet", color: "#22c55e" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-5 hover:border-white/[0.1] transition-all"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${item.color}12` }}>
                  <Icon className="w-4.5 h-4.5" style={{ color: item.color }} />
                </div>
                <h4 className="text-sm text-white mb-1" style={{ fontWeight: 600 }}>{item.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Comparison Table ─────────────────────────────────
function ComparisonSection() {
  const rows = [
    { feature: "Verification Time", dash: "<5 minutes", manual: "2-5 days", industry: "4-24 hours" },
    { feature: "Cost per Driver", dash: "₹15", manual: "₹500+", industry: "₹150-300" },
    { feature: "Accuracy Rate", dash: "99.7%", manual: "~70%", industry: "90-95%" },
    { feature: "Document Uploads", dash: "Zero (DigiLocker)", manual: "5-8 photos", industry: "3-5 photos" },
    { feature: "Fraud Prevention", dash: "Multi-layer cross-check", manual: "Manual review", industry: "Basic checks" },
    { feature: "Audit Trail", dash: "Automatic", manual: "None", industry: "Partial" },
    { feature: "Reference Checks", dash: "OTP-verified", manual: "Phone calls", industry: "Not included" },
    { feature: "Bank Verification", dash: "Penny drop (instant)", manual: "Cheque copy", industry: "1-2 days" },
  ];

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
            How we{" "}
            <span className="bg-gradient-to-r from-[#cd1d1d] to-[#ff4444] bg-clip-text text-transparent">
              compare
            </span>
          </h2>
          <p className="text-lg text-gray-400">Dash KYC vs manual processes vs industry alternatives</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-4 gap-0 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="p-4 text-[11px] text-gray-500 uppercase tracking-wider" style={{ fontWeight: 600 }}>Feature</div>
            <div className="p-4 text-[11px] text-emerald-400 uppercase tracking-wider text-center" style={{ fontWeight: 600 }}>
              <div className="flex items-center justify-center gap-1.5">
                <Zap className="w-3 h-3" />
                Dash KYC
              </div>
            </div>
            <div className="p-4 text-[11px] text-gray-500 uppercase tracking-wider text-center" style={{ fontWeight: 600 }}>Manual</div>
            <div className="p-4 text-[11px] text-gray-500 uppercase tracking-wider text-center" style={{ fontWeight: 600 }}>Industry</div>
          </div>
          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`grid grid-cols-4 gap-0 ${i < rows.length - 1 ? "border-b border-white/[0.04]" : ""} hover:bg-white/[0.02] transition-colors`}
            >
              <div className="p-3 sm:p-4 text-[12px] text-gray-300" style={{ fontWeight: 500 }}>{row.feature}</div>
              <div className="p-3 sm:p-4 text-[12px] text-emerald-400 text-center" style={{ fontWeight: 500 }}>{row.dash}</div>
              <div className="p-3 sm:p-4 text-[12px] text-gray-600 text-center">{row.manual}</div>
              <div className="p-3 sm:p-4 text-[12px] text-gray-500 text-center">{row.industry}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Security Section ─────────────────────────────────
function SecuritySection() {
  return (
    <section id="security" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Enterprise-grade{" "}
            <span className="bg-gradient-to-r from-[#cd1d1d] to-[#ff4444] bg-clip-text text-transparent">
              security
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[500px] mx-auto">
            Your drivers' data is protected with the same standards used by banks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Lock, title: "AES-256 Encryption", desc: "All data encrypted at rest and in transit", color: "#cd1d1d" },
            { icon: Shield, title: "SOC 2 Type II", desc: "Fully compliant security framework", color: "#8b5cf6" },
            { icon: Landmark, title: "India Data Residency", desc: "All data stored on Indian servers only", color: "#06b6d4" },
            { icon: Eye, title: "GDPR & DPDP Ready", desc: "Compliant with Indian data protection laws", color: "#f59e0b" },
            { icon: FileCheck, title: "Audit Trail", desc: "Every verification step is logged permanently", color: "#ec4899" },
            { icon: UserCheck, title: "Role-Based Access", desc: "Only authorized admins can approve KYC", color: "#22c55e" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.1] transition-all"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${item.color}12` }}>
                  <Icon className="w-4.5 h-4.5" style={{ color: item.color }} />
                </div>
                <h3 className="text-sm text-white mb-1" style={{ fontWeight: 600 }}>{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── KYC CTA ──────────────────────────────────────────
function KYCCTA() {
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
            className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/15 border border-emerald-500/20 rounded-2xl mb-8"
          >
            <BadgeCheck className="w-7 h-7 text-emerald-400" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05]">
            Verify drivers in
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              under 5 minutes
            </span>
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-[500px] mx-auto">
            Stop losing time on manual verification. Let Dash handle KYC end-to-end.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white text-black px-10 py-4 rounded-full flex items-center gap-2 shadow-2xl shadow-white/10"
              style={{ fontWeight: 500, fontSize: "15px" }}
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <Link
              to="/"
              className="bg-white/[0.05] border border-white/[0.08] text-white px-10 py-4 rounded-full hover:bg-white/[0.1] transition-all text-[15px] text-center"
              style={{ fontWeight: 500 }}
            >
              Back to Home
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-8 text-sm text-gray-500">
            {["No credit card required", "Setup in 5 minutes", "Cancel anytime"].map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <div className="w-1 h-1 bg-emerald-400 rounded-full" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────
function KYCFooter() {
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
export default function KYCPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-clip" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* Grain overlay */}
      <div
        className="fixed inset-0 z-[100] pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <KYCHero />
      <PipelineSection />
      <AdminApprovalSection />
      <ComparisonSection />
      <SecuritySection />
      <KYCCTA />
    </div>
  );
}