import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Zap } from "lucide-react";
import TopAnnouncement from "../components/TopAnnouncement";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StickyMobileBar from "../components/StickyMobileBar";
import ServiceCard from "../components/ServiceCard";
import CTA from "../components/CTA";
import { services } from "@/data/services";

export const metadata = {
  title: "Core Capabilities & Services | Osumio Digital Agency",
  alternate: {
    canonical: "{{metadataBase}}/services",
    languages: {
      "en-US": "{{metadataBase}}/services",
    },
  },
  description:
    "Explore Osumio's 9 core capabilities: full-funnel digital marketing, technical SEO, Google Ads, web design, Next.js engineering, e-commerce, and B2B lead generation.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F3] text-[#0F1C18]">
      <TopAnnouncement />
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="py-20 md:py-28 bg-[#09201A] text-[#FBF8F3] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#E5A93C] mb-6">
                <Sparkles size={14} />
                Full-Funnel Capabilities
              </span>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Capabilities engineered for{" "}
                <span className="editorial-italic font-normal text-[#E86034]">
                  compounding scale
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-[#FBF8F3]/80 leading-relaxed max-w-2xl">
                We combine strategic digital marketing, rigorous SEO architectures, and modern Next.js web engineering into a unified customer acquisition engine.
              </p>
            </div>
          </div>
        </section>

        {/* Services Directory */}
        <section className="py-20 md:py-28 bg-[#F5F0E6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-20 bg-[#FBF8F3] border-t border-[#0F1C18]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E86034]">
                Engagement Models
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0F1C18]">
                How we structure partnerships
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="rounded-3xl bg-white border border-[#0F1C18]/10 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#0F1C18]">
                  Fixed-Scope Project Sprints
                </h3>
                <p className="mt-2 text-sm text-[#5E6D66]">
                  Ideal for custom Next.js websites, branding overhauls, and headless commerce store builds.
                </p>
                <ul className="mt-6 space-y-3 text-xs font-semibold text-[#0F1C18]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#E86034]" /> Guaranteed 2-week agile sprint milestones
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#E86034]" /> Fixed transparent quote with zero scope creep
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#E86034]" /> 100% intellectual property &amp; codebase ownership
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-[#09201A] text-[#FBF8F3] p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-white">
                  Monthly Growth Retainers
                </h3>
                <p className="mt-2 text-sm text-[#FBF8F3]/70">
                  Ideal for ongoing technical SEO, Google Ads management, paid social scaling, and conversion testing.
                </p>
                <ul className="mt-6 space-y-3 text-xs font-semibold text-[#FBF8F3]/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#E5A93C]" /> Dedicated senior strategist &amp; engineering squad
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#E5A93C]" /> Real-time attribution &amp; live reporting dashboards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#E5A93C]" /> Flexible month-to-month commitment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}

