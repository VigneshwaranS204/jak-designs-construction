"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Phone, MessageSquare, ShieldCheck, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#0a1324] text-white overflow-hidden border-t border-white/10">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-35 pointer-events-none" />

      {/* Decorative architectural circle motif */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-[#F59E0B]/10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs bg-[#142544] border border-[#F59E0B]/40 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-ping" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#F59E0B]">
              START YOUR ARCHITECTURAL JOURNEY
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Have a Space in Mind?
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Let&apos;s turn your ideas into a space that&apos;s designed with purpose and built to last.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12">
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#F59E0B] hover:bg-[#d97706] text-[#142544] font-semibold text-xs uppercase tracking-wider font-mono rounded-xs shadow-xl shadow-orange-500/10 hover:shadow-orange-500/25 transition-all group"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <a
              href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs uppercase tracking-wider font-mono rounded-xs transition-all"
            >
              <Phone className="w-4 h-4 text-[#F59E0B]" />
              <span>Talk to JAK: {COMPANY_INFO.contact.phone}</span>
            </a>

            <a
              href={COMPANY_INFO.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 font-mono text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Guarantee Badges */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
              <span>Transparent BOQ & Fixed Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#F59E0B]" />
              <span>Strict Milestone Handover Schedules</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#F59E0B] font-bold">1:1</span>
              <span>Design-to-Site Execution Accuracy</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
