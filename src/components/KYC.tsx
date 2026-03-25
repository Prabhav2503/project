import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Zap, ArrowRight, ArrowLeft, Shield, Fingerprint, CreditCard, Landmark, Users,
    CheckCircle, MessageSquare, Clock, Lock, BadgeCheck, Smartphone, Eye, FileCheck,
    UserCheck, ArrowDown, Sparkles, Menu, X, AlertTriangle, History, ThumbsUp,
    ThumbsDown, Search, Bell, ChevronDown, MapPin, Calendar, FileText, Send, CircleCheck,
} from "lucide-react";

// ─── Nav ──────────────────────────────────────────────
function KYCNav() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));
    return (
        <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-500 ${scrolled ? "py-2.5 bg-black/70 backdrop-blur-2xl border-b border-white/[0.06]" : "py-4 sm:py-5"}`}>
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
                        <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-[13px] text-gray-400 hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/[0.06]">{item}</a>
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
                            {["Pipeline", "Admin Approval", "Security"].map((item) => (
                                <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="block text-gray-300 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all text-sm" onClick={() => setMobileOpen(false)}>{item}</a>
                            ))}
                            <Link to="/" className="block text-gray-300 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all text-sm" onClick={() => setMobileOpen(false)}>← Back to Home</Link>
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
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="max-w-[900px] mx-auto mt-16">
            <div className="hidden sm:flex items-center justify-center">
                {flowSteps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                        <div key={i} className="flex items-center">
                            <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.4 + i * 0.12, type: "spring", stiffness: 200 }} className="flex flex-col items-center gap-2">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all hover:scale-110" style={{ backgroundColor: `${step.color}12`, borderColor: `${step.color}30` }}>
                                    <Icon className="w-6 h-6" style={{ color: step.color }} />
                                </div>
                                <span className="text-[11px] text-gray-500" style={{ fontWeight: 500 }}>{step.label}</span>
                            </motion.div>
                            {i < flowSteps.length - 1 && (
                                <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 1.5 + i * 0.12, duration: 0.4 }} className="w-8 lg:w-14 h-px bg-gradient-to-r from-white/[0.1] to-white/[0.05] mx-1 mb-6 origin-left" />
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="sm:hidden grid grid-cols-3 gap-4">
                {flowSteps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                        <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4 + i * 0.1, type: "spring" }} className="flex flex-col items-center gap-1.5">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center border" style={{ backgroundColor: `${step.color}12`, borderColor: `${step.color}30` }}>
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
            <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-[#cd1d1d] rounded-full blur-[200px] pointer-events-none" />
            <motion.div animate={{ scale: [1.1, 1, 1.1], opacity: [0.06, 0.1, 0.06] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-emerald-600 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_75%)] pointer-events-none" />
            <div className="max-w-[900px] mx-auto text-center relative z-10">
                <motion.div initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.2, duration: 0.8 }} className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/15 rounded-full px-4 py-2 mb-8">
                    <div className="relative">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                        <div className="absolute inset-0 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                    </div>
                    <span className="text-[13px] text-emerald-300">State-of-the-Art Verification Pipeline</span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 30, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="text-[clamp(2.5rem,7vw,5rem)] font-bold text-white leading-[1.05] tracking-tight mb-2">
                    Six layers of trust.
                </motion.h1>
                <motion.h1 initial={{ opacity: 0, y: 30, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.55, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.05] tracking-tight mb-6">
                    <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Zero compromises.</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="text-base sm:text-lg text-gray-400 mb-10 max-w-[600px] mx-auto leading-relaxed">
                    Every driver is verified through OTP, Aadhaar via DigiLocker, PAN, bank account & references — before they touch a single vehicle. All automated. All instant.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
                    <button className="group bg-[#cd1d1d] text-white px-7 py-3.5 rounded-full hover:bg-[#b11919] transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2 shadow-xl shadow-[#cd1d1d]/25 text-[15px]" style={{ fontWeight: 500 }}>
                        Try KYC Module Free <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="bg-white/[0.04] border border-white/[0.08] text-white px-7 py-3.5 rounded-full hover:bg-white/[0.08] transition-all text-[15px]" style={{ fontWeight: 500 }}>See API Docs</button>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="flex flex-wrap items-center justify-center gap-x-1 gap-y-3 mt-8">
                    {[{ value: "<2 min", label: "Avg. verification" }, { value: "99.7%", label: "Accuracy rate" }, { value: "₹0.50", label: "Per OTP (DLT)" }, { value: "50K+", label: "Drivers verified" }].map((s, i) => (
                        <div key={i} className="text-center px-5 py-3 bg-white/[0.02] border border-white/[0.04] rounded-2xl">
                            <div className="text-lg sm:text-xl font-bold text-white">{s.value}</div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">{s.label}</div>
                        </div>
                    ))}
                </motion.div>
                <PipelineFlowVisual />
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="flex justify-center mt-14">
                <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                    <ArrowDown className="w-5 h-5 text-gray-600" />
                </motion.div>
            </motion.div>
        </section>
    );
}

// ─── Verification Steps Data ──────────────────────────
const verificationSteps = [
    { id: "otp", num: "01", icon: Smartphone, title: "OTP Verification", subtitle: "DLT-Registered • Low Cost • High Delivery", color: "#cd1d1d", description: "Phone number verification via DLT-registered SMS gateway. Pre-approved templates bypass spam filters, ensuring 99.5% delivery at a fraction of the cost.", features: ["DLT-compliant templates — zero spam filtering", "₹0.50/OTP vs ₹1.50 industry average (67% cheaper)", "99.5% delivery across all Indian carriers", "Auto-retry with voice OTP fallback"], mockup: "otp" },
    { id: "aadhaar", num: "02", icon: Fingerprint, title: "Aadhaar Verification", subtitle: "DigiLocker Integration • No Physical Docs", color: "#8b5cf6", description: "Direct DigiLocker integration for Aadhaar verification. Drivers authenticate via their DigiLocker — no document uploads needed. UIDAI-compliant with masked Aadhaar.", features: ["Direct DigiLocker API — no document uploads", "Masked Aadhaar for privacy compliance", "Liveness detection to prevent spoofing", "Real-time UIDAI validation & address fetch"], mockup: "aadhaar" },
    { id: "pan", num: "03", icon: CreditCard, title: "PAN Card Verification", subtitle: "Instant NSDL Validation • Cross-Match", color: "#f59e0b", description: "Real-time PAN verification against NSDL/UTI databases. Automatic name matching with Aadhaar to catch discrepancies. Validates PAN status instantly.", features: ["Real-time NSDL/UTI database lookup", "Auto name-match with Aadhaar data (fuzzy matching)", "PAN status validation (active/inactive/deactivated)", "Prevents duplicate PAN registrations across fleets"], mockup: "pan" },
    { id: "bank", num: "04", icon: Landmark, title: "Bank Account Verification", subtitle: "Penny Drop • Instant Validation", color: "#06b6d4", description: "Penny-drop verification to confirm bank account ownership. We deposit ₹1 and verify the registered name matches the KYC profile. All major banks via IMPS.", features: ["Penny-drop verification (₹1 test deposit)", "IFSC code auto-detection & validation", "Name match with KYC profile (98%+ accuracy)", "All major banks supported via IMPS/NEFT"], mockup: "bank" },
    { id: "references", num: "05", icon: Users, title: "References Verification", subtitle: "OTP-Verified Contacts • Simple & Reliable", color: "#ec4899", description: "Drivers provide 2-3 reference phone numbers. Each reference receives an OTP via DLT SMS — they verify their number and confirm they know the driver.", features: ["Driver submits 2-3 reference phone numbers", "Each reference receives an OTP to verify their number", "One-tap confirmation that they know the driver", "Unverified references flagged for admin review"], mockup: "references" },
];

// ─── Mockup Components ────────────────────────────────
function OTPMockup() {
    return (
        <div className="bg-zinc-900/80 border border-white/[0.06] rounded-2xl p-5 w-full max-w-[320px] mx-auto">
            <div className="text-center mb-5">
                <div className="w-14 h-14 rounded-2xl bg-[#cd1d1d]/15 border border-[#cd1d1d]/20 flex items-center justify-center mx-auto mb-3"><Smartphone className="w-7 h-7 text-[#cd1d1d]" /></div>
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>Verify Phone Number</div>
                <div className="text-xs text-gray-500 mt-1">OTP sent to +91 •••••67890</div>
            </div>
            <div className="flex items-center justify-center gap-2 mb-4">
                {["4", "7", "2", "9", "●", "●"].map((d, i) => (
                    <motion.div key={i} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.08, type: "spring" }}
                        className={`w-10 h-12 rounded-lg flex items-center justify-center text-lg font-bold ${d === "●" ? "bg-white/[0.03] border border-white/[0.08] text-gray-600" : "bg-white/[0.06] border border-white/[0.1] text-white"}`}>{d}</motion.div>
                ))}
            </div>
            <div className="flex items-center justify-between px-1 mb-4">
                <div className="flex items-center gap-1.5 text-xs text-gray-500"><Clock className="w-3 h-3" /><span>Resend in 0:28</span></div>
                <span className="text-[10px] text-gray-600">Voice fallback available</span>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/15 rounded-lg p-2.5 flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <div><div className="text-[10px] text-emerald-400" style={{ fontWeight: 500 }}>DLT-Registered Template</div><div className="text-[9px] text-gray-500">TRAI compliant • Entity ID: 11016XXXXX</div></div>
            </div>
        </div>
    );
}

function AadhaarMockup() {
    return (
        <div className="bg-zinc-900/80 border border-white/[0.06] rounded-2xl p-5 w-full max-w-[320px] mx-auto">
            <div className="text-center mb-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center mx-auto mb-3"><Fingerprint className="w-7 h-7 text-purple-400" /></div>
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>Aadhaar via DigiLocker</div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/15 to-purple-600/15 border border-blue-500/15 rounded-xl p-4 mb-3">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center"><Lock className="w-3.5 h-3.5 text-blue-300" /></div>
                    <span className="text-[11px] text-blue-300" style={{ fontWeight: 600 }}>DigiLocker</span>
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="text-[9px] bg-emerald-500/15 text-emerald-400 px-1.5 py-0.5 rounded ml-auto">Connected</motion.span>
                </div>
                <div className="space-y-2.5">
                    {[{ label: "Name", value: "Rajesh Kumar" }, { label: "Aadhaar", value: "XXXX XXXX 7890" }, { label: "DOB", value: "15/03/1995" }, { label: "Address", value: "Koramangala, Bangalore" }].map((r, i) => (
                        <div key={i} className="flex items-center justify-between"><span className="text-[11px] text-gray-500">{r.label}</span><span className="text-[11px] text-white">{r.value}</span></div>
                    ))}
                    <div className="flex items-center justify-between pt-1 border-t border-white/[0.04]">
                        <span className="text-[11px] text-gray-500">Status</span>
                        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1 }} className="text-[10px] text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Verified</motion.span>
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
                <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center mx-auto mb-3"><CreditCard className="w-7 h-7 text-amber-400" /></div>
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>PAN Verification</div>
            </div>
            <div className="bg-gradient-to-br from-amber-600/10 to-orange-600/10 border border-amber-500/12 rounded-xl p-4 mb-3">
                <div className="text-center mb-3"><div className="text-xs text-gray-500 mb-1">PAN Number</div><div className="text-xl text-white tracking-[0.15em]" style={{ fontWeight: 700 }}>ABCPR1234K</div></div>
                <div className="space-y-2.5">
                    <div className="flex items-center justify-between"><span className="text-[11px] text-gray-500">Name on PAN</span><span className="text-[11px] text-white">Rajesh Kumar</span></div>
                    <div className="flex items-center justify-between"><span className="text-[11px] text-gray-500">Aadhaar Match</span><motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-emerald-400" /><span className="text-[10px] text-emerald-400">98% match</span></motion.div></div>
                    <div className="flex items-center justify-between"><span className="text-[11px] text-gray-500">Status</span><span className="text-[10px] text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full">Active</span></div>
                    <div className="flex items-center justify-between"><span className="text-[11px] text-gray-500">Type</span><span className="text-[11px] text-white">Individual</span></div>
                </div>
            </div>
        </div>
    );
}

function BankMockup() {
    return (
        <div className="bg-zinc-900/80 border border-white/[0.06] rounded-2xl p-5 w-full max-w-[320px] mx-auto">
            <div className="text-center mb-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center mx-auto mb-3"><Landmark className="w-7 h-7 text-cyan-400" /></div>
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>Bank Verification</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/10 to-blue-600/10 border border-cyan-500/12 rounded-xl p-4 mb-3">
                <div className="space-y-2.5">
                    <div><div className="text-[10px] text-gray-500 mb-0.5">Account Number</div><div className="text-sm text-white" style={{ fontWeight: 500 }}>•••• •••• •••• 4521</div></div>
                    <div className="flex items-center justify-between"><span className="text-[11px] text-gray-500">IFSC</span><span className="text-[11px] text-white font-mono">SBIN0001234</span></div>
                    <div className="flex items-center justify-between"><span className="text-[11px] text-gray-500">Bank</span><span className="text-[11px] text-white">State Bank of India</span></div>
                    <motion.div initial={{ opacity: 0, y: 5 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="bg-emerald-500/10 border border-emerald-500/12 rounded-lg p-2.5 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <div><div className="text-[10px] text-emerald-400" style={{ fontWeight: 500 }}>Penny drop successful</div><div className="text-[9px] text-gray-500">₹1.00 deposited • Name matched</div></div>
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
                <div className="w-14 h-14 rounded-2xl bg-pink-500/15 border border-pink-500/20 flex items-center justify-center mx-auto mb-3"><Users className="w-7 h-7 text-pink-400" /></div>
                <div className="text-sm text-white" style={{ fontWeight: 600 }}>Reference Verification</div>
                <div className="text-xs text-gray-500 mt-1">OTP sent to each reference</div>
            </div>
            <div className="space-y-2">
                {[{ name: "Suresh Yadav", phone: "+91 •••••12345", relation: "Former employer", status: "verified" }, { name: "Meera Devi", phone: "+91 •••••67890", relation: "Family", status: "verified" }, { name: "Arjun Singh", phone: "+91 •••••54321", relation: "Co-worker", status: "pending" }].map((ref, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.12 }} className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-pink-500/15 flex items-center justify-center text-[9px] text-pink-300" style={{ fontWeight: 600 }}>{ref.name.split(" ").map(n => n[0]).join("")}</div>
                                <div><div className="text-[11px] text-white" style={{ fontWeight: 500 }}>{ref.name}</div><div className="text-[9px] text-gray-600">{ref.phone}</div></div>
                            </div>
                            {ref.status === "verified" ? (
                                <span className="text-[9px] text-emerald-400 bg-emerald-500/15 px-1.5 py-0.5 rounded-full flex items-center gap-0.5"><CheckCircle className="w-2.5 h-2.5" /> OTP ✓</span>
                            ) : (
                                <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="text-[9px] text-amber-400 bg-amber-500/15 px-1.5 py-0.5 rounded-full">OTP Sent</motion.span>
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

const mockupComponents: Record<string, React.ReactNode> = { otp: <OTPMockup />, aadhaar: <AadhaarMockup />, pan: <PANMockup />, bank: <BankMockup />, references: <ReferencesMockup /> };
