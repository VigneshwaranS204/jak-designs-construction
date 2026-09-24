"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import DesignServices from "@/components/DesignServices";
import ConstructionServices from "@/components/ConstructionServices";
import DesignBuildProcess from "@/components/DesignBuildProcess";
import ProjectShowcase from "@/components/ProjectShowcase";
import FeaturedProject from "@/components/FeaturedProject";
import DesignTransformation from "@/components/DesignTransformation";
import InteriorShowcase from "@/components/InteriorShowcase";
import WhyJak from "@/components/WhyJak";
import CompanyStory from "@/components/CompanyStory";
import Locations from "@/components/Locations";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ServiceModal from "@/components/ServiceModal";
import { ServiceItem } from "@/data/services";

export default function Home() {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const handleOpenConsultation = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#142544] selection:bg-[#F59E0B] selection:text-[#142544] relative">
      {/* Sticky Header */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Hero Section */}
      <Hero />

      {/* Trust & Stats Strip */}
      <Stats />

      {/* About JAK */}
      <About />

      {/* Category 01: Design Services */}
      <DesignServices onSelectService={(s) => setActiveModalService(s)} />

      {/* Category 02: Construction Services */}
      <ConstructionServices onSelectService={(s) => setActiveModalService(s)} />

      {/* Design + Build Feature Process */}
      <DesignBuildProcess />

      {/* Project Showcase / Architectural Editorial Masonry */}
      <ProjectShowcase />

      {/* Cinematic Featured Project */}
      <FeaturedProject onOpenProject={handleOpenConsultation} />

      {/* 2D to 3D to Elevation to Built Space Lifecycle */}
      <DesignTransformation />

      {/* Luxury Interior Showcase */}
      <InteriorShowcase />

      {/* Why Build With JAK */}
      <WhyJak />

      {/* Journey & Company Story */}
      <CompanyStory />

      {/* Designing Across India / Locations */}
      <Locations />

      {/* High-Impact CTA */}
      <CTASection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Service Detail Modal */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
      />
    </main>
  );
}
