export interface DefineUsItem {
  title: string;
  description: string;
}

export interface CapabilityItem {
  title: string;
  description: string;
  image: string;
}

export interface SectorItem {
  title: string;
  description: string;
  image: string;
}

export interface BusinessData {
  slug: string;
  name: string;
  heroImage: string;
  introText: string;
  definesUs: DefineUsItem[];
  capabilities: CapabilityItem[];
  sectors: SectorItem[];
}

export const businesses: BusinessData[] = [
  {
    slug: "cinqo-contracting",
    name: "CINQO CONTRACTING",
    heroImage: "/images/businesses/cinqo-contracting-hero.jpg",
    introText: "Cinqo Contracting is the Cinqo Flagship enterprise...",
    definesUs: [
      {
        title: "MAXIMISING POTENTIAL",
        description: "Value Engineering..."
      },
      {
        title: "DELIVERING EXCELLENCE",
        description: "Executing complex projects..."
      },
      {
        title: "EMPOWERING CAPABILITIES",
        description: "Driving success..."
      }
    ],
    capabilities: [
      {
        title: "CIVIL & STRUCTURAL CONSTRUCTION",
        description: "Ground-up structural engineering...",
        image: "/images/businesses/capability-civil.jpg"
      },
      {
        title: "MEP CONTRACTING",
        description: "Mechanical, Electrical, and Plumbing...",
        image: "/images/businesses/capability-mep.jpg"
      },
      {
        title: "HIGH END FIT OUT & JOINERY",
        description: "Premium interior fit-outs...",
        image: "/images/businesses/capability-fitout.jpg"
      }
    ],
    sectors: [
      {
        title: "RESIDENTIAL & COMMERCIAL COMPLEXES",
        description: "High-rise towers and mixed-use developments...",
        image: "/images/businesses/sector-residential.jpg"
      },
      {
        title: "HOSPITALITY",
        description: "Luxury hotels and resorts...",
        image: "/images/businesses/sector-hospitality.jpg"
      },
      {
        title: "RETAIL & SHOPPING MALLS",
        description: "World-class retail destinations...",
        image: "/images/businesses/sector-retail.jpg"
      },
      {
        title: "HEALTHCARE",
        description: "Advanced medical facilities...",
        image: "/images/businesses/sector-healthcare.jpg"
      }
    ]
  },
  {
    slug: "thc-facilities-management",
    name: "THC FACILITIES MANAGEMENT",
    heroImage: "/images/businesses/thc-facilities-hero.jpg",
    introText: "THC Facilities Management helps clients protect, maintain and enhance the value of their assets through integrated facilities management solutions.",
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
        title: "PREVENTIVE MAINTENANCE PROGRAMMES",
        description: "Comprehensive maintenance coverage including scheduled inspections, servicing and performance monitoring.",
        image: "/images/businesses/capability-preventive.jpg"
      },
      {
        title: "MEP SERVICING AND MAINTENANCE",
        description: "Expert maintenance of mechanical, electrical and plumbing systems.",
        image: "/images/businesses/capability-mep-maintenance.jpg"
      },
      {
        title: "ON DEMAND CORRECTIVE MAINTENANCE",
        description: "Rapid response repairs and issue resolution.",
        image: "/images/businesses/capability-corrective.jpg"
      }
    ],
    sectors: [
      {
        title: "RESIDENTIAL COMPLEXES",
        description: "Maintaining premium residential communities.",
        image: "/images/businesses/sector-residential.jpg"
      },
      {
        title: "COMMERCIAL ASSETS",
        description: "Ensuring optimal performance for commercial buildings.",
        image: "/images/businesses/sector-commercial.jpg"
      },
      {
        title: "HOSPITALITY",
        description: "High-standard maintenance for hotels and resorts.",
        image: "/images/businesses/sector-hospitality.jpg"
      },
      {
        title: "RETAIL FACILITIES",
        description: "Keeping retail environments safe and pristine.",
        image: "/images/businesses/sector-retail.jpg"
      }
    ]
  },
  {
    slug: "cinqo-trading",
    name: "CINQO TRADING",
    heroImage: "/images/businesses/placeholder.jpg",
    introText: "Coming soon...",
    definesUs: [],
    capabilities: [],
    sectors: []
  },
  {
    slug: "cinqo-fitout",
    name: "CINQO FITOUT",
    heroImage: "/images/businesses/placeholder.jpg",
    introText: "Coming soon...",
    definesUs: [],
    capabilities: [],
    sectors: []
  },
  {
    slug: "cinqo-flooring-coating-technologies",
    name: "CINQO FLOORING & COATING",
    heroImage: "/images/businesses/placeholder.jpg",
    introText: "Coming soon...",
    definesUs: [],
    capabilities: [],
    sectors: []
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
