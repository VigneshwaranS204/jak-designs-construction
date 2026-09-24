"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, ShieldAlert, Cpu, Armchair, Building2, LayoutGrid } from "lucide-react";
import { DESIGN_SERVICES, ServiceItem } from "@/data/services";

interface DesignServicesProps {
  onSelectService?: (service: ServiceItem) => void;
}

export default function DesignServices({ onSelectService }: DesignServicesProps) {
  const iconMap: Record<string, any> = {
    Compass,
    ShieldAlert,
    Cpu,
    Armchair,
    Building2,
    LayoutGrid,
  };

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-white overflow-hidden border-t border-[#E4E7EC]">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid-light opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-[#F59E0B]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#142544] font-bold">
              CATEGORY 01 // OUR DESIGN SERVICES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142544] tracking-tight leading-tight">
            Design Every Detail <br />
            <span className="text-[#F59E0B]">Before We Build.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#667085] leading-relaxed">
            Eliminating guesswork through millimeter-accurate CAD drawings, structural load engineering, and photorealistic 3D elevations.
          </p>
        </div>

        {/* 6 Design Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DESIGN_SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Compass;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => onSelectService && onSelectService(service)}
                className="group relative bg-[#F7F8FA] hover:bg-[#142544] p-8 border border-[#E4E7EC] hover:border-[#142544] transition-all duration-400 cursor-pointer flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-2xl rounded-xs"
              >
                {/* Subtle blueprint grid on hover */}
                <div className="absolute inset-0 blueprint-grid-dark opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

                {/* Animated Orange Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#F59E0B] transition-colors duration-400 origin-left" />

                {/* Technical Corner Crosshairs */}
                <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-400 group-hover:text-slate-500 transition-colors">
                  +
                </div>

                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-bold font-mono text-[#142544]/30 group-hover:text-[#F59E0B] transition-colors duration-400">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xs bg-white group-hover:bg-white/10 border border-[#E4E7EC] group-hover:border-white/20 flex items-center justify-center text-[#142544] group-hover:text-[#F59E0B] transition-all duration-400 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Service Badge */}
                  {service.badge && (
                    <span className="inline-block px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-white group-hover:bg-white/10 text-[#667085] group-hover:text-slate-300 border border-[#E4E7EC] group-hover:border-white/10 rounded-xs mb-3 transition-colors">
                      {service.badge}
                    </span>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#142544] group-hover:text-white transition-colors duration-400 mb-3">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-[#667085] group-hover:text-slate-300 transition-colors duration-400 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Deliverables List */}
                  <ul className="space-y-2 mb-8 pt-4 border-t border-[#E4E7EC] group-hover:border-white/10 transition-colors">
                    {service.deliverables.map((del) => (
                      <li
                        key={del}
                        className="text-xs text-[#667085] group-hover:text-slate-300 flex items-center gap-2 font-mono transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#F59E0B]" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Interactive Arrow */}
                <div className="flex items-center justify-between pt-4 border-t border-[#E4E7EC]/60 group-hover:border-white/10 transition-colors">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#142544] group-hover:text-[#F59E0B] transition-colors">
                    Explore Specifications
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#F59E0B] flex items-center justify-center text-[#142544] shadow-xs group-hover:translate-x-1.5 transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
