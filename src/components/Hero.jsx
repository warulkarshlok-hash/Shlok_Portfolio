import siteConfig from "../config/siteConfig";

export default function Hero() {
  const { person, intro, links } = siteConfig;
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow">{person.location}</p>
          <h1 id="hero-title" className="hero__title">
            Hi, I’m <em>{person.name}.</em>
          </h1>
          <p className="hero__role">
            {person.role}
            <span className="hero__role-sub">{person.headline}</span>
          </p>
          <p className="hero__intro">{intro}</p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#work">
              View My Projects
            </a>
            <a className="btn btn--outline" href="#contact">
              Get In Touch
            </a>
          </div>

          <p className="hero__links">
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <span aria-hidden="true">/</span>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </div>

        <figure className="hero__photo">
          <div className="hero__frame">
            <picture>
              <source
                type="image/webp"
                srcSet={`${person.photo.small} 480w, ${person.photo.webp} 960w`}
                sizes="(max-width: 860px) 70vw, 420px"
              />
              <img
                src={person.photo.fallback}
                alt={person.photo.alt}
                width="960"
                height="1200"
                fetchPriority="high"
              />
            </picture>
          </div>
          <figcaption className="hero__caption">
            <span>{person.initials}</span> — IT Engineering, Pune
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
