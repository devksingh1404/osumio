"use client";

import { motion } from "framer-motion";
import { FolderCheck, Users, Calendar, Globe2 } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      metric: "120+",
      label: "Projects Delivered",
      subtext: "Web apps, e-commerce stores, and growth systems launched on schedule.",
      icon: FolderCheck,
    },
    {
      metric: "85+",
      label: "Businesses Supported",
      subtext: "From seed-stage venture startups to established middle-market enterprises.",
      icon: Users,
    },
    {
      metric: "8+",
      label: "Years of Experience",
      subtext: "Deep domain focus in Next.js web engineering, organic search, and paid acquisition.",
      icon: Calendar,
    },
    {
      metric: "14+",
      label: "International Markets",
      subtext: "Client partnerships active across US, UK, Canada, Australia, and Singapore.",
      icon: Globe2,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#09201A] text-[#FBF8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E86034]">
            Demonstrated Delivery
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Numbers built on{" "}
            <span className="editorial-italic font-normal text-[#E5A93C]">
              rigorous engineering
            </span>{" "}
            and client trust
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-3xl bg-[#102E26] border border-white/10 p-8 flex flex-col justify-between hover:border-[#E86034]/40 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#E86034] mb-6">
                    <IconComponent size={20} />
                  </div>
                  <p className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white">
                    {item.metric}
                  </p>
                  <h3 className="text-lg font-bold text-[#FBF8F3] mt-2">
                    {item.label}
                  </h3>
                </div>
                <p className="mt-4 text-xs text-[#FBF8F3]/70 leading-relaxed border-t border-white/10 pt-4">
                  {item.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

