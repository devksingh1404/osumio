"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#F5F0E6] text-[#0F1C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E86034] mb-2">
              <Sparkles size={14} />
              <span>Core Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F1C18] leading-tight">
              Integrated services built for{" "}
              <span className="editorial-italic font-normal">compounding growth</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5E6D66] max-w-md leading-relaxed">
            We don't believe in isolated tactics. Every line of code, ad creative, and search asset works as an interconnected revenue system.
          </p>
        </div>

        {/* Editorial Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        {/* Bottom Explorer Action */}
        <div className="mt-14 pt-8 border-t border-[#0F1C18]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-[#5E6D66]">
            Looking for a custom hybrid engagement combining web engineering and search acquisition?
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#09201A] text-white text-xs sm:text-sm font-bold hover:bg-[#E86034] transition-colors shadow-sm"
          >
            Compare All 9 Services
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
