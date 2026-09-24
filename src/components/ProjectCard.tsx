"use client";

import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  index: number;
}

export default function ProjectCard({ project, onOpen, index }: ProjectCardProps) {
  // Height classes based on architectural editorial cadence
  const aspectClasses = {
    landscape: "aspect-[16/10] sm:aspect-[16/11]",
    portrait: "aspect-[3/4]",
    square: "aspect-square",
    tall: "aspect-[9/14]",
  }[project.aspectRatio || "portrait"];

  return (
    <div
      onClick={() => onOpen(project)}
      className="group relative w-full overflow-hidden bg-[#142544] rounded-xs cursor-pointer border border-[#E4E7EC] hover:border-[#F59E0B]/80 transition-all duration-500 shadow-sm hover:shadow-2xl"
    >
      {/* Media wrapper with intentional aspect ratio */}
      <div className={`relative w-full ${aspectClasses} overflow-hidden bg-slate-900`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out filter brightness-95 group-hover:brightness-90"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading={index < 4 ? "eager" : "lazy"}
        />

        {/* Blueprint Grid Watermark overlay on hover */}
        <div className="absolute inset-0 blueprint-grid-dark opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none" />

        {/* Dark Architectural Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1324]/90 via-[#0a1324]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

        {/* Top Category Badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest bg-[#142544]/90 backdrop-blur-md text-white border border-white/10 group-hover:border-[#F59E0B]/50 transition-colors rounded-xs">
            {project.category}
          </span>
          {project.cost && (
            <span className="px-2 py-0.5 text-[10px] font-mono bg-[#F59E0B] text-[#142544] font-bold rounded-xs">
              {project.cost}
            </span>
          )}
        </div>

        {/* Top Right Technical Index */}
        <div className="absolute top-4 right-4 z-10 font-mono text-[11px] text-white/40 group-hover:text-[#F59E0B] transition-colors">
          0{index + 1}
        </div>

        {/* Bottom Content Area */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 flex items-end justify-between gap-4">
          <div className="transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
            {project.location && (
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#F59E0B] mb-1.5">
                <MapPin className="w-3 h-3" />
                <span>{project.location}</span>
              </div>
            )}

            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-white transition-colors">
              {project.title}
            </h3>

            <p className="text-xs font-mono text-slate-300/80 mt-1 line-clamp-1 group-hover:line-clamp-none transition-all">
              {project.type}
            </p>
          </div>

          {/* Orange Arrow Action Circle */}
          <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#F59E0B] border border-white/20 group-hover:border-[#F59E0B] flex items-center justify-center text-white group-hover:text-[#142544] shrink-0 transition-all duration-300 shadow-lg group-hover:scale-110">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Architectural border accent on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-[#F59E0B] transition-colors duration-400" />
      </div>
    </div>
  );
}
