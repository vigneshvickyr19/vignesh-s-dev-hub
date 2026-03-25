import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { CODE_LINES, HERO_CONTENT } from "@/constants";
import { CodeHighlight } from "@/components/shared";

// Hero showing landing content and a terminal-style code card
const HeroView = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] animate-pulse-glow" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm mb-4 tracking-wider"
          >
            {HERO_CONTENT.greeting}
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            {HERO_CONTENT.name} <span className="text-gradient">{HERO_CONTENT.nameHighlight}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-lg">
            {HERO_CONTENT.titlePrefix}{" "}
            <span className="text-foreground font-medium">{HERO_CONTENT.titleTech1}</span> &{" "}
            <span className="text-foreground font-medium">{HERO_CONTENT.titleTech2}</span> Developer
          </p>

          <p className="text-sm text-muted-foreground mb-8 max-w-lg leading-relaxed">
            {HERO_CONTENT.subtitle}
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-sm glow-box hover:brightness-110 transition-all"
            >
              View More
              <ArrowDown size={16} />
            </motion.a>

            <motion.a
              href={HERO_CONTENT.resumePath}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 border border-primary/50 text-primary px-8 py-3 rounded-lg font-semibold text-sm hover:bg-primary/10 transition-all"
            >
              Resume
              <Download size={16} />
            </motion.a>
          </div>
        </motion.div>

        {/* Right - Code UI */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 lg:mt-0"
        >
          <div className="glass rounded-xl p-6 font-mono text-sm relative">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-muted-foreground text-xs">{HERO_CONTENT.codeFileName}</span>
            </div>

            {CODE_LINES.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="flex"
              >
                <span className="text-muted-foreground/40 w-6 text-right mr-4 select-none text-xs leading-7">
                  {i + 1}
                </span>
                <span
                  className="leading-7"
                  style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                >
                  <CodeHighlight text={line.text} />
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroView;
