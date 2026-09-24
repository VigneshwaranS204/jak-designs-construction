"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { DraftingCompass, Layers, Box, Calendar } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

function CounterItem({
  target,
  suffix,
  label,
  sublabel,
  icon: Icon,
  index,
}: {
  target: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: any;
  index: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const stepIncrement = target / totalSteps;

    const timer = setInterval(() => {
      start += stepIncrement;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="relative p-6 sm:p-8 bg-[#142544]/60 backdrop-blur-md border border-white/10 hover:border-[#F59E0B]/50 transition-colors group"
    >
      {/* Blueprint Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#F59E0B]/60" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#F59E0B]/60" />

      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-xs text-slate-400 tracking-widest uppercase">
          METRIC // 0{index + 1}
        </span>
        <div className="w-8 h-8 rounded-xs bg-white/5 border border-white/10 flex items-center justify-center text-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-[#142544] transition-colors">
          <Icon className="w-4 h-4" />
        </div>
      </div>

      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-4xl sm:text-5xl font-bold font-mono text-white tracking-tight">
          {count.toLocaleString()}
        </span>
        <span className="text-2xl sm:text-3xl font-bold text-[#F59E0B]">
          {suffix}
        </span>
      </div>

      <h3 className="text-base sm:text-lg font-semibold text-slate-100 mb-1">
        {label}
      </h3>
      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
        {sublabel}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  const icons = [DraftingCompass, Layers, Box, Calendar];

  return (
    <section className="relative z-20 bg-[#0a1324] border-y border-white/10 -mt-px py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {COMPANY_INFO.stats.map((stat, i) => (
            <CounterItem
              key={stat.label}
              target={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              sublabel={stat.sublabel}
              icon={icons[i]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
