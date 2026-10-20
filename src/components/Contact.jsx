import siteConfig from "../config/siteConfig";
import Section from "./Section";
import Icon from "./Icon";

export default function Contact() {
  const { links, resume, contact } = siteConfig;

  const items = [
    { key: "email", label: "Email", icon: "mail", href: `mailto:${links.email}`, text: links.email },
    { key: "github", label: "GitHub", icon: "github", href: links.github, text: "warulkarshlok-hash" },
    { key: "linkedin", label: "LinkedIn", icon: "linkedin", href: links.linkedin, text: "shlok-warulkar" },
    { key: "leetcode", label: "LeetCode", icon: "code", href: links.leetcode, text: "ShlokW" },
  ].filter((i) => i.href);

  return (
    <Section id="contact" index="06" title="Contact">
      <p className="contact__lead">Let’s talk.</p>
      <p className="prose contact__text">{contact.invitation}</p>

      <ul className="contact__list">
        {items.map((i) => {
          const external = i.key !== "email";
          return (
            <li key={i.key}>
              <a
                href={i.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <Icon name={i.icon} />
                <span className="contact__label">{i.label}</span>
                <span className="contact__value">{i.text}</span>
                {external && <span className="sr-only"> (opens in a new tab)</span>}
              </a>
            </li>
          );
        })}
        {links.showPhone && links.phone && (
          <li>
            <a href={`tel:${links.phone}`}>
              <span className="contact__label">Phone</span>
              <span className="contact__value">{links.phone}</span>
            </a>
          </li>
        )}
      </ul>

      <a className="btn btn--primary" href={resume.file} download={resume.downloadName}>
        <Icon name="download" size={16} /> Download Resume
      </a>
    </Section>
  );
}
