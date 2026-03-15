import "./styles/Hero.css";

export default function HeroFallback({img}: {img: string}) {
  return (
    <div className="hero-fallback">

      {/* Latest Project label */}
      <p className="hero-fallback__label">Latest Project</p>

      {/* Project Card */}
      <a
        href="https://github.com/IsraaHmd/FashionVerse-SeniorProject"
        target="_blank"
        rel="noopener noreferrer"
        className="hero-fallback__card"
      >
        <img
          src={img}
          alt="FashionVerse Project"
          className="hero-fallback__card-img"
        />
        <div className="hero-fallback__card-body">
          <h3 className="hero-fallback__card-title">
            E-Commerce and Community Platform
          </h3>
          <p className="hero-fallback__card-desc">Full-stack web application</p>
          <div className="hero-fallback__tags">
            {["Python", "Django", "MySQL", "Bootstrap", "HTML/CSS", "JavaScript"].map(
              (tag) => (
                <span key={tag} className="hero-fallback__tag">
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </a>

    </div>
  );
}