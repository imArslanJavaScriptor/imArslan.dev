import ShopLive from "../assets/ShopLiveThumbnail.png";
import AdologyAi from "../assets/AdologyAi.png";
import CypexSoft from "../assets/CypexSoft.png";

export const allProjects = [
  {
    id: 1,
    title: "Adology AI – Marketing Analytics SaaS Platform",
    description:
      "A high-performance SaaS platform for marketing experts, utilizing complex MongoDB aggregation pipelines to process high-volume campaign data and deliver actionable insights with minimal latency.",
    skills: ["Next.js", "Node.js", "MongoDB", "TypeScript", "Stripe"],
    image: AdologyAi,
    link: "https://ecommerce-app.com",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    id: 2,
    title: "ShopLive – Full-Stack E-Commerce & VoIP Platform",
    description:
      "A feature-rich e-commerce application built on the PERN stack. Features real-time customer support integrated via WebRTC and SIP-based communication protocols, optimized for seamless interaction and secure transactions.",
    skills: [
      "React.js",
      "PostgreSQL",
      "Node.js",
      "Express.js",
      "WebRTC",
      "Docker",
    ],
    image: ShopLive,
    link: "https://shoplive-tik6.onrender.com/",
    gradient: "from-emerald-500 to-teal-700",
  },
  {
    id: 3,
    title: "CypexSoft – Corporate Digital Infrastructure",
    description:
      "Engineered the official company web infrastructure, focusing on modular architecture, server-side performance optimization, and responsive design to ensure high availability and accessibility.",
    skills: ["Next.js", "TypeScript", "Nginx", "Linux CLI", "Tailwind CSS"],
    image: CypexSoft,
    link: "https://www.cypexsoft.com/our-development-process",
    gradient: "from-blue-500 to-cyan-600",
  },
];