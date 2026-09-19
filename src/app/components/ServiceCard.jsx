"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export default function ServiceCard({ service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative rounded-3xl bg-white border border-[#0F1C18]/10 p-8 flex flex-col justify-between hover:border-[#E86034]/40 hover:shadow-[0_20px_50px_rgba(15,28,24,0.08)] transition-all duration-300"
    >
      <div>
        {/* Top Header: Number and Arrow */}
        <div className="flex items-center justify-between pb-6 border-b border-[#0F1C18]/8">
          <span className="text-2xl font-black tracking-tight text-[#0F1C18] group-hover:text-[#E86034] transition-colors font-mono">
            {service.number}
          </span>
          <div className="w-10 h-10 rounded-full bg-[#FBF8F3] border border-[#0F1C18]/10 flex items-center justify-center text-[#0F1C18] group-hover:bg-[#E86034] group-hover:text-white group-hover:border-[#E86034] transition-all">
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </div>
        </div>

        {/* Title and Short Description */}
        <h3 className="text-2xl font-bold text-[#0F1C18] group-hover:text-[#E86034] transition-colors mt-6 leading-tight">
          {service.name}
        </h3>

        <p className="mt-3 text-sm text-[#5E6D66] leading-relaxed">
          {service.tagline}
        </p>

        {/* Core Deliverable Snippets */}
        <div className="mt-6 pt-6 border-t border-[#0F1C18]/6 space-y-2">
          {service.deliverables.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#0F1C18]/80">
              <Check size={14} className="text-[#E86034] shrink-0" />
              <span className="line-clamp-1">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Outcome Metric Pill */}
      {service.outcomes?.[0] && (
        <div className="mt-8 pt-4 border-t border-[#0F1C18]/6 flex items-center justify-between text-xs">
          <span className="font-bold text-[#5E6D66] uppercase tracking-wider text-[11px]">
            Target Outcome
          </span>
          <span className="font-bold text-[#E86034] bg-[#E86034]/10 px-2.5 py-1 rounded-full">
            {service.outcomes[0].metric} {service.outcomes[0].label}
          </span>
        </div>
      )}
    </Link>
  );
}

