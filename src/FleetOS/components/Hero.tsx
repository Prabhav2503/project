import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "motion/react";
import { ArrowRight, Zap, Sparkles, Play, Menu, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isNumber = !isNaN(Number(target));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          if (isNumber) {
            const num = Number(target);
            const duration = 1500;
            const steps = 40;
            const stepTime = duration / steps;
            let current = 0;
            const interval = setInterval(() => {
              current += num / steps;
              if (current >= num) {
                setCount(num);
                clearInterval(interval);
              } else {
                setCount(Math.floor(current));
              }
            }, stepTime);
          }
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, started, isNumber]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-bold text-white mb-1">
      {isNumber ? count : target}{suffix}
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const words1 = "The Future of".split(" ");
  const words2 = "Fleet Management".split(" ");

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Grain overlay */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />



      {/* Hero Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative flex items-center justify-center min-h-screen px-6 pt-24"
      >
        <div className="max-w-[1000px] mx-auto text-center">


          {/* Main Headline - word by word */}
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white mb-2 leading-[1.05] tracking-tight">
            <div className="flex flex-wrap justify-center gap-x-4">
              {words1.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-x-4">
              {words2.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.8 + i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-gradient-to-r from-[#cd1d1d] via-[#ff4444] to-[#cd1d1d] bg-clip-text text-transparent"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-400 mb-12 max-w-[700px] mx-auto leading-relaxed"
          >
            99% of Indian fleets run on WhatsApp & Excel.{" "}
            <span className="text-gray-200">We built the operating system they deserve</span> —
            swapping, payments, KYC, inventory, and AI, unified.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex items-center justify-center mb-20"
          >
            <button className="group bg-[#cd1d1d] text-white px-10 py-4 rounded-full hover:bg-[#b11919] transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2 shadow-xl shadow-[#cd1d1d]/20 text-lg" style={{ fontWeight: 500 }}>
              Request Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-[650px] mx-auto"
          >
            {[
              { value: "500", suffix: "+", label: "Fleets onboarded" },
              { value: "50000", suffix: "+", label: "Vehicles managed" },
              { value: "99", suffix: "%", label: "Uptime guaranteed" },
            ].map((stat, i) => (
              <div key={i} className="relative">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                {i < 2 && <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/[0.06] hidden sm:block" />}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Orbs - more dramatic */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#cd1d1d] rounded-full blur-[180px] pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[160px] pointer-events-none"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[200px] pointer-events-none" />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border border-white/15 rounded-full flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1 h-1 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
      {/* Radial fade from center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_70%)] pointer-events-none" />
    </div>
  );
}
