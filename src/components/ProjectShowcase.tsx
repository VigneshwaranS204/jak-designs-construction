"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Layers, ArrowRight } from "lucide-react";
import { CATEGORIES, PROJECTS, Project, ProjectCategory } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectLightboxModal from "./ProjectLightboxModal";

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(12);

  // Filter projects based on active tab
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const displayedProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  // Distribute projects into 3 columns for genuine editorial masonry layout
  const columns = useMemo(() => {
    const cols: Project[][] = [[], [], []];
    displayedProjects.forEach((proj, idx) => {
      cols[idx % 3].push(proj);
    });
    return cols;
  }, [displayedProjects]);

  return (
    <section id="projects" className="relative py-20 lg:py-28 bg-[#F7F8FA] overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid-light opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-[#F59E0B]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#142544] font-bold">
                PORTFOLIO // ACTUAL PROJECT IMAGES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142544] tracking-tight leading-tight">
              Our Work, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#142544] via-[#1e3661] to-[#F59E0B]">
                Your Inspiration.
              </span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#667085] leading-relaxed">
              Explore selected architectural designs, residences, interiors and built environments created by JAK.
            </p>
          </div>

          <div className="text-xs font-mono text-[#667085] self-start md:self-end border-l-2 border-[#F59E0B] pl-3 py-1">
            <p className="font-bold text-[#142544]">CURATED REAL ASSETS</p>
            <p>Showing {displayedProjects.length} of {filteredProjects.length} projects</p>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === cat).length;

            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(12);
                }}
                className={`relative px-4 py-2 text-xs sm:text-sm font-medium tracking-wide uppercase font-mono rounded-xs transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#142544] text-[#F59E0B] shadow-md border border-[#142544]"
                    : "bg-white text-[#667085] hover:text-[#142544] hover:bg-slate-100 border border-[#E4E7EC]"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? "bg-[#F59E0B]/20 text-[#F59E0B]"
                      : "bg-slate-100 text-[#667085]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Editorial Masonry Layout (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {columns.map((colProjects, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-6 sm:gap-8">
              {colProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={(p) => setSelectedProject(p)}
                  index={colIdx * 10 + idx}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 9)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-white hover:bg-[#142544] text-[#142544] hover:text-white border border-[#E4E7EC] hover:border-[#142544] font-mono text-xs uppercase tracking-wider font-semibold rounded-xs shadow-sm hover:shadow-lg transition-all group cursor-pointer"
            >
              <span>Load More Architectural Works ({filteredProjects.length - visibleCount} remaining)</span>
              <ArrowRight className="w-4 h-4 text-[#F59E0B] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <ProjectLightboxModal
        project={selectedProject}
        projects={filteredProjects}
        onClose={() => setSelectedProject(null)}
        onNavigate={(p) => setSelectedProject(p)}
      />
    </section>
  );
}
