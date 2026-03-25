import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Fleet Owner • Delhi",
    text: "We went from managing 200 scooters on WhatsApp to running 800+ vehicles effortlessly. Dash literally 10x'd our operations.",
    metric: "4x fleet growth",
    initials: "AS",
    gradient: "from-[#cd1d1d] to-[#ff4444]",
  },
  {
    name: "Priya Menon",
    role: "Operations Head • Bangalore",
    text: "The AI assistant alone saves us 4 hours daily. Payment tracking, driver management, everything just works beautifully.",
    metric: "4hrs saved daily",
    initials: "PM",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Vikram Patel",
    role: "CEO, GreenWheels • Mumbai",
    text: "Our collection rate went from 72% to 98% in the first month. Best ROI on any software we've ever purchased.",
    metric: "98% collection rate",
    initials: "VP",
    gradient: "from-blue-500 to-cyan-500",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Real results.{" "}
            <span className="bg-gradient-to-r from-[#cd1d1d] to-[#ff4444] bg-clip-text text-transparent">
              Real fleets.
            </span>
          </h2>
          <p className="text-lg text-gray-400">Don't take our word for it — hear from operators across India</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/[0.02] border border-white/[0.06] rounded-3xl p-7 hover:border-white/[0.12] transition-all relative group flex flex-col"
            >
              {/* Metric chip */}
              <div className="inline-flex self-start items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/15 rounded-full px-3 py-1 mb-5">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                <span className="text-xs text-emerald-400" style={{ fontWeight: 500 }}>{t.metric}</span>
              </div>

              <Quote className="w-6 h-6 text-white/[0.06] mb-3" />
              <p className="text-gray-300 mb-8 leading-relaxed flex-1">{t.text}</p>

              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.05]">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-xs text-white`} style={{ fontWeight: 600 }}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm text-white" style={{ fontWeight: 500 }}>{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
                <div className="ml-auto flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#cd1d1d]/[0.03] to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
