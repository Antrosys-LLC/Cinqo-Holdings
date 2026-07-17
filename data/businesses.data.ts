export interface DefineUsItem {
  title: string;
  description: string;
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

export interface BusinessData {
  slug: string;
  name: string;
  heroImage: string;
  introBgImage: string;
  introHeading?: string;
  introText: string;
  definesUs: DefineUsItem[];
  capabilities: CapabilityItem[];
  sectorShowcase: SectorShowcaseItem[];
}

export interface SectorsPageData {
  showcaseText: string;
  projects: string[];
  showcaseImage: string;
  aerialImage: string;
  compositeImage: string;
  compositeTitle: string;
  compositeDescription: string;
  pipCount: number;
}

export const sectorsPage: SectorsPageData = {
  showcaseText: "A showcase of absolute accountability in execution. We measure the success of these works by the frequency of repeat client engagement and a commitment to honoring obligations long after final handover.",
  projects: ["J003 FONTANA INFINITY", "J003 FONTANA INFINITY", "J003 FONTANA INFINITY"],
  showcaseImage: "/images/sectors/sector-1.webp",
  aerialImage: "/images/sectors/sector-2.webp",
  compositeImage: "/images/sectors/sector-3.jpg",
  compositeTitle: "J003 FONTANA INFINITY",
  compositeDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  pipCount: 5
};

export const businesses: BusinessData[] = [
  {
    slug: "cinqo-contracting",
    name: "CINQO CONTRACTING",
    heroImage: "/images/companies/c1.jpg",
        introBgImage: "/images/companies/ci1.png",
    introHeading: "BUILT ON\nCOMMITMENT",    introText: "Cinqo Contracting is the Group's flagship construction company, delivering civil and building projects across Bahrain's residential, commercial and industrial sectors.\n\nFor nearly two decades, the company has delivered luxury villas, residential developments, commercial facilities, warehouses and industrial assets. Through execution focused planning, experienced project leadership and rigorous commercial control, Cinqo Contracting provides confidence from mobilisation through final handover.",
    definesUs: [
      {
        title: "Executive Oversight",
        description: "Projects operate with direct leadership visibility, ensuring accountability, timely decision-making and effective risk management throughout delivery."
      },
      {
        title: "Quality & Compliance",
        description: "Materials, workmanship and safety standards are maintained through inspections, testing and compliance monitoring throughout execution."
      },
      {
        title: "Programme Control",
        description: "Scheduling and sequencing are actively monitored across all project phases, supported by ERP-enabled tracking and reporting."
      },
      {
        title: "Commercial Discipline",
        description: "Cost exposure, variations and financial commitments are managed through structured controls and documented approval processes."
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
        title: "HIGH END FIT OUT & JOINERY",
        description: "Scheduling review and progress tracking to safeguard timelines and milestone commitments.",
        image: "/images/capabilities/HAWAR.jpg"
      }
    ],
    sectorShowcase: [
      {
        title: "HIGH-END RESIDENTIAL VILLAS & COMPOUNDS",
        description: "Delivery of luxury villas and gated communities with a focus on quality, coordination and finishing excellence.",
        image: "/images/sectors/card-1_contract.webp"
      },
      {
        title: "RESIDENTIAL & COMMERCIAL TOWERS",
        description: "Construction of mid- and high-rise developments with strong emphasis on programme control, logistics and safety compliance.",
        image: "/images/sectors/card-2.webp"
      },
      {
        title: "COMMERCIAL MALLS & MIXED-USE DEVELOPMENTS",
        description: "Construction of mid- and high-rise developments with strong emphasis on programme control, logistics and safety compliance.",
        image: "/images/sectors/card-3.webp"
      },
      {
        title: "WAREHOUSES & INDUSTRIAL FACILITIES",
        description: "Development of industrial structures incorporating utility integration, fire safety systems and operational infrastructure.",
        image: "/images/sectors/card-4.webp"
      }
    ],
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
        description: "Maximizing the lifespan and performance of your assets."
      },
      {
        title: "OPERATIONAL EFFICIENCY",
        description: "Optimizing operations to reduce costs and improve service delivery."
      },
      {
        title: "STRATEGIC PARTNERS",
        description: "Working closely with clients to achieve their facility goals."
      }
    ],
    capabilities: [
      {
        title: "Asset Preservation",
        description: "Maintenance programmes are designed to maximise asset lifespan, reliability and operational performance.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "Operational Continuity",
        description: "Systems are monitored and maintained to minimise downtime and support uninterrupted operations.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "Lifecycle Focus",
        description: "Maintenance decisions are guided by long-term asset performance and total cost of ownership.",
        image: "/images/capabilities/HAWAR.jpg"
      },
      {
        title: "Transparent Reporting",
        description: "Clients benefit from clear visibility across maintenance activities, compliance requirements and asset performance.",
        image: "/images/capabilities/HAWAR.jpg"
      },
    ],
    sectorShowcase: [
      {
        title: "HOSPITALITY",
        description: "Facilities management solutions supporting hotels and serviced residences where uninterrupted operations are essential.",
        image: "/images/sectors/card-1.webp"
      },
      {
        title: "RESIDENTIAL TOWERS & COMPOUNDS",
        description: "Maintenance of HVAC, fire systems, lifts and shared infrastructure to ensure consistent building performance.",
        image: "/images/sectors/card-2.webp"
      },
      {
        title: "OFFICE BUILDINGS",
        description: "Preventive maintenance and system optimisation for corporate environments focused on uptime and efficiency.",
        image: "/images/sectors/card-3.webp"
      },
      {
        title: "INDUSTRIAL FACILITIES",
        description: "Technical servicing of operational assets and infrastructure aligned with compliance and productivity requirements.",
        image: "/images/sectors/card-4.webp"
      }
    ],
  },
  {
    slug: "cinqo-trading",
    name: "CINQO TRADING",
    heroImage: "/images/companies/h1.jpg",
    introBgImage: "/images/companies/ci4.png",
    introHeading: "STRUCTURED\nDISTRIBUTION",
    introText: "Cinqo Trading serves as the commercial and technical bridge between leading international manufacturers and the GCC market.\nThrough exclusive and authorised partnerships with globally recognised brands, the division supplies paints, construction chemicals, building materials, acoustic systems and infrastructure technologies across Bahrain.\n\nBeyond distribution, Cinqo Trading supports specification development, technical evaluation, project execution and after-sales support, helping clients select and implement solutions with confidence.",
    definesUs: [],
    capabilities: [],
    sectorShowcase: [
      {
        title: "CONSTRUCTION & CONTRACTING",
        description: "Supply of coatings, construction chemicals and engineered systems supported by specification and application advisory services.",
        image: "/images/sectors/card-1.webp"
      },
      {
        title: "RETAIL DISTRIBUTION",
        description: "Structured supply to retail channels supported by inventory management, pricing governance and brand development.",
        image: "/images/sectors/card-2.webp"
      },
      {
        title: "INDUSTRIAL & MANUFACTURING",
        description: "Technical products and systems supporting operational efficiency, asset protection and facility performance.",
        image: "/images/sectors/card-3.webp"
      },
      {
        title: "INFRASTRUCTURE & UTILITIES",
        description: "Specialised technologies and engineering solutions supporting municipal and large-scale infrastructure projects.",
        image: "/images/sectors/card-4.webp"
      }
    ],
  },
  {
    slug: "cinqo-fitout",
    name: "THC FITOUT",
    heroImage: "/images/companies/c3.JPG",
    introBgImage: "/images/companies/ci3.png",
    introHeading: "DELIVERED\nWITH\nPRECISION",
    introText: "THC Fit Out delivers high-quality interior environments where design intent, technical coordination and execution excellence come together.\n\nFrom corporate offices and retail environments to hospitality venues and premium residential interiors, every project is delivered with a focus on quality, programmed control and attention to detail.",
    definesUs: [],
    capabilities: [],
    sectorShowcase: [
      {
        title: "CORPORATE OFFICES",
        description: "Interior construction aligned with functionality, acoustic performance and service integration.",
        image: "/images/sectors/card-1.webp"
      },
      {
        title: "RETAIL & F&B",
        description: "Fast-track fit-out delivery focused on brand requirements and operational readiness.",
        image: "/images/sectors/card-2.webp"
      },
      {
        title: "RESIDENTIAL INTERIORS",
        description: "Premium villa and apartment interior delivered with attention to detail and material quality.",
        image: "/images/sectors/card-3.webp"
      },
      {
        title: "HEALTHCARE & CLINICS",
        description: "Fit-outs incorporating hygienic materials and coordinated building services.",
        image: "/images/sectors/card-4.webp"
      }
    ],
  },
  {
    slug: "cinqo-flooring-coating-technologies",
    name: "CINQO FLOORING & COATING TECHNOLOGIES",
    heroImage: "/images/companies/c5.png",
    introBgImage: "/images/companies/ci5.png",
    introHeading: "ENGINEERED\nFOR\nENDURANCE",
    introText: "Cinqo Flooring & Coating Technologies delivers high-performance flooring, waterproofing and protective coating systems for environments where durability, hygiene and long-term performance are critical.\n\nThe company serves logistics facilities, healthcare and pharmaceutical environments, food production sites, car parks and industrial installations through technically engineered solutions and manufacturer-approved systems.",
    definesUs: [],
    capabilities: [],
    sectorShowcase: [
      {
        title: "FOOD & BEVERAGE",
        description: "Hygienic flooring systems designed for production, processing and wash-down environments.",
        image: "/images/sectors/card-1.webp"
      },
      {
        title: "HEALTHCARE & PHARMACEUTICAL",
        description: "Seamless flooring solutions suitable for laboratories, cleanrooms and contamination-sensitive facilities.",
        image: "/images/sectors/card-2.webp"
      },
      {
        title: "WAREHOUSES & LOGISTICS",
        description: "Heavy-duty flooring systems designed for continuous operational traffic and material handling.",
        image: "/images/sectors/card-3.webp"
      },
      {
        title: "CAR PARKS & PODIUMS",
        description: "Protective coating systems engineered for vehicular traffic and environmental exposure.",
        image: "/images/sectors/card-4.webp"
      }
    ],
  },

  {
    slug: "cinqo-holding-investments",
    name: "CINQO HOLDING\nINVESTMENTS",
    heroImage: "/images/companies/c6.jpeg",
    introBgImage: "/images/companies/ci6.png",
    introHeading: "GOVERNANCE\nALIGNMENT\nLONG-TERM VALUE",
    introText: "Cinqo Holding evaluates and manages investments aligned with the Group’s long-term vision, operational expertise and governance standards.\n\nThe portfolio spans real estate, strategic partnerships, technology ventures and growth-oriented businesses where the Group can contribute not only capital, but also commercial discipline, operational insight and strategic direction.",
    definesUs: [
      {
        title: "INCOME-GENERATING REAL ESTATE",
        description: "Commercial, residential and industrial assets with stable cash flows and long-term value creation potential."
      },
      {
        title: "TECHNOLOGY VENTURES",
        description: "Investments in scalable technology solutions driving efficiency within the Group's operations and target industries."
      },
      {
        title: "GROWTH-ORIENTED BUSINESSES",
        description: "Funding for mature operational businesses requiring capital to expand into new markets or scale operations."
      },
      {
        title: "STRATEGIC PARTNERSHIPS & JOINT VENTURES",
        description: "Collaborative projects and alliances leveraging Group capital and operational expertise."
      }
    ],
    capabilities: [],
    sectorShowcase: [],
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
