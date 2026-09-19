"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight, Layers, Sparkles } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  return (
    <section id="work" className="py-20 md:py-28 bg-[#FBF8F3] text-[#0F1C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E86034]">
              Project Showcase
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F1C18] leading-tight">
              Selected Work &amp;{" "}
              <span className="editorial-italic font-normal">commercial outcomes</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5E6D66] max-w-md leading-relaxed">
            Explore how we approach complex digital challenges across technical architecture, brand differentiation, and search acquisition.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-16 space-y-12">
          {caseStudies.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-3xl bg-white border border-[#0F1C18]/10 p-8 sm:p-12 shadow-[0_12px_45px_rgba(15,28,24,0.05)] hover:border-[#E86034]/30 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Overview (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#E86034] uppercase tracking-wider mb-2">
                      <span>{project.tag}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1C18] leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5E6D66] mt-1 font-medium">
                      {project.industry}
                    </p>

                    {/* Services Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.services.map((svc, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-[#F5F0E6] text-[#0F1C18] text-xs font-bold"
                        >
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#0F1C18]/8">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#E86034] hover:underline"
                    >
                      Request Detailed Case Brief
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>

                {/* Right Problem / Solution / Result Breakdown (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Challenge */}
                  <div className="bg-[#FBF8F3] rounded-2xl p-5 border border-[#0F1C18]/6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#5E6D66]">
                      The Commercial Challenge
                    </h4>
                    <p className="text-sm text-[#0F1C18] mt-2 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="bg-[#FBF8F3] rounded-2xl p-5 border border-[#0F1C18]/6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#5E6D66]">
                      Our Strategic Solution
                    </h4>
                    <p className="text-sm text-[#0F1C18] mt-2 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Measurable Outcome */}
                  <div className="bg-[#09201A] text-[#FBF8F3] rounded-2xl p-5 shadow-sm">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5A93C]">
                      Key Commercial Result
                    </h4>
                    <p className="text-sm text-[#FBF8F3] font-medium mt-2 leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Case Studies Link */}
        <div className="mt-14 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#09201A] text-white text-sm font-bold hover:bg-[#E86034] transition-colors shadow-sm"
          >
            Explore Complete Portfolio
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

