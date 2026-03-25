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
      "Developed modern web applications using React.js, Next.js, JavaScript, and TypeScript, focusing on clean architecture and reusable components.",
      "Built an AI-enabled web application that allows users to ask questions and receive intelligent responses through an integrated AI model.",
      "Contributed to the development of an HRMS platform actively used by client organizations, shaping features from concept to delivery.",
      "Improved development efficiency by leveraging AI development tools to accelerate implementation, explore solutions, and optimize workflows.",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Material UI",
      "Ant Design",
      "Context API",
    ],
  },
];

export const AWARDS: Award[] = [
  {
    title: "Rising Star",
    date: "Apr 2024",
    desc: "Awarded for outstanding performance, quick learning, and significant contributions to frontend development projects.",
    issuer: "Kryptos Infosys",
  },
  {
    title: "Pinnacle Performance",
    date: "Oct 2024",
    desc: "Awarded for outstanding contribution to the AFS AI-based application, delivering high-quality frontend features.",
    issuer: "Kryptos Infosys",
  },
];
