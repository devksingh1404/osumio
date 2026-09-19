"use client";

import Link from "next/link";
import {
  Compass,
  Zap,
  Target,
  MessageSquareCheck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  const pillars = [
    {
      id: "strategy-first",
      number: "01",
      tag: "Strategy Before Execution",
      title: "We solve business bottlenecks, not just cosmetic aesthetics",
      description:
        "Too many agencies jump straight to Figma and build pretty templates that fail to convert. We begin with commercial unit economics, customer journey friction audits, and competitive white-space analysis to ensure every deliverable has a clear ROI hypothesis.",
      badge: "Commercial Unit Economics",
      icon: Compass,
      stat: "100%",
      statLabel: "Strategy-Led Architecture",
      reverse: false,
      color: "bg-[#09201A] text-[#FBF8F3]",
      border: "border-[#FBF8F3]/10",
      accent: "text-[#E86034]",
    },
    {
      id: "performance-engineering",
      number: "02",
      tag: "Sub-Second Engineering",
      title: "Clean Next.js code built for speed, security, and organic search",
      description:
        "A website that takes 4 seconds to load burns up to 40% of paid ad traffic before visitors even see your headline. We engineer bespoke Next.js and React web applications that load in under 0.8s, pass all Core Web Vitals, and eliminate bulky third-party plugin vulnerabilities.",
      badge: "Sub-0.8s LCP Guaranteed",
      icon: Zap,
      stat: "99/100",
      statLabel: "Average Google Performance",
      reverse: true,
      color: "bg-white text-[#0F1C18]",
      border: "border-[#0F1C18]/10",
      accent: "text-[#E5A93C]",
    },
    {
      id: "conversion-first",
      number: "03",
      tag: "Conversion & Revenue First",
      title: "Traffic is a vanity metric; booked pipeline is sanity",
      description:
        "We reject agencies that celebrate impressions while bank accounts stay flat. Our SEO strategies target high-intent commercial keywords, our ad campaigns ruthlessly eliminate negative search spend, and our page funnels are built to turn clicks into committed inquiries.",
      badge: "High-Intent Acquisition",
      icon: Target,
      stat: "+74%",
      statLabel: "Average Conversion Rate Lift",
      reverse: false,
      color: "bg-[#09201A] text-[#FBF8F3]",
      border: "border-[#FBF8F3]/10",
      accent: "text-[#E86034]",
    },
    {
      id: "transparent-partnerships",
      number: "04",
      tag: "Radical Transparency",
      title: "Direct partner access with weekly async sprint cadence",
      description:
        "No junior account managers passing messages like a game of telephone. You collaborate directly with senior designers, developers, and growth strategists via dedicated Slack channels, weekly Loom video walkthroughs, and real-time live performance dashboards.",
      badge: "Async-First & Sprint Cadence",
      icon: MessageSquareCheck,
      stat: "< 2 hrs",
      statLabel: "Average Client Response Time",
      reverse: true,
      color: "bg-white text-[#0F1C18]",
      border: "border-[#0F1C18]/10",
      accent: "text-[#09201A]",
    },
  ];

  return (
    <section id="why-work-with-us" className="py-20 md:py-28 bg-[#FBF8F3] text-[#0F1C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E86034]">
            Why Work With Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F1C18] leading-tight">
            Engineered for founders who care about{" "}
            <span className="editorial-italic font-normal">commercial outcomes</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5E6D66]">
            We operate as an elite extension of your leadership team. High standards, transparent sprint cadences, and zero vanity metrics.
          </p>
        </div>

        {/* Alternating Strategic Pillars */}
        <div className="mt-16 space-y-16 lg:space-y-24">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`flex flex-col ${
                  pillar.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-10 lg:gap-16`}
              >
                {/* Visual Card Side */}
                <div className="w-full lg:w-1/2">
                  <div
                    className={`relative rounded-3xl ${pillar.color} p-8 sm:p-12 border ${pillar.border} shadow-[0_16px_50px_rgba(15,28,24,0.06)] overflow-hidden`}
                  >
                    <div className="inline-flex items-center gap-2 bg-black/10 dark:bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold mb-8">
                      <IconComponent size={14} className={pillar.accent} />
                      <span>{pillar.badge}</span>
                    </div>

                    <div className="bg-[#FBF8F3] text-[#0F1C18] rounded-2xl p-6 sm:p-8 border border-[#0F1C18]/10 shadow-lg max-w-sm">
                      <span className="text-3xl sm:text-4xl font-extrabold tracking-tight font-mono text-[#0F1C18]">
                        {pillar.stat}
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-[#5E6D66] mt-1">
                        {pillar.statLabel}
                      </p>
                      <div className="mt-4 pt-4 border-t border-[#0F1C18]/10 flex items-center gap-2 text-xs font-bold text-emerald-800">
                        <CheckCircle2 size={15} /> Verified Agency Standard
                      </div>
                    </div>

                    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#E86034] uppercase tracking-wider mb-2">
                    <span>{pillar.number}</span>
                    <span>•</span>
                    <span>{pillar.tag}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0F1C18] leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-base sm:text-lg text-[#5E6D66] leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#E86034] hover:underline underline-offset-4 group"
                    >
                      Start a conversation about your project
                      <ArrowRight
                        size={15}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
