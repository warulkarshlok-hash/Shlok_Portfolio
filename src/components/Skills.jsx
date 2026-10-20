import siteConfig from "../config/siteConfig";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" index="02" title="Skills">
      <dl className="skills">
        {siteConfig.skills.map((s) => (
          <div className="skills__row" key={s.group}>
            <dt>{s.group}</dt>
            <dd>{s.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
