import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/ProjectSlide.css";

gsap.registerPlugin(ScrollTrigger);

interface ProjectSlideProps {
  tag: string;
  title: string;
  description: string;
  techTags: string[];
  githubLink: string;
  image: string;
  imageAlt: string;
}

export default function ProjectSlide({
  tag,
  title,
  description,
  techTags,
  githubLink,
  image,
  imageAlt,
}: ProjectSlideProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const text = textRef.current;
    if (!section || !image || !text) return;

    // Fade in + move up on enter
    gsap.fromTo(
      [image, text],
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Parallax — image moves up faster than text as you scroll
    gsap.to(image, {
      y: -60,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(text, {
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="project-slide" ref={sectionRef}>
      {/* Image */}
      <div className="project-slide__image-wrapper" ref={imageRef}>
        <img src={image} alt={imageAlt} className="project-slide__image" />
      </div>

      {/* Text */}
      <div className="project-slide__text" ref={textRef}>
        <span className="project-slide__tag">{tag}</span>
        <h2 className="project-slide__title">{title}</h2>
        <p className="project-slide__desc">{description}</p>
        <div className="project-slide__tech">
          {techTags.map((t) => (
            <span key={t} className="project-slide__tech-tag">{t}</span>
          ))}
        </div>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-slide__cta"
        >
          <span className="project-slide__cta-icon">›</span>
          <span>View Project</span>
        </a>
      </div>
    </div>
  );
}