"use client";

import { useState } from "react";
import { ArrowRight, Mail, MessageCircle, Globe2, Clock, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Web Design & Development",
    budget: "$10,000 – $25,000",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate client-side submission
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F5F0E6] text-[#0F1C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Contact Details (5 cols) */}
          <div className="lg:col-span-5">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E86034]">
              Start a Conversation
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F1C18] leading-tight">
              Tell us about your business &amp;{" "}
              <span className="editorial-italic font-normal">growth goals</span>
            </h2>

            <p className="mt-6 text-base text-[#5E6D66] leading-relaxed">
              Whether you are looking to engineer a bespoke Next.js web application, scale commercial search acquisition, or deploy high-converting Google Ads campaigns, we are ready to help.
            </p>

            {/* Direct Contact & Reassurance */}
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#0F1C18]/10 flex items-center justify-center text-[#E86034] shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F1C18]">Prompt Response</h4>
                  <p className="text-xs text-[#5E6D66] mt-0.5">
                    We review all inquiries and respond within 1 business day with preliminary strategic notes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#0F1C18]/10 flex items-center justify-center text-[#E86034] shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F1C18]">Direct Email</h4>
                  <a
                    href="mailto:hello@osumio.com"
                    className="text-xs font-semibold text-[#E86034] hover:underline"
                  >
                    hello@osumio.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#0F1C18]/10 flex items-center justify-center text-[#09201A] shrink-0">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F1C18]">WhatsApp Consultation</h4>
                  <p className="text-xs text-[#5E6D66]">
                    Available for rapid direct client coordination during EST and GMT business hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#0F1C18]/10 flex items-center justify-center text-[#E5A93C] shrink-0">
                  <Globe2 size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F1C18]">Global Market Focus</h4>
                  <p className="text-xs text-[#5E6D66]">
                    USA, Canada, United Kingdom, Australia, and select international growth teams.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Intake Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#0F1C18]/10 p-8 sm:p-12 shadow-[0_16px_50px_rgba(15,28,24,0.06)]">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#0F1C18]">
                  Inquiry Received
                </h3>
                <p className="text-sm text-[#5E6D66] max-w-md mx-auto">
                  Thank you for reaching out. A senior partner will review your business requirements and reply within 1 business day.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-[#E86034] underline underline-offset-4"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#5E6D66] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#0F1C18]/15 bg-[#FBF8F3] text-sm text-[#0F1C18] focus:outline-none focus:border-[#E86034] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#5E6D66] mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#0F1C18]/15 bg-[#FBF8F3] text-sm text-[#0F1C18] focus:outline-none focus:border-[#E86034] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#5E6D66] mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#0F1C18]/15 bg-[#FBF8F3] text-sm text-[#0F1C18] focus:outline-none focus:border-[#E86034] transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#5E6D66] mb-2">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#0F1C18]/15 bg-[#FBF8F3] text-sm text-[#0F1C18] focus:outline-none focus:border-[#E86034] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Service */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#5E6D66] mb-2">
                      Primary Service Needed *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#0F1C18]/15 bg-[#FBF8F3] text-sm text-[#0F1C18] focus:outline-none focus:border-[#E86034] transition-colors"
                    >
                      <option>Web Design &amp; Development</option>
                      <option>Digital Marketing (Full-Funnel)</option>
                      <option>Search Engine Optimization (SEO)</option>
                      <option>Google Ads &amp; Paid Search (PPC)</option>
                      <option>Social Media Marketing</option>
                      <option>WordPress Development</option>
                      <option>E-Commerce Development</option>
                      <option>Branding &amp; Visual Identity</option>
                      <option>Lead Generation Systems</option>
                      <option>Integrated Growth Retainer</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#5E6D66] mb-2">
                      Target Budget Range *
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#0F1C18]/15 bg-[#FBF8F3] text-sm text-[#0F1C18] focus:outline-none focus:border-[#E86034] transition-colors"
                    >
                      <option>$5,000 – $10,000</option>
                      <option>$10,000 – $25,000</option>
                      <option>$25,000 – $50,000</option>
                      <option>$50,000+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5E6D66] mb-2">
                    Project Goals &amp; Context
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your current challenges, timeline, and what success looks like..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-[#0F1C18]/15 bg-[#FBF8F3] text-sm text-[#0F1C18] focus:outline-none focus:border-[#E86034] transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#E86034] text-white text-sm font-bold shadow-[0_6px_20px_rgba(232,96,52,0.35)] hover:bg-[#D45025] hover:shadow-[0_8px_25px_rgba(232,96,52,0.45)] transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

