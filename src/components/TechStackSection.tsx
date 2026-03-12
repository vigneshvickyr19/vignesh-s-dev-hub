import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiTailwindcss, SiNodedotjs, SiGit, SiFirebase,
  SiVite, SiHtml5, SiCss, SiMui,
  SiAntdesign, SiJest, SiAxios,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const techs = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
  { icon: TbBrandReactNative, name: "React Native", color: "#61DAFB" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiVite, name: "Vite", color: "#646CFF" },
  { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { icon: SiCss3, name: "CSS", color: "#1572B6" },
  { icon: SiMui, name: "Material UI", color: "#007FFF" },
  { icon: SiAntdesign, name: "Ant Design", color: "#0170FE" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiGit, name: "GitHub", color: "#F05032" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { icon: SiAxios, name: "Axios", color: "#5A29E4" },
  { icon: SiJest, name: "Jest", color: "#C21325" },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.05 }}
              whileHover={{ scale: 1.15, y: -5 }}
              className="glass rounded-xl p-5 flex flex-col items-center gap-3 cursor-pointer group"
            >
              <tech.icon
                className="text-3xl transition-colors duration-300"
                style={{ color: "hsl(var(--muted-foreground))" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = tech.color)}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "hsl(var(--muted-foreground))")}
              />
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors font-mono">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
