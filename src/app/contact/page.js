import Link from "next/link";
import { Sparkles, Clock, Globe2, Mail, MessageSquare } from "lucide-react";
import TopAnnouncement from "../components/TopAnnouncement";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StickyMobileBar from "../components/StickyMobileBar";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";

export const metadata = {
  title: "Start a Conversation | Osumio Digital Agency",
  description:
    "Schedule a consultation or submit a project brief to Osumio. We respond within 1 business day with preliminary strategic notes and timeline estimates.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F3] text-[#0F1C18]">
      <TopAnnouncement />
      <Header />

      <main className="flex-1">
        {/* Contact Page Hero */}
        <section className="py-20 md:py-28 bg-[#09201A] text-[#FBF8F3] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#E5A93C] mb-6">
                <Sparkles size={14} />
                Client Intake
              </span>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Let's discuss your next{" "}
                <span className="editorial-italic font-normal text-[#E86034]">
                  growth phase
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-[#FBF8F3]/80 leading-relaxed max-w-2xl">
                Tell us about your product, your commercial goals, and your desired launch timeline. A senior strategist will review and reply within 1 business day.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />

        {/* FAQ Preview */}
        <FAQ />
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}

