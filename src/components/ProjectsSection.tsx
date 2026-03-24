import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Qatar Living",
    description: "Developed scalable UI features using Next.js and TypeScript with reusable React components. Implemented internationalization (i18n) and interactive UI with Material UI and Framer Motion.",
    techs: ["Next.js", "TypeScript", "i18n", "Material UI", "Framer Motion"],
    color: "from-primary/20 to-orange-900/20",
    liveUrl: "https://www.qatarliving.com/",
    icon: "🌍",
  },
  {
    title: "AFS – AI Based",
    description: "Built a web interface that allows users to ask questions and receive AI-generated answers. Developed UI components using Ant Design and managed global state with Context API.",
    techs: ["React.js", "JavaScript", "Ant Design", "Context API"],
    color: "from-blue-500/20 to-cyan-900/20",
    liveUrl: "https://proud-beach-0f8a0190f.5.azurestaticapps.net/",
    icon: "🤖",
  },
  {
    title: "HRMS",
    description: "Developed HR modules for employee data, payroll, and reporting features. Implemented data visualization using Chart.js and organizational hierarchy views using D3 Org Chart.",
    techs: ["Next.js", "TypeScript", "i18n", "Chart.js", "D3 Org Chart"],
    color: "from-purple-500/20 to-pink-900/20",
    liveUrl: "https://hitayu.live/",
    icon: "📊",
  },
];

const ProjectCard = ({ project, i, inView }: { project: typeof projects[0]; i: number; inView: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      key={project.title}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: 0.2 + i * 0.18, duration: 0.6, type: "spring", stiffness: 100 }}
      whileHover={{ y: -12, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="glass rounded-xl overflow-hidden group cursor-pointer block relative"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ boxShadow: "0 0 30px hsl(24 100% 55% / 0.15), 0 0 60px hsl(24 100% 55% / 0.08)" }}
      />

      {/* Top gradient area */}
      <div className={`h-44 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={isHovered ? { scale: 1.1, rotate: 2 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--primary) / 0.2) 0%, transparent 40%)",
          }}
        />

        {/* Icon */}
        <motion.span
          className="text-5xl relative z-10"
          animate={isHovered ? { scale: 1.2, rotate: [0, -5, 5, 0] } : { scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {project.icon}
        </motion.span>

        {/* Visit arrow */}
        <motion.div
          className="absolute top-4 right-4 bg-primary/20 backdrop-blur-sm rounded-full p-2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.25 }}
        >
          <ArrowUpRight size={16} className="text-primary" />
        </motion.div>
      </div>

      <div className="p-6 relative">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <motion.div
            animate={isHovered ? { x: 3, y: -3 } : { x: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </motion.div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech tags with staggered animation */}
        <div className="flex flex-wrap gap-2">
          {project.techs.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + i * 0.18 + techIndex * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.1, backgroundColor: "hsl(24 100% 55% / 0.2)" }}
              className="text-xs font-mono bg-secondary text-primary px-2.5 py-1 rounded-md transition-colors duration-200"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Bottom border animation */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-orange-300"
          initial={{ width: "0%" }}
          animate={isHovered ? { width: "100%" } : { width: "0%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>
    </motion.a>
  );
};

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
            <ProjectCard key={project.title} project={project} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
