import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Users,
  Car,
  CreditCard,
  HeadphonesIcon,
  Wrench,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Shield,
  Coins,
  Gift,
  Receipt,
  Package,
  Bell,
  TrendingUp,
  Activity,
  Zap,
} from "lucide-react";

function SectionDivider() {
  return (
    <div className="flex justify-center py-8">
      <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />
    </div>
  );
}

function DriverManagement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ opacity }}>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Know your
              <br />
              <span className="text-gray-600">drivers.</span>{" "}
              <span className="bg-gradient-to-r from-[#cd1d1d] to-[#ff4444] bg-clip-text text-transparent">
                Inside out.
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-[500px]">
              Complete driver lifecycle from KYC to performance tracking. Automated verification,
              compliance checks, and real-time monitoring.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">KYC Verified</div>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
                <div className="text-3xl font-bold text-white mb-1">&lt;2min</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Onboarding</div>
              </div>
            </div>
          </motion.div>

          <motion.div style={{ y, opacity }} className="relative">
            <div className="space-y-3">
              {[
                {
                  icon: Shield,
                  title: "Automated KYC",
                  desc: "AI-powered Aadhaar & DL verification with liveness check",
                  color: "from-[#cd1d1d] to-[#ff4444]",
                },
                {
                  icon: CheckCircle,
                  title: "Driver Profiles",
                  desc: "Comprehensive history, documents, payments & ratings",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: Activity,
                  title: "Performance Tracking",
                  desc: "Real-time metrics, ride patterns & compliance scores",
                  color: "from-blue-500 to-cyan-500",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 hover:bg-white/[0.04] hover:border-white/[0.1] transition-all group cursor-default"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white mb-1" style={{ fontWeight: 600 }}>{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function VehicleManagement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.92, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div style={{ opacity }} className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="text-gray-600">Fleet management</span>{" "}
            <span className="bg-gradient-to-r from-[#cd1d1d] to-[#ff4444] bg-clip-text text-transparent">
              reimagined
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[550px] mx-auto">
            Classify, assign, track, and return vehicles — all from one intelligent dashboard
          </p>
        </motion.div>

        <motion.div style={{ scale, opacity }} className="relative">
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 border border-white/[0.06] rounded-3xl p-6 sm:p-8 overflow-hidden backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  icon: Car,
                  iconColor: "text-[#cd1d1d]",
                  title: "Smart Classification",
                  desc: "AI-powered categorization",
                  content: (
                    <div className="space-y-2 mt-4">
                      {[
                        { type: "E-Scooters", count: 120, pct: 48 },
                        { type: "E-Bikes", count: 80, pct: 32 },
                        { type: "E-Autos", count: 50, pct: 20 },
                      ].map((item, idx) => (
                        <div key={idx}>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs text-gray-400">{item.type}</span>
                            <span className="text-xs text-gray-500">{item.count}</span>
                          </div>
                          <div className="w-full bg-white/[0.04] rounded-full h-1.5">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.pct}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.15, duration: 0.8 }}
                              className="bg-[#cd1d1d] h-1.5 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ),
                },
                {
                  icon: ArrowRight,
                  iconColor: "text-purple-400",
                  title: "Smart Assignment",
                  desc: "Optimal driver-vehicle matching",
                  content: (
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center gap-3 bg-white/[0.03] rounded-xl p-3">
                        <div className="w-9 h-9 bg-gradient-to-br from-[#cd1d1d] to-[#ff4444] rounded-full flex items-center justify-center text-xs text-white" style={{ fontWeight: 600 }}>RK</div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-white truncate">Rajesh Kumar</div>
                          <div className="text-xs text-gray-600">4.9★ • 2yr exp</div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <motion.div animate={{ y: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                          <ArrowRight className="w-4 h-4 text-purple-400 rotate-90" />
                        </motion.div>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-3">
                        <div className="text-sm text-white">Scooter #DM-789</div>
                        <div className="text-xs text-gray-500">Battery: 95% • Ready</div>
                      </div>
                    </div>
                  ),
                },
                {
                  icon: Package,
                  iconColor: "text-blue-400",
                  title: "Return Processing",
                  desc: "Seamless check-in & inspection",
                  content: (
                    <div className="mt-4 space-y-3">
                      {[
                        { label: "Pending", value: 12, color: "text-amber-400" },
                        { label: "Inspected", value: 45, color: "text-emerald-400" },
                        { label: "Flagged", value: 3, color: "text-red-400" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-white/[0.03] rounded-lg px-4 py-2.5">
                          <span className="text-sm text-gray-400">{item.label}</span>
                          <span className={`text-lg font-bold ${item.color}`}>{item.value}</span>
                        </div>
                      ))}
                    </div>
                  ),
                },
              ].map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 hover:border-white/[0.1] transition-all"
                  >
                    <Icon className={`w-7 h-7 ${card.iconColor} mb-4`} />
                    <h3 className="text-lg text-white mb-1" style={{ fontWeight: 600 }}>{card.title}</h3>
                    <p className="text-sm text-gray-500">{card.desc}</p>
                    {card.content}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Payments() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Financial ops</span>{" "}
            <span className="bg-gradient-to-r from-[#cd1d1d] to-[#ff4444] bg-clip-text text-transparent">
              unified
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[500px]">
            Payments, dues, deposits, taxes, referrals, gift cards — everything financial, one platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: CreditCard, title: "Payment Processing", desc: "Multi-channel gateway", value: "₹2.4Cr", label: "Monthly volume", accent: "#cd1d1d" },
            { icon: Receipt, title: "Due Tracking", desc: "Real-time monitoring", value: "0", label: "Overdue payments", accent: "#22c55e" },
            { icon: Coins, title: "Deposit Tracker", desc: "Automated management", value: "₹45L", label: "Total deposits", accent: "#8b5cf6" },
            { icon: Receipt, title: "Tax Compiler", desc: "GST compliant", value: "18%", label: "Auto-calculated", accent: "#f59e0b" },
            { icon: TrendingUp, title: "Referral System", desc: "Incentivize growth", value: "₹500", label: "Per referral", accent: "#06b6d4" },
            { icon: Gift, title: "Gift Cards", desc: "Custom rewards", value: "1,200+", label: "Active cards", accent: "#ec4899" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="group bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/[0.1] transition-all cursor-default"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${item.accent}15` }}>
                    <Icon className="w-4.5 h-4.5" style={{ color: item.accent }} />
                  </div>
                  <div>
                    <h3 className="text-sm text-white" style={{ fontWeight: 600 }}>{item.title}</h3>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-0.5">{item.value}</div>
                  <div className="text-xs text-gray-500">{item.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HelpCenter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ opacity }} className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 border border-white/[0.06] rounded-3xl overflow-hidden backdrop-blur-sm">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06]">
                <div className="w-2.5 h-2.5 bg-red-500/80 rounded-full" />
                <div className="w-2.5 h-2.5 bg-yellow-500/80 rounded-full" />
                <div className="w-2.5 h-2.5 bg-green-500/80 rounded-full" />
                <span className="text-xs text-gray-600 ml-2">Support Tickets</span>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { status: "urgent", title: "Battery swap failed at Hub #7", time: "2m ago", assignee: "AS" },
                  { status: "active", title: "Payment of ₹2,500 not reflecting", time: "15m ago", assignee: "PM" },
                  { status: "resolved", title: "KYC document re-upload needed", time: "1h ago", assignee: "VK" },
                ].map((ticket, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-4 hover:bg-white/[0.05] transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-sm text-white" style={{ fontWeight: 500 }}>{ticket.title}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider ${ticket.status === "urgent"
                            ? "bg-red-500/15 text-red-400"
                            : ticket.status === "active"
                              ? "bg-amber-500/15 text-amber-400"
                              : "bg-emerald-500/15 text-emerald-400"
                          }`}
                        style={{ fontWeight: 600 }}
                      >
                        {ticket.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">{ticket.time}</span>
                      <div className="w-6 h-6 rounded-full bg-white/[0.06] flex items-center justify-center text-[9px] text-gray-400" style={{ fontWeight: 600 }}>
                        {ticket.assignee}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div style={{ opacity }} className="order-1 lg:order-2">

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-[1.1]">
              Support that{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                never sleeps
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              24/7 ticket management with AI-powered routing, auto-categorization, and real-time resolution tracking.
            </p>
            <div className="space-y-3">
              {["Automated ticket categorization", "AI-suggested resolutions", "Multi-language support (12 languages)", "Live chat & WhatsApp integration"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Maintenance() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Proactive{" "}
            <span className="bg-gradient-to-r from-[#cd1d1d] to-[#ff4444] bg-clip-text text-transparent">
              fleet health
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[550px] mx-auto">
            Predictive maintenance alerts and complete spare parts inventory management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/[0.06] rounded-3xl p-7"
          >
            <Wrench className="w-8 h-8 text-[#cd1d1d] mb-5" />
            <h3 className="text-xl text-white mb-2" style={{ fontWeight: 600 }}>Maintenance Tickets</h3>
            <p className="text-sm text-gray-500 mb-6">Track every repair with automated scheduling</p>
            <div className="space-y-3">
              {[
                { label: "Scheduled", value: 23, pct: 60, color: "bg-blue-500" },
                { label: "In Progress", value: 8, pct: 35, color: "bg-amber-500" },
                { label: "Completed", value: 45, pct: 90, color: "bg-emerald-500" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/[0.03] rounded-xl p-3.5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">{item.label}</span>
                    <span className="text-lg font-bold text-white">{item.value}</span>
                  </div>
                  <div className="w-full bg-white/[0.04] rounded-full h-1">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.8 }}
                      className={`${item.color} h-1 rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/[0.02] border border-white/[0.06] rounded-3xl p-7"
          >
            <Package className="w-8 h-8 text-purple-400 mb-5" />
            <h3 className="text-xl text-white mb-2" style={{ fontWeight: 600 }}>Spare Parts Inventory</h3>
            <p className="text-sm text-gray-500 mb-6">Real-time tracking with low-stock alerts</p>
            <div className="space-y-2.5">
              {[
                { part: "Batteries", qty: 120, status: "ok" },
                { part: "Tires", qty: 90, status: "ok" },
                { part: "Brake Pads", qty: 45, status: "low" },
                { part: "Controllers", qty: 12, status: "critical" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between bg-white/[0.03] rounded-lg px-4 py-3">
                  <span className="text-sm text-gray-300">{item.part}</span>
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm text-white" style={{ fontWeight: 600 }}>{item.qty}</span>
                    <div className={`w-2 h-2 rounded-full ${item.status === "critical" ? "bg-red-500 animate-pulse" : item.status === "low" ? "bg-amber-500" : "bg-emerald-500"
                      }`} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SMSManagement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ opacity }}>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-[1.1]">
              Automated{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                messaging
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              Smart SMS campaigns, payment reminders, and real-time notifications.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
                <Bell className="w-5 h-5 text-cyan-400 mb-3" />
                <div className="text-2xl font-bold text-white mb-0.5">98.5%</div>
                <div className="text-xs text-gray-500">Delivery rate</div>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
                <Zap className="w-5 h-5 text-amber-400 mb-3" />
                <div className="text-2xl font-bold text-white mb-0.5">&lt;3s</div>
                <div className="text-xs text-gray-500">Avg. delivery</div>
              </div>
            </div>
          </motion.div>

          <motion.div style={{ y, opacity }}>
            <div className="space-y-3">
              {[
                {
                  type: "Payment Reminder",
                  message: "Hi Rajesh, your daily rent of ₹250 is due. Pay now to keep your ride active →",
                  time: "Scheduled: 9:00 AM",
                  color: "#cd1d1d",
                },
                {
                  type: "Swap Alert",
                  message: "Battery swap available at Hub #12, Koramangala. 3 slots open. Book now!",
                  time: "Sent: 2m ago",
                  color: "#06b6d4",
                },
                {
                  type: "Maintenance Due",
                  message: "Scooter DM-789 service due in 2 days. Schedule at nearest center →",
                  time: "Scheduled: Tomorrow",
                  color: "#8b5cf6",
                },
              ].map((sms, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 hover:bg-white/[0.04] hover:border-white/[0.1] transition-all"
                >
                  <div className="flex items-start gap-3.5 mb-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${sms.color}15` }}
                    >
                      <MessageSquare className="w-4 h-4" style={{ color: sms.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-white mb-1" style={{ fontWeight: 600 }}>{sms.type}</div>
                      <div className="text-sm text-gray-400 leading-relaxed">{sms.message}</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 flex items-center gap-2 ml-[52px]">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    {sms.time}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function AdminFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.15], [40, 0]);

  return (
    <div ref={sectionRef} id="solutions" className="relative">
      {/* Section Header */}
      <div className="relative py-28 px-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div style={{ opacity: headerOpacity, y: headerY }}>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Everything you need.
              <br />
              <span className="bg-gradient-to-r from-[#cd1d1d] via-[#ff4444] to-[#cd1d1d] bg-clip-text text-transparent">
                Under one roof.
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-[600px] mx-auto">
              Powerful admin dashboard with AI-powered insights, sophisticated access control, and seamless cross-platform support.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#cd1d1d]/8 rounded-full blur-[180px] pointer-events-none" />
      </div>

      <DriverManagement />
      <SectionDivider />
      <VehicleManagement />
      <SectionDivider />
      <Payments />
      <SectionDivider />
      <HelpCenter />
      <SectionDivider />
      <Maintenance />
      <SectionDivider />
      <SMSManagement />
    </div>
  );
}
