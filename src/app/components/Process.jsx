"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      desc: "Deep stakeholder interviews, analytics teardown, buyer profile auditing, and commercial KPI alignment.",
      detail: "Unit economics, audience friction, baseline performance audit.",
    },
    {
      number: "02",
      title: "Strategize",
      desc: "Channel architecture, technical SEO mapping, conversion wireframing, and tailored tech stack specification.",
      detail: "Information architecture, keyword roadmap, conversion hypothesis.",
    },
    {
      number: "03",
      title: "Design",
      desc: "High-fidelity Figma prototypes, bespoke visual identity systems, and persuasive value-proposition copywriting.",
      detail: "Design tokens, responsive prototypes, conversion micro-copy.",
    },
    {
      number: "04",
      title: "Build",
      desc: "Clean Next.js, React, and Tailwind CSS engineering with headless CMS integration and zero plugin bloat.",
      detail: "Sub-second code, semantic HTML, accessible component library.",
    },
    {
      number: "05",
      title: "Launch",
      desc: "Rigorous QA testing, cross-browser validation, Core Web Vitals certification, and seamless DNS cutover.",
      detail: "301 redirect validation, server-side tracking, zero downtime.",
    },
    {
      number: "06",
      title: "Grow",
      desc: "Continuous A/B experimentation, paid media scaling, programmatic SEO expansion, and monthly ROI reviews.",
      detail: "Quarterly growth sprints, conversion testing, attribution modeling.",
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-[#F5F0E6] text-[#0F1C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E86034]">
            How We Work
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F1C18] leading-tight">
            A structured sprint methodology built for{" "}
            <span className="editorial-italic font-normal">predictable delivery</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5E6D66]">
            No ambiguous handoffs or endless redesign cycles. Every step operates within transparent 2-week agile sprints.
          </p>
        </div>

        {/* 6-Step Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl bg-white border border-[#0F1C18]/10 p-8 flex flex-col justify-between hover:border-[#E86034]/40 hover:shadow-[0_16px_40px_rgba(15,28,24,0.06)] transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#0F1C18]/8">
                  <span className="text-3xl font-black font-mono text-[#09201A]">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#E86034] bg-[#E86034]/10 px-3 py-1 rounded-full">
                    Sprint Phase
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#0F1C18] mt-6">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm text-[#5E6D66] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#0F1C18]/6 flex items-center gap-2 text-xs font-semibold text-[#09201A]">
                <CheckCircle2 size={14} className="text-[#E86034] shrink-0" />
                <span className="line-clamp-1">{step.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#09201A] text-white text-sm font-bold hover:bg-[#E86034] transition-colors shadow-sm"
          >
            Schedule a Discovery Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
