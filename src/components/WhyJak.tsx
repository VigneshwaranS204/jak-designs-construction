"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Cpu,
  FileCheck2,
  Box,
  Headphones,
  Globe2,
} from "lucide-react";

export default function WhyJak() {
  const reasons = [
    {
      number: "01",
      title: "Design + Construction Under One Roof",
      description:
        "Seamless communication from CAD draftsmen to on-site masons eliminates misinterpretations, contractor blame games, and budget creep.",
      icon: Layers,
    },
    {
      number: "02",
      title: "Engineering-Focused Approach",
      description:
        "Every project is led by qualified civil engineers and structural specialists ensuring complete seismic safety and durable concrete integrity.",
      icon: Cpu,
    },
    {
      number: "03",
      title: "Detailed Planning Before Execution",
      description:
        "Comprehensive 2D working drawings, MEP duct routing, and bill of quantities (BOQ) are finalized before breaking ground.",
      icon: FileCheck2,
    },
    {
      number: "04",
      title: "3D Visualization Before Construction",
      description:
        "Clients experience photorealistic elevations, room depths, and material finishes, allowing confident revisions prior to on-site spend.",
      icon: Box,
    },
    {
      number: "05",
      title: "End-to-End Project Support",
      description:
        "From municipal approvals and soil tests to interior joinery and handover, our team coordinates the entire lifecycle.",
      icon: Headphones,
    },
    {
      number: "06",
      title: "Experience Across Multiple Locations",
      description:
        "With projects spanning Tamil Nadu, Andhra Pradesh, Gujarat, Karnataka, Kerala, and Uttar Pradesh, our technical expertise adapts to diverse regional contexts.",
      icon: Globe2,
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#0a1324] text-white overflow-hidden border-t border-white/10">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-white/5 border border-white/10 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#F59E0B] font-bold">
              THE JAK ADVANTAGE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Why Build With <span className="text-[#F59E0B]">JAK?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            We operate at the nexus of high architectural design and accountable civil construction.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative p-8 bg-[#142544]/70 hover:bg-[#142544] border border-white/10 hover:border-[#F59E0B]/60 transition-all duration-400 rounded-xs flex flex-col justify-between"
              >
                {/* Subtle blueprint accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#F59E0B] transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-mono font-bold text-white/20 group-hover:text-[#F59E0B] transition-colors">
                      {reason.number}
                    </span>
                    <div className="w-10 h-10 rounded-xs bg-white/5 border border-white/10 flex items-center justify-center text-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-[#142544] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#F59E0B] transition-colors mb-3">
                    {reason.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>STANDARD</span>
                  <span className="text-[#F59E0B]">VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
