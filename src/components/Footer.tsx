"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUp,
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageSquare,
  Compass,
  Building2,
  ShieldCheck,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a1324] text-white border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-4">
            <Link href="#" className="inline-block mb-6">
              <div className="relative h-12 w-52">
                <Image
                  src="/images/jak_logo_white.png"
                  alt="JAK Designs & Construction"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm font-medium text-[#F59E0B] tracking-wide mb-3">
              &ldquo;{COMPANY_INFO.tagline}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Founded in 2018 by Er. N. Mohamed Tariq Anwar, JAK integrates architectural innovation with disciplined civil execution, delivering over 15,000 designs across India.
            </p>

            {/* Quick Metrics */}
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <div className="p-2 bg-white/5 border border-white/10 rounded-xs">
                <span className="text-[#F59E0B] font-bold">15K+</span> Designs
              </div>
              <div className="p-2 bg-white/5 border border-white/10 rounded-xs">
                <span className="text-[#F59E0B] font-bold">4K+</span> 2D Plans
              </div>
              <div className="p-2 bg-white/5 border border-white/10 rounded-xs">
                <span className="text-[#F59E0B] font-bold">8K+</span> Elevations
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F59E0B] font-bold mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About JAK
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Design Services
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Construction Works
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-white transition-colors">
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link href="#design-build" className="hover:text-white transition-colors">
                  Design + Build
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Architectural Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F59E0B] font-bold mb-4">
              CORE SERVICES
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-mono">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#F59E0B]" />
                <span>Architectural 2D & 3D Plans</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#F59E0B]" />
                <span>3D Elevation & Modeling</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#F59E0B]" />
                <span>Structural RCC Drawings</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#F59E0B]" />
                <span>Turnkey New Construction</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#F59E0B]" />
                <span>Modular Kitchens & Interiors</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#F59E0B]" />
                <span>Electrical & Plumbing (MEP)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#F59E0B]" />
                <span>Swimming Pool & Landscaping</span>
              </li>
            </ul>
          </div>

          {/* Official Brochure Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F59E0B] font-bold mb-4">
              HEADQUARTERS
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <p className="leading-relaxed">
                {COMPANY_INFO.address.street}, <br />
                {COMPANY_INFO.address.area}, {COMPANY_INFO.address.state}, India, <br />
                {COMPANY_INFO.address.city} - {COMPANY_INFO.address.pincode}
              </p>

              <div className="pt-2">
                <p className="text-[10px] font-mono text-slate-400 uppercase">DIRECT LINE</p>
                <a
                  href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                  className="text-sm font-bold text-white hover:text-[#F59E0B] transition-colors"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>

              <div>
                <p className="text-[10px] font-mono text-slate-400 uppercase">EMAIL</p>
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="text-white hover:text-[#F59E0B] transition-colors"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_INFO.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 font-mono text-xs rounded-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Direct WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>© 2026 JAK Designs & Construction. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Chennai • Ongole • Gandhi Nagar • Beem Nagar • Lucknow • Kochi</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xs bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[#F59E0B] transition-all flex items-center gap-1.5 focus:outline-none"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#F59E0B]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
