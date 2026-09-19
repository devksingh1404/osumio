import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles, Clock, Calendar } from "lucide-react";
import TopAnnouncement from "../components/TopAnnouncement";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StickyMobileBar from "../components/StickyMobileBar";
import CTA from "../components/CTA";

export const metadata = {
  title: "Insights & Strategy Blog | Osumio Digital Agency",
  description:
    "Actionable perspectives on technical SEO, Next.js web engineering, Google Ads optimization, and B2B customer acquisition from Osumio practitioners.",
};

export default function BlogPage() {
  const posts = [
    {
      title: "Why Sub-Second Next.js Performance Directly Lowers Google Ads Customer Acquisition Cost",
      category: "Performance & PPC",
      readTime: "6 min read",
      date: "March 2026",
      excerpt:
        "Every 100ms delay in mobile landing page load time triggers an exponential drop in post-click conversion rates. Here is how modern front-end engineering protects your paid media budget.",
    },
    {
      title: "Topical Authority vs. Keyword Density: How Search Engines Rank B2B Software & Services in 2026",
      category: "Search Engine Optimization",
      readTime: "8 min read",
      date: "February 2026",
      excerpt:
        "Keyword stuffing is dead. We break down how search intent clustering, structured entity schemas, and deep practitioner insights build defensible organic traffic.",
    },
    {
      title: "The Anatomy of an Enterprise B2B Service Page That Converts C-Suite Decision Makers",
      category: "Conversion Rate Optimization",
      readTime: "5 min read",
      date: "February 2026",
      excerpt:
        "From above-the-fold value propositions to qualification intake funnels, explore the structural patterns that turn passive traffic into qualified sales calls.",
    },
    {
      title: "Headless E-Commerce: When Does Your Store Actually Need Custom Architecture?",
      category: "E-Commerce Development",
      readTime: "7 min read",
      date: "January 2026",
      excerpt:
        "A candid breakdown of when custom React front-ends on Shopify provide clear ROI versus when an optimized standard theme is the smarter commercial move.",
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
                Practitioner Insights
              </span>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Perspectives on growth, code &amp;{" "}
                <span className="editorial-italic font-normal text-[#E86034]">
                  conversion strategy
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-[#FBF8F3]/80 leading-relaxed max-w-2xl">
                Real-world insights from the trenches of web engineering, organic search, and performance media acquisition. No generic fluff.
              </p>
            </div>
          </div>
        </section>

        {/* Articles List */}
        <section className="py-20 md:py-28 bg-[#F5F0E6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post, idx) => (
                <article
                  key={idx}
                  className="rounded-3xl bg-white border border-[#0F1C18]/10 p-8 sm:p-10 flex flex-col justify-between hover:border-[#E86034]/40 hover:shadow-md transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-[#5E6D66] mb-4">
                      <span className="font-bold text-[#E86034] uppercase tracking-wider">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <Clock size={13} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-[#0F1C18] group-hover:text-[#E86034] transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="mt-4 text-sm text-[#5E6D66] leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#0F1C18]/8 flex items-center justify-between">
                    <span className="text-xs text-[#8A9A92]">{post.date}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0F1C18] group-hover:text-[#E86034] transition-colors">
                      Read Strategy Brief <ArrowUpRight size={14} />
                    </span>
                  </div>
                </article>
              ))}
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

