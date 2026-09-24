"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, HardHat, Hammer, Wrench, Waves, Trees, Film } from "lucide-react";
import { CONSTRUCTION_SERVICES, ServiceItem } from "@/data/services";

interface ConstructionServicesProps {
  onSelectService?: (service: ServiceItem) => void;
}

export default function ConstructionServices({ onSelectService }: ConstructionServicesProps) {
  const iconMap: Record<string, any> = {
    HardHat,
    Hammer,
    Wrench,
    Waves,
    Trees,
    Film,
  };

  return (
    <section className="relative py-20 lg:py-28 bg-[#142544] text-white overflow-hidden">
      {/* Dark Blueprint Grid Background */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-[#F59E0B]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#F59E0B] font-bold">
              CATEGORY 02 // CONSTRUCTION SERVICES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
            From Designs to Reality.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Turning carefully planned spaces into finished environments with disciplined execution,
            certified civil engineers, and rigorous site supervision.
          </p>
        </div>

        {/* Large Editorial Service Blocks (6 Services) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {CONSTRUCTION_SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || HardHat;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => onSelectService && onSelectService(service)}
                className="group relative bg-[#0e1b33]/90 border border-white/10 hover:border-[#F59E0B]/60 transition-all duration-500 overflow-hidden flex flex-col md:flex-row rounded-xs shadow-xl cursor-pointer"
              >
                {/* Image Block */}
                <div className="relative w-full md:w-5/12 aspect-[16/10] md:aspect-auto min-h-[220px] overflow-hidden bg-slate-900 shrink-0">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-90 contrast-105"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-500">
                      <HardHat className="w-10 h-10" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Service Number Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#142544]/90 backdrop-blur-sm border border-white/15 text-[#F59E0B] font-mono text-xs font-bold rounded-xs">
                    {service.number}
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                        TURNKEY EXECUTION
                      </span>
                      <Icon className="w-4 h-4 text-[#F59E0B]" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#F59E0B] transition-colors mb-2.5">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                      {service.shortDescription}
                    </p>

                    {/* Scope Items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-white/10 mb-6">
                      {service.deliverables.slice(0, 4).map((deliv) => (
                        <div key={deliv} className="flex items-start gap-1.5 text-[11px] font-mono text-slate-300">
                          <CheckCircle2 className="w-3 h-3 text-[#F59E0B] shrink-0 mt-0.5" />
                          <span className="truncate">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explore Arrow Bar */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-300 group-hover:text-white transition-colors">
                      View Service Scope
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#F59E0B] flex items-center justify-center text-white group-hover:text-[#142544] transition-all group-hover:translate-x-1">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
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
