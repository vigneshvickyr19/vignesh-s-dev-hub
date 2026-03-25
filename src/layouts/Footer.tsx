const Footer = () => (
  <footer className="border-t border-border py-8 px-6 text-center">
    <p className="text-sm text-muted-foreground">
      © {new Date().getFullYear()} <span className="text-primary font-mono">Vignesh R</span>. Built with React & Tailwind CSS.
    </p>
  </footer>
);

export default Footer;
