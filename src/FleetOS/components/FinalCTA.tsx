import { motion } from "motion/react";
import { ArrowRight, Zap } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      {/* Layered gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#cd1d1d]/15 via-[#cd1d1d]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#cd1d1d]/20 rounded-full blur-[250px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cd1d1d08_1px,transparent_1px),linear-gradient(to_bottom,#cd1d1d08_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-[800px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-14 h-14 bg-[#cd1d1d]/15 border border-[#cd1d1d]/25 rounded-2xl mb-8"
          >
            <Zap className="w-7 h-7 text-[#cd1d1d]" />
          </motion.div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-[1.05]">
            Ready to
            <br />
            <span className="bg-gradient-to-r from-[#cd1d1d] via-[#ff4444] to-[#cd1d1d] bg-clip-text text-transparent">
              transform
            </span>{" "}
            your fleet?
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-[550px] mx-auto leading-relaxed">
            Join 500+ fleet operators across India who've already made the switch. Start free — no credit card, no commitments.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button className="group bg-white text-black px-10 py-4 rounded-full hover:bg-gray-100 transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2 shadow-2xl shadow-white/10" style={{ fontWeight: 500 }}>
              Get Started Free
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/[0.05] border border-white/[0.1] text-white px-10 py-4 rounded-full hover:bg-white/[0.1] transition-all" style={{ fontWeight: 500 }}>
              Talk to Sales
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 sm:gap-10 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-emerald-400 rounded-full" />
              14-day free trial
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-emerald-400 rounded-full" />
              No credit card
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-emerald-400 rounded-full" />
              Cancel anytime
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
