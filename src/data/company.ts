export interface TeamMember {
  role: string;
  name: string;
  discipline: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  highlight?: string;
}

export interface ProjectLocation {
  city: string;
  state: string;
  region: string;
  type: string;
  coordinates: { x: number; y: number }; // Relative percentage for map visualization
}

export const COMPANY_INFO = {
  name: "JAK Designs & Construction",
  shortName: "JAK",
  legalName: "JAK Designs & Construction",
  tagline: "Architectural Innovation, Building Excellence",
  founder: "Er. N. Mohamed Tariq Anwar",
  founderTitle: "CEO & Founder",
  foundedYear: "2018",
  constructionExpansionYear: "2019",
  address: {
    street: "No:40/2, Muthukrishnan Street",
    area: "Mylapore",
    state: "Tamil Nadu",
    country: "India",
    city: "Chennai",
    pincode: "600004",
    full: "No:40/2, Muthukrishnan Street, Mylapore, Chennai, Tamil Nadu - 600004, India",
  },
  contact: {
    phone: "+91 99947 09073",
    phoneRaw: "+919994709073",
    email: "jakdesigns2017@gmail.com",
    website: "https://www.jakdesignstudios.com",
    websiteDisplay: "www.jakdesignstudios.com",
    whatsapp: "https://wa.me/919994709073?text=Hi%20JAK%20Designs%20%26%20Construction%2C%20I%20would%20like%20to%20discuss%20a%20project.",
  },
  stats: [
    {
      value: 15,
      suffix: "K+",
      label: "Architectural Designs",
      sublabel: "2D Plans, 3D Models & Structural Packages",
      icon: "DraftingCompass",
    },
    {
      value: 4,
      suffix: "K+",
      label: "2D Floor Plans",
      sublabel: "Completed Across India",
      icon: "Layers",
    },
    {
      value: 8,
      suffix: "K+",
      label: "3D Elevation Projects",
      sublabel: "Photorealistic Visualizations",
      icon: "Box",
    },
    {
      value: 2018,
      suffix: "",
      label: "Established",
      sublabel: "Founded by Er. N. Mohamed Tariq Anwar",
      icon: "ShieldCheck",
    },
  ],
  leadership: [
    {
      role: "CEO & Founder",
      name: "Er. N. Mohamed Tariq Anwar",
      discipline: "Architectural Direction & Executive Leadership",
    },
    {
      role: "Structural Designer",
      name: "Er. Hemanth Kumar",
      discipline: "Structural Engineering & RCC Design",
    },
  ] as TeamMember[],
  milestones: [
    {
      year: "2018",
      title: "Inception of JAK Designs",
      description: "Founded by Er. N. Mohamed Tariq Anwar in Chennai as a specialized architectural design practice focusing on precision 2D CAD drafting, 3D visualization, and structural detailing.",
      highlight: "Over 15,000 architectural designs initiated",
    },
    {
      year: "2019",
      title: "Expansion into Turnkey Construction & Global Project",
      description: "Ventured into on-site construction to bridge the gap between design drawings and built reality. In the same year, JAK achieved an international milestone by designing a Golf Stadium in Qatar.",
      highlight: "International Golf Stadium Design (Qatar)",
    },
    {
      year: "Today",
      title: "Integrated Design + Build Excellence",
      description: "Delivering end-to-end residential, commercial, and interior turnkey solutions across India, uniting architectural conception with structural and civil craftsmanship.",
      highlight: "Multi-State Execution Footprint",
    },
  ] as Milestone[],
  locations: [
    {
      city: "Chennai",
      state: "Tamil Nadu",
      region: "South India (HQ)",
      type: "Headquarters & Primary Execution Hub",
      coordinates: { x: 52, y: 72 },
    },
    {
      city: "Ongole",
      state: "Andhra Pradesh",
      region: "Coastal Andhra",
      type: "Architectural & Residential Design Footprint",
      coordinates: { x: 50, y: 64 },
    },
    {
      city: "Gandhi Nagar",
      state: "Gujarat",
      region: "Western India",
      type: "Architectural Design & Planning Presence",
      coordinates: { x: 26, y: 44 },
    },
    {
      city: "Beem Nagar",
      state: "Karnataka",
      region: "South-Central India",
      type: "Residential Design & Planning",
      coordinates: { x: 42, y: 68 },
    },
    {
      city: "KR Nagar",
      state: "Lucknow, Uttar Pradesh",
      region: "Northern India",
      type: "Architectural Design & Planning Footprint",
      coordinates: { x: 54, y: 34 },
    },
    {
      city: "Kochi",
      state: "Kerala",
      region: "South-West Coast",
      type: "Architectural & Interior Design Projects",
      coordinates: { x: 40, y: 84 },
    },
  ] as ProjectLocation[],
};
