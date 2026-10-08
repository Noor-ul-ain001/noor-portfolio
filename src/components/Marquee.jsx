import { Asterisk } from "./Manifesto";
import { PROJECTS, STACK, PROFILE } from "../data";

const rows = [
  PROJECTS.slice(0, 7).map((p) => p.title),
  [...STACK, "Qdrant", "GSAP", "Three.js"],
  PROJECTS.slice(7).map((p) => p.title).concat(["Spec-kit", "MCP servers"]),
];

function Row({ items, reverse }) {
  const content = items.map((t, i) => (
    <span key={i} className="mq__item">
      {t}
      <i aria-hidden>■</i>
    </span>
  ));
  return (
    <div className={`mq__row ${reverse ? "mq__row--rev" : ""}`}>
      <div className="mq__track">
        {content}
        {content}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="mq" aria-label="More work">
      <Asterisk className="mq__star" />
      <div className="wrap">
        <p className="paren label paren--tight" data-reveal>What's next</p>
        <h2 className="mq__title" data-reveal>
          And that's <em>only a preview.</em>
        </h2>
      </div>
      <div className="mq__rows" aria-hidden>
        {rows.map((r, i) => (
          <Row key={i} items={r} reverse={i % 2 === 1} />
        ))}
      </div>
      <div className="wrap mq__foot">
        <span className="label muted">(and plenty more on GitHub)</span>
        <a className="label link-u" href={PROFILE.github} target="_blank" rel="noreferrer">
          See all repositories
        </a>
      </div>
    </section>
  );
}
