"use client";

import { motion } from "framer-motion";
import { Search, PencilRuler, FileSpreadsheet, Construction, CheckCircle2 } from "lucide-react";
import { PROCESS_STEPS } from "@/data/services";

export default function DesignBuildProcess() {
  const iconMap: Record<string, any> = {
    Search,
    PencilRuler,
    FileSpreadsheet,
    Construction,
    CheckCircle2,
  };

  return (
    <section id="design-build" className="relative py-20 lg:py-28 bg-[#0a1324] text-white overflow-hidden border-t border-white/10">
      {/* Blueprint background grid */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none" />

      {/* Decorative Technical Coordinate Markers */}
      <div className="hidden lg:block absolute top-12 right-12 text-[10px] font-mono text-white/20 tracking-widest">
        WORKFLOW_SPEC: TURNKEY_05_STAGE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-[#F59E0B]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#F59E0B] font-bold">
              INTEGRATED WORKFLOW
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
            One Team. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#F59E0B]">
              From First Sketch to Final Finish.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            By keeping architectural vision, structural engineering, and on-site civil construction
            under a single entity, we eliminate handoff miscommunication and schedule delays.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          {/* Blueprint Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-[#F59E0B]/40 via-[#F59E0B] to-[#F59E0B]/40 border-b border-dashed border-[#F59E0B]/50 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = iconMap[step.icon] || PencilRuler;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="group relative bg-[#142544]/70 backdrop-blur-md p-6 border border-white/10 hover:border-[#F59E0B] transition-all duration-400 flex flex-col justify-between rounded-xs"
                >
                  {/* Step Marker Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xs bg-[#0a1324] border border-[#F59E0B]/50 flex items-center justify-center text-[#F59E0B] font-mono text-sm font-bold shadow-lg group-hover:scale-105 transition-transform">
                      {step.step}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#F59E0B] transition-colors mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Blueprint status indicator */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>STAGE 0{idx + 1}</span>
                    <span className="text-[#F59E0B] group-hover:underline">VERIFIED</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
