import "./styles/LatestProjectsMobile.css";
import { PROJECTS } from "./data/latestProjects";
import ProjectSlide from "./ProjectSlide";

export default function LatestProjectsMobile() {
  return (
    <section className="latest-projects-mobile">
      <div className="latest-projects-mobile__header">
        <h2 className="latest-projects-mobile__title">Latest Projects</h2>
      </div>
      {PROJECTS.map((project) => (
        <ProjectSlide
          key={project.id}
          tag={project.tag}
          title={project.title}
          description={project.description}
          techTags={project.techTags}
          githubLink={project.githubLink}
          image={project.image}
          imageAlt={project.imageAlt}
        />
      ))}
    </section>
  );
}