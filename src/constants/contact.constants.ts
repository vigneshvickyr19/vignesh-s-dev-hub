import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
  subtitle: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/vigneshvickyr19",
    subtitle: "github.com/vigneshvickyr19",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/vignesh",
    subtitle: "linkedin.com/in/vignesh",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:vigneshr0819@gmail.com",
    subtitle: "vigneshr0819@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    href: "#",
    subtitle: "Chennai, India",
  },
];
