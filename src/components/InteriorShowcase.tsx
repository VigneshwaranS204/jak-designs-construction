"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, MapPin } from "lucide-react";

export default function InteriorShowcase() {
  const highlights = [
    { title: "Modular Kitchens", desc: "Ergonomic triangle flow, premium marine-ply & quartz surfaces" },
    { title: "Residential Interiors", desc: "Custom TV consoles, fluted paneling & concealed cove LED" },
    { title: "False Ceiling & Finishing", desc: "Gypsum acoustic layouts with multi-scene smart lighting" },
    { title: "Custom Joinery", desc: "Built-in wardrobes, breakfast dividers & bespoke millwork" },
  ];

  // 6 authentic, high-resolution interior project assets from /assets/
  const interiorProjects = [
    {
      id: "int-01",
      title: "Melakaveri Modular Kitchen",
      location: "Kumbakonam, Melakaveri",
      cost: "₹6 Lakhs",
      image: "/assets/WhatsApp Image 2026-09-24 at 6.00.55 PM (2).jpeg",
      desc: "U-shaped modular kitchen layout with high-durability acrylic shutters and integrated baking center.",
    },
    {
      id: "int-02",
      title: "Curved Island & Breakfast Bar",
      location: "Chennai, Tamil Nadu",
      cost: "Bespoke",
      image: "/assets/WhatsApp Image 2026-09-24 at 6.00.56 PM (1).jpeg",
      desc: "Statement curved breakfast island with fluted timber base and suspended brass pendant luminaires.",
    },
    {
      id: "int-03",
      title: "Sage Green Designer Kitchen",
      location: "South India",
      cost: "Bespoke",
      image: "/assets/WhatsApp Image 2026-09-24 at 6.00.56 PM.jpeg",
      desc: "Contemporary matte sage green finish with quartz countertops and seamless under-cabinet lighting.",
    },
    {
      id: "int-04",
      title: "Minimalist Marble & Charcoal Kitchen",
      location: "Chennai, Tamil Nadu",
      cost: "Bespoke",
      image: "/assets/WhatsApp Image 2026-09-24 at 6.00.57 PM (1).jpeg",
      desc: "Seamless waterfall marble island paired with matte dark graphite cabinetry and recessed LED task channels.",
    },
    {
      id: "int-05",
      title: "Breakfast Bar & Timber Screen",
      location: "South India",
      cost: "Bespoke",
      image: "/assets/WhatsApp Image 2026-09-24 at 6.00.56 PM (2).jpeg",
      desc: "Custom fluted wood divider creating a subtle architectural demarcation between kitchen and formal dining.",
    },
    {
      id: "int-06",
      title: "Warm Ambient Kitchen & Dining",
      location: "South India",
      cost: "Bespoke",
      image: "/assets/WhatsApp Image 2026-09-24 at 6.00.57 PM.jpeg",
      desc: "L-shaped breakfast bar with statement accent seating, integrated wine racks, and concealed cove illumination.",
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#0a1324] text-white overflow-hidden border-t border-white/10">
      {/* Blueprint background grid */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-[#F59E0B]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#F59E0B] font-bold">
                INTERIOR ARCHITECTURE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Interiors Designed <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#F59E0B]">
                Around How You Live.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              We engineer interior environments with the same architectural discipline as our exterior structures:
              sub-millimeter joinery, functional spatial flow, and enduring materiality.
            </p>
          </div>

          {/* Highlights checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg lg:self-end">
            {highlights.map((h) => (
              <div key={h.title} className="p-3 bg-white/5 border border-white/10 rounded-xs">
                <p className="text-xs font-bold text-[#F59E0B] font-mono">{h.title}</p>
                <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6-Card Clean Architectural Grid: 100% Image Fill, ZERO Empty Space */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {interiorProjects.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden rounded-xs border border-white/10 hover:border-[#F59E0B] transition-all duration-500 shadow-xl bg-slate-900"
            >
              {/* Full-bleed high-res image that completely fills 100% of the card */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out filter brightness-95 group-hover:brightness-90"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Subtle architectural gradient for text readability without blue tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1324]/95 via-[#0a1324]/30 to-transparent" />

              {/* Location & Cost Badges at Top */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-[#0a1324]/90 backdrop-blur-md text-white border border-white/15 rounded-xs flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#F59E0B]" />
                  <span>{item.location}</span>
                </span>

                <span className="px-2.5 py-1 text-[11px] font-mono font-bold bg-[#F59E0B] text-[#142544] rounded-xs shadow">
                  {item.cost}
                </span>
              </div>

              {/* Bottom Project Details Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 flex items-end justify-between gap-4">
                <div className="transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#F59E0B] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Orange Action Circle */}
                <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#F59E0B] border border-white/20 group-hover:border-[#F59E0B] flex items-center justify-center text-white group-hover:text-[#142544] shrink-0 transition-all duration-300 shadow-lg group-hover:scale-110">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Bottom Orange Accent Line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#F59E0B] transition-colors duration-400 z-20" />
            </motion.div>
          ))}
        </div>

        {/* Brochure Highlight Callout */}
        <div className="mt-14 p-6 bg-[#142544]/80 border border-white/10 rounded-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xs bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shrink-0 font-bold font-mono">
              ₹15L
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                Karaikal Commercial False Ceiling Project
              </p>
              <p className="text-xs text-slate-300">
                Large-format Marriage Hall False Ceiling in Karaikal, Tamil Nadu — Project Value: ₹15 Lakhs (Featured in Brochure)
              </p>
            </div>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F59E0B] text-[#142544] text-xs font-mono font-bold uppercase tracking-wider rounded-xs hover:bg-[#d97706] transition-colors shrink-0"
          >
            <span>Discuss Your Interior Scope</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
