import siteConfig from "../config/siteConfig";
import Section from "./Section";

export default function Experience() {
  const { experience, beyondCode } = siteConfig;
  return (
    <Section id="experience" index="04" title="Experience">
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.role + e.period} className="timeline__item">
            <p className="timeline__period">{e.period}</p>
            <div>
              <h3 className="timeline__role">
                {e.role} <span>· {e.org}</span>
              </h3>
              <p className="timeline__meta">
                {e.place} · {e.stack}
              </p>
              <ul className="bullets">
                {e.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="subhead">Beyond the code</h3>
      <ul className="beyond">
        {beyondCode.map((b) => (
          <li key={b.title}>
            <h4>{b.title}</h4>
            <p>{b.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
