import { motion } from "motion/react";
import { Check, ArrowRight, Zap } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthly: 4999,
    annual: 3999,
    desc: "For small fleets getting started",
    features: ["Up to 50 vehicles", "Driver management", "Basic payments", "SMS notifications", "Email support"],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Growth",
    monthly: 14999,
    annual: 11999,
    desc: "For growing fleet operations",
    features: ["Up to 500 vehicles", "AI Assistant", "Advanced analytics", "Help center & ticketing", "Maintenance tracking", "Inventory management", "Priority support"],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthly: 0,
    annual: 0,
    desc: "For large-scale operations",
    features: ["Unlimited vehicles", "Custom integrations", "Dedicated account manager", "SLA guarantees", "White-label options", "On-premise deployment", "24/7 phone support"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Simple{" "}
            <span className="bg-gradient-to-r from-[#cd1d1d] to-[#ff4444] bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          <p className="text-lg text-gray-400 mb-8">No hidden fees. Scale as you grow.</p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                !annual ? "bg-white text-black" : "text-gray-400 hover:text-white"
              }`}
              style={{ fontWeight: 500 }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm transition-all flex items-center gap-2 ${
                annual ? "bg-white text-black" : "text-gray-400 hover:text-white"
              }`}
              style={{ fontWeight: 500 }}
            >
              Annual
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${annual ? "bg-emerald-100 text-emerald-700" : "bg-emerald-500/15 text-emerald-400"}`} style={{ fontWeight: 600 }}>
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, idx) => {
            const price = plan.monthly === 0 ? "Custom" : `₹${(annual ? plan.annual : plan.monthly).toLocaleString("en-IN")}`;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative rounded-3xl p-7 flex flex-col ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-[#cd1d1d]/15 to-zinc-950/50 border-2 border-[#cd1d1d]/30 shadow-xl shadow-[#cd1d1d]/5"
                    : "bg-white/[0.02] border border-white/[0.06]"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#cd1d1d] text-white text-[11px] px-4 py-1 rounded-full flex items-center gap-1" style={{ fontWeight: 600 }}>
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </div>
                )}
                <div className="mb-5">
                  <h3 className="text-lg text-white mb-1" style={{ fontWeight: 600 }}>{plan.name}</h3>
                  <p className="text-sm text-gray-500">{plan.desc}</p>
                </div>
                <div className="mb-7">
                  <motion.span
                    key={annual ? "annual" : "monthly"}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-white"
                  >
                    {price}
                  </motion.span>
                  {plan.monthly > 0 && <span className="text-gray-500 text-sm">/month</span>}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlighted ? "bg-[#cd1d1d]/20" : "bg-white/[0.05]"}`}>
                        <Check className={`w-2.5 h-2.5 ${plan.highlighted ? "text-[#cd1d1d]" : "text-gray-400"}`} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3.5 rounded-full flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] text-sm ${
                    plan.highlighted
                      ? "bg-[#cd1d1d] text-white hover:bg-[#b11919] shadow-lg shadow-[#cd1d1d]/20"
                      : "bg-white/[0.04] border border-white/[0.08] text-white hover:bg-white/[0.08]"
                  }`}
                  style={{ fontWeight: 500 }}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
