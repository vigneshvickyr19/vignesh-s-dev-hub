import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

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
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary glow-box" />

          <div className="glass rounded-xl p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">Software Developer</h3>
                <p className="text-primary font-medium">Kryptos Info System Pvt. Ltd</p>
              </div>
              <span className="text-sm text-muted-foreground font-mono mt-2 md:mt-0">
                03/2024 — Present · Chennai
              </span>
            </div>

            <ul className="space-y-3 text-muted-foreground">
              {[
                "Developed modern web applications using React.js, Next.js, JavaScript, and TypeScript, focusing on clean architecture and reusable components.",
                "Built an AI-enabled web application that allows users to ask questions and receive intelligent responses through an integrated AI model.",
                "Contributed to the development of an HRMS platform actively used by client organizations, shaping features from concept to delivery.",
                "Improved development efficiency by leveraging AI development tools to accelerate implementation, explore solutions, and optimize workflows.",
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
              {["React", "Next.js", "TypeScript", "JavaScript", "Material UI", "Ant Design", "Context API"].map(
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

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Award size={20} className="text-primary" />
            Awards
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Rising Star",
                date: "Apr 2024",
                desc: "Awarded for outstanding performance, quick learning, and significant contributions to frontend development projects.",
              },
              {
                title: "Pinnacle Performance",
                date: "Oct 2024",
                desc: "Awarded for outstanding contribution to the AFS AI-based application, delivering high-quality frontend features.",
              },
            ].map((award, i) => (
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
                <p className="text-xs text-primary font-mono mt-2">Kryptos Infosys</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold mb-6">Education</h3>
          <div className="glass rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="font-bold text-foreground">Bachelor's Degree, BCA</h4>
                <p className="text-sm text-muted-foreground">Thiruvalluvar University, Vellore · Tirupattur</p>
              </div>
              <span className="text-sm text-muted-foreground font-mono mt-2 md:mt-0">2020 — 2023</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
