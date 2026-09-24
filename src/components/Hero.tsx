"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Compass, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a1324] pt-32 sm:pt-36 lg:pt-40 pb-20 lg:pb-24">
      {/* Background Architectural Project Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/WhatsApp Image 2026-09-24 at 6.00.55 PM (1).jpeg"
          alt="JAK Designs & Construction Luxury Modern Residence at Twilight"
          fill
          priority
          className="object-cover object-center filter brightness-75 contrast-105"
          sizes="100vw"
        />
        {/* Architectural Navy Gradients & Blueprint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1324]/95 via-[#142544]/80 to-[#0a1324]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1324] via-transparent to-[#0a1324]/80" />
        <div className="absolute inset-0 blueprint-grid-dark pointer-events-none opacity-40" />

        {/* Technical Blueprint Measurement Lines & Crosshairs positioned safely at bottom */}
        <div className="hidden lg:block absolute bottom-8 left-8 sm:left-12 text-[10px] font-mono tracking-widest text-white/30 uppercase z-10">
          [GEO_REF: 13.0335°N 80.2677°E] // CHENNAI_HQ
        </div>
        <div className="hidden lg:block absolute bottom-8 right-8 sm:right-12 text-[10px] font-mono tracking-widest text-white/30 uppercase z-10">
          PROJECT_SCALE: 1:1 // TURNKEY_EXECUTION
        </div>

        {/* Technical drafting crosshair markings */}
        <div className="absolute top-1/3 right-1/4 w-6 h-6 border-t border-l border-[#F59E0B]/30 pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/5 w-6 h-6 border-b border-r border-[#F59E0B]/30 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 sm:mt-6">
        <div className="max-w-3xl lg:max-w-4xl">
          {/* Small Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xs bg-[#142544]/90 border border-[#F59E0B]/40 text-[#F59E0B] text-xs font-mono uppercase tracking-widest mb-6 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-ping" />
            <span>JAK DESIGNS & CONSTRUCTION</span>
            <span className="text-white/40">|</span>
            <span className="text-white/70">EST. {COMPANY_INFO.foundedYear}</span>
          </motion.div>

          {/* Main H1 Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-4"
          >
            From Architectural Design <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
              to Exceptional Construction.
            </span>
          </motion.h1>

          {/* Supporting Line with Orange Accent Marker */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-0.5 w-12 bg-[#F59E0B]" />
            <p className="text-base sm:text-lg lg:text-xl font-medium text-[#F59E0B] tracking-wide">
              Designing thoughtful spaces. Building them with precision.
            </p>
          </motion.div>

          {/* Body Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-10"
          >
            From architectural planning and 3D visualization to construction and interior execution,
            JAK brings your entire vision together under one disciplined roof.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#142544] bg-[#F59E0B] hover:bg-[#d97706] transition-all rounded-xs shadow-xl shadow-orange-500/10 hover:shadow-orange-500/25 group"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all rounded-xs group"
            >
              <span>Explore Our Projects</span>
              <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>
          </motion.div>

          {/* Trust Highlights Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xs bg-white/5 border border-white/10 flex items-center justify-center text-[#F59E0B] shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-slate-400">Architecture</p>
                <p className="text-sm font-semibold text-white">Turnkey Design + Build</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xs bg-white/5 border border-white/10 flex items-center justify-center text-[#F59E0B] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-slate-400">Experience</p>
                <p className="text-sm font-semibold text-white">15K+ Crafted Designs</p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xs bg-white/5 border border-white/10 flex items-center justify-center text-[#F59E0B] shrink-0 font-mono text-xs font-bold">
                1:1
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-slate-400">Execution</p>
                <p className="text-sm font-semibold text-white">Design to Reality</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <span className="w-1 h-2 rounded-full bg-[#F59E0B]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
