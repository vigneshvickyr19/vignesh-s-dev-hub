import { PROJECTS } from "@/constants";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";

// Project card with parallax hover and staggered entrance
const ProjectCard = ({ project, i, inView }: { project: typeof PROJECTS[0]; i: number; inView: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      key={project.title}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.21, 0.45, 0.32, 0.9] }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="glass rounded-xl overflow-hidden group cursor-pointer block relative h-full flex flex-col"
    >
      {/* Glow Backdrop */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 pointer-events-none transition-opacity duration-500"
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{ boxShadow: "0 0 40px hsl(var(--primary) / 0.15)" }}
      />

      {/* Image Header with Parallax Zoom */}
      <div className="h-52 w-full overflow-hidden relative">
        <motion.div
          animate={isHovered ? { scale: 1.15, y: -10 } : { scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" 
          />
        </motion.div>
        
        {/* Semi-transparent overlay for contrast */}
        <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

        <motion.div
          className="absolute top-4 right-4 bg-primary/20 backdrop-blur-md rounded-full p-2.5 z-20 border border-white/10"
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          animate={isHovered ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -45 }}
          transition={{ duration: 0.35, ease: "backOut" }}
        >
          <ArrowUpRight size={18} className="text-primary" />
        </motion.div>
      </div>

      <div className="p-6 relative flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <ExternalLink size={16} className="text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>

        <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="mt-auto pt-4 border-t border-border/40">
          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 + techIndex * 0.05 }}
                className="text-[10px] uppercase tracking-wider font-mono bg-secondary/60 text-primary border border-primary/20 px-2 py-0.5 rounded-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Animated Accent Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[3px] bg-primary"
          initial={{ width: "0%" }}
          animate={isHovered ? { width: "100%" } : { width: "0%" }}
          transition={{ duration: 0.6, ease: "circIn" }}
        />
      </div>
    </motion.a>
  );
};

const ProjectsView = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-mono mb-2 uppercase tracking-widest">Selected Works</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsView;
