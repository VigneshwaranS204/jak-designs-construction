"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin, Tag, Sparkles, Phone } from "lucide-react";
import { Project } from "@/data/projects";
import { COMPANY_INFO } from "@/data/company";

interface LightboxProps {
  project: Project | null;
  projects: Project[];
  onClose: () => void;
  onNavigate: (project: Project) => void;
}

export default function ProjectLightboxModal({
  project,
  projects,
  onClose,
  onNavigate,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (project) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [project]);

  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + projects.length) % projects.length;
    onNavigate(projects[prevIdx]);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % projects.length;
    onNavigate(projects[nextIdx]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-[#0a1324]/90 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-6xl max-h-[92vh] bg-[#142544] border border-white/15 rounded-xs shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-[#0a1324]/80 text-white hover:text-[#F59E0B] border border-white/10 hover:border-[#F59E0B] transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Container (Left / Center) */}
        <div className="relative w-full lg:w-7/12 xl:w-2/3 h-72 sm:h-96 lg:h-auto min-h-[380px] lg:min-h-[560px] bg-[#0a1324] flex items-center justify-center overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 70vw"
            priority
          />

          {/* Navigation Controls */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#142544]/80 text-white hover:text-[#F59E0B] border border-white/10 hover:border-[#F59E0B] transition-all"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#142544]/80 text-white hover:text-[#F59E0B] border border-white/10 hover:border-[#F59E0B] transition-all"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Image Counter Badge */}
          <div className="absolute bottom-3 left-3 px-3 py-1 bg-[#0a1324]/80 border border-white/10 text-xs font-mono text-slate-300 rounded-xs">
            {currentIndex + 1} / {projects.length}
          </div>
        </div>

        {/* Project Metadata & Details (Right) */}
        <div className="w-full lg:w-5/12 xl:w-1/3 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] lg:max-h-none border-t lg:border-t-0 lg:border-l border-white/10 bg-[#142544]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-[#F59E0B] text-[#142544] font-bold rounded-xs">
                {project.category}
              </span>
              {project.location && (
                <span className="flex items-center gap-1 text-xs font-mono text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>{project.location}</span>
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
              {project.title}
            </h3>

            <p className="text-xs font-mono text-[#F59E0B] uppercase tracking-wider mb-4">
              {project.type}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {project.description}
            </p>

            {project.cost && (
              <div className="p-3 bg-[#0a1324]/60 border border-white/10 rounded-xs mb-6">
                <span className="text-xs font-mono text-slate-400 block uppercase">
                  Project Execution Cost
                </span>
                <span className="text-lg font-bold font-mono text-[#F59E0B]">
                  {project.cost}
                </span>
              </div>
            )}

            {/* Tags */}
            <div className="mb-6">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Tag className="w-3 h-3 text-[#F59E0B]" />
                <span>Project Scope & Attributes</span>
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono bg-white/5 border border-white/10 text-slate-300 rounded-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick CTA inside Modal */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <a
              href={`https://wa.me/919994709073?text=Hi%20JAK%20Designs%2C%20I%20am%20interested%20in%20a%20project%20similar%20to%20${encodeURIComponent(
                project.title
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#F59E0B] hover:bg-[#d97706] text-[#142544] font-semibold text-xs uppercase tracking-wider rounded-xs transition-colors shadow-md"
            >
              <span>Enquire About Similar Project</span>
              <Sparkles className="w-3.5 h-3.5" />
            </a>

            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Direct Phone:</span>
              <a
                href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                className="text-white hover:text-[#F59E0B] flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-[#F59E0B]" />
                <span>{COMPANY_INFO.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
