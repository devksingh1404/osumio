import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Globe2, ShieldCheck, Zap, Compass, Users } from "lucide-react";
import TopAnnouncement from "../components/TopAnnouncement";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StickyMobileBar from "../components/StickyMobileBar";
import Stats from "../components/Stats";
import CTA from "../components/CTA";

export const metadata = {
  title: "About the Studio | Osumio Digital Agency",
  description:
    "Learn about Osumio's agency philosophy, engineering standards, and mission to help ambitious businesses across the US, UK, Canada, and Australia scale online.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "Commercial Economics First",
      desc: "We evaluate your customer acquisition costs, gross margins, and lifetime value before recommending any design or technical changes.",
      icon: Compass,
    },
    {
      title: "Sub-Second Engineering",
      desc: "Every web product we build is hand-crafted with clean Next.js, React, and Tailwind CSS to guarantee sub-second speeds and flawless Core Web Vitals.",
      icon: Zap,
    },
    {
      title: "Direct Senior Partnership",
      desc: "No middle-tier account coordinators. You collaborate directly with senior designers, developers, and growth architects.",
      icon: Users,
    },
    {
      title: "Complete Code Ownership",
      desc: "You retain 100% intellectual property, vector files, Git repositories, and ad accounts. Zero vendor lock-in, ever.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F3] text-[#0F1C18]">
      <TopAnnouncement />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-[#09201A] text-[#FBF8F3] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#E5A93C] mb-6">
                <Sparkles size={14} />
                Agency Philosophy
              </span>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Built for companies that care about{" "}
                <span className="editorial-italic font-normal text-[#E86034]">
                  craft &amp; conversion
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-[#FBF8F3]/80 leading-relaxed max-w-2xl">
                Osumio was founded to eliminate the frustration of working with bloated agencies that produce slow, generic templates and celebrate vanity impressions while revenue remains flat.
              </p>
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-20 md:py-28 bg-[#FBF8F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E86034]">
                  The Osumio Thesis
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0F1C18] leading-tight">
                  Design should be beautiful. <br />
                  Code must be fast. <br />
                  Marketing must make money.
                </h2>
                <div className="mt-6 space-y-4 text-base text-[#5E6D66] leading-relaxed">
                  <p>
                    Most web design agencies don't understand customer acquisition unit economics. And most paid performance media agencies don't understand how poor typography and sluggish front-end code bleed conversion velocity.
                  </p>
                  <p>
                    We unite technical engineering, bespoke brand design, and data-driven customer acquisition into an integrated digital growth engine. We treat your digital presence as a revenue-generating commercial asset, not an online brochure.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#F5F0E6] rounded-3xl p-8 sm:p-12 border border-[#0F1C18]/8">
                <h3 className="text-xl font-bold text-[#0F1C18] mb-6">
                  Our Operating Principles
                </h3>
                <div className="space-y-6">
                  {principles.map((p, i) => {
                    const IconComponent = p.icon;
                    return (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white border border-[#0F1C18]/10 flex items-center justify-center text-[#E86034] shrink-0 mt-0.5">
                          <IconComponent size={18} />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-[#0F1C18]">
                            {p.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-[#5E6D66] mt-1 leading-relaxed">
                            {p.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Stats />
        <CTA />
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}

