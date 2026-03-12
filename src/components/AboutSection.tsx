import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <div className="glass rounded-xl p-8 md:p-12">
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              I'm a passionate Software Engineer specializing in building exceptional
              digital experiences. With a strong foundation in{" "}
              <span className="text-foreground font-medium">React</span>,{" "}
              <span className="text-foreground font-medium">Next.js</span>, and{" "}
              <span className="text-foreground font-medium">TypeScript</span>, I
              create performant, scalable, and user-centric web applications.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I thrive on turning complex problems into elegant solutions. Whether
              it's crafting pixel-perfect UIs, optimizing application performance,
              or architecting robust frontend systems — I bring dedication and
              attention to detail to every project I work on.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {[
                { value: "2+", label: "Years Exp." },
                { value: "10+", label: "Projects" },
                { value: "5+", label: "Technologies" },
                { value: "∞", label: "Curiosity" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
