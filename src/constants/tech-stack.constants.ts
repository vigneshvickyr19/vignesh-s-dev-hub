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
  SiReactquery,
  SiRedux,
  SiExpress,
  SiJsonwebtokens,
  SiChartdotjs,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";
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
  { icon: SiReactquery, name: "TanStack", color: "#FF4154" },
  { icon: SiChartdotjs, name: "Chart.js", color: "#FF6384" },
  { icon: SiRedux, name: "Redux Toolkit", color: "#764ABC" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiExpress, name: "Express", color: "#000000" },
  { icon: SiGit, name: "GitHub", color: "#F05032" },
  { icon: VscAzureDevops, name: "Azure DevOps", color: "#0078D7" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { icon: SiJsonwebtokens, name: "JWT", color: "#000000" },
  { icon: SiAxios, name: "Axios", color: "#5A29E4" },
  { icon: SiJest, name: "Jest", color: "#C21325" },
];
