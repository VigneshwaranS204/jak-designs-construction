import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JAK Designs & Construction | Architectural Design & Construction",
  description:
    "JAK Designs & Construction provides architectural design, structural drawings, 3D visualization, interior design and construction services from concept to completion.",
  keywords: [
    "JAK Designs & Construction",
    "Architectural Design Chennai",
    "Turnkey Construction Company",
    "3D Elevation Design",
    "Residential Architecture India",
    "Modular Kitchen Interior Design",
    "Structural Engineering Drawings",
    "Design and Build Contractor",
    "Er. N. Mohamed Tariq Anwar",
  ],
  authors: [{ name: "JAK Designs & Construction" }],
  creator: "JAK Designs & Construction",
  metadataBase: new URL("https://www.jakdesignstudios.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JAK Designs & Construction | Architectural Innovation, Building Excellence",
    description:
      "From architectural planning and 3D visualization to construction and interior execution, JAK brings your vision together under one roof.",
    url: "https://www.jakdesignstudios.com",
    siteName: "JAK Designs & Construction",
    images: [
      {
        url: "/assets/WhatsApp Image 2026-09-24 at 6.00.55 PM (1).jpeg",
        width: 1600,
        height: 900,
        alt: "JAK Designs & Construction Flagship Architectural Villa Project",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JAK Designs & Construction | Architectural Design & Turnkey Construction",
    description:
      "Turnkey architectural design, 3D elevation, structural drawings, and civil construction across India.",
    images: ["/assets/WhatsApp Image 2026-09-24 at 6.00.55 PM (1).jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "JAK Designs & Construction",
    alternateName: "JAK Designs",
    description:
      "Turnkey architectural design, 3D photorealistic elevations, structural engineering drawings, modular interiors, and residential construction services.",
    url: "https://www.jakdesignstudios.com",
    telephone: "+91 99947 09073",
    email: "jakdesigns2017@gmail.com",
    foundingDate: "2018",
    founder: {
      "@type": "Person",
      name: "Er. N. Mohamed Tariq Anwar",
      jobTitle: "CEO & Founder",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "No:40/2, Muthukrishnan Street",
      addressLocality: "Mylapore",
      addressRegion: "Tamil Nadu",
      postalCode: "600004",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "13.0335",
      longitude: "80.2677",
    },
    areaServed: [
      { "@type": "City", name: "Chennai" },
      { "@type": "City", name: "Ongole" },
      { "@type": "City", name: "Gandhi Nagar" },
      { "@type": "City", name: "Beem Nagar" },
      { "@type": "City", name: "Lucknow" },
      { "@type": "City", name: "Kochi" },
    ],
    priceRange: "₹₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F7F8FA] text-[#142544] font-sans antialiased selection:bg-[#F59E0B] selection:text-[#142544]">
        {children}
      </body>
    </html>
  );
}
