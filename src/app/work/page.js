import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";
import TopAnnouncement from "../components/TopAnnouncement";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StickyMobileBar from "../components/StickyMobileBar";
import CaseStudies from "../components/CaseStudies";
import CTA from "../components/CTA";

export const metadata = {
  title: "Selected Work & Case Studies | Osumio Digital Agency",
  alternate: {
    canonical: "{{metadataBase}}/work",
    languages: {
      "en-US": "{{metadataBase}}/work",
    },
  },
  description:
    "Explore how Osumio engineers high-performance web products, SEO architectures, and customer acquisition engines that drive measurable commercial results.",
};

export default function WorkPage() {
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
                Selected Case Studies
              </span>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Demonstrated impact across{" "}
                <span className="editorial-italic font-normal text-[#E86034]">
                  global markets
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-[#FBF8F3]/80 leading-relaxed max-w-2xl">
                Explore a selection of our recent engineering, search optimization, and performance acquisition engagements across North America, the UK, and Australia.
              </p>
            </div>
          </div>
        </section>

        <CaseStudies />
        <CTA />
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}

