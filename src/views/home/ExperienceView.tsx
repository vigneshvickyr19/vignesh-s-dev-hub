import { EXPERIENCE, AWARDS } from "@/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award as AwardIcon } from "lucide-react";

const ExperienceView = () => {
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

        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={exp.company + index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative pl-8 border-l-2 border-primary/30 mb-12 last:mb-0"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary glow-box" />

            <div className="glass rounded-xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground font-mono mt-2 md:mt-0">
                  {exp.period} · {exp.location}
                </span>
              </div>

              <ul className="space-y-3 text-muted-foreground">
                {exp.highlights.map((item, i) => (
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
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono bg-secondary text-primary px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <AwardIcon size={20} className="text-primary" />
            Awards
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {AWARDS.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-foreground">{award.title}</h4>
                  <span className="text-xs font-mono text-muted-foreground">{award.date}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{award.desc}</p>
                <p className="text-xs text-primary font-mono mt-2">{award.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceView;
