"use client";

import Link from "next/link";
import { ArrowUpRight, Globe, Mail, Phone } from "lucide-react";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-[#09201A] text-[#FBF8F3] pt-16 pb-24 lg:pb-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Agency Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#E86034] text-white flex items-center justify-center font-black text-lg">
                O
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                osumio<span className="text-[#E86034]">.</span>
              </span>
            </Link>

            <p className="text-sm text-[#FBF8F3]/70 leading-relaxed max-w-sm">
              Osumio is a modern digital growth and engineering agency. We design and build high-performance websites, technical SEO architectures, and full-funnel customer acquisition systems for ambitious companies worldwide.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-semibold text-[#E5A93C]">
              <Globe size={15} />
              <span>US • Canada • UK • Australia • International</span>
            </div>
          </div>

          {/* Col 2: Services Index (5 cols) */}
          <div className="lg:col-span-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E86034] mb-4">
              Core Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {services.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="text-[#FBF8F3]/70 hover:text-white hover:underline transition-colors py-1 block"
                >
                  {svc.number} {svc.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Agency Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E86034] mb-4">
              Agency
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FBF8F3]/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About the Studio
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  All 9 Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Selected Work &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Insights &amp; Strategy Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Start a Project
                </Link>
              </li>
            </ul>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E86034] hover:underline"
              >
                Book a Strategy Call <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* Middle: Direct Contacts & Socials */}
        <div className="pt-10 pb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#FBF8F3]/70">
            <a
              href="mailto:hello@osumio.com"
              className="hover:text-[#E86034] transition-colors flex items-center gap-1.5"
            >
              <Mail size={14} /> hello@osumio.com
            </a>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>Response guarantee: within 1 business day</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-[#FBF8F3]/60">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-white/10 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            {/* X / Twitter */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Twitter / X"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-white/10 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#FBF8F3]/50">
          <p>
            Copyright © 2026 Osumio Digital Agency. All rights reserved. Registered international digital marketing &amp; web consultancy.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Terms of Engagement
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
