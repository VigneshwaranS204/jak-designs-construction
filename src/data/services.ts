export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: "design" | "construction";
  shortDescription: string;
  deliverables: string[];
  icon: string;
  image?: string;
  badge?: string;
}

export const DESIGN_SERVICES: ServiceItem[] = [
  {
    id: "architectural-design",
    number: "01",
    title: "Architectural Design",
    category: "design",
    shortDescription:
      "Comprehensive spatial planning, zoning, and aesthetic blueprints tailored to climate, context, and modern lifestyles.",
    deliverables: [
      "Conceptual Site Layouts",
      "Bespoke Spatial Architecture",
      "Regulatory & By-law Compliance",
      "Ventilation & Natural Light Studies",
    ],
    icon: "Compass",
    badge: "Core Architecture",
  },
  {
    id: "structural-drawings",
    number: "02",
    title: "Structural Drawings",
    category: "design",
    shortDescription:
      "Precision structural calculations, RCC reinforcement schedules, and foundation engineering to guarantee lifelong durability.",
    deliverables: [
      "RCC Column & Beam Details",
      "Foundation & Footing Plans",
      "Seismic Load Analysis",
      "Bar Bending Schedules (BBS)",
    ],
    icon: "ShieldAlert",
    badge: "Engineering",
  },
  {
    id: "electrical-plumbing",
    number: "03",
    title: "Electrical & Plumbing Drawings",
    category: "design",
    shortDescription:
      "Integrated MEP (Mechanical, Electrical & Plumbing) schematics designed for flawless functionality and seamless maintenance.",
    deliverables: [
      "Load Calculations & Circuit Distribution",
      "Water Supply & Drainage Networks",
      "Concealed Conduit Routing",
      "Sanitary & Fixture Layouts",
    ],
    icon: "Cpu",
    badge: "MEP Systems",
  },
  {
    id: "3d-interior-designs",
    number: "04",
    title: "3D Interior Designs",
    category: "design",
    shortDescription:
      "Ultra-realistic 3D visualizations of living spaces, material palettes, cove lighting, and bespoke joinery before execution.",
    deliverables: [
      "Photorealistic 3D Walkthroughs",
      "Material, Stone & Timber Palettes",
      "Custom Furniture Specifications",
      "Lighting & Acoustic Schemes",
    ],
    icon: "Armchair",
    badge: "Visualization",
  },
  {
    id: "elevation-design",
    number: "05",
    title: "Elevation Design",
    category: "design",
    shortDescription:
      "Striking exterior facades combining geometric play, textured stone, wooden louvers, and ambient nighttime illumination.",
    deliverables: [
      "Front & Lateral Elevation Views",
      "Facade Cladding Specifications",
      "Architectural Lighting Placement",
      "Boundary Wall & Gate Integration",
    ],
    icon: "Building2",
    badge: "Exterior Artistry",
  },
  {
    id: "3d-floor-plan",
    number: "06",
    title: "3D Floor Plan",
    category: "design",
    shortDescription:
      "Cut-away isometric floor plans that clearly articulate spatial flow, furniture arrangements, and room-to-room transitions.",
    deliverables: [
      "Bird's-Eye Spatial Geometry",
      "True-to-Scale Furniture Placement",
      "Floor Finish Mapping",
      "Circulation Path Validation",
    ],
    icon: "LayoutGrid",
    badge: "Spatial Layout",
  },
];

export const CONSTRUCTION_SERVICES: ServiceItem[] = [
  {
    id: "new-construction",
    number: "01",
    title: "New Construction Works",
    category: "construction",
    shortDescription:
      "End-to-end turnkey civil construction for luxury independent villas, duplexes, and multi-storey residences with rigorous site supervision.",
    deliverables: [
      "Turnkey Design + Build Contracts",
      "Grade-A Certified Materials",
      "Daily Engineer Site Supervision",
      "Quality Assurance & Milestone Audits",
    ],
    icon: "HardHat",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.58 PM (1).jpeg",
  },
  {
    id: "renovation-works",
    number: "02",
    title: "Renovation Works",
    category: "construction",
    shortDescription:
      "Transforming existing structures through structural remodeling, modern facade upgrades, retrofitting, and energy-efficient retrofits.",
    deliverables: [
      "Structural Retrofitting & Strengthening",
      "Facade Modernization",
      "Spatial Reconfiguration",
      "Plumbing & Electrical Overhauls",
    ],
    icon: "Hammer",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.58 PM.jpeg",
  },
  {
    id: "interior-works",
    number: "03",
    title: "Interior Works",
    category: "construction",
    shortDescription:
      "Bespoke modular kitchens, false ceilings, luxury wall paneling, and fine woodwork executed to sub-millimeter precision.",
    deliverables: [
      "Custom Modular Kitchen Units",
      "Designer Gypsum False Ceilings",
      "Veneer & Laminate Millwork",
      "Integrated Smart Automation",
    ],
    icon: "Wrench",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.56 PM (1).jpeg",
  },
  {
    id: "swimming-pool-works",
    number: "04",
    title: "Swimming Pool Works",
    category: "construction",
    shortDescription:
      "Custom engineered residential and commercial swimming pools with advanced filtration systems, underwater mood lighting, and stone coping.",
    deliverables: [
      "RCC Shell & Waterproofing Systems",
      "Infinity Edge & Skimmer Pools",
      "Multi-stage Water Filtration",
      "Anti-skid Decking & LED Lighting",
    ],
    icon: "Waves",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.55 PM (1).jpeg",
  },
  {
    id: "landscape-development",
    number: "05",
    title: "Landscape Development Works",
    category: "construction",
    shortDescription:
      "Harmonious outdoor environments blending native plantings, architectural walkways, water elements, and exterior ambient lighting.",
    deliverables: [
      "Hardscape & Softscape Engineering",
      "Driveway Paving & Cobblestone Work",
      "Pergolas & Outdoor Lounges",
      "Automated Drip Irrigation Systems",
    ],
    icon: "Trees",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.52 PM.jpeg",
  },
  {
    id: "home-theaters",
    number: "06",
    title: "Home Theaters",
    category: "construction",
    shortDescription:
      "Acoustically isolated private cinema environments with custom acoustic wall treatments, motorized seating, and immersive 4K/Dolby sound staging.",
    deliverables: [
      "Acoustic Insulation & Decoupling",
      "Tiered Seating & Sightline Planning",
      "Concealed Cabling & Audio Calibration",
      "Starlight Ceilings & Mood Lighting",
    ],
    icon: "Film",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.56 PM (2).jpeg",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Understand",
    description: "Deep client consultation, site appraisal, soil conditions, budget alignment, and lifestyle workflow analysis.",
    icon: "Search",
  },
  {
    step: "02",
    title: "Design",
    description: "Iterative architectural sketches, 2D functional layouts, 3D photorealistic elevations, and spatial modeling.",
    icon: "PencilRuler",
  },
  {
    step: "03",
    title: "Plan",
    description: "Complete structural drawings, MEP engineering schematics, material bills of quantities (BOQ), and timeline scheduling.",
    icon: "FileSpreadsheet",
  },
  {
    step: "04",
    title: "Build",
    description: "Disciplined on-site civil execution, continuous engineer supervision, quality control benchmarks, and milestone reviews.",
    icon: "Construction",
  },
  {
    step: "05",
    title: "Deliver",
    description: "Final interior fit-out, MEP testing, snag clearance, deep cleaning, and turnkey handover of the completed space.",
    icon: "CheckCircle2",
  },
];
