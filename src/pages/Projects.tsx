import { motion } from "framer-motion";
import NavBar from "../components/layout/NavBar";
import MobileNavBar from "../components/layout/MobileNavBar";
import ProjectCard from "../components/layout/ProjectCard";
import "./ProjectsPage.css";
import { PROJECTS } from "../components/layout/data/projects";
import { useEffect } from "react";
// ── Project data ──────────────────────────────────────────────
// Replace image imports with your actual assets

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="projects-page bg-theme text-theme">
      {/* Navbar */}
      <div className="hidden lg:block"><NavBar /></div>
      <div className="lg:hidden"><MobileNavBar /></div>

      <div className="projects-page__inner">
        {/* Header */}
        <motion.div
          className="projects-page__header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] as const, delay: 0.3 }}
        >
          <h1 className="projects-page__title">My Projects</h1>
          <div className="projects-page__underline" />
        </motion.div>

        {/* Projects */}
        <div className="projects-page__list">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              descriptions={project.descriptions}
              techTags={project.techTags}
              projectLink={project.projectLink}
              images={project.images}
              reverse={i % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}