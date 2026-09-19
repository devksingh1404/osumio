"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Clock, ShieldCheck } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-20 md:py-28 bg-[#09201A] text-[#FBF8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#E5A93C] mb-6">
            <Sparkles size={13} />
            Let's Collaborate
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Have an ambitious business ready for{" "}
            <span className="editorial-italic font-normal text-[#E86034]">
              compounding growth
            </span>
            ?
          </h2>

          <p className="mt-6 text-base sm:text-xl text-[#FBF8F3]/80 leading-relaxed max-w-2xl mx-auto">
            We partner with a curated roster of high-potential businesses each quarter. Let’s build a digital system that consistently attracts attention, acquires leads, and accelerates revenue.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#E86034] text-white text-base font-bold shadow-[0_8px_25px_rgba(232,96,52,0.35)] hover:bg-[#D45025] hover:shadow-[0_12px_30px_rgba(232,96,52,0.45)] transition-all active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 text-[#FBF8F3] text-base font-semibold hover:bg-white/10 transition-all"
            >
              <span>Let's Talk Strategy</span>
            </Link>
          </div>

          {/* Value props bullets */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#FBF8F3]/70">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#E86034]" />
              <span>Senior Partner Direct Access</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#E86034]" />
              <span>Transparent 2-Week Agile Sprints</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#E86034]" />
              <span>100% Original Code &amp; Asset Ownership</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E86034]/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
