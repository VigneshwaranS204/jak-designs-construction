export interface Project {
  id: string;
  title: string;
  category: "Residential" | "Architecture" | "Interiors" | "3D Designs" | "Construction";
  location?: string;
  type: string;
  image: string;
  description: string;
  featured?: boolean;
  aspectRatio?: "landscape" | "portrait" | "square" | "tall";
  cost?: string;
  stats?: { label: string; value: string }[];
  tags: string[];
}

export const CATEGORIES = [
  "All",
  "Residential",
  "Architecture",
  "Interiors",
  "3D Designs",
  "Construction",
] as const;

export type ProjectCategory = (typeof CATEGORIES)[number];

export const PROJECTS: Project[] = [
  {
    id: "proj-01",
    title: "Twilight Luxury Villa",
    category: "3D Designs",
    type: "Cinematic 3D Architectural Visualization",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.55 PM (1).jpeg",
    description:
      "A flagship three-storey contemporary estate featuring cantilevered balconies, integrated warm lighting schemes, and expansive glass openings designed for luxury tropical living.",
    featured: true,
    aspectRatio: "landscape",
    tags: ["3D Elevation", "Luxury Villa", "Night Visualization", "Pergola"],
  },
  {
    id: "proj-02",
    title: "Illuminated Multi-Level Commercial Facade",
    category: "Architecture",
    type: "Parametric Jali Facade & Mixed-Use Architecture",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.55 PM.jpeg",
    description:
      "A striking multi-level structure featuring backlit parametric geometric jaali screens, vertical architectural lighting fins, and a modern commercial ground lobby.",
    featured: true,
    aspectRatio: "portrait",
    tags: ["Commercial Architecture", "Parametric Facade", "Architectural Lighting"],
  },
  {
    id: "proj-03",
    title: "RJ Residencies",
    category: "Architecture",
    type: "Multi-Storey Residential Development",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.54 PM (1).jpeg",
    description:
      "Modern multi-dwelling apartment residence optimized for natural cross-ventilation, individual private balconies, and dedicated stilt-level parking.",
    featured: true,
    aspectRatio: "square",
    tags: ["Multi-Family", "2D/3D Planning", "Urban Housing"],
  },
  {
    id: "proj-04",
    title: "Contemporary Twin Duplex Residence",
    category: "Residential",
    type: "Residential 3D Elevation & Planning",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.54 PM (2).jpeg",
    description:
      "Symmetrical twin duplex homes featuring textured stone cladding, modern geometric balconies, and integrated secure access gates.",
    featured: false,
    aspectRatio: "landscape",
    tags: ["Duplex", "Twin Residence", "Elevation Design"],
  },
  {
    id: "proj-05",
    title: "Melakaveri Modular Kitchen",
    category: "Interiors",
    location: "Kumbakonam, Melakaveri, Tamil Nadu",
    type: "Modular Kitchen Interior Execution",
    cost: "₹6 Lakhs",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.55 PM (2).jpeg",
    description:
      "High-gloss dual-tone modular kitchen with built-in appliances, seamless quartz counter, and concealed LED task lighting executed for optimal culinary flow.",
    featured: true,
    aspectRatio: "portrait",
    tags: ["Modular Kitchen", "Brochure Feature", "Custom Cabinetry"],
  },
  {
    id: "proj-06",
    title: "Curved Luxury Island & Dining Bar",
    category: "Interiors",
    type: "Premium Kitchen & Joinery Design",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.56 PM (1).jpeg",
    description:
      "Statement curved breakfast island with fluted timber base, designer suspended brass pendant luminaires, and seamless pantry storage.",
    featured: false,
    aspectRatio: "portrait",
    tags: ["Kitchen Island", "Fluted Joinery", "Lighting Design"],
  },
  {
    id: "proj-07",
    title: "Turnkey Civil Construction Site",
    category: "Construction",
    type: "Ground-Up Civil Engineering & Framing",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.58 PM (1).jpeg",
    description:
      "Active construction site showing multi-level structural scaffolding, safety netting, and monolithic RCC column casting managed under dedicated site supervision.",
    featured: true,
    aspectRatio: "landscape",
    tags: ["Civil Construction", "Turnkey Build", "Safety & Scaffolding"],
  },
  {
    id: "proj-08",
    title: "Twin Residence - Design to Built Space",
    category: "Construction",
    type: "Completed Turnkey Build",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.01.00 PM.jpeg",
    description:
      "Physical turnkey execution of the twin residence duplex, precisely translating the 3D elevation drawings into concrete, brick, and stone reality.",
    featured: true,
    aspectRatio: "portrait",
    tags: ["Design to Reality", "Turnkey Handover", "Exterior Cladding"],
  },
  {
    id: "proj-09",
    title: "Twin Residence 3D Concept Model",
    category: "3D Designs",
    type: "Pre-Construction Visualization",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.01.00 PM (1).jpeg",
    description:
      "Original photorealistic 3D visualization created by JAK Designs before ground-breaking, demonstrating 1:1 fidelity with the final built structure.",
    featured: false,
    aspectRatio: "landscape",
    tags: ["3D Elevation", "Architectural Rendering", "Design to Build"],
  },
  {
    id: "proj-10",
    title: "Contemporary Cantilevered Villa",
    category: "Residential",
    type: "Architectural 3D Elevation",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.52 PM (1).jpeg",
    description:
      "Modern residential masterpiece with an extended upper floor cantilever, minimalist glass railings, and a sheltered double carport.",
    featured: false,
    aspectRatio: "landscape",
    tags: ["Cantilever", "Modern Villa", "Residential Design"],
  },
  {
    id: "proj-11",
    title: "Sage Green Designer Kitchen",
    category: "Interiors",
    type: "Modern Residential Kitchen",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.56 PM.jpeg",
    description:
      "Earthy sage green matte cabinetry with brass hardware, under-cabinet ambient lighting, and optimized corner carousel storage.",
    featured: false,
    aspectRatio: "portrait",
    tags: ["Modular Kitchen", "Matte Finish", "Interior Joinery"],
  },
  {
    id: "proj-12",
    title: "Urban Multi-Storey Residence",
    category: "Residential",
    type: "Multi-Storey Villa Design",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.52 PM (2).jpeg",
    description:
      "Three-level urban home engineered for narrow-lot parcels, maximizing natural light penetration with stacked corner windows and roof terrace.",
    featured: false,
    aspectRatio: "landscape",
    tags: ["Urban Living", "Narrow Lot", "3D Architecture"],
  },
  {
    id: "proj-13",
    title: "Contemporary Villa with Pergola",
    category: "Residential",
    type: "Architectural 3D Elevation",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.52 PM.jpeg",
    description:
      "Warm contemporary villa featuring a roof terrace pergola, integrated garden planting, and double-height entrance volume.",
    featured: false,
    aspectRatio: "landscape",
    tags: ["Villa Design", "Pergola", "Elevation"],
  },
  {
    id: "proj-14",
    title: "Timber Louver Residence",
    category: "Residential",
    type: "Architectural Design",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.53 PM (1).jpeg",
    description:
      "Clean modernist lines accented with vertical timber screening elements that act as solar shading and privacy louvers.",
    featured: false,
    aspectRatio: "landscape",
    tags: ["Timber Louvers", "Solar Shading", "Modern Facade"],
  },
  {
    id: "proj-15",
    title: "Single-Storey Contemporary Bungalow",
    category: "Residential",
    type: "Ground Floor Residential Design",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.53 PM (2).jpeg",
    description:
      "Low-profile contemporary bungalow featuring stone accent pillars, an expansive covered porch, and accessible single-level floor plan.",
    featured: false,
    aspectRatio: "landscape",
    tags: ["Bungalow", "Single Level", "Modern Porch"],
  },
  {
    id: "proj-16",
    title: "Geometric Duplex Villa",
    category: "Residential",
    type: "Architectural Planning & 3D Model",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.53 PM.jpeg",
    description:
      "Distinctive architectural volume with crisp white framing, vertical timber louvers, and shaded upper balconies.",
    featured: false,
    aspectRatio: "square",
    tags: ["Duplex", "Geometric Facade", "Balcony Design"],
  },
  {
    id: "proj-17",
    title: "Stilt + Two Floor Modern Residence",
    category: "Architecture",
    type: "Architectural Design & Planning",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.54 PM (3).jpeg",
    description:
      "Elevated residential design providing stilt parking at ground level and two expansive living floors with panoramic corner glazing above.",
    featured: false,
    aspectRatio: "landscape",
    tags: ["Stilt Parking", "Multi-Storey", "Elevation"],
  },
  {
    id: "proj-18",
    title: "Apartment Building Facade",
    category: "Architecture",
    type: "3D Elevation & Planning",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.54 PM.jpeg",
    description:
      "Multi-unit residential facade with distinctive laser-cut decorative screening and warm wood-textured composite cladding.",
    featured: false,
    aspectRatio: "landscape",
    tags: ["Apartment Complex", "Decorative Screen", "3D Elevation"],
  },
  {
    id: "proj-19",
    title: "Breakfast Counter & Partition Screen",
    category: "Interiors",
    type: "Interior Woodwork & Lighting",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.56 PM (2).jpeg",
    description:
      "Custom fluted wood divider creating a subtle semi-private demarcation between kitchen and formal dining spaces.",
    featured: false,
    aspectRatio: "tall",
    tags: ["Breakfast Bar", "Wood Partition", "Cove Lighting"],
  },
  {
    id: "proj-20",
    title: "Minimalist Marble & Charcoal Kitchen",
    category: "Interiors",
    type: "Luxury Interior Execution",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.57 PM (1).jpeg",
    description:
      "Seamless waterfall marble island complemented by matte dark graphite cabinetry and recessed LED channel lighting.",
    featured: false,
    aspectRatio: "portrait",
    tags: ["Marble Island", "Minimalist Kitchen", "Pendant Lighting"],
  },
  {
    id: "proj-21",
    title: "Warm Ambient Kitchen & Dining",
    category: "Interiors",
    type: "Interior Design & Custom Lighting",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.57 PM.jpeg",
    description:
      "L-shaped breakfast bar with statement yellow accent seating, integrated wine racks, and concealed task illumination.",
    featured: false,
    aspectRatio: "portrait",
    tags: ["Lighting Design", "Breakfast Counter", "Bar Seating"],
  },
  {
    id: "proj-22",
    title: "Reinforced Concrete Frame Stage",
    category: "Construction",
    type: "Turnkey Structural Construction",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.57 PM (2).jpeg",
    description:
      "Precision shuttering and casting of columns and slabs adhering strictly to structural engineering calculations.",
    featured: false,
    aspectRatio: "portrait",
    tags: ["RCC Frame", "Civil Engineering", "Site Execution"],
  },
  {
    id: "proj-23",
    title: "Masonry & Plastering Stage",
    category: "Construction",
    type: "Turnkey Building Construction",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.58 PM.jpeg",
    description:
      "Red brick masonry laying and smooth exterior plastering executed with laser alignment tools for immaculate planar surfaces.",
    featured: false,
    aspectRatio: "portrait",
    tags: ["Brickwork", "Plastering", "Quality Control"],
  },
  {
    id: "proj-24",
    title: "Two-Storey Structural Execution",
    category: "Construction",
    type: "Civil & Structural Works",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.58 PM (2).jpeg",
    description:
      "Mid-construction perspective displaying structural lintels, parapet masonry, and electrical conduit embedment.",
    featured: false,
    aspectRatio: "tall",
    tags: ["Structural Shell", "Site Supervision", "Civil Works"],
  },
  {
    id: "proj-25",
    title: "Site Column & Slab Casting",
    category: "Construction",
    type: "RCC Framework Execution",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.59 PM (1).jpeg",
    description:
      "Continuous concrete pour with mechanical vibrators ensuring dense, void-free structural framing for maximum seismic resilience.",
    featured: false,
    aspectRatio: "tall",
    tags: ["Concrete Pour", "Slab Casting", "Engineering"],
  },
  {
    id: "proj-26",
    title: "Completed Modern Residence Facade",
    category: "Construction",
    type: "Turnkey Design + Build Handover",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.59 PM (2).jpeg",
    description:
      "Finished residential villa showcasing high-durability exterior paint, stainless steel & glass balcony railings, and paved entrance.",
    featured: false,
    aspectRatio: "portrait",
    tags: ["Completed Project", "Handover", "Turnkey Build"],
  },
  {
    id: "proj-27",
    title: "Multi-Storey Structural Framework",
    category: "Construction",
    type: "Turnkey Civil Works",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.59 PM.jpeg",
    description:
      "Multi-level reinforced concrete framework showing vertical rebar extensions for successive floor casting.",
    featured: false,
    aspectRatio: "tall",
    tags: ["Multi-Storey", "RCC Frame", "Civil Construction"],
  },
  {
    id: "proj-28",
    title: "Foundation & Plinth Construction",
    category: "Construction",
    type: "Site Civil Engineering",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.01.00 PM (2).jpeg",
    description:
      "Excavation, anti-termite treatment, and foundation plinth beam casting laid according to structural geotechnical recommendations.",
    featured: false,
    aspectRatio: "tall",
    tags: ["Foundation", "Plinth Beam", "Earthworks"],
  },
  {
    id: "proj-29",
    title: "Exterior Facade Finishing & Painting",
    category: "Construction",
    type: "Finishing & Coating Works",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.01.00 PM (3).jpeg",
    description:
      "Master painters applying multi-coat elastomeric weather-shield coating to seal and protect exterior architectural surfaces.",
    featured: false,
    aspectRatio: "tall",
    tags: ["Exterior Finish", "Weather Coating", "Craftsmanship"],
  },
  {
    id: "proj-30",
    title: "Individual Residence Construction",
    category: "Construction",
    type: "Turnkey Civil Construction",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.01.01 PM (1).jpeg",
    description:
      "Independent family home nearing roof slab completion with boundary retaining walls in place.",
    featured: false,
    aspectRatio: "portrait",
    tags: ["Independent Villa", "Civil Engineering", "Site Progress"],
  },
  {
    id: "proj-31",
    title: "Multi-Storey Building Construction",
    category: "Construction",
    type: "Commercial & Residential Construction",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.01.01 PM (2).jpeg",
    description:
      "Corner-lot multi-storey construction showing external formwork and perimeter safety measures.",
    featured: false,
    aspectRatio: "portrait",
    tags: ["Corner Plot", "Multi-Storey", "Formwork"],
  },
  {
    id: "proj-32",
    title: "Architectural Exterior Detail Finishing",
    category: "Construction",
    type: "Detail Execution & Facade Craft",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.01.01 PM.jpeg",
    description:
      "Precision cut-outs and paint trimming executed on cantilevered balcony projections.",
    featured: false,
    aspectRatio: "landscape",
    tags: ["Facade Detail", "Finishing", "On-site Craft"],
  },
  {
    id: "proj-33",
    title: "Urban Multi-Storey Residence Built",
    category: "Architecture",
    type: "Completed Residential Project",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.01.02 PM (1).jpeg",
    description:
      "Completed vertical residence demonstrating modern window placements, protective sunshades, and durable stone textured paint.",
    featured: false,
    aspectRatio: "portrait",
    tags: ["Completed Build", "Urban Home", "Residential"],
  },
  {
    id: "proj-34",
    title: "Development Site Groundwork",
    category: "Construction",
    type: "Civil & Groundwork Works",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.01.02 PM.jpeg",
    description:
      "Initial site preparation, leveling, and structural footing layout marking using precision total-station equipment.",
    featured: false,
    aspectRatio: "portrait",
    tags: ["Site Groundwork", "Footing Layout", "Total Station"],
  },
  {
    id: "proj-35",
    title: "Modern Two-Storey Residence",
    category: "Residential",
    type: "Residential Architecture & 3D Visualization",
    image: "/assets/WhatsApp Image 2026-09-24 at 6.00.51 PM.jpeg",
    description:
      "Modern two-storey residence designed with warm timber wall finishes, spacious terraces, and contemporary parapet profiles.",
    featured: false,
    aspectRatio: "landscape",
    tags: ["Contemporary House", "Timber Finish", "Balcony"],
  },
];
