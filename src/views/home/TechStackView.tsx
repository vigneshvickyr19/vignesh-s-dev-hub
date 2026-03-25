import { TECH_STACK } from "@/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TechStackView = () => {
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
          {TECH_STACK.map((tech, i) => (
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
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = tech.color)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "hsl(var(--muted-foreground))")}
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

export default TechStackView;
