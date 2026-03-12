import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Qatar",
    description: "Developed scalable UI features using Next.js and TypeScript with reusable React components. Implemented internationalization (i18n) and interactive UI with Material UI and Framer Motion.",
    techs: ["Next.js", "TypeScript", "i18n", "Material UI", "Framer Motion"],
    color: "from-primary/20 to-orange-900/20",
  },
  {
    title: "AFS – AI Based",
    description: "Built a web interface that allows users to ask questions and receive AI-generated answers. Developed UI components using Ant Design and managed global state with Context API.",
    techs: ["React.js", "JavaScript", "Ant Design", "Context API"],
    color: "from-blue-500/20 to-cyan-900/20",
  },
  {
    title: "HRMS",
    description: "Developed HR modules for employee data, payroll, and reporting features. Implemented data visualization using Chart.js and organizational hierarchy views using D3 Org Chart.",
    techs: ["Next.js", "TypeScript", "i18n", "Chart.js", "D3 Org Chart"],
    color: "from-purple-500/20 to-pink-900/20",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="glass rounded-xl overflow-hidden group"
            >
              <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <span className="font-mono text-4xl text-primary/60 group-hover:text-primary transition-colors">
                  {"{ }"}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                  <div className="flex gap-2 text-muted-foreground">
                    <Github size={16} className="hover:text-primary transition-colors cursor-pointer" />
                    <ExternalLink size={16} className="hover:text-primary transition-colors cursor-pointer" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
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
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
