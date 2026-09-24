"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle2, ArrowUpRight, Sparkles, Compass } from "lucide-react";
import { ServiceItem } from "@/data/services";
import { COMPANY_INFO } from "@/data/company";

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (service) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0a1324]/85 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl bg-[#142544] text-white border border-white/15 rounded-xs shadow-2xl overflow-hidden flex flex-col">
        {/* Top Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#0e1b33]">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xs bg-[#F59E0B] text-[#142544] font-mono text-xs font-bold flex items-center justify-center">
              {service.number}
            </span>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#F59E0B]">
                {service.category === "design" ? "DESIGN SPECIFICATION" : "CONSTRUCTION SCOPE"}
              </p>
              <h3 className="text-xl font-bold">{service.title}</h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[75vh]">
          {service.image && (
            <div className="relative w-full aspect-[16/9] rounded-xs overflow-hidden border border-white/10">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              DISCIPLINE OVERVIEW
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed">
              {service.shortDescription}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F59E0B] mb-3">
              KEY DELIVERABLES & TECHNICAL BENCHMARKS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 p-3 bg-white/5 border border-white/10 rounded-xs text-xs font-mono text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-[#0a1324] border border-white/10 rounded-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-white">Need Customized Engineering?</p>
              <p className="text-[11px] text-slate-400 font-mono">
                Consult with our senior architects and site engineers.
              </p>
            </div>
            <a
              href={`https://wa.me/919994709073?text=Hi%20JAK%20Designs%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(
                service.title
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F59E0B] text-[#142544] font-mono text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-[#d97706] transition-colors"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
