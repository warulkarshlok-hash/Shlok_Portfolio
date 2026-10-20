import { useState } from "react";
import siteConfig from "../config/siteConfig";
import Section from "./Section";
import Icon from "./Icon";

function Placeholder({ label }) {
  return (
    <div className="shot__placeholder" role="img" aria-label={`${label} screenshot placeholder`}>
      Screenshot placeholder — add one in siteConfig.js
    </div>
  );
}

function ProjectLinks({ github, live }) {
  const isUrl = (u) => typeof u === "string" && /^https?:\/\//.test(u);
  return (
    <div className="project__links">
      {isUrl(live) ? (
        <a className="btn btn--primary btn--small" href={live} target="_blank" rel="noopener noreferrer">
          Live Demo <Icon name="arrow" size={14} />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ) : (
        <span className="btn btn--small btn--disabled" aria-disabled="true">
          Live demo: TODO
        </span>
      )}
      {isUrl(github) ? (
        <a className="btn btn--outline btn--small" href={github} target="_blank" rel="noopener noreferrer">
          <Icon name="github" size={14} /> GitHub
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ) : (
        <span className="btn btn--small btn--disabled" aria-disabled="true">
          GitHub: TODO
        </span>
      )}
    </div>
  );
}

function Project({ project, flip, number }) {
  const [current, setCurrent] = useState(0);
  const shots = project.shots || [];
  const shot = shots[current];

  return (
    <article className={`project${flip ? " project--flip" : ""}`}>
      <div className="project__media">
        <div className="shot">
          <div className="shot__bar" aria-hidden="true">
            <i /> <i /> <i />
          </div>
          {shot ? (
            <img
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              decoding="async"
              width="1400"
              height="670"
            />
          ) : (
            <Placeholder label={project.name} />
          )}
        </div>
        {shots.length > 1 && (
          <div className="shot__tabs" role="group" aria-label={`${project.name} screenshots`}>
            {shots.map((s, i) => (
              <button
                key={s.label}
                type="button"
                aria-pressed={i === current}
                onClick={() => setCurrent(i)}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="project__info">
        <p className="eyebrow">
          Project {number} · {project.kind}
        </p>
        <h3 className="project__name">{project.name}</h3>
        <p className="project__summary">{project.summary}</p>
        <ul className="project__points">
          {project.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
        <ul className="tags" aria-label="Technologies used">
          {project.stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <ProjectLinks github={project.github} live={project.live} />
      </div>
    </article>
  );
}

export default function Projects() {
  const { projects } = siteConfig;
  return (
    <Section id="work" index="03" title="Selected work" wide>
      <div className="projects">
        {projects.length === 0 ? (
          <p className="empty">Projects are on their way.</p>
        ) : (
          projects.map((p, i) => (
            <Project key={p.id} project={p} number={`0${i + 1}`} flip={i % 2 === 1} />
          ))
        )}
      </div>
    </Section>
  );
}
