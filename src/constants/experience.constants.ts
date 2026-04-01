export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  techStack: string[];
}

export interface Award {
  title: string;
  date: string;
  desc: string;
  issuer: string;
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Software Developer",
    company: "Kryptos Info System Pvt. Ltd",
    period: "03/2024 — Present",
    location: "Chennai",
    highlights: [
      "Developed scalable web applications using React.js and Next.js with reusable component architecture.",
      "Implemented TanStack React Query for server state management, enabling efficient data fetching, caching, and automatic background updates.",
      "Improved application performance using lazy loading, memoization, and optimized API handling.",
      "Built an AI-enabled application integrating external APIs for real-time user interaction.",
      "Designed modular frontend architecture ensuring scalability and maintainability.",
      "Integrated REST APIs efficiently using Axios and improved data-fetching strategies.",
      "Collaborated with cross-functional teams to deliver production-ready features.",
      "Contributed to HRMS platform used by multiple clients, improving workflow efficiency.",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Material UI",
      "Ant Design",
      "Node.js",
    ],
  },
];

export const AWARDS: Award[] = [
  {
    title: "Pinnacle Client Performance",
    date: "Jan 2026",
    desc: "Recognized for outstanding contribution to Qatar Project and client delivery excellence.",
    issuer: "Kryptos Infosys",
  },
  {
    title: "Rising Star",
    date: "Apr 2024",
    desc: "Awarded for outstanding performance, quick learning, and significant contributions to frontend development projects using React.js and Next.js.",
    issuer: "Kryptos Infosys",
  },
  {
    title: "Pinnacle Performance",
    date: "Oct 2024",
    desc: "Awarded for outstanding contribution to the AFS AI-based application, delivering high-quality frontend features and ensuring a smooth user experience.",
    issuer: "Kryptos Infosys",
  },
];
