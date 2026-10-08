import { useEffect, useRef, useState } from "react";
import { ScrollTrigger, scrollTo } from "../lib/scroll";
import { PROJECTS } from "../data";

/* One viewport of scroll per case study; the stage stays pinned while slides swap. */
export default function Work() {
  const root = useRef(null);
  const [active, setActive] = useState(0);
  const total = PROJECTS.length;

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
    return () => st.kill();
  }, [total]);

  const jump = (i) => {
    const top = root.current.getBoundingClientRect().top + window.scrollY;
    scrollTo(top + i * window.innerHeight + 4, { duration: 1.2 });
  };

  return (
    <section
      ref={root}
      id="work"
      className="work"
      style={{ height: `${total * 100}vh`, "--tint": PROJECTS[active].tint }}
      aria-label="Selected work"
    >
      <div className="work__stage">
        {PROJECTS.map((p, i) => (
          <article
            key={p.index}
            className={`slide ${i === active ? "is-active" : ""} ${i < active ? "is-past" : ""}`}
            aria-hidden={i !== active}
          >
            <div className="slide__top">
              <span className="label">
                <b className="lime">{p.index}</b> / Case study
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

            <span className="slide__num" aria-hidden>{p.index}</span>
          </article>
        ))}

        <ol className="work__index" aria-label="Projects">
          {PROJECTS.map((p, i) => (
            <li key={p.index}>
              <button className={i === active ? "is-active" : ""} onClick={() => jump(i)} aria-label={`Go to ${p.title}`}>
                {p.index}
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
