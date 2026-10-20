import siteConfig from "../config/siteConfig";
import Icon from "./Icon";

const YEAR = new Date().getFullYear();

export default function Footer() {
  const { person, links, footer } = siteConfig;
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          <strong>{person.wordmark}</strong> · {footer.signoff}
          <br />
          <span className="footer__copy">© {YEAR}</span>
        </p>
        <ul className="footer__links">
          <li>
            <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
              <Icon name="github" />
            </a>
          </li>
          <li>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">
              <Icon name="linkedin" />
            </a>
          </li>
          <li>
            <a href={links.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode (opens in a new tab)">
              <Icon name="code" />
            </a>
          </li>
          <li>
            <a href={`mailto:${links.email}`} aria-label="Email">
              <Icon name="mail" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
