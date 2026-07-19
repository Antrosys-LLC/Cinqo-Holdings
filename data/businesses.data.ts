export interface DefineUsItem {
  title: string;
  description: string;
  bgimage:string;
}

export interface CapabilityItem {
  title: string;
  description: string;
  image: string;
}

export interface SectorShowcaseItem {
  title: string;
  description: string;
  image: string;
}

export interface ShowcaseProject {
  title: string;                // e.g., "J003 FONTANA INFINITY" (Left list & Top-left on hover)
  mainImage: string;            // The default right-side image (e.g., the building with the pool)
  hoverThumbnails: string[];    // Array of the 5 smaller images shown in the middle on hover
  hoverDescription: string;     // The descriptive text shown at the bottom on hover
}

export interface BusinessData {
  slug: string;
  name: string;
  heroImage: string;
  introBgImage: string;
  /** Optional looping background video for the intro section (falls back to introBgImage when omitted). */
  introBgVideo?: string;
  introHeading?: string;
  introText: string;
  definesUs: DefineUsItem[];
  capabilities: CapabilityItem[];
  sectorShowcase: SectorShowcaseItem[];

  // --- Integrated Showcase Section Data ---
  showcaseText: string;                // The static upper paragraph on the left
  showcaseProjects: ShowcaseProject[]; // The list of projects containing data for both states
}

export const businesses: BusinessData[] = [
  {
    slug: "cinqo-contracting",
    name: "CINQO CONTRACTING",
    heroImage: "/images/companies/c1.jpg",
    introBgImage: "/images/companies/ci1.png",
    introHeading: "BUILT ON\nCOMMITMENT",
    introText: "Cinqo Contracting is the Group's flagship construction company, delivering civil and building projects across Bahrain's residential, commercial and industrial sectors.\n\nFor nearly two decades, the company has delivered luxury villas, residential developments, commercial facilities, warehouses and industrial assets. Through execution focused planning, experienced project leadership and rigorous commercial control, Cinqo Contracting provides confidence from mobilisation through final handover.",
    definesUs: [
      {
        title: "Executive Oversight",
        description: "Projects operate with direct leadership visibility, ensuring accountability, timely decision-making and effective risk management throughout delivery.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "Quality & Compliance",
        description: "Materials, workmanship and safety standards are maintained through inspections, testing and compliance monitoring throughout execution.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "Programme Control",
        description: "Scheduling and sequencing are actively monitored across all project phases, supported by ERP-enabled tracking and reporting.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "Commercial Discipline",
        description: "Cost exposure, variations and financial commitments are managed through structured controls and documented approval processes.",
        bgimage: "/images/companies/ci1.png",
      }
    ],
    capabilities: [
      {
        title: "CIVIL & STRUCTURAL CONSTRUCTION",
        description: "Scheduling review and progress tracking to safeguard timelines and milestone commitments.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "MEP CONTRACTING",
        description: "Scheduling review and progress tracking to safeguard timelines and milestone commitments.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "FULL PROJECT DELIVERY",
        description: "Turnkey project execution from initial concept through to handover and commissioning, ensuring a single point of accountability and coordinated delivery across all project phases.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "PROGRAMME OVERSIGHT",
        description: "Scheduling review and progress tracking to safeguard timelines and milestone commitments.",
        image: "/images/capabilities/HAWAR.jpg"
      },

    ],
    sectorShowcase: [
      {
        title: "Residential",
        description: "Luxury villas and residential developments delivered with disciplined project execution.",
        image: "/images/sectors/sector-1.webp",
      },
      {
        title: "Commercial",
        description: "Commercial facilities built to rigorous quality, safety and programme standards.",
        image: "/images/sectors/sector-2.webp",
      },
      {
        title: "Industrial",
        description: "Warehouses and industrial assets delivered from mobilisation through final handover.",
        image: "/images/sectors/sector-3.jpg",
      },
    ],
    showcaseText: "Explore our portfolio of landmark civil and building projects across Bahrain's residential, commercial, and industrial sectors, demonstrating our commitment to quality, safety, and precision.",
    showcaseProjects: [
      {
        title: "J003 FONTANA INFINITY",
        mainImage: "/images/companies/c1.jpg",
        hoverThumbnails: [
          "/images/sectors/pip-1.jpg",
          "/images/sectors/pip-2.jpg",
          "/images/sectors/pip-3.jpg",
          "/images/sectors/pip-4.jpg",
          "/images/sectors/pip-5.jpg"
        ],
        hoverDescription: "A premier luxury residential development featuring twin towers, exceptional resort-style amenities, and meticulous structural execution."
      },
      {
        title: "J003 FONTANA INFINITY",
        mainImage: "/images/companies/c1.jpg",
        hoverThumbnails: [
          "/images/sectors/pip-1.jpg",
          "/images/sectors/pip-2.jpg",
          "/images/sectors/pip-3.jpg",
          "/images/sectors/pip-4.jpg",
          "/images/sectors/pip-5.jpg"
        ],
        hoverDescription: "A premier luxury residential development featuring twin towers, exceptional resort-style amenities, and meticulous structural execution."
      },
      {
        title: "J003 FONTANA INFINITY",
        mainImage: "/images/companies/c1.jpg",
        hoverThumbnails: [
          "/images/sectors/pip-1.jpg",
          "/images/sectors/pip-2.jpg",
          "/images/sectors/pip-3.jpg",
          "/images/sectors/pip-4.jpg",
          "/images/sectors/pip-5.jpg"
        ],
        hoverDescription: "A premier luxury residential development featuring twin towers, exceptional resort-style amenities, and meticulous structural execution."
      },
    ]
  },
  {
    slug: "thc-facilities-management",
    name: "THC FACILITIES MANAGEMENT",
    heroImage: "/images/companies/c2.jpeg",
    introBgImage: "/images/companies/ci2.png",
    introHeading: "PRESERVING\nVALUE",
    introText: "THC Facilities Management helps clients protect, maintain and enhance the value of their assets through integrated facilities management services.\n\nOperating across residential, hospitality, commercial and industrial environments, the company combines technical expertise, preventative maintenance and responsive support to ensure operational continuity and long-term asset performance.",
    definesUs: [
      {
        title: "ASSET PERFORMANCE",
        description: "Maximizing the lifespan and performance of your assets.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "OPERATIONAL EFFICIENCY",
        description: "Optimizing operations to reduce costs and improve service delivery.",
        bgimage: "/images/companies/ci1.png",
      },
      {
        title: "STRATEGIC PARTNERS",
        description: "Working closely with clients to achieve their facility goals.",
        bgimage: "/images/companies/ci1.png",
      }
    ],
    capabilities: [
      {
        title: "PREVENTIVE MAINTENANCE PROGRAMMES",
        description: "Maintenance programmes are designed to maximise asset lifespan, reliability and operational performance.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "MEP SERVICING & DIAGNOSTICS",
        description: "Systems are monitored and maintained to minimise downtime and support uninterrupted operations.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "SOFT SERVICES & PROPERTY CARE",
        description: "Maintenance decisions are guided by long-term asset performance and total cost of ownership.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "ANNUAL MAINTENANCE CONTRACTS",
        description: "Clients benefit from clear visibility across maintenance activities, compliance requirements and asset performance.",
        image: "/images/capabilities/HAWAR.jpg"
      },
    ],
    sectorShowcase: [
      {
        title: "Residential",
        description: "Preventative maintenance programmes that protect long-term residential asset value.",
        image: "/images/sectors/sector-1.webp",
      },
      {
        title: "Hospitality",
        description: "Responsive facilities support tailored to hospitality service standards.",
        image: "/images/sectors/sector-2.webp",
      },
      {
        title: "Commercial",
        description: "Integrated facilities management for commercial towers and mixed-use assets.",
        image: "/images/sectors/sector-3.jpg",
      },
    ],
    showcaseText: "Discover how we maintain and elevate the value of premier properties through our comprehensive and responsive facilities management solutions.",
    showcaseProjects: [
      {
        title: "COMMERCIAL PLAZA OVERSIGHT",
        mainImage: "/images/companies/c2.jpeg",
        hoverThumbnails: [
          "/images/sectors/pip-1.jpg",
          "/images/sectors/pip-2.jpg",
          "/images/sectors/pip-3.jpg",
          "/images/sectors/pip-4.jpg",
          "/images/sectors/pip-5.jpg"
        ],
        hoverDescription: "Complete lifecycle management and preventative maintenance operations for a 50-story commercial hub."
      }
    ]
  },
  {
    slug: "cinqo-trading",
    name: "CINQO TRADING",
    heroImage: "/images/companies/h1.jpg",
    introBgImage: "/images/companies/ci4.png",
    introHeading: "STRUCTURED\nDISTRIBUTION",
    introText: "Cinqo Trading serves as the commercial and technical bridge between leading international manufacturers and the GCC market.\nThrough exclusive and authorised partnerships with globally recognised brands, the division supplies paints, construction chemicals, building materials, acoustic systems and infrastructure technologies across Bahrain.\n\nBeyond distribution, Cinqo Trading supports specification development, technical evaluation, project execution and after-sales support, helping clients select and implement solutions with confidence.",
    definesUs: [
      {
        title: "PRINCIPAL ALIGNMENT",
        description: "Manufacturer relationships are built on long-term partnerships, commercial integrity and consistent market representation."
      },
      {
        title: "TECHNICAL DISTRIBUTION",
        description: "Specification guidance, application support and technical advisory services form an integral part of the distribution model."
      },
      {
        title: "INVENTORY & LOGISTICS",
        description: "ERP-managed inventory, batch traceability and real-time stock visibility support reliable supply across retail and project channels."
      },
      {
        title: "AFTER-SALES SUPPORT",
        description: "Technical support from initial specification through to installation guidance and after-sales service across all delivered product lines."
      },
    ],
    capabilities: [
      {
        title: "TECHNICAL ADVISORY",
        description: "Technical information, product evaluation and application guidance help project teams select and specify materials effectively.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "SYSTEM DESIGN SUPPORT",
        description: "Material selection is supported by technical data, performance benchmarks and application guidelines to ensure effective integration with project requirements.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "AFTER-SALES & FIELD SUPPORT",
        description: "Technical support from initial specification through to installation guidance and after-sales service across all delivered product lines.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "INVENTORY & LOGISTICS",
        description: "Structured inventory management, quality assurance and on-time delivery supported by warehousing and logistics infrastructure.",
        image: "/images/capabilities/HAWAR.jpg"
      },
    ],
    sectorShowcase: [
      {
        title: "Infrastructure",
        description: "Technical distribution supporting national infrastructure development.",
        image: "/images/sectors/sector-1.webp",
      },
      {
        title: "Construction",
        description: "Paints, chemicals and building materials sourced from authorised global brands.",
        image: "/images/sectors/sector-2.webp",
      },
      {
        title: "Industrial",
        description: "Acoustic systems and specification support for industrial-scale projects.",
        image: "/images/sectors/sector-3.jpg",
      },
    ],
    showcaseText: "A curated look at the high-grade materials and exclusive technologies we have distributed to Bahrain's most significant infrastructural projects.",
    showcaseProjects: [
      {
        title: "BAHRAIN INFRASTRUCTURE SUPPLY",
        mainImage: "/images/companies/h1.jpg",
        hoverThumbnails: [
          "/images/sectors/pip-1.jpg",
          "/images/sectors/pip-2.jpg",
          "/images/sectors/pip-3.jpg",
          "/images/sectors/pip-4.jpg",
          "/images/sectors/pip-5.jpg"
        ],
        hoverDescription: "Supplied advanced construction chemicals and acoustic systems for a major national infrastructure development."
      }
    ]
  },
  {
    slug: "cinqo-fitout",
    name: "THC FITOUT",
    heroImage: "/images/companies/c3.JPG",
    introBgImage: "/images/companies/ci3.png",
    introHeading: "DELIVERED\nWITH\nPRECISION",
    introText: "THC Fit Out delivers high-quality interior environments where design intent, technical coordination and execution excellence come together.\n\nFrom corporate offices and retail environments to hospitality venues and premium residential interiors, every project is delivered with a focus on quality, programmed control and attention to detail.",
    definesUs: [
      {
        title: "DESIGN INTEGRITY",
        description: "Projects are executed in accordance with approved designs while maintaining alignment with architectural intent."
      },
      {
        title: "CONTROLLED EXECUTION",
        description: "Trade coordination, sequencing and finish management are carefully supervised throughout delivery."
      },
      {
        title: "MATERIAL OVERSIGHT",
        description: "Specifications and finishes are monitored through structured reviews and on-site quality control."
      },
      {
        title: "DETAIL ORIENTATION",
        description: "Precision in finishing, alignment and coordination defines the quality of the final outcome."
      },
    ],
    capabilities: [
      {
        title: "INTERIOR FIT-OUT & FINISHING",
        description: "Spaces are constructed in line with technical drawings and quality standards.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "JOINERY & CUSTOM FABRICATION",
        description: "Installation and finishing of ceiling systems with attention to acoustics, aesthetics and service integration.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "MEP INTEGRATION",
        description: "Installation of wall panels, claddings and decorative finishes in accordance with project specifications.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "DESIGN COORDINATION",
        description: "Construction of internal partitions, glazed systems and space-division elements using contemporary materials.",
        image: "/images/capabilities/HAWAR.jpg"
      }
    ],
    sectorShowcase: [
      {
        title: "Corporate",
        description: "Office interiors coordinated across design intent, MEP and joinery.",
        image: "/images/sectors/sector-1.webp",
      },
      {
        title: "Hospitality",
        description: "Hospitality venues fitted out with meticulous attention to detail.",
        image: "/images/sectors/sector-2.webp",
      },
      {
        title: "Residential",
        description: "Premium residential interiors delivered under programmed quality control.",
        image: "/images/sectors/sector-3.jpg",
      },
    ],
    showcaseText: "Step inside our completed interior environments, where uncompromising design intent meets precise technical execution.",
    showcaseProjects: [
      {
        title: "CORPORATE HQ MANAMA",
        mainImage: "/images/companies/c3.JPG",
        hoverThumbnails: [
          "/images/sectors/pip-1.jpg",
          "/images/sectors/pip-2.jpg",
          "/images/sectors/pip-3.jpg",
          "/images/sectors/pip-4.jpg",
          "/images/sectors/pip-5.jpg"
        ],
        hoverDescription: "A turnkey interior fit-out for a multinational headquarters, featuring custom joinery and highly coordinated MEP integration."
      }
    ]
  },
  {
    slug: "cinqo-flooring-coating-technologies",
    name: "CINQO FLOORING & COATING TECHNOLOGIES",
    heroImage: "/images/companies/c5.png",
    introBgImage: "/images/companies/ci5.png",
    introHeading: "ENGINEERED\nFOR\nENDURANCE",
    introText: "Cinqo Flooring & Coating Technologies delivers high-performance flooring, waterproofing and protective coating systems for environments where durability, hygiene and long-term performance are critical.\n\nThe company serves logistics facilities, healthcare and pharmaceutical environments, food production sites, car parks and industrial installations through technically engineered solutions and manufacturer-approved systems.",
    definesUs: [
      {
        title: "SYSTEM-BASED APPROACH",
        description: "Solutions are specified as complete systems tailored to operational, chemical and mechanical performance requirements."
      },
      {
        title: "PREPARATION INTEGRITY",
        description: "Substrates are assessed and prepared to ensure optimal adhesion and long-term performance of flooring and coating systems."
      },
      {
        title: "APPLICATION CONTROL",
        description: "Environmental conditions, application parameters and quality standards are monitored throughout installation."
      },
      {
        title: "PERFORMANCE DURABILITY",
        description: "Systems are selected to withstand operational demands while maximising service life and reliability."
      },
    ],
    capabilities: [
      {
        title: "EPOXY & POLYURETHANE SYSTEMS",
        description: "Concrete remediation, levelling and coating installation executed to meet performance and durability requirements.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "PROTECTIVE COATINGS",
        description: "Waterproofing systems, chemical-resistant coatings and protective barriers for concrete and steel substrates.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "WATERPROOFING SYSTEMS",
        description: "Installation of Vinyl, Epoxy and Polyurethane flooring systems with material selection supported by CSIRO product approvals.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "SURFACE PREPARATION",
        description: "Durable deck and surface coatings designed for high-wear, high-traffic conditions including ramps, parking bays and pedestrian zones.",
        image: "/images/capabilities/HAWAR.jpg"
      },
    ],
    sectorShowcase: [
      {
        title: "Healthcare",
        description: "Ultra-hygienic, chemically resistant flooring for pharmaceutical environments.",
        image: "/images/sectors/sector-1.webp",
      },
      {
        title: "Logistics",
        description: "Durable protective systems engineered for high-traffic logistics facilities.",
        image: "/images/sectors/sector-2.webp",
      },
      {
        title: "Industrial",
        description: "Manufacturer-approved coating systems for demanding industrial installations.",
        image: "/images/sectors/sector-3.jpg",
      },
    ],
    showcaseText: "Review our specialized applications of high-performance flooring and coating systems across challenging industrial and healthcare environments.",
    showcaseProjects: [
      {
        title: "PHARMA LOGISTICS HUB",
        mainImage: "/images/companies/c5.png",
        hoverThumbnails: [
          "/images/sectors/pip-1.jpg",
          "/images/sectors/pip-2.jpg",
          "/images/sectors/pip-3.jpg",
          "/images/sectors/pip-4.jpg",
          "/images/sectors/pip-5.jpg"
        ],
        hoverDescription: "Installation of ultra-hygienic, chemically resistant flooring solutions designed to withstand rigorous pharmaceutical standards."
      }
    ]
  }
];

// ─── Brand Portfolio ────────────────────────────────────────────────────────────

export interface BrandPortfolioItem {
  name: string;
  logo: string;
  title: string;
  description: string;
  layout: "grid" | "wide";
}

export interface BrandPortfolioCategory {
  category: string;
  items: BrandPortfolioItem[];
}

export const brandPortfolio: BrandPortfolioCategory[] = [
  {
    category: "PAINTS & SPECIALIZED COATINGS",
    items: [
      {
        name: "Dulux",
        logo: "/workedwith/logo-1.png",
        title: "Decorative Paints",
        description:
          "Premium decorative paints and coatings for residential and commercial interiors, providing lasting beauty and protection.",
        layout: "grid",
      },
      {
        name: "Crayco",
        logo: "/workedwith/logo-2.png",
        title: "Floor Coatings & Pavement Preservation",
        description:
          "High-performance floor coatings and pavement preservation solutions for industrial, commercial, and infrastructure applications.",
        layout: "wide",
      },
      {
        name: "Sikkens",
        logo: "/workedwith/logo-3.png",
        title: "Wood Coatings",
        description:
          "Professional wood coating systems that deliver exceptional durability, color retention, and protection against the elements.",
        layout: "grid",
      },
      {
        name: "Spay",
        logo: "/workedwith/logo-4.png",
        title: "Wood Coatings",
        description:
          "Specialized wood coating solutions designed for demanding environments with superior finish and long-lasting performance.",
        layout: "wide",
      },
    ],
  },
  {
    category: "BUILDING MATERIALS",
    items: [
      {
        name: "Gyproc Saint-Gobain",
        logo: "/workedwith/logo-5.png",
        title: "Interior & Exterior Construction Systems",
        description:
          "Innovative drywall, plasterboard, and ceiling systems for complete interior and exterior building solutions.",
        layout: "grid",
      },
      {
        name: "Ecophon Saint-Gobain",
        logo: "/workedwith/logo-6.png",
        title: "Acoustic Ceiling Systems",
        description:
          "High-performance acoustic ceiling solutions that enhance sound quality, comfort, and aesthetics in any space.",
        layout: "wide",
      },
    ],
  },
  {
    category: "CONSTRUCTION CHEMICALS",
    items: [
      {
        name: "Sika",
        logo: "/workedwith/logo-7.png",
        title: "Construction Chemicals",
        description:
          "World-leading construction chemical solutions for sealing, bonding, reinforcing, and protecting structures.",
        layout: "grid",
      },
      {
        name: "Master Builders Solutions",
        logo: "/workedwith/logo-8.png",
        title: "Construction Chemicals",
        description:
          "Advanced admixtures, concrete treatments, and chemical solutions that enhance construction performance and durability.",
        layout: "wide",
      },
      {
        name: "Apple Chemie",
        logo: "/workedwith/logo-1.png",
        title: "Construction Chemicals",
        description:
          "Specialty chemical products for construction, including waterproofing, surface treatments, and protective coatings.",
        layout: "grid",
      },
    ],
  },
  {
    category: "INFRASTRUCTURE",
    items: [
      {
        name: "Flovac",
        logo: "/workedwith/logo-2.png",
        title: "Vacuum Sewerage Systems",
        description:
          "Innovative vacuum sewerage technology for efficient, reliable, and cost-effective wastewater collection in challenging terrains.",
        layout: "wide",
      },
    ],
  },
];
