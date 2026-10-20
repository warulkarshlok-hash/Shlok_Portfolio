import siteConfig from "../config/siteConfig";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" index="05" title="Education">
      <ul className="edu">
        {siteConfig.education.map((e) => (
          <li key={e.title} className="edu__row">
            <p className="edu__period">{e.period}</p>
            <div>
              <h3>{e.title}</h3>
              <p>{e.place}</p>
            </div>
            <p className="edu__score">{e.score}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
