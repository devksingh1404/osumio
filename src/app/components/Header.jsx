"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { services } from "@/data/services";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when route changes or outside click
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#FBF8F3]/95 backdrop-blur-md border-b border-[#0F1C18]/10 shadow-[0_4px_30px_rgba(15,28,24,0.04)]"
          : "bg-[#FBF8F3] border-b border-[#0F1C18]/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* ================= LOGO ================= */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-[#09201A] text-[#FBF8F3] flex items-center justify-center font-black text-lg tracking-tighter group-hover:bg-[#E86034] transition-colors shadow-sm">
            O
          </div>
          <span className="text-2xl font-black tracking-tight text-[#0F1C18]">
            osumio<span className="text-[#E86034]">.</span>
          </span>
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            href="/"
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
              pathname === "/"
                ? "text-[#E86034] bg-[#09201A]/5"
                : "text-[#0F1C18] hover:text-[#E86034]"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
              pathname === "/about"
                ? "text-[#E86034] bg-[#09201A]/5"
                : "text-[#0F1C18] hover:text-[#E86034]"
            }`}
          >
            About
          </Link>

          {/* Services Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                pathname.startsWith("/services") || servicesOpen
                  ? "text-[#E86034] bg-[#09201A]/5"
                  : "text-[#0F1C18] hover:text-[#E86034]"
              }`}
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </Link>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[780px]"
                >
                  <div className="rounded-3xl bg-white border border-[#0F1C18]/10 shadow-[0_24px_60px_rgba(15,28,24,0.12)] p-6">
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#0F1C18]/8">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#5E6D66]">
                          Core Agency Capabilities
                        </p>
                        <p className="text-xs text-[#8A9A92] mt-0.5">
                          Engineered for high growth, search dominance, and digital scale.
                        </p>
                      </div>
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#E86034] hover:underline"
                      >
                        All 9 Services <ArrowUpRight size={13} />
                      </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {services.map((svc) => (
                        <Link
                          key={svc.slug}
                          href={`/services/${svc.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="group p-3 rounded-2xl hover:bg-[#FBF8F3] transition-colors border border-transparent hover:border-[#0F1C18]/5 block"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-[#E86034]">
                              {svc.number}
                            </span>
                            <ArrowUpRight
                              size={13}
                              className="opacity-0 group-hover:opacity-100 text-[#E86034] transition-opacity"
                            />
                          </div>
                          <h4 className="text-sm font-bold text-[#0F1C18] group-hover:text-[#E86034] transition-colors mt-1">
                            {svc.name}
                          </h4>
                          <p className="text-[11px] text-[#5E6D66] line-clamp-2 mt-1 leading-snug">
                            {svc.tagline}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/work"
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
              pathname === "/work"
                ? "text-[#E86034] bg-[#09201A]/5"
                : "text-[#0F1C18] hover:text-[#E86034]"
            }`}
          >
            Work
          </Link>

          <Link
            href="/blog"
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
              pathname === "/blog"
                ? "text-[#E86034] bg-[#09201A]/5"
                : "text-[#0F1C18] hover:text-[#E86034]"
            }`}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
              pathname === "/contact"
                ? "text-[#E86034] bg-[#09201A]/5"
                : "text-[#0F1C18] hover:text-[#E86034]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* ================= RIGHT: LET'S TALK CTA ================= */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#09201A] text-[#FBF8F3] text-sm font-bold hover:bg-[#E86034] transition-all shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={15} />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#0F1C18] hover:bg-[#F5F0E6] transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU DRAWER ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FBF8F3] border-b border-[#0F1C18]/10 px-6 py-6 shadow-2xl overflow-y-auto max-h-[85vh]"
          >
            <div className="space-y-4">
              <Link
                href="/"
                className="block py-2.5 text-lg font-bold text-[#0F1C18] border-b border-[#0F1C18]/10"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="block py-2.5 text-lg font-bold text-[#0F1C18] border-b border-[#0F1C18]/10"
              >
                About
              </Link>

              {/* Mobile Services Accordion */}
              <div className="border-b border-[#0F1C18]/10 pb-2">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full py-2.5 text-lg font-bold text-[#0F1C18]"
                >
                  <span>Services</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="pt-2 pl-3 pb-3 space-y-2">
                    <Link
                      href="/services"
                      className="block text-xs font-bold uppercase tracking-wider text-[#E86034] pb-1"
                    >
                      View All 9 Services →
                    </Link>
                    {services.map((svc) => (
                      <Link
                        key={svc.slug}
                        href={`/services/${svc.slug}`}
                        className="block text-sm font-semibold text-[#5E6D66] hover:text-[#E86034] py-1"
                      >
                        {svc.number} {svc.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/work"
                className="block py-2.5 text-lg font-bold text-[#0F1C18] border-b border-[#0F1C18]/10"
              >
                Work &amp; Case Studies
              </Link>

              <Link
                href="/blog"
                className="block py-2.5 text-lg font-bold text-[#0F1C18] border-b border-[#0F1C18]/10"
              >
                Blog &amp; Insights
              </Link>

              <Link
                href="/contact"
                className="block py-2.5 text-lg font-bold text-[#0F1C18] border-b border-[#0F1C18]/10"
              >
                Contact
              </Link>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#E86034] text-white font-bold text-sm shadow-md active:scale-[0.98]"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}