import type { ReactNode } from "react";

export interface NewsItem {
  id: string;
  tag: string;
  title: string;
  date: string;
  image: string;
  href: string;
}


export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  name: string;
  location: string;
  category: string;
  heroImage: string;
  description: string; // Added to support changing descriptions dynamically
  heroVideo?: string;
  gallery: GalleryImage[];
}
export interface CompanyCard {
  id: string;
  name: string;
  logo: string;
  bgImage: string;
  description: string;
  href: string;
}

export interface PartnerLogo {
  id: string;
  name: string;
  logo: string;
}

export interface GuidingPrinciple {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  headline1: ReactNode;
  headline2: ReactNode;
  subtitle?: string;
}

export interface HeroSlideV2 {
  id: string;
  image: string;
  alt: string;
  headline1: ReactNode;
  subtitle?: string;
}