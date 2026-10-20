export default function Section({ id, index, title, wide = false, children }) {
  return (
    <section
      id={id}
      className={`section${wide ? " section--wide" : ""}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="container section__grid">
        <header className="section__head">
          <span className="eyebrow">{index}</span>
          <h2 id={`${id}-title`} className="section__title">
            {title}
          </h2>
        </header>
        <div className="section__body">{children}</div>
      </div>
    </section>
  );
}
