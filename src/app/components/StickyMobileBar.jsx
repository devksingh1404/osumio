"use client";

import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-white/95 backdrop-blur-md border-t border-[#0F1C18]/10 shadow-[0_-4px_20px_rgba(15,28,24,0.08)]">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <Link
          href="/contact"
          className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-full bg-[#E86034] text-white text-xs sm:text-sm font-bold shadow-sm active:scale-[0.98] transition-all"
        >
          <span>Start a Project</span>
          <ArrowUpRight size={14} />
        </Link>

        <a
          href="https://wa.me/15550192834"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-full border border-[#0F1C18]/20 bg-[#FBF8F3] text-[#0F1C18] text-xs sm:text-sm font-semibold active:scale-[0.98] transition-all"
        >
          <MessageCircle size={14} className="text-[#09201A]" />
          <span>Quick Chat</span>
        </a>
      </div>
    </div>
  );
}
