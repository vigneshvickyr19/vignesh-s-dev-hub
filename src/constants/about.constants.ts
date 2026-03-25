export interface AboutStat {
  value: string;
  label: string;
}

export const ABOUT_STATS: AboutStat[] = [
  { value: "2+", label: "Years Exp." },
  { value: "3+", label: "Projects" },
  { value: "15+", label: "Technologies" },
  { value: "2", label: "Awards" },
];

// Keep bio paragraphs as an array so future updates are a single-line change
export const ABOUT_BIO: string[] = [
  "Frontend Developer with around 2 years of experience building modern web applications using React.js and Next.js. Proficient in JavaScript and TypeScript, with a strong focus on writing clean, maintainable, and scalable code.",
  "Experienced in developing reusable components, improving application performance, and ensuring cross-device compatibility to deliver a smooth user experience. I also leverage AI development tools to speed up development, explore solutions, and improve productivity.",
];
