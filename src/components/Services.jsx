import { SERVICES, PROFILE } from "../data";
import { scrollTo } from "../lib/scroll";

export default function Services() {
  return (
    <section className="svc" id="services">
      <div className="svc__hero">
        <div className="svc__ghost" aria-hidden>
          <span>NO</span>
          <span>OR</span>
        </div>
        <img className="svc__photo" src={PROFILE.photo} alt="" aria-hidden />
        <h2 className="svc__heading" data-reveal>
          So concretely, <br />
          how do I do it <em className="lime">?</em>
        </h2>
      </div>

      <div className="wrap">
        <ul className="svc__list">
          {SERVICES.map((s, i) => (
            <li key={s.title} className="svc__item" data-reveal data-hover>
              <span className="label svc__num">
                <i aria-hidden /> {String(i + 1).padStart(2, "0")}
              </span>
              <div className="svc__main">
                <h3 className="svc__title" data-text={s.title}>
                  {s.title}
                </h3>
                <div className="svc__body">
                  <div>
                    <p><em>{s.full}.</em> {s.description}</p>
                    <p className="label svc__meta">
                      <span className="lime">{s.time}</span> · {s.stack.join(" · ")}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="svc__outro" data-reveal>
          <em>
            Five territories, each delivered end to end. If your need already has a name, go straight to the point:{" "}
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}>agentic AI</a>,{" "}
            <a href="#work" onClick={(e) => { e.preventDefault(); scrollTo("#work"); }}>full-stack products</a> and{" "}
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}>RAG systems</a> build the
            foundation, clean APIs make it last.
          </em>
        </p>
      </div>
    </section>
  );
}
