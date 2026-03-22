import { motion } from "framer-motion";
import "./styles/ProjectCard.css";

// ── Sub-components ────────────────────────────────────────────

function ProjectPill({ text }: { text: string }) {
  return <span className="project-pill">{text}</span>;
}

// ── Main Component ────────────────────────────────────────────

interface ProjectCardProps {
  title: string;
  descriptions: string[];
  techTags: string[];
  projectLink: string;
  images: string[];
  reverse?: boolean;
}

export default function ProjectCard({
  title,
  descriptions,
  techTags,
  projectLink,
  images,
  reverse = false,
}: ProjectCardProps) {
  return (
    <motion.div
      className={`project-card-layout ${reverse ? "project-card-layout--reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Info */}
      <motion.div
        className="project-card__info"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] as const }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <h3 className="project-card__title">{title}</h3>

        {descriptions.map((desc, i) => (
          <p key={i} className="project-card__desc">{desc}</p>
        ))}

        <div className="flex flex-wrap gap-2 my-4">
          {techTags.map((tag) => (
            <ProjectPill key={tag} text={tag} />
          ))}
        </div>

        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-card__link">
          View Project
        </a>
      </motion.div>

      {/* Images */}
      <motion.div
        className="project-card__images"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] as const }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {images.length > 0 ? (
          images.map((src, i) => (
            <img key={i} src={src} alt={`${title} screenshot ${i + 1}`} className="project-card__img" />
          ))
        ) : (
          <div className="project-card__no-images">No Images Available</div>
        )}
      </motion.div>

    </motion.div>
  );
}