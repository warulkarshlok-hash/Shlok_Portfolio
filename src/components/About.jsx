import siteConfig from "../config/siteConfig";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="prose">
        {siteConfig.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
