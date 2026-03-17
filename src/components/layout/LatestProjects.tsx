import ProjectSlide from "./ProjectSlide";
import "./styles/LatestProjects.css";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import "../../styles/theme.css";
import {PROJECTS} from "./data/latestProjects";
gsap.registerPlugin(ScrollTrigger);


export default function LatestProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    slideRefs.current.forEach((slide, i) => {
      if (!slide) return;
      ScrollTrigger.create({
        trigger: slide,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveIndex(i),
        onEnterBack: () => setActiveIndex(i),
      });
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const scrollToSlide = (i: number) => {
    slideRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="latest-projects">

      {/* Header — outside the slides wrapper so indicator doesn't appear here */}
      <div className="latest-projects__header">
        <h2 className="latest-projects__title">Latest Projects</h2>
      </div>

      {/* Slides wrapper — indicator is sticky only within this */}
      <div className="latest-projects__slides">

        {/* Left scroll indicator */}
        <div className="latest-projects__indicator">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              className={`indicator__item ${i === activeIndex ? "indicator__item--active" : ""}`}
              onClick={() => scrollToSlide(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>

        {/* Slides */}
        {PROJECTS.map((project, i) => (
          <div key={project.id} ref={(el) => { slideRefs.current[i] = el; }}>
            <ProjectSlide
              tag={project.tag}
              title={project.title}
              description={project.description}
              techTags={project.techTags}
              githubLink={project.githubLink}
              image={project.image}
              imageAlt={project.imageAlt}
            />
          </div>
        ))}

      </div>

    </section>
  );
}