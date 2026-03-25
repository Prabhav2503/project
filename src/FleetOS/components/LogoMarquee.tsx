import { motion } from "motion/react";

const logos = ["Rapido", "Zypp Electric", "Bounce", "Yulu", "Vogo", "BluSmart", "eBikeGo", "Cityflo"];

export function LogoMarquee() {
  return (
    <section className="relative py-16 overflow-hidden border-y border-white/[0.04]">
      <div className="text-center mb-10">
        <p className="text-xs text-gray-600 uppercase tracking-[0.2em]">Trusted by India's leading fleet operators</p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-16 whitespace-nowrap"
        >
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="text-gray-600 flex-shrink-0 select-none"
              style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.02em" }}
            >
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
