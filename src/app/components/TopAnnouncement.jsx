"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, X } from "lucide-react";

export default function TopAnnouncement() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <aside
      aria-label="Agency Announcement"
      className="relative z-50 bg-[#09201A] text-[#FBF8F3] py-2.5 px-4 text-xs sm:text-sm border-b border-[#FBF8F3]/10 font-normal"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 mx-auto sm:mx-0">
          <span className="inline-flex items-center gap-1.5 bg-[#E86034] text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase">
            <Sparkles size={12} />
            Availability
          </span>
          <p className="line-clamp-1 font-medium text-[#FBF8F3]/90">
            Now accepting select client partnerships for Q2/Q3 growth sprints.
          </p>
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-1 font-bold text-[#E86034] hover:text-[#F5F0E6] transition-colors underline underline-offset-4"
          >
            Check timeline <ArrowRight size={13} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setVisible(false)}
          className="text-[#FBF8F3]/60 hover:text-white p-1 rounded transition-colors"
          aria-label="Dismiss announcement"
        >
          <X size={14} />
        </button>
      </div>
    </aside>
  );
}

