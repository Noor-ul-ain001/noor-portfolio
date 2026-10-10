import { useEffect, useRef, useState } from "react";
import { ScrollTrigger, scrollTo } from "../lib/scroll";
import { PROJECTS } from "../data";

const ALL = "All";
const CATEGORIES = [ALL, ...new Set(PROJECTS.map((p) => p.category))];
const countOf = (c) => (c === ALL ? PROJECTS.length : PROJECTS.filter((p) => p.category === c).length);

/* One viewport of scroll per case study; the stage stays pinned while slides swap. */
export default function Work() {
  const root = useRef(null);
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState(ALL);
  const list = filter === ALL ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const total = list.length;
  const current = list[Math.min(active, total - 1)];

  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: root.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: ({ progress }) => {
        const i = Math.min(total - 1, Math.floor(progress * total));
        setActive((prev) => (prev === i ? prev : i));
      },
    });
    // The section's height follows the filter, so every trigger below it has moved.
    ScrollTrigger.refresh();
    return () => st.kill();
  }, [total, filter]);

  const sectionTop = () => root.current.getBoundingClientRect().top + window.scrollY;

  const jump = (i) => {
    scrollTo(sectionTop() + i * window.innerHeight + 4, { duration: 1.2 });
  };

  const pick = (c) => {
    if (c === filter) return;
    // Snap back to the first slide so a shorter list never leaves us scrolled past the section.
    if (window.scrollY > sectionTop()) scrollTo(sectionTop() + 4, { immediate: true });
    setActive(0);
    setFilter(c);
  };

  return (
    <section
      ref={root}
      id="work"
      className="work"
      style={{ height: `${total * 100}vh`, "--tint": current.tint }}
      aria-label="Selected work"
    >
      <div className="work__stage">
        <div className="work__slides" key={filter}>
          {list.map((p, i) => (
            <article
              key={p.index}
              className={`slide ${i === active ? "is-active" : ""} ${i < active ? "is-past" : ""}`}
              aria-hidden={i !== active}
            >
              <div className="slide__top">
                <span className="label">
                  <b className="lime">{String(i + 1).padStart(2, "0")}</b> / Case study
                </span>
                <span className="label slide__cat">{p.category}</span>
              </div>

              <div className="slide__text">
                <p className="label slide__meta">
                  <span className="lime">{p.title}</span>
                  <span className="slide__dot">·</span>
                  {p.tags.join(" · ")}
                </p>
                <h3 className="slide__title">{p.title}</h3>
                <p className="slide__desc"><em>{p.subtitle}.</em> {p.description}</p>
                <div className="slide__ctas">
                  <a className="cta" href={p.live} target="_blank" rel="noreferrer" tabIndex={i === active ? 0 : -1}>
                    <span className="label">View project</span>
                    <span className="cta__circle" aria-hidden>→</span>
                  </a>
                  <a className="label link-u" href={p.code} target="_blank" rel="noreferrer" tabIndex={i === active ? 0 : -1}>
                    Source code ↗
                  </a>
                </div>
              </div>

              <a className="slide__media" href={p.live} target="_blank" rel="noreferrer" tabIndex={-1} data-hover>
                <span className="slide__bar" aria-hidden>
                  <i /><i /><i />
                  <span>{p.live.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                  <b className="label">Visit ↗</b>
                </span>
                <span className="slide__screen">
                  <img src={p.image} alt={`${p.title}, ${p.subtitle}`} loading="lazy" />
                </span>
              </a>

              <span className="slide__num" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
            </article>
          ))}
        </div>

        <div className="work__filter" role="group" aria-label="Filter projects by category">
          <div className="work__chips">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                className={`work__chip label ${c === filter ? "is-on" : ""} ${filter === ALL && c === current.category ? "is-current" : ""}`}
                aria-pressed={c === filter}
                onClick={() => pick(c)}
              >
                {c}
                <sup>{countOf(c)}</sup>
              </button>
            ))}
          </div>
          <label className="work__select label">
            <span className="sr-only">Project category</span>
            <select value={filter} onChange={(e) => pick(e.target.value)}>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c} ({countOf(c)})
                </option>
              ))}
            </select>
          </label>
        </div>

        <ol className="work__index" aria-label="Projects">
          {list.map((p, i) => (
            <li key={p.index}>
              <button
                className={i === active ? "is-active" : ""}
                onClick={() => jump(i)}
                aria-label={`Go to ${p.title}`}
                data-total={String(total).padStart(2, "0")}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            </li>
          ))}
        </ol>

        <div className="work__progress" aria-hidden>
          <span style={{ transform: `scaleX(${(active + 1) / total})` }} />
        </div>
      </div>
    </section>
  );
}
