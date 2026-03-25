import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-16 px-6 bg-zinc-950/50">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-[#cd1d1d] rounded-xl flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-white tracking-tight" style={{ fontWeight: 600, fontSize: "17px" }}>
                Dash<span className="text-gray-500" style={{ fontWeight: 400 }}>Mobility</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-[220px]">
              India's unified fleet management platform. Powered by AI.
            </p>
            <div className="flex items-center gap-3">
              {["X", "in", "ig"].map((s, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-xs text-gray-500 hover:text-white hover:bg-white/[0.08] transition-all">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Product", links: ["Admin Suite", "Driver App", "Enterprise", "AI Assistant", "Pricing"] },
            { title: "Company", links: ["About", "Careers", "Blog", "Press", "Contact"] },
            { title: "Resources", links: ["Documentation", "API Reference", "Help Center", "Community", "Status"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"] },
          ].map((col, idx) => (
            <div key={idx}>
              <h4 className="text-xs text-gray-400 mb-4 uppercase tracking-wider" style={{ fontWeight: 600 }}>{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-600">© 2026 Dash Mobility Technologies Pvt. Ltd. All rights reserved.</span>
          <span className="text-xs text-gray-700">Made with ❤️ in India</span>
        </div>
      </div>
    </footer>
  );
}
