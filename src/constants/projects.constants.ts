export interface Project {
  title: string;
  description: string;
  techs: string[];
  /** Tailwind gradient classes for the card backdrop/overlay */
  color: string;
  liveUrl: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Qatar Living",
    description:
      "Developed scalable UI features using Next.js and TypeScript with reusable React components. Implemented internationalization (i18n) and interactive UI with Material UI and Framer Motion.",
    techs: ["Next.js", "TypeScript", "i18n", "Material UI", "Framer Motion"],
    color: "from-primary/20 to-orange-900/20",
    liveUrl: "https://www.qatarliving.com/",
    image: "/images/qatart_image.png",
  },
  {
    title: "AFS – AI Based",
    description:
      "Built a web interface that allows users to ask questions and receive AI-generated answers. Developed UI components using Ant Design and managed global state with Context API.",
    techs: ["React.js", "JavaScript", "Ant Design", "Context API"],
    color: "from-blue-500/20 to-cyan-900/20",
    liveUrl: "https://proud-beach-0f8a0190f.5.azurestaticapps.net/",
    image: "/images/afs_image.jpeg",
  },
  {
    title: "HRMS",
    description:
      "Developed HR modules for employee data, payroll, and reporting features. Implemented data visualization using Chart.js and organizational hierarchy views using D3 Org Chart.",
    techs: ["Next.js", "TypeScript", "i18n", "Chart.js", "D3 Org Chart"],
    color: "from-purple-500/20 to-pink-900/20",
    liveUrl: "https://hitayu.live/",
    image: "/images/hrms_image.jpeg",
  },
  {
    title: "MeAndYou",
    description:
      "A premium dating platform focused on authenticity and real-time discovery. Built with a focus on 100% verified profiles, instant conversations, and privacy-first architecture.",
    techs: [
      "React 18",
      "TypeScript",
      "Bun",
      "Tailwind CSS",
      "Shadcn/UI",
      "React Query",
      "Zod",
      "Framer Motion",
    ],
    color: "from-orange-500/20 to-red-900/20",
    liveUrl: "https://www.meandyou.in/",
    image: "/images/meandyou_image.png",
  },
];
