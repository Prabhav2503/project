import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "How long does it take to set up Dash for my fleet?",
    a: "Most fleets are fully operational within 24 hours. Our onboarding team handles data migration from Excel/Tally, configures your dashboard, and trains your team — all included free.",
  },
  {
    q: "Does Dash work with all types of electric vehicles?",
    a: "Yes. Dash supports e-scooters, e-bikes, e-autos, and e-rickshaws. Our platform is vehicle-agnostic and works with all major EV manufacturers in India including Ather, Ola, Hero Electric, and more.",
  },
  {
    q: "What if my drivers aren't tech-savvy?",
    a: "The driver app is designed for simplicity — available in Hindi, Tamil, Telugu, Kannada, and 8 other Indian languages. Most drivers are comfortable using it within their first ride. We also provide on-ground training support.",
  },
  {
    q: "How does the AI assistant work?",
    a: "Our AI understands natural language queries about your fleet. Ask it anything — 'show me overdue payments', 'assign idle vehicles', 'send reminders to drivers with pending dues' — and it executes instantly. It learns your business patterns over time.",
  },
  {
    q: "Is my fleet data secure?",
    a: "Absolutely. We use bank-grade encryption (AES-256), SOC 2 Type II compliance, and data residency in India. Your data is never shared with third parties. We also offer on-premise deployment for enterprise clients.",
  },
  {
    q: "Can I try Dash before committing?",
    a: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. Our team will help you set up a pilot with a subset of your fleet to prove ROI before scaling.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Questions?{" "}
            <span className="bg-gradient-to-r from-[#cd1d1d] to-[#ff4444] bg-clip-text text-transparent">
              Answers.
            </span>
          </h2>
          <p className="text-lg text-gray-400">Everything you need to know about Dash</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-white/[0.12] bg-white/[0.03]"
                    : "border-white/[0.06] bg-transparent hover:border-white/[0.1]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className={`text-sm sm:text-base transition-colors pr-4 ${isOpen ? "text-white" : "text-gray-300"}`} style={{ fontWeight: 500 }}>
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? "bg-[#cd1d1d]" : "bg-white/[0.05]"}`}>
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-gray-400" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-sm text-gray-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
