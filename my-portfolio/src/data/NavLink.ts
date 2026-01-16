// src/data/navLinks.ts
export interface NavLink {
  id: string;     // section id
  label: string;  // displayed text
  href?: string;  // optional (can be generated dynamically)
}

export const navLinks: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
