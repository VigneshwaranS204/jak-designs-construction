"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Building, Layers, Eye } from "lucide-react";

interface FeaturedProjectProps {
  onOpenProject?: () => void;
}

export default function FeaturedProject({ onOpenProject }: FeaturedProjectProps) {
  return (
    <section className="relative py-20 lg:py-28 bg-[#0a1324] text-white overflow-hidden border-t border-white/10">
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-35 pointer-events-none" />

      {/* Decorative Technical Stamp */}
      <div className="hidden lg:block absolute top-8 right-12 text-[10px] font-mono tracking-widest text-white/20 uppercase">
        SPOTLIGHT // ARCHITECTURAL_LANDMARK
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Large Cinematic Architectural Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative group"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/12] overflow-hidden rounded-xs border-2 border-white/15 bg-slate-900 shadow-2xl">
              <Image
                src="/assets/WhatsApp Image 2026-09-24 at 6.00.55 PM.jpeg"
                alt="JAK Designs Featured Project - Parametric Backlit Facade Design"
                fill
                className="object-cover object-center group-hover:scale-104 transition-transform duration-700 filter brightness-95"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1324]/80 via-transparent to-transparent" />

              {/* Technical Stamp on Media */}
              <div className="absolute bottom-4 left-4 p-3 bg-[#142544]/90 backdrop-blur-md border border-white/10 text-white rounded-xs">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#F59E0B] block">
                  FACADE INNOVATION
                </span>
                <span className="text-xs font-mono text-slate-200">
                  Illuminated Parametric Screen & Multi-Storey Architecture
                </span>
              </div>
            </div>

            {/* Corner Drafting Lines */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#F59E0B]" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#F59E0B]" />
          </motion.div>

          {/* Right: Editorial Narrative & Metadata */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-[#F59E0B]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#F59E0B] font-bold">
                FEATURED PROJECT
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
              Designed to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#F59E0B]">
                Stand Apart.
              </span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed mb-8">
              A high-precision demonstration of architectural engineering, marrying modern concrete
              cantilevers with custom-cut backlit decorative screens that transition seamlessly from
              sculptural daytime elegance into an illuminated twilight landmark.
            </p>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 gap-4 p-5 bg-[#142544]/60 border border-white/10 rounded-xs mb-8">
              <div>
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  PROJECT TYPE
                </p>
                <p className="text-sm font-bold text-white mt-1">
                  Multi-Storey Architecture
                </p>
              </div>

              <div>
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  DESIGN
                </p>
                <p className="text-sm font-bold text-white mt-1">
                  3D Elevation & Facade
                </p>
              </div>

              <div>
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  EXECUTION SCOPE
                </p>
                <p className="text-sm font-bold text-white mt-1">
                  Turnkey Design + Engineering
                </p>
              </div>

              <div>
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  VISUALIZATION
                </p>
                <p className="text-sm font-bold text-[#F59E0B] mt-1">
                  Photorealistic Twilight
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#F59E0B] hover:bg-[#d97706] text-[#142544] font-semibold font-mono text-xs uppercase tracking-wider rounded-xs transition-colors shadow-lg"
              >
                <span>Request Similar Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 hover:border-white/50 text-white font-mono text-xs uppercase tracking-wider rounded-xs transition-colors hover:bg-white/5"
              >
                <span>Browse All Works</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
