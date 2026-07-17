import type { NewsItem } from "@/types";

/**
 * CINQO News — populate/replace with real CMS or API data later.
 * The News section maps directly over this array; add/remove
 * items here and the UI updates automatically.
 */
export const newsData: NewsItem[] = [
  // ==========================================================
  // These below 4 news will be displayed on other pages,
  // So Keep them 4 only, and replace the content frequently
  // ==========================================================
  {
    id: "news-1",
    tag: "News",
    title: "Cinqo Holding Initiates Strategic Group Restructuring",
    date: "May 19, 2026",
    image: "/images/news/news-1.jpg",
    href: "/news/strategic-group-restructuring",
  },
  {
    id: "news-2",
    tag: "News",
    title: "Cinqo Holding Initiates Strategic Group Restructuring",
    date: "May 19, 2026",
    image: "/images/news/news-1.jpg",
    href: "/news/strategic-group-restructuring-2",
  },
  {
    id: "news-3",
    tag: "News",
    title: "Cinqo Holding Initiates Strategic Group Restructuring",
    date: "May 19, 2026",
    image: "/images/news/news-1.jpg",
    href: "/news/strategic-group-restructuring-3",
  },
  {
    id: "news-4",
    tag: "News",
    title: "Cinqo Holding Initiates Strategic Group Restructuring",
    date: "May 19, 2026",
    image: "/images/news/news-1.jpg",
    href: "/news/strategic-group-restructuring-4",
  },

  // ==============================================
  // NEWS PAGE DYNAMIC CONTENT (Add new news here)
  // ==============================================
  {
    id: "news-page-1",
    tag: "News",
    title: "Cinqo Holding Initiates Strategic Group Restructuring",
    date: "May 19, 2026",
    image: "/images/news/news-1.jpg",
    href: "/news/strategic-group-restructuring-page-1",
    detailedHeadline: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    content: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    ]
  },
  {
    id: "news-page-2",
    tag: "News",
    title: "Cinqo Completes Major Infrastructure Project Ahead of Schedule",
    date: "June 12, 2026",
    image: "/images/news/news-1.jpg",
    href: "/news/cinqo-completes-major-infrastructure-project",
    detailedHeadline: "Paving the way for future developments with state-of-the-art engineering.",
    content: [
      "Cinqo Holding is proud to announce the early completion of our latest infrastructure megaproject. This achievement underscores our commitment to excellence and efficiency in all our endeavors.",
      "The project utilized advanced technologies and sustainable practices, setting a new benchmark for the industry. Our dedicated team worked tirelessly to ensure every aspect met the highest quality standards.",
      "Looking ahead, we are excited to apply the lessons learned and innovations developed during this project to our upcoming ventures, continuing to drive growth and development in the region."
    ]
  },
  {
    id: "news-page-3",
    tag: "News",
    title: "New Sustainable Energy Initiative Launched",
    date: "July 05, 2026",
    image: "/images/news/news-1.jpg",
    href: "/news/new-sustainable-energy-initiative-launched",
    detailedHeadline: "Committing to a greener future with robust investments in renewable resources.",
    content: [
      "In a bold move towards sustainability, Cinqo Holding has launched a comprehensive new initiative focused on renewable energy sources. This program aims to significantly reduce our carbon footprint over the next decade.",
      "By investing heavily in solar and wind technologies, we are not only protecting the environment but also ensuring long-term operational efficiency and cost savings.",
      "We invite our partners and stakeholders to join us on this vital journey towards a sustainable future."
    ]
  },
  {
    id: "news-page-4",
    tag: "News",
    title: "Global Expansion Strategy Announced for Q4",
    date: "August 22, 2026",
    image: "/images/news/news-1.jpg",
    href: "/news/global-expansion-strategy",
    detailedHeadline: "Taking our proven operational excellence to new international markets.",
    content: [
      "Cinqo Holding has officially unveiled its aggressive global expansion strategy, targeting key emerging markets across Asia and Africa in the upcoming fourth quarter.",
      "This strategic move is designed to leverage our extensive expertise in construction and technical distribution on a much larger scale, driving unprecedented growth for the group.",
      "Detailed plans and initial project announcements will be shared with the public in the coming weeks."
    ]
  },
  {
    id: "news-page-5",
    tag: "News",
    title: "Annual Stakeholder Meeting Highlights Record Growth",
    date: "September 10, 2026",
    image: "/images/news/news-1.jpg",
    href: "/news/annual-stakeholder-meeting",
    detailedHeadline: "A look back at a year of unprecedented success and strategic milestones.",
    content: [
      "During the annual stakeholder meeting, Cinqo Holding leadership presented a comprehensive review of the past fiscal year, highlighting record-breaking financial performance and successful project deliveries.",
      "The board expressed deep gratitude to all employees and partners whose dedication made these achievements possible. The meeting concluded with a highly optimistic outlook for the coming years.",
      "Full reports and transcripts from the meeting will be made available to investors shortly."
    ]
  },
  {
    id: "news-page-6",
    tag: "News",
    title: "Innovation Hub Opens in Central Business District",
    date: "October 01, 2026",
    image: "/images/news/news-1.jpg",
    href: "/news/innovation-hub-opens",
    detailedHeadline: "Fostering creativity and technological advancement in the heart of the city.",
    content: [
      "We are thrilled to announce the opening of the Cinqo Innovation Hub. This state-of-the-art facility is dedicated to research, development, and fostering the next generation of industry leaders.",
      "Equipped with the latest technology and collaborative spaces, the Hub will serve as a central nexus for our engineers, designers, and strategic thinkers to collaborate on groundbreaking new solutions.",
      "The inauguration ceremony was attended by key industry figures and local government officials, marking a new chapter in our commitment to continuous improvement."
    ]
  }
];
