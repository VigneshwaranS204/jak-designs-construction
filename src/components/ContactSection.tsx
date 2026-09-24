"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Residential Architecture",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      errs.phone = "Please enter a valid phone number";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.location.trim()) {
      errs.location = "Project location is required";
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to transmit inquiry.");
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Unable to send your request. Please reach out to us directly.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    "Residential Architecture",
    "Turnkey Construction (Design + Build)",
    "3D Elevation & Visualization",
    "Modular Kitchen & Interior Works",
    "Renovation & Facade Remodel",
    "Commercial Architecture",
    "Structural & MEP Drawings",
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[#F7F8FA] overflow-hidden border-t border-[#E4E7EC]">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid-light opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Authentic Brochure Contact Information */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-[#F59E0B]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#142544] font-bold">
                COMMENCE CONSULTATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142544] tracking-tight leading-tight mb-6">
              Let&apos;s Build <br />
              <span className="text-[#F59E0B]">Together.</span>
            </h2>

            <p className="text-base text-[#667085] leading-relaxed mb-8">
              Whether you possess a vacant plot requiring master spatial planning or an existing structure
              ready for turnkey construction, our engineering team is at your service.
            </p>

            {/* Official Brochure Details Box */}
            <div className="p-6 bg-white border border-[#E4E7EC] rounded-xs shadow-sm space-y-6 mb-8">
              <div className="border-b border-[#E4E7EC] pb-4">
                <span className="text-xs font-mono text-[#F59E0B] uppercase font-bold tracking-wider block mb-1">
                  OFFICIAL CORPORATE OFFICE
                </span>
                <p className="text-lg font-bold text-[#142544]">
                  {COMPANY_INFO.name}
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xs bg-[#142544]/5 flex items-center justify-center text-[#142544] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#F59E0B]" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#667085] uppercase">
                    Address
                  </p>
                  <p className="text-sm font-medium text-[#142544] leading-relaxed mt-0.5">
                    {COMPANY_INFO.address.street}, <br />
                    {COMPANY_INFO.address.area}, {COMPANY_INFO.address.state}, India, <br />
                    {COMPANY_INFO.address.city} - {COMPANY_INFO.address.pincode}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xs bg-[#142544]/5 flex items-center justify-center text-[#142544] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-[#F59E0B]" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#667085] uppercase">
                    Direct Telephone
                  </p>
                  <a
                    href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                    className="text-sm font-bold text-[#142544] hover:text-[#F59E0B] transition-colors"
                  >
                    {COMPANY_INFO.contact.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xs bg-[#142544]/5 flex items-center justify-center text-[#142544] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-[#F59E0B]" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#667085] uppercase">
                    Email Inquiries
                  </p>
                  <a
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    className="text-sm font-bold text-[#142544] hover:text-[#F59E0B] transition-colors"
                  >
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xs bg-[#142544]/5 flex items-center justify-center text-[#142544] shrink-0 mt-0.5">
                  <Globe className="w-4 h-4 text-[#F59E0B]" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#667085] uppercase">
                    Official Website
                  </p>
                  <a
                    href={COMPANY_INFO.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#142544] hover:text-[#F59E0B] transition-colors"
                  >
                    {COMPANY_INFO.contact.websiteDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Bar */}
            <a
              href={COMPANY_INFO.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366] text-[#142544] rounded-xs transition-colors"
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
                <div>
                  <p className="text-xs font-bold font-mono uppercase text-[#142544]">
                    Prefer Instant Messaging?
                  </p>
                  <p className="text-xs text-[#667085]">
                    Chat with our architectural team on WhatsApp
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-[#25D366]">
                CONNECT →
              </span>
            </a>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 border border-[#E4E7EC] rounded-xs shadow-xl relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#142544]" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#142544] mb-2">
                    Consultation Request Received
                  </h3>
                  <p className="text-[#667085] text-sm max-w-md mx-auto mb-8">
                    Thank you, <strong className="text-[#142544]">{formData.name}</strong>.
                    Our architectural engineering team will review your project parameters and contact you via{" "}
                    <strong className="text-[#142544]">{formData.phone}</strong> within 24 business hours.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/919994709073?text=${encodeURIComponent(
                        `Hi JAK Designs, I submitted a consultation inquiry for ${formData.projectType} in ${formData.location}. Name: ${formData.name}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-mono text-xs uppercase tracking-wider font-semibold rounded-xs shadow transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setSubmitError(null);
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          projectType: "Residential Architecture",
                          location: "",
                          message: "",
                        });
                      }}
                      className="w-full sm:w-auto px-6 py-2.5 bg-[#142544] hover:bg-[#1e3661] text-[#F59E0B] font-mono text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#142544] mb-1">
                      Request a Consultation
                    </h3>
                    <p className="text-xs text-[#667085] font-mono">
                      Fill out your project specifications for a customized architectural appraisal.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono text-[#142544] uppercase font-bold mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Er. or Mr./Ms. Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full px-4 py-3 bg-[#F7F8FA] border text-sm text-[#142544] rounded-xs focus:outline-none focus:ring-2 focus:ring-[#142544] transition-all ${
                          errors.name ? "border-rose-500" : "border-[#E4E7EC]"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-rose-600 text-xs font-mono mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-mono text-[#142544] uppercase font-bold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 99999 00000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={`w-full px-4 py-3 bg-[#F7F8FA] border text-sm text-[#142544] rounded-xs focus:outline-none focus:ring-2 focus:ring-[#142544] transition-all ${
                          errors.phone ? "border-rose-500" : "border-[#E4E7EC]"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-rose-600 text-xs font-mono mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono text-[#142544] uppercase font-bold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-4 py-3 bg-[#F7F8FA] border text-sm text-[#142544] rounded-xs focus:outline-none focus:ring-2 focus:ring-[#142544] transition-all ${
                          errors.email ? "border-rose-500" : "border-[#E4E7EC]"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-rose-600 text-xs font-mono mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-xs font-mono text-[#142544] uppercase font-bold mb-2">
                        Project Location / City *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Chennai, Ongole, Kochi..."
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className={`w-full px-4 py-3 bg-[#F7F8FA] border text-sm text-[#142544] rounded-xs focus:outline-none focus:ring-2 focus:ring-[#142544] transition-all ${
                          errors.location ? "border-rose-500" : "border-[#E4E7EC]"
                        }`}
                      />
                      {errors.location && (
                        <p className="text-rose-600 text-xs font-mono mt-1">
                          {errors.location}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-mono text-[#142544] uppercase font-bold mb-2">
                      Primary Service Category
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#F7F8FA] border border-[#E4E7EC] text-sm text-[#142544] rounded-xs focus:outline-none focus:ring-2 focus:ring-[#142544]"
                    >
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-[#142544] uppercase font-bold mb-2">
                      Project Details / Plot Dimensions / Special Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share your plot size (e.g. 30x40, 2400 sq.ft), proposed floors, estimated budget, or specific design preferences..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#F7F8FA] border border-[#E4E7EC] text-sm text-[#142544] rounded-xs focus:outline-none focus:ring-2 focus:ring-[#142544]"
                    />
                  </div>

                  {/* Submission Error Alert with Fallback */}
                  {submitError && (
                    <div className="p-4 bg-rose-50 border border-rose-200 rounded-xs flex items-start gap-3 text-left">
                      <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-rose-800">
                          {submitError}
                        </p>
                        <div className="mt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
                          <a
                            href={`https://wa.me/919994709073?text=${encodeURIComponent(
                              `Hi JAK Designs, I would like to consult about ${formData.projectType || "a project"} in ${formData.location || "India"}. My name is ${formData.name || "Client"}. Phone: ${formData.phone || ""}`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#25D366] font-bold hover:underline"
                          >
                            Send via WhatsApp →
                          </a>
                          <a
                            href="tel:+919994709073"
                            className="text-[#142544] font-bold hover:underline"
                          >
                            Direct Call +91 99947 09073 →
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#142544] hover:bg-[#1e3661] text-[#F59E0B] font-mono text-xs uppercase tracking-widest font-bold rounded-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Validating Specifications...</span>
                    ) : (
                      <>
                        <span>Request a Consultation</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] font-mono text-[#667085] text-center">
                    Privacy Assured: Your information is solely utilized for architectural and engineering consultation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
