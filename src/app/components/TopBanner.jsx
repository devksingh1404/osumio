"use client";

import { useState } from "react";
import { ArrowRight, Award, X } from "lucide-react";

export default function TopBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <aside aria-label="Announcement" className="relative z-50 bg-[#212833] text-[#FFFDFA] py-2 px-4 text-xs sm:text-sm font-normal">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left Badge */}
        <div className="flex items-center gap-2.5 mx-auto sm:mx-0">
          <span className="inline-flex items-center gap-1.5 bg-[#313b4a] text-[#FFFDFA] px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase">
            <Award size={13} className="text-[#a3cc49]" />
            Tech in Asia
          </span>
          <p className="line-clamp-1 font-medium text-[#FFFDFA]/90">
            Osumio named among Singapore’s top Fintech &amp; Corporate Services companies for 2026
          </p>
          <a
            href="#what-we-do"
            className="hidden md:inline-flex items-center gap-1 font-semibold text-[#FFFDFA] underline underline-offset-4 hover:text-[#DDE8FB] transition-colors"
          >
            Read more <ArrowRight size={13} />
          </a>
        </div>

        {/* Right close */}
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="text-[#FFFDFA]/60 hover:text-white p-1 rounded transition-colors"
          aria-label="Dismiss banner"
        >
          <X size={14} />
        </button>
      </div>
    </aside>
  );
}

