import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { useRef, useState } from "react";
import {
  QrCode,
  Battery,
  MapPin,
  CreditCard,
  ChevronRight,
  Star,
} from "lucide-react";

import HomeImg from "../assets/Home.png";
import PaymentImg from "../assets/Payment.png";
import ScooterImg from "../assets/Scooter.png";
import SupportImg from "../assets/Support.png";

const screens = [
  { src: HomeImg, label: "Home Dashboard" },
  { src: ScooterImg, label: "Vehicle Management" },
  { src: PaymentImg, label: "Easy Payments" },
  { src: SupportImg, label: "24/7 Support" },
];

export function DriverApp() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(Math.floor(v * screens.length), screens.length - 1);
    setActiveIndex(idx);
  });

  const steps = [
    { icon: QrCode, title: "Quick KYC", desc: "Scan & verify in under 2 minutes", color: "#cd1d1d" },
    { icon: Battery, title: "Battery Swap", desc: "Find nearest station, swap instantly", color: "#8b5cf6" },
    { icon: CreditCard, title: "Easy Payments", desc: "UPI, wallets, auto-debit — all supported", color: "#06b6d4" },
    { icon: MapPin, title: "Live Tracking", desc: "Real-time GPS & ride history", color: "#f59e0b" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${screens.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Subtle bg gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Phone Frame with Image Swap */}
            <div className="relative flex justify-center order-2 lg:order-1">
              <div className="relative w-[280px] sm:w-[320px]">
                {/* Images - no frame, shown as-is */}
                <div className="relative">
                  {screens.map((screen, i) => (
                    <motion.img
                      key={i}
                      src={screen.src}
                      alt={screen.label}
                      className={`w-full h-auto rounded-3xl ${i === 0 ? '' : 'absolute inset-0'}`}
                      initial={false}
                      animate={{
                        opacity: activeIndex === i ? 1 : 0,
                        scale: activeIndex === i ? 1 : 1.05,
                      }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                  ))}
                </div>
                {/* Glow behind */}
                <div className="absolute -inset-16 bg-[#cd1d1d]/15 rounded-full blur-[100px] -z-10 pointer-events-none" />
              </div>

              {/* Screen indicator dots */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {screens.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === i
                      ? "w-6 bg-[#cd1d1d]"
                      : "w-1.5 bg-white/20"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-[1.1]">
                Built for{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  drivers.
                </span>
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Everything a driver needs — KYC, booking scooters, payments, battery swapping, and vehicle
                diagnostics — all in one beautiful app.
              </p>

              <div className="space-y-3">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-3 border rounded-xl p-4 transition-all group cursor-default ${activeIndex === idx
                        ? "bg-white/[0.06] border-white/[0.12]"
                        : "bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"
                        }`}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${step.color}20` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: step.color }} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white mb-0.5" style={{ fontWeight: 600 }}>{step.title}</h4>
                        <p className="text-sm text-gray-500">{step.desc}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-gray-400 transition-colors" />
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-3 mt-6">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-black" />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">4.8 rating from 12K+ drivers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}