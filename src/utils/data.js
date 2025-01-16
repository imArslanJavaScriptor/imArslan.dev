import { Users } from "lucide-react";
import Sample1 from "../images/sample1.jpg";
import Sample2 from "../images/sample2.jpg";
import Sample3 from "../images/sample3.jpg";
import Sample4 from "../images/sample4.jpg";
import HTML from "../images/skills/html.png";
import CSS from "../images/skills/css.png";
import JS from "../images/skills/javascript.png";
import React from "../images/skills/react.png";
import Next from "../images/skills/Nextjs.png";
import Tailwind from "../images/skills/tailwind.png";

// Services Section Data
const servicesData = [
  {
    id: 1,
    icon: Users,
    serviceTitle: "Web Design",
    serviceDesc:
      "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 2,
    icon: Users,
    serviceTitle: "Web Design",
    serviceDesc:
      "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 3,
    icon: Users,
    serviceTitle: "Web Design",
    serviceDesc:
      "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 4,
    icon: Users,
    serviceTitle: "Web Design",
    serviceDesc:
      "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 5,
    icon: Users,
    serviceTitle: "Web Design",
    serviceDesc:
      "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 6,
    icon: Users,
    serviceTitle: "Web Design",
    serviceDesc:
      "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur",
  },
];

// Portfolio Tabs Data
const portfolioItems = [
  {
    id: 1,
    category: "Website Design",
    image: Sample1,
    title: "Project 1",
  },
  {
    id: 2,
    category: "App Mobile Design",
    image: Sample2,
    title: "Project 2",
  },
  {
    id: 3,
    category: "App Desktop",
    image: Sample3,
    title: "Project 3",
  },
  {
    id: 4,
    category: "Branding",
    image: Sample4,
    title: "Project 4",
  },
  {
    id: 5,
    category: "Website Design",
    image: Sample1,
    title: "Project 5",
  },
  {
    id: 6,
    category: "Website Design",
    image: Sample2,
    title: "Project 5",
  },
];

const skills = [
  { name: "HTML", percentage: 90, icon: HTML },
  { name: "CSS", percentage: 80, icon: CSS },
  { name: "JavaScript", percentage: 75, icon: JS },
  { name: "React.js", percentage: 85, icon: React },
  { name: "Next.js", percentage: 70, icon: Next },
  { name: "Tailwind Css", percentage: 99, icon: Tailwind },
];

export { servicesData, portfolioItems, skills };
