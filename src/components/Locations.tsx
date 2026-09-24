"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Compass, Globe } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function Locations() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#142544] text-white overflow-hidden border-t border-white/10">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-[#F59E0B]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#F59E0B] font-bold">
                GEOGRAPHIC REACH
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Designing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#F59E0B]">
                Across India.
              </span>
            </h2>
            <p className="text-base text-slate-300 leading-relaxed mb-8">
              Headquartered in Chennai, our architectural design and engineering footprint spans multiple
              states across India, delivering customized residential layouts, structural blueprints, and turnkey construction management.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-300 mb-6">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span>Headquarters (Mylapore, Chennai)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/60" />
                <span>Design & Project Sites</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Map & Grid Display */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COMPANY_INFO.locations.map((loc, idx) => {
                const isHQ = loc.city === "Chennai";

                return (
                  <motion.div
                    key={loc.city}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className={`p-5 rounded-xs border transition-all duration-300 ${
                      isHQ
                        ? "bg-[#192d52] border-[#F59E0B] shadow-lg shadow-orange-500/10"
                        : "bg-[#0e1b33]/90 border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <MapPin
                          className={`w-4 h-4 ${
                            isHQ ? "text-[#F59E0B]" : "text-slate-400"
                          }`}
                        />
                        <h4 className="text-base font-bold text-white">
                          {loc.city}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-white/5 text-slate-300">
                        {loc.state}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 mt-1">
                      {loc.type}
                    </p>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>{loc.region}</span>
                      {isHQ && (
                        <span className="text-[#F59E0B] font-bold">PRIMARY HUB</span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
