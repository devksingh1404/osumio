import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Layers, ShieldCheck, HelpCircle } from "lucide-react";
import TopAnnouncement from "../../components/TopAnnouncement";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StickyMobileBar from "../../components/StickyMobileBar";
import CTA from "../../components/CTA";
import { services } from "@/data/services";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  if (!service) return {};

  return {
    title: `${service.name} Services | Osumio Agency`,
    alternate: {
      canonical: `{{metadataBase}}/services/${service.slug}`,
      languages: {
        "en-US": `{{metadataBase}}/services/${service.slug}`,
      },
    },
    description: service.heroDesc,
    openGraph: {
      title: `${service.name} | Osumio Digital Agency`,
      description: service.heroDesc,
      url: `{{metadataBase}}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F3] text-[#0F1C18]">
      <TopAnnouncement />
      <Header />

      <main className="flex-1">
        {/* ================= HERO SECTION ================= */}
        <section className="py-20 md:py-28 bg-[#09201A] text-[#FBF8F3] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb & Number Tag */}
            <div className="flex items-center gap-3 mb-6">
              <Link
                href="/services"
                className="text-xs font-bold uppercase tracking-wider text-[#E5A93C] hover:underline"
              >
                Services
              </Link>
              <span className="text-white/30">•</span>
              <span className="text-xs font-mono font-bold text-white/60">
                Service {service.number}
              </span>
            </div>

            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                {service.heroTitle}
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-[#FBF8F3]/80 leading-relaxed max-w-2xl">
                {service.heroDesc}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#E86034] text-white text-base font-bold shadow-md hover:bg-[#D45025] transition-all"
                >
                  Start a Conversation
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/work"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white text-base font-semibold hover:bg-white/10 transition-all"
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* Target Outcomes Metrics Bar */}
            <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {service.outcomes.map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-[#E5A93C]">
                    {item.metric}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#FBF8F3]/80 mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= DELIVERABLES BREAKDOWN ================= */}
        <section className="py-20 md:py-28 bg-[#F5F0E6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E86034]">
                Scope of Work
              </span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F1C18] leading-tight">
                What we deliver &amp;{" "}
                <span className="editorial-italic font-normal">manage for you</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-[#0F1C18]/10 p-8 flex items-start gap-4 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-[#E86034]/10 text-[#E86034] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0F1C18]">
                      {item}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#5E6D66] leading-relaxed">
                      Executed directly by dedicated senior specialists adhering to strict performance, security, and conversion benchmarks.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROCESS & TIMELINE ================= */}
        <section className="py-20 md:py-28 bg-[#FBF8F3] border-t border-[#0F1C18]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E86034]">
                Sprint Cadence
              </span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F1C18] leading-tight">
                Our execution framework for{" "}
                <span className="editorial-italic font-normal">{service.shortName}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step) => (
                <div
                  key={step.step}
                  className="rounded-3xl bg-white border border-[#0F1C18]/10 p-8 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <span className="text-3xl font-black font-mono text-[#09201A]">
                      {step.step}
                    </span>
                    <h3 className="text-xl font-bold text-[#0F1C18] mt-4">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#5E6D66] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SERVICE FAQS ================= */}
        <section className="py-20 bg-[#F5F0E6] border-t border-[#0F1C18]/8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E86034]">
                Common Questions
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-[#0F1C18]">
                {service.name} FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-[#0F1C18]/10 p-6 shadow-sm"
                >
                  <h3 className="text-base font-bold text-[#0F1C18]">
                    {faq.q}
                  </h3>
                  <p className="mt-2 text-sm text-[#5E6D66] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
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

