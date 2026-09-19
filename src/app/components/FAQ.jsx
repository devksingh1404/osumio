"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FBF8F3] text-[#0F1C18]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E86034]">
            Frequently Asked Questions
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F1C18] leading-tight">
            Straight answers about how we{" "}
            <span className="editorial-italic font-normal">work &amp; deliver</span>
          </h2>
          <p className="mt-4 text-base text-[#5E6D66]">
            Clear expectations on pricing, timelines, technology stacks, and international client collaboration.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#0F1C18]/10 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex items-center justify-between w-full p-6 text-left gap-4 hover:bg-[#F5F0E6]/30 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#E86034]">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#0F1C18] mt-1 leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[#FBF8F3] border border-[#0F1C18]/10 flex items-center justify-center text-[#0F1C18] shrink-0">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#5E6D66] leading-relaxed border-t border-[#0F1C18]/6 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

