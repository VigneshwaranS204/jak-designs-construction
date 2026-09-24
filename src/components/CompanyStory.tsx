"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Calendar, Globe, Award, CheckCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function CompanyStory() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#F7F8FA] overflow-hidden border-t border-[#E4E7EC]">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid-light opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#142544]/5 border border-[#142544]/10 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#142544] font-bold">
              THE JOURNEY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142544] tracking-tight leading-tight">
            Our Evolutionary <br />
            <span className="text-[#F59E0B]">Milestones.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#667085] leading-relaxed">
            From our founding as an architectural drafting studio in 2018 to an international design footprint and full turnkey construction entity.
          </p>
        </div>

        {/* Milestone Cards Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
          {COMPANY_INFO.milestones.map((m, idx) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative p-8 bg-white border border-[#E4E7EC] hover:border-[#142544] rounded-xs shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-bold text-[#142544]">
                    {m.year}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#142544]/5 flex items-center justify-center text-[#F59E0B]">
                    {idx === 0 && <Calendar className="w-4 h-4" />}
                    {idx === 1 && <Globe className="w-4 h-4" />}
                    {idx === 2 && <Award className="w-4 h-4" />}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#142544] mb-3 leading-snug">
                  {m.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-6">
                  {m.description}
                </p>
              </div>

              {m.highlight && (
                <div className="pt-4 border-t border-[#E4E7EC] flex items-center gap-2 text-xs font-mono text-[#142544] font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                  <span>{m.highlight}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Authentic Quote Banner from Brochure */}
        <div className="mt-16 max-w-4xl mx-auto p-8 sm:p-10 bg-[#142544] text-white rounded-xs border-l-4 border-[#F59E0B] shadow-2xl relative overflow-hidden">
          <div className="absolute right-4 bottom-2 text-8xl font-serif text-white/5 pointer-events-none select-none">
            “
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed italic text-slate-100">
            &ldquo;From concept to completion, our journey has always been driven by one idea:
            better spaces begin with better design.&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-3.5">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#F59E0B] shrink-0 shadow-md bg-slate-800">
              <Image
                src="/images/founder.jpg"
                alt="Er. N. Mohamed Tariq Anwar - CEO & Founder"
                fill
                className="object-cover object-top"
                sizes="50px"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Er. N. Mohamed Tariq Anwar</p>
              <p className="text-xs text-[#F59E0B] font-mono">CEO & Founder, JAK Designs & Construction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
