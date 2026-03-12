import { motion } from "framer-motion";

const codeLines = [
  { indent: 0, text: 'const Developer = () => {' },
  { indent: 1, text: 'const [passion, setPassion] = useState("∞");' },
  { indent: 1, text: 'const skills = ["React", "Next.js", "TypeScript"];' },
  { indent: 1, text: '' },
  { indent: 1, text: 'return (' },
  { indent: 2, text: '<Portfolio>' },
  { indent: 3, text: '<Code quality="production" />' },
  { indent: 3, text: '<Innovation level={passion} />' },
  { indent: 2, text: '</Portfolio>' },
  { indent: 1, text: ');' },
  { indent: 0, text: '};' },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] animate-pulse-glow" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left */}
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
            {"// Hello World, I'm"}
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            Vignesh <span className="text-gradient">R</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg">
            Software Engineer –{" "}
            <span className="text-foreground font-medium">React</span> &{" "}
            <span className="text-foreground font-medium">Next.js</span> Developer
          </p>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-sm glow-box hover:brightness-110 transition-all"
          >
            View More
            <span className="text-lg">↓</span>
          </motion.a>
        </motion.div>

        {/* Right - Code UI */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="glass rounded-xl p-6 font-mono text-sm relative">
            {/* Window dots */}
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-muted-foreground text-xs">Developer.tsx</span>
            </div>

            {codeLines.map((line, i) => (
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

const CodeHighlight = ({ text }: { text: string }) => {
  if (!text) return <br />;

  const highlighted = text
    .replace(/(const|return|useState)/g, '<kw>$1</kw>')
    .replace(/(".*?")/g, '<str>$1</str>')
    .replace(/(<\/?[A-Z]\w*>?)/g, '<tag>$1</tag>')
    .replace(/(\/\/.*)/g, '<cmt>$1</cmt>');

  const parts = highlighted.split(/(<kw>.*?<\/kw>|<str>.*?<\/str>|<tag>.*?<\/tag>|<cmt>.*?<\/cmt>)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('<kw>'))
          return <span key={i} className="text-purple-400">{part.replace(/<\/?kw>/g, '')}</span>;
        if (part.startsWith('<str>'))
          return <span key={i} className="text-green-400">{part.replace(/<\/?str>/g, '')}</span>;
        if (part.startsWith('<tag>'))
          return <span key={i} className="text-primary">{part.replace(/<\/?tag>/g, '')}</span>;
        if (part.startsWith('<cmt>'))
          return <span key={i} className="text-muted-foreground">{part.replace(/<\/?cmt>/g, '')}</span>;
        return <span key={i} className="text-foreground/80">{part}</span>;
      })}
    </>
  );
};

export default HeroSection;
