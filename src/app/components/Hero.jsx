"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Zap,
  Globe2,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  BarChart2,
  Layers,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-[#FBF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Pill Tag */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 bg-[#09201A]/5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#09201A] mb-6 border border-[#09201A]/10"
          >
            <Sparkles size={14} className="text-[#E86034]" />
            <span>Modern Digital Growth &amp; Engineering Agency</span>
          </motion.div>

          {/* Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F1C18] leading-[1.08]"
          >
            Digital systems that turn customer attention into{" "}
            <span className="editorial-italic font-normal text-[#0F1C18] underline decoration-[#E86034]/40 decoration-wavy underline-offset-8">
              measurable revenue
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-7 text-lg sm:text-xl text-[#5E6D66] max-w-2xl mx-auto font-normal leading-relaxed"
          >
            We don't just build websites or run ads. We engineer high-converting web applications, technical SEO engines, and full-funnel customer acquisition systems for ambitious brands in the US, UK, Canada, and Australia.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#E86034] text-white text-base font-bold shadow-[0_6px_25px_rgba(232,96,52,0.35)] hover:bg-[#D45025] hover:shadow-[0_10px_30px_rgba(232,96,52,0.45)] transition-all active:scale-[0.98]"
            >
              Start a Project
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#0F1C18]/15 bg-white text-[#0F1C18] text-base font-semibold hover:bg-[#F5F0E6] transition-all shadow-2xs"
            >
              Selected Work
            </Link>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-10 pt-6 border-t border-[#0F1C18]/8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#5E6D66]"
          >
            <div className="flex items-center gap-2 font-semibold text-[#0F1C18]">
              <Globe2 size={16} className="text-[#E86034]" />
              <span>Serving ambitious clients in US, UK, Canada &amp; Australia</span>
            </div>
            <div className="hidden sm:block text-[#0F1C18]/20">•</div>
            <div className="flex items-center gap-2 font-semibold text-[#0F1C18]">
              <Zap size={16} className="text-[#E5A93C]" />
              <span>Sub-second Next.js architecture &amp; guaranteed Core Web Vitals</span>
            </div>
          </motion.div>
        </div>

        {/* ================= HERO INTERACTIVE AGENCY DASHBOARD VISUAL ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 relative max-w-5xl mx-auto"
        >
          <div className="rounded-3xl border border-[#0F1C18]/10 bg-white p-5 sm:p-8 shadow-[0_24px_70px_rgba(15,28,24,0.07)]">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#0F1C18]/8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#E86034]/70" />
                <div className="w-3 h-3 rounded-full bg-[#E5A93C]/70" />
                <div className="w-3 h-3 rounded-full bg-[#09201A]/70" />
                <span className="ml-3 text-xs font-mono font-medium text-[#8A9A92]">
                  osumio.agency / growth-engine / telemetry
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <CheckCircle2 size={13} /> Live Growth Telemetry
                </span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Stat 1: Acquisition Engine */}
              <div className="bg-[#FBF8F3] rounded-2xl p-5 border border-[#0F1C18]/6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5E6D66]">
                    Paid Acquisition
                  </span>
                  <BarChart2 size={18} className="text-[#E86034]" />
                </div>
                <p className="text-2xl sm:text-3xl font-black text-[#0F1C18] mt-3">
                  4.2x ROAS
                </p>
                <div className="mt-2 text-xs text-emerald-700 font-semibold flex items-center gap-1">
                  <TrendingUp size={13} />
                  <span>+185% Inbound Pipeline YoY</span>
                </div>
              </div>

              {/* Stat 2: Organic Search Authority */}
              <div className="bg-[#09201A] text-[#FBF8F3] rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FBF8F3]/70">
                    SEO Visibility Index
                  </span>
                  <TrendingUp size={18} className="text-[#E5A93C]" />
                </div>
                <p className="text-2xl sm:text-3xl font-black text-white mt-3">
                  Top 3 Ranks
                </p>
                <div className="mt-2 text-xs text-[#E5A93C] font-semibold">
                  85+ High-Intent Commercial Keywords
                </div>
              </div>

              {/* Stat 3: Web Performance & Conversion */}
              <div className="bg-[#FBF8F3] rounded-2xl p-5 border border-[#0F1C18]/6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5E6D66]">
                    Next.js Engineering
                  </span>
                  <Zap size={18} className="text-[#E86034]" />
                </div>
                <p className="text-2xl sm:text-3xl font-black text-[#0F1C18] mt-3">
                  0.7s LCP
                </p>
                <div className="mt-2 text-xs text-emerald-700 font-semibold">
                  99/100 Core Web Vitals • +74% CVR
                </div>
              </div>
            </div>

            {/* Bottom System Banner */}
            <div className="mt-5 rounded-2xl bg-[#09201A]/5 border border-[#0F1C18]/8 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#09201A] text-[#FBF8F3] flex items-center justify-center font-bold text-sm shrink-0">
                  <Layers size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F1C18]">
                    Strategy First. Engineering Second. Growth Always.
                  </h4>
                  <p className="text-xs text-[#5E6D66]">
                    Every landing page, ad creative, and SEO brief is mapped to customer unit economics.
                  </p>
                </div>
              </div>
              <Link
                href="/services"
                className="text-xs font-bold text-[#E86034] hover:underline flex items-center gap-1 whitespace-nowrap"
              >
                Explore services <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
