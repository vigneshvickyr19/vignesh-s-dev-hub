import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiFirebase,
  SiVite,
  SiHtml5,
  SiCss,
  SiMui,
  SiAntdesign,
  SiJest,
  SiAxios,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import type { IconType } from "react-icons";

export interface Tech {
  icon: IconType;
  name: string;
  /** Hex or CSS color shown on icon hover */
  color: string;
}

export const TECH_STACK: Tech[] = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
  { icon: TbBrandReactNative, name: "React Native", color: "#61DAFB" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiVite, name: "Vite", color: "#646CFF" },
  { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { icon: SiCss, name: "CSS", color: "#1572B6" },
  { icon: SiMui, name: "Material UI", color: "#007FFF" },
  { icon: SiAntdesign, name: "Ant Design", color: "#0170FE" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiGit, name: "GitHub", color: "#F05032" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { icon: SiAxios, name: "Axios", color: "#5A29E4" },
  { icon: SiJest, name: "Jest", color: "#C21325" },
];
