"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Compass, Users, Sparkles, Building2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function About() {
  const timelineStages = [
    {
      year: "2018",
      title: "Architectural Design",
      desc: "Founded by Er. N. Mohamed Tariq Anwar focusing on 2D CAD drafting & 3D visualizations.",
    },
    {
      year: "2019",
      title: "Expanded into Construction",
      desc: "Began turnkey civil works and designed the Qatar Golf Stadium project.",
    },
    {
      year: "Today",
      title: "Design + Build Entity",
      desc: "Seamless turnkey integration from initial sketch to final handover across India.",
    },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#F7F8FA] overflow-hidden">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 blueprint-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Big Founder Portrait with Architectural Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-xs overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <Image
                src="/images/founder.jpg"
                alt="Er. N. Mohamed Tariq Anwar - CEO & Founder, JAK Designs & Construction"
                fill
                priority
                className="object-cover object-top hover:scale-102 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1324]/90 via-[#0a1324]/20 to-transparent" />

              {/* Founder Nameplate Badge at Bottom */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#142544]/95 backdrop-blur-md p-4 text-white border-l-3 border-[#F59E0B] rounded-xs shadow-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono tracking-widest text-[#F59E0B] font-bold uppercase">
                    CEO & FOUNDER
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    EST. 2018 // CHENNAI
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Er. N. Mohamed Tariq Anwar
                </h3>
                <p className="text-xs text-slate-300 font-mono mt-0.5">
                  Lead Architectural Direction & Turnkey Execution
                </p>
              </div>
            </div>

            {/* Overlapping Secondary Architectural Project Badge */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-44 lg:w-48 aspect-[4/3] rounded-xs overflow-hidden shadow-xl border-4 border-white bg-slate-800">
              <Image
                src="/assets/WhatsApp Image 2026-09-24 at 6.00.52 PM (1).jpeg"
                alt="Architectural residence designed by JAK"
                fill
                className="object-cover"
                sizes="200px"
              />
              <div className="absolute bottom-2 left-2 right-2 px-2 py-1 bg-[#142544]/90 backdrop-blur-xs text-[10px] font-mono text-[#F59E0B] font-bold rounded-xs">
                15K+ DESIGNS
              </div>
            </div>

            {/* Technical Drafting Crosshair */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#F59E0B]" />
          </motion.div>

          {/* Right Column: Editorial Narrative & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-[#F59E0B]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#142544] font-bold">
                ABOUT JAK
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142544] tracking-tight leading-tight mb-6">
              Where Design Meets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#142544] via-[#1e3661] to-[#29487d]">
                Turnkey Construction.
              </span>
            </h2>

            {/* Brochure Text Passages */}
            <div className="space-y-4 text-base sm:text-lg text-[#667085] leading-relaxed mb-8">
              <p>
                Founded in 2018 by <strong className="text-[#142544] font-semibold">Er. N. Mohamed Tariq Anwar</strong>,
                JAK Designs began as an architectural design firm focused on 2D and 3D design solutions.
                Over time, the company evolved into a comprehensive design and construction entity.
              </p>
              <p>
                Today, JAK integrates architectural thinking, engineering expertise, and on-site execution
                to create spaces that are designed with purpose and built with precision.
              </p>
            </div>

            {/* Horizontal / Responsive Company Journey Timeline */}
            <div className="mb-10 p-6 bg-white rounded-xs border border-[#E4E7EC] shadow-sm">
              <p className="text-xs font-mono uppercase tracking-wider text-[#142544] font-semibold mb-5 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Our Evolutionary Timeline</span>
              </p>

              {/* Desktop Horizontal / Mobile Vertical Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {/* Horizontal line connector for desktop */}
                <div className="hidden md:block absolute top-3 left-6 right-6 h-0.5 bg-[#E4E7EC] z-0" />

                {timelineStages.map((stage, idx) => (
                  <div key={stage.year} className="relative z-10 flex md:flex-col items-start gap-4 md:gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#142544] text-[#F59E0B] font-mono text-xs font-bold flex items-center justify-center shrink-0 border-2 border-white shadow">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="inline-block px-2 py-0.5 bg-[#142544]/5 text-[#142544] text-xs font-mono font-bold rounded-xs mb-1">
                        {stage.year}
                      </div>
                      <h4 className="text-sm font-bold text-[#142544] leading-snug">
                        {stage.title}
                      </h4>
                      <p className="text-xs text-[#667085] mt-1 leading-normal">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Executive & Technical Leadership */}
            <div className="pt-6 border-t border-[#E4E7EC]">
              <p className="text-xs font-mono uppercase tracking-widest text-[#142544] font-bold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                <span>EXECUTIVE & TECHNICAL LEADERSHIP</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Er. N. Mohamed Tariq Anwar - CEO & Founder */}
                <div className="p-4 bg-white border border-[#E4E7EC] hover:border-[#F59E0B] rounded-xs shadow-xs transition-all duration-300">
                  <span className="text-[10px] font-mono text-[#F59E0B] font-bold uppercase tracking-wider block mb-1">
                    CEO & FOUNDER
                  </span>
                  <h4 className="text-base font-bold text-[#142544] leading-snug">
                    Er. N. Mohamed Tariq Anwar
                  </h4>
                  <p className="text-xs text-[#667085] mt-1 leading-normal">
                    Architectural Direction & Executive Leadership
                  </p>
                </div>

                {/* Er. Hemanth Kumar - Structural Designer */}
                <div className="p-4 bg-white border border-[#E4E7EC] hover:border-[#F59E0B] rounded-xs shadow-xs transition-all duration-300">
                  <span className="text-[10px] font-mono text-[#F59E0B] font-bold uppercase tracking-wider block mb-1">
                    STRUCTURAL DESIGNER
                  </span>
                  <h4 className="text-base font-bold text-[#142544] leading-snug">
                    Er. Hemanth Kumar
                  </h4>
                  <p className="text-xs text-[#667085] mt-1 leading-normal">
                    Structural Engineering & RCC Design
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
