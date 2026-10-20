import { useEffect, useState } from "react";
import siteConfig from "../config/siteConfig";
import Icon from "./Icon";

const NAV = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "light"
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}

function useActiveSection(ids) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

const IDS = NAV.map((n) => n.id);

export default function Header() {
  const [theme, toggleTheme] = useTheme();
  const active = useActiveSection(IDS);
  const { person, resume } = siteConfig;

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#top" className="wordmark" aria-label={`${person.name}, back to top`}>
          <span className="wordmark__mark">{person.initials}</span>
          <span className="wordmark__name">{person.wordmark}</span>
        </a>

        <nav aria-label="Primary" className="nav">
          <ul>
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  aria-current={active === n.id ? "true" : undefined}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a
            className="btn btn--small btn--ghost"
            href={resume.file}
            download={resume.downloadName}
          >
            <Icon name="download" size={15} />
            <span>Resume</span>
          </a>
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
