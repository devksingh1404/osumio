"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Globe2, Sparkles, CheckCircle2 } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F5F0E6] text-[#0F1C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E86034]">
            Client Feedback
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F1C18] leading-tight">
            Trusted by founders who demand{" "}
            <span className="editorial-italic font-normal">tangible progress</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Retention Metric */}
          <div className="rounded-3xl bg-[#09201A] text-[#FBF8F3] p-8 sm:p-10 flex flex-col justify-between shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FBF8F3]/60">
                Client Loyalty
              </span>
              <div className="w-8 h-8 rounded-full bg-[#E86034] text-white flex items-center justify-center font-bold text-xs">
                ★
              </div>
            </div>

            <div className="my-8">
              <div className="flex items-baseline">
                <span className="text-6xl font-black font-mono tracking-tighter text-white">
                  94
                </span>
                <span className="text-3xl font-extrabold text-[#E86034] ml-1">%</span>
              </div>
              <p className="mt-3 text-xl font-bold leading-snug text-[#FBF8F3]/90">
                of clients retain or renew their growth engagements into year two
              </p>
            </div>

            <p className="text-xs text-[#FBF8F3]/50 border-t border-white/10 pt-4">
              Reflects active sprint and monthly growth care partnerships.
            </p>
          </div>

          {/* Card 2: International Presence */}
          <div className="rounded-3xl bg-white border border-[#0F1C18]/10 p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5E6D66]">
                  Global Reach
                </span>
                <Globe2 size={20} className="text-[#E86034]" />
              </div>

              <h3 className="text-2xl font-bold text-[#0F1C18] leading-snug">
                Built for English-speaking global markets
              </h3>
              <p className="mt-3 text-sm text-[#5E6D66] leading-relaxed">
                Operating asynchronous workflows aligned seamlessly with North American, UK, and Asia-Pacific timezones.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#0F1C18]/10 flex flex-wrap gap-2 text-xs font-bold text-[#0F1C18]">
              <span className="px-2.5 py-1 bg-[#F5F0E6] rounded-md">United States</span>
              <span className="px-2.5 py-1 bg-[#F5F0E6] rounded-md">United Kingdom</span>
              <span className="px-2.5 py-1 bg-[#F5F0E6] rounded-md">Canada</span>
              <span className="px-2.5 py-1 bg-[#F5F0E6] rounded-md">Australia</span>
            </div>
          </div>

          {/* Card 3: Quality Guarantee */}
          <div className="rounded-3xl bg-white border border-[#0F1C18]/10 p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E86034]">
                Code &amp; Strategy Standard
              </span>
              <h3 className="text-2xl font-bold text-[#0F1C18] mt-4 leading-tight">
                Zero Template Shortcuts
              </h3>
              <p className="text-sm text-[#5E6D66] mt-2 leading-relaxed">
                Every project features original architecture, custom Figma systems, and bespoke Next.js front-ends tailored to your exact business model.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#0F1C18]/10 flex items-center gap-2 text-xs font-bold text-emerald-800">
              <CheckCircle2 size={16} /> 100% Original Codebase Ownership
            </div>
          </div>

          {/* Card 4: Interactive Client Testimonials Carousel (Spans 3 cols on lg) */}
          <div className="lg:col-span-3 rounded-3xl bg-white border border-[#0F1C18]/10 p-8 sm:p-12 shadow-sm relative">
            <div className="flex items-center justify-between pb-6 border-b border-[#0F1C18]/10">
              <div className="flex items-center gap-1 text-[#E5A93C]">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-current" />
                ))}
                <span className="text-xs font-bold text-[#0F1C18] ml-2">
                  Verified Client Review Placeholder
                </span>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-[#FBF8F3] border border-[#0F1C18]/10 flex items-center justify-center text-[#0F1C18] hover:bg-[#09201A] hover:text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-[#09201A] text-white flex items-center justify-center hover:bg-[#E86034] transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Testimonial Quote */}
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[currentIndex].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="py-8"
              >
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#0F1C18] leading-relaxed">
                  “{testimonials[currentIndex].quote}”
                </blockquote>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0F1C18]">
                      {testimonials[currentIndex].author}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5E6D66]">
                      {testimonials[currentIndex].role} — {testimonials[currentIndex].company} ({testimonials[currentIndex].market})
                    </p>
                  </div>
                  <span className="inline-flex items-center text-xs font-bold text-[#E86034] bg-[#E86034]/10 px-3 py-1.5 rounded-full self-start sm:self-auto">
                    {testimonials[currentIndex].metric}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5 pt-4 border-t border-[#0F1C18]/10">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex ? "w-6 bg-[#E86034]" : "w-2 bg-[#0F1C18]/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
