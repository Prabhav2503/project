import { motion } from "motion/react";
import { Bot, Sparkles, Send } from "lucide-react";
import { useState, useEffect } from "react";

const conversations = [
  { role: "user" as const, text: "How many vehicles are idle right now?" },
  { role: "ai" as const, text: "Currently 23 vehicles are idle across 4 hubs. Hub #3 in Koramangala has the highest idle count at 9. Want me to auto-assign them to nearby drivers?" },
  { role: "user" as const, text: "Yes, assign them. Also show pending dues." },
  { role: "ai" as const, text: "Done! 23 vehicles assigned. You have ₹1.2L in pending dues from 34 drivers. 12 are overdue by 3+ days. Should I send automated reminders?" },
];

export function AIAssistant() {
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let count = 0;
          const interval = setInterval(() => {
            count++;
            setVisibleMessages(count);
            if (count >= conversations.length) clearInterval(interval);
          }, 800);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const el = document.getElementById("ai-chat");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Huge gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.04] to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >


            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Your fleet.
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-[#cd1d1d] bg-clip-text text-transparent">
                On autopilot.
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Ask anything in natural language. Assign vehicles, send reminders, pull reports, manage dues
              — all through a single AI assistant that understands your business.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { val: "10x", label: "Faster ops" },
                { val: "85%", label: "Less manual work" },
                { val: "24/7", label: "Available" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-white">{s.val}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Chat UI */}
          <motion.div
            id="ai-chat"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950 border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/5">
              {/* Header */}
              <div className="px-6 py-4 border-b border-white/[0.06] flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm text-white" style={{ fontWeight: 600 }}>Dash AI</div>
                  <div className="text-xs text-green-400 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    Online
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="p-6 space-y-4 min-h-[320px]">
                {conversations.slice(0, visibleMessages).map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${msg.role === "user"
                          ? "bg-[#cd1d1d] text-white rounded-br-md"
                          : "bg-white/[0.05] border border-white/[0.08] text-gray-300 rounded-bl-md"
                        }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                {visibleMessages > 0 && visibleMessages < conversations.length && (
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                          className="w-2 h-2 bg-purple-400 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="px-6 pb-6">
                <div className="bg-white/[0.05] border border-white/[0.08] rounded-2xl px-4 py-3 flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Ask Dash AI anything..."
                    className="flex-1 bg-transparent text-sm text-gray-300 placeholder-gray-600 outline-none"
                    readOnly
                  />
                  <div className="w-8 h-8 bg-[#cd1d1d] rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#b11919] transition-colors">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
