import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative pl-8 border-l-2 border-primary/30"
        >
          {/* Timeline dot */}
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary glow-box" />

          <div className="glass rounded-xl p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">Software Engineer</h3>
                <p className="text-primary font-medium">Company Name</p>
              </div>
              <span className="text-sm text-muted-foreground font-mono mt-2 md:mt-0">
                2023 — Present
              </span>
            </div>

            <ul className="space-y-3 text-muted-foreground">
              {[
                "Developed and maintained scalable React applications serving thousands of users",
                "Implemented responsive designs and optimized performance achieving 95+ Lighthouse scores",
                "Collaborated with cross-functional teams using Agile methodologies",
                "Built reusable component libraries reducing development time by 40%",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                >
                  <span className="text-primary mt-1 text-xs">▸</span>
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {["React", "TypeScript", "Next.js", "Tailwind CSS", "REST APIs"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono bg-secondary text-primary px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
