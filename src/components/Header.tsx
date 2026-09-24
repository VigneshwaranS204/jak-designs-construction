"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Design & Build", href: "#design-build" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0a1324]/95 backdrop-blur-md border-b border-white/10 shadow-xl ${
          isScrolled ? "py-3" : "py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="#"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="JAK Designs & Construction Homepage"
            >
              <div className="relative h-11 w-44 sm:h-12 sm:w-52 transition-transform duration-300 group-hover:scale-102">
                <Image
                  src="/images/jak_logo_white.png"
                  alt="JAK Designs & Construction Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-white transition-colors relative group"
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#F59E0B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={COMPANY_INFO.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-white/20 text-slate-200 hover:text-[#F59E0B] hover:border-[#F59E0B] hover:bg-white/5 transition-all"
                title="WhatsApp Consultation"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                className="p-2.5 rounded-full border border-white/20 text-slate-200 hover:text-[#F59E0B] hover:border-[#F59E0B] hover:bg-white/5 transition-all"
                title={`Call ${COMPANY_INFO.contact.phone}`}
                aria-label={`Call ${COMPANY_INFO.contact.phone}`}
              >
                <Phone className="w-4 h-4" />
              </a>

              <Link
                href="#contact"
                onClick={onOpenConsultation}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#142544] bg-[#F59E0B] hover:bg-[#d97706] transition-all rounded-sm shadow-md hover:shadow-orange-500/20 group"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="#contact"
                className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#142544] bg-[#F59E0B] rounded-sm"
              >
                Quote
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-sm text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down / Fullscreen Navigation Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="fixed inset-0 bg-[#0a1324]/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#142544] p-6 shadow-2xl flex flex-col justify-between transition-transform duration-500 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="relative h-10 w-36">
                <Image
                  src="/images/jak_logo_white.png"
                  alt="JAK Designs Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-300 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-200 hover:text-[#F59E0B] py-2 border-b border-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-200">JAK Designs & Construction</p>
              <p>Mylapore, Chennai - 600004</p>
              <p className="text-[#F59E0B]">{COMPANY_INFO.contact.phone}</p>
            </div>

            <Link
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenConsultation) onOpenConsultation();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-center font-semibold uppercase tracking-wider text-xs bg-[#F59E0B] text-[#142544] rounded-sm shadow-lg"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
