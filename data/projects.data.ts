import type { Project } from "@/types";

// projects.data.ts



export const projectsData: Project[] = [
  {
    id: "project-1",
    name: "Bahrain Residential Haven",
    location: "Bahrain",
    category: "Residential",
    heroImage: "/images/projects/1.jpg",
    description: "A portfolio of projects that demonstrates our commitment to residential excellence, innovation, and successful delivery across modern estates.",
    gallery: [
      { src: "/images/projects/2.jpg", alt: "Project Name — view 1" },
      { src: "/images/projects/3.jpg", alt: "Project Name — view 2" },
      { src: "/images/projects/4.jpg", alt: "Project Name — view 3" },
    ],
  },
  {
    id: "project-2",
    name: "Commercial Hub Bahrain",
    location: "Bahrain",
    category: "Commercial",
    heroImage: "/images/projects/4.jpg",
    description: "An elegant showcase of state-of-the-art commercial architecture engineered for seamless operation, performance, and elite enterprise standards.",
    gallery: [
      { src: "/images/projects/1.jpg", alt: "Project Name — view 1" },
      { src: "/images/projects/2.jpg", alt: "Project Name — view 2" },
      { src: "/images/projects/3.jpg", alt: "Project Name — view 3" },
    ],
  },
  {
    id: "project-3",
    name: "Commercial Hub Bahrain",
    location: "Bahrain",
    category: "Commercial",
    heroImage: "/images/projects/3.jpg",
    description: "An elegant showcase of state-of-the-art commercial architecture engineered for seamless operation, performance, and elite enterprise standards.",
    gallery: [
      { src: "/images/projects/4.jpg", alt: "Project Name — view 1" },
      { src: "/images/projects/1.jpg", alt: "Project Name — view 2" },
      { src: "/images/projects/2.jpg", alt: "Project Name — view 3" },
    ],
  },
  {
    id: "project-3",
    name: "Commercial Hub Bahrain",
    location: "Bahrain",
    category: "Commercial",
    heroImage: "/images/projects/2.jpg",
    description: "An elegant showcase of state-of-the-art commercial architecture engineered for seamless operation, performance, and elite enterprise standards.",
    gallery: [
      { src: "/images/projects/3.jpg", alt: "Project Name — view 1" },
      { src: "/images/projects/4.jpg", alt: "Project Name — view 2" },
      { src: "/images/projects/1.jpg", alt: "Project Name — view 3" },
    ],
  },
];