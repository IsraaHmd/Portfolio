import { useState, useEffect } from "react";
import "./styles/NavBar.css";

interface NavLineDividerProps {
  leftLabel: string;
  rightLabel: string;
  leftLink?: string;
  rightLink?: string;
}

function NavLineDivider({ leftLabel, rightLabel, leftLink, rightLink }: NavLineDividerProps) {
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);

  return (
    <div className="nav-group">
      <a
        href={leftLink ?? `#${leftLabel.toLowerCase()}`}
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
        href={rightLink ?? `#${rightLabel.toLowerCase()}`}
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
      <NavLineDivider
        leftLabel="PROJECTS"
        leftLink="/projects"
        rightLabel="SKILLS SUMMARY"
        rightLink="/skills"
      />
      <div className="nav-logo"><a href="/">PORTFOLIO</a></div>
      <NavLineDivider
        leftLabel="EXPERIENCE"
        leftLink="/experience"
        rightLabel="CONTACT"
        rightLink="/contact"
      />
    </nav>
  );
}