import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Building2,
  BarChart3,
  MapPin,
  Clock,
  TrendingUp,
  Users,
  Layers,
} from "lucide-react";

export function Enterprise() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const dashScale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]);

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#cd1d1d]/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        <motion.div style={{ opacity }} className="text-center mb-20">


          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Scale with{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              confidence.
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[600px] mx-auto">
            Enterprise dashboard for bulk renters to manage, track, and optimize
            their entire rented fleet in real-time.
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div style={{ scale: dashScale, opacity }}>
          <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950 border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#cd1d1d] rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="text-sm text-gray-500">Enterprise Dashboard — Acme Logistics</div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full" />
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {/* KPI row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Total Vehicles", value: "2,450", change: "+12%", icon: Layers, color: "text-blue-400" },
                  { label: "Active Drivers", value: "1,890", change: "+8%", icon: Users, color: "text-emerald-400" },
                  { label: "Avg. Utilization", value: "94.2%", change: "+3.1%", icon: TrendingUp, color: "text-purple-400" },
                  { label: "Uptime", value: "99.8%", change: "+0.2%", icon: Clock, color: "text-amber-400" },
                ].map((kpi, idx) => {
                  const Icon = kpi.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                      className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <Icon className={`w-5 h-5 ${kpi.color}`} />
                        <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                          {kpi.change}
                        </span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{kpi.value}</div>
                      <div className="text-xs text-gray-500">{kpi.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Charts area */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Chart placeholder */}
                <div className="md:col-span-2 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-white" style={{ fontWeight: 600 }}>Fleet Utilization</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">7D</span>
                      <span className="text-xs text-white bg-[#cd1d1d]/20 px-3 py-1 rounded-full border border-[#cd1d1d]/30">30D</span>
                    </div>
                  </div>
                  {/* Fake chart bars */}
                  <div className="flex items-end gap-2 h-40">
                    {[65, 72, 58, 80, 92, 88, 95, 78, 85, 91, 87, 94].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.6 }}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-[#cd1d1d]/60 to-[#cd1d1d]"
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-gray-600">Jan</span>
                    <span className="text-xs text-gray-600">Dec</span>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-[#cd1d1d]" />
                    <span className="text-sm text-white" style={{ fontWeight: 600 }}>Live Locations</span>
                  </div>
                  <div className="relative h-40 bg-white/[0.02] rounded-xl overflow-hidden border border-white/[0.04]">
                    {/* Dots representing vehicles */}
                    {[
                      { top: "20%", left: "30%" },
                      { top: "45%", left: "60%" },
                      { top: "65%", left: "25%" },
                      { top: "30%", left: "75%" },
                      { top: "70%", left: "50%" },
                      { top: "15%", left: "55%" },
                      { top: "80%", left: "70%" },
                    ].map((pos, i) => (
                      <motion.div
                        key={i}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        className="absolute w-2 h-2 bg-[#cd1d1d] rounded-full"
                        style={pos}
                      />
                    ))}
                    {/* Grid lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:24px_24px]" />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-500">2,450 vehicles tracked</span>
                    <BarChart3 className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}