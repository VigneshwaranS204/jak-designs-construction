"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Check, Sparkles, Layers, Building, Eye, FileText } from "lucide-react";

export default function DesignTransformation() {
  const [activeStageIndex, setActiveStageIndex] = useState(2);

  const stages = [
    {
      id: "2d-plan",
      step: "01",
      name: "2D Plan & Drafting",
      title: "Functional Spatial Layout & Structural Grid",
      description:
        "Every project initiates with meticulous 2D CAD floor plans, adhering to Vaastu/climate orientations, structural column spacing, and local setback by-laws.",
      image: "/images/brochure_cover.png",
      badge: "CAD Engineering",
      metrics: "4K+ 2D Plans Designed",
    },
    {
      id: "3d-design",
      step: "02",
      name: "3D Design & Modeling",
      title: "Volumetric Massing & Spatial Flow",
      description:
        "Translating 2D spatial footprints into complete 3D volumes. Clients can walk through proportions, ceiling volumes, and natural lighting angles prior to engineering.",
      image: "/assets/WhatsApp Image 2026-09-24 at 6.00.52 PM (1).jpeg",
      badge: "Spatial Modeling",
      metrics: "Interactive Proportions",
    },
    {
      id: "elevation",
      step: "03",
      name: "3D Elevation",
      title: "Photorealistic Textures, Lighting & Materiality",
      description:
        "Applying real-world stone claddings, exterior textures, custom louvers, and night lighting schemes. What you see in this 3D elevation is what is engineered on site.",
      image: "/assets/WhatsApp Image 2026-09-24 at 6.01.00 PM (1).jpeg",
      badge: "Photorealistic Render",
      metrics: "8K+ Elevations Crafted",
    },
    {
      id: "built-space",
      step: "04",
      name: "Built Space Reality",
      title: "Turnkey Civil Execution & Final Handover",
      description:
        "The ultimate milestone: actual on-site civil construction matching the approved 3D elevation to the centimeter. Notice the 1:1 fidelity between the 3D design and this built twin residence.",
      image: "/assets/WhatsApp Image 2026-09-24 at 6.01.00 PM.jpeg",
      badge: "Turnkey Built Reality",
      metrics: "1:1 Design-to-Site Match",
    },
  ];

  const currentStage = stages[activeStageIndex];

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden border-t border-[#E4E7EC]">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 blueprint-grid-light opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#142544]/5 border border-[#142544]/10 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#142544] font-bold">
              THE DESIGN-TO-CONSTRUCTION LIFECYCLE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142544] tracking-tight leading-tight">
            From First Blueprint <br />
            <span className="text-[#F59E0B]">to Finished Built Space.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#667085] leading-relaxed">
            Follow the exact 4-stage progression that ensures zero surprises on site, complete cost predictability, and breathtaking architectural fidelity.
          </p>
        </div>

        {/* Interactive Progress Timeline (Horizontal Desktop / Vertical Mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {stages.map((stage, idx) => {
            const isActive = idx === activeStageIndex;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStageIndex(idx)}
                className={`relative text-left p-4 sm:p-5 rounded-xs transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "bg-[#142544] text-white border-[#142544] shadow-xl"
                    : "bg-[#F7F8FA] text-[#142544] hover:bg-slate-100 border-[#E4E7EC]"
                }`}
              >
                {/* Active Indicator Top Line */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#F59E0B]" />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? "text-[#F59E0B]" : "text-[#667085]"
                    }`}
                  >
                    STAGE // {stage.step}
                  </span>
                  <span className="text-[10px] font-mono opacity-70">
                    {idx < stages.length - 1 ? "→" : "✓"}
                  </span>
                </div>

                <p className="text-sm sm:text-base font-bold leading-snug">
                  {stage.name}
                </p>
              </button>
            );
          })}
        </div>

        {/* Transformation Showcase Display Container */}
        <div className="relative bg-[#0a1324] rounded-xs border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            {/* Visual Media Stage */}
            <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto min-h-[320px] lg:min-h-[500px] overflow-hidden bg-slate-900">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStage.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentStage.image}
                    alt={currentStage.title}
                    fill
                    className="object-cover object-center filter brightness-95"
                    sizes="(max-width: 1024px) 100vw, 70vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1324]/80 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Stage Badge on Media */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-[#142544]/90 backdrop-blur-md border border-white/20 text-[#F59E0B] font-mono text-xs font-bold rounded-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                <span>{currentStage.badge}</span>
              </div>

              {/* Special 3D vs Built highlight callout */}
              {activeStageIndex === 3 && (
                <div className="absolute bottom-4 left-4 right-4 bg-[#142544]/95 backdrop-blur-md p-3.5 border-l-4 border-[#F59E0B] text-white rounded-xs z-10">
                  <p className="text-xs font-mono text-[#F59E0B] font-bold uppercase tracking-wider">
                    PROVEN 1:1 REALITY HANDOVER
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Compare this built residence with Stage 03 (3D Elevation). The architectural geometry, cantilever projections, and color palette were preserved faithfully.
                  </p>
                </div>
              )}
            </div>

            {/* Stage Description & Controls */}
            <div className="lg:col-span-4 p-6 sm:p-8 lg:p-10 flex flex-col justify-between text-white bg-[#142544]">
              <div>
                <span className="text-xs font-mono text-[#F59E0B] uppercase tracking-widest block mb-2">
                  PHASE 0{activeStageIndex + 1} OF 04
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                  {currentStage.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {currentStage.description}
                </p>

                <div className="p-4 bg-[#0a1324]/60 border border-white/10 rounded-xs mb-6">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                    BENCHMARK
                  </span>
                  <span className="text-lg font-bold font-mono text-[#F59E0B]">
                    {currentStage.metrics}
                  </span>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <button
                  type="button"
                  onClick={() =>
                    setActiveStageIndex((prev) => (prev === 0 ? stages.length - 1 : prev - 1))
                  }
                  className="px-4 py-2 border border-white/20 hover:border-white/50 text-xs font-mono rounded-xs transition-colors"
                >
                  ← Prev Stage
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setActiveStageIndex((prev) => (prev === stages.length - 1 ? 0 : prev + 1))
                  }
                  className="px-4 py-2 bg-[#F59E0B] hover:bg-[#d97706] text-[#142544] text-xs font-mono font-bold rounded-xs transition-colors"
                >
                  Next Stage →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
