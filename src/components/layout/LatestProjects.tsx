import ProjectSlide from "./ProjectSlide";
import "./styles/LatestProjects.css";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import "../../styles/theme.css";
import { PROJECTS } from "./data/latestProjects";

gsap.registerPlugin(ScrollTrigger);

export default function LatestProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  // ── Mobile/Tablet: simple scroll indicator ────────────────────
  useEffect(() => {
    if (window.innerWidth >= 1024) return;
    const ctx = gsap.context(() => {
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
    });
    return () => ctx.revert();
  }, []);

  const scrollToSlide = (i: number) => {
    slideRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  // ── Desktop: pinned scroll animation ─────────────────────────
  useEffect(() => {
    if (window.innerWidth < 1024) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const total = PROJECTS.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${window.innerHeight * (total - 1)}`,
          pin: true,
          scrub: 0.8,
          onUpdate: (self) => {
            const index = Math.min(Math.floor(self.progress * total), total - 1);
            setActiveIndex(index);
          },
        },
      });

      for (let i = 0; i < total - 1; i++) {
        const segStart = i / (total - 1);
        const segEnd = (i + 1) / (total - 1);
        const segLen = segEnd - segStart;
        const phase1End = segStart + segLen * 0.4;
        const phase3Start = segStart + segLen * 0.6;

        // ── Image: crossfade ──
        tl.to(
          imageRefs.current[i],
          { opacity: 0, duration: segLen * 0.4, ease: "power2.inOut" },
          segStart
        );
        tl.fromTo(
          imageRefs.current[i + 1],
          { opacity: 0 },
          { opacity: 1, duration: segLen * 0.4, ease: "power2.inOut" },
          phase1End
        );

        // ── Text Phase 1: old goes up and fades out ──
        tl.to(
          textRefs.current[i],
          { y: -60, opacity: 0, duration: segLen * 0.4, ease: "power2.in" },
          segStart
        );

        // ── Text Phase 3: new comes from right, fades in ──
        tl.fromTo(
          textRefs.current[i + 1],
          { x: 80, opacity: 0 },
          { x: 0, opacity: 1, duration: segLen * 0.4, ease: "power2.out" },
          phase3Start
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="latest-projects" ref={sectionRef}>

      {/* Header */}
      <div className="latest-projects__header">
        <h2 className="latest-projects__title">Latest Projects</h2>
      </div>

      {/* ── Desktop pinned layout ── */}
      <div className="latest-projects__desktop">

        <div className="latest-projects__indicator">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              className={`indicator__item ${i === activeIndex ? "indicator__item--active" : ""}`}
              onClick={() => {
                if (window.innerWidth >= 1024 && sectionRef.current) {
                  const sectionTop =
                    sectionRef.current.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({
                    top: sectionTop + i * window.innerHeight,
                    behavior: "smooth",
                  });
                }
              }}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>

        {/* Images stacked */}
        <div className="latest-projects__images">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => { imageRefs.current[i] = el; }}
              className="latest-projects__image-wrapper"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                className="latest-projects__image"
              />
            </div>
          ))}
        </div>

        {/* Texts stacked */}
        <div className="latest-projects__texts">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => { textRefs.current[i] = el; }}
              className="latest-projects__text"
              style={{
                opacity: i === 0 ? 1 : 0,
                transform: i === 0 ? "translate(0px, 0px)" : "translate(80px, 0px)",
              }}
            >
              <span className="project-tag">{project.tag}</span>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.techTags.map((t) => (
                  <span key={t} className="project-tech-tag">{t}</span>
                ))}
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-cta"
              >
                <span className="project-cta__icon">›</span>
                <span>View Project</span>
              </a>
            </div>
          ))}
        </div>

      </div>

      {/* ── Mobile/Tablet: original scroll layout ── */}
      <div className="latest-projects__slides">
        <div className="latest-projects__indicator latest-projects__indicator--mobile">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              className={`indicator__item ${i === activeIndex ? "indicator__item--active" : ""}`}
              onClick={() => scrollToSlide(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
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