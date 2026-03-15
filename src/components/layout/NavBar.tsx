import { useState, useEffect } from "react";
import "./styles/Navbar.css";

interface NavLineDividerProps {
  leftLabel: string;
  rightLabel: string;
}

function NavLineDivider({ leftLabel, rightLabel }: NavLineDividerProps) {
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);

  return (
    <div className="nav-group">
      <a
        href={`#${leftLabel.toLowerCase()}`}
        className="nav-link"
        onMouseEnter={() => setHovered("left")}
        onMouseLeave={() => setHovered(null)}
      >
        {leftLabel}
      </a>

      <div className="divider">
        <div className={`divider-half ${hovered === "left" ? "active" : ""}`} />
        <div className={`divider-half ${hovered === "right" ? "active" : ""}`} />
      </div>

      <a
        href={`#${rightLabel.toLowerCase()}`}
        className="nav-link"
        onMouseEnter={() => setHovered("right")}
        onMouseLeave={() => setHovered(null)}
      >
        {rightLabel}
      </a>
    </div>
  );
}

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <NavLineDivider leftLabel="PROJECTS" rightLabel="SKILLS SUMMARY" />
      <div className="nav-logo">PORTFOLIO</div>
      <NavLineDivider leftLabel="ABOUT" rightLabel="CONTACT" />
    </nav>
  );
}