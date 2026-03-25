import { motion } from "motion/react";
import { UserPlus, Settings, Rocket, ArrowDown } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: UserPlus,
    title: "Sign Up & Onboard",
    desc: "Create your account in 2 minutes. Import your fleet data from Excel or add vehicles manually. We handle the migration.",
    color: "#cd1d1d",
  },
  {
    num: "02",
    icon: Settings,
    title: "Configure & Customize",
    desc: "Set up access roles, payment rules, penalty structures, and SMS templates. Our AI learns your business logic instantly.",
    color: "#8b5cf6",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Launch & Scale",
    desc: "Go live with your drivers. Real-time dashboards, automated collections, and AI-powered insights from day one.",
    color: "#06b6d4",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-gray-400">Simple Setup</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Up and running in{" "}
            <span className="bg-gradient-to-r from-[#cd1d1d] to-[#ff4444] bg-clip-text text-transparent">
              minutes
            </span>
          </h2>
          <p className="text-lg text-gray-400">Not weeks. Not months. Minutes.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent hidden sm:block" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Number dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 border-white/[0.08] bg-black items-center justify-center z-10">
                  <span className="text-xs text-gray-400" style={{ fontWeight: 600 }}>{step.num}</span>
                </div>

                {/* Content card */}
                <div className={`flex-1 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className={`bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 hover:border-white/[0.1] transition-all ${isLeft ? "md:ml-0" : "md:mr-0"}`}>
                    <div className={`flex items-center gap-3 mb-4 ${isLeft ? "md:justify-end" : ""}`}>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${step.color}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: step.color }} />
                      </div>
                      <span className="text-xs text-gray-500 md:hidden" style={{ fontWeight: 600 }}>{step.num}</span>
                    </div>
                    <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-gray-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
