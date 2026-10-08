import { PROFILE, STACK } from "../data";
import { scrollTo } from "../lib/scroll";

const NAV = [
  ["Work", "#work"],
  ["Services", "#services"],
  ["About", "#about"],
  ["Certificates", "#certificates"],
  ["Contact", "#contact"],
];

export default function Footer() {
  const go = (e, href) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <footer className="footer light">
      <div className="wrap">
        <svg className="footer__mark" viewBox="0 0 1000 400" role="img" aria-label="Noor">
          <text x="0" y="396" textLength="1000" lengthAdjust="spacingAndGlyphs">NOOR</text>
        </svg>

        <div className="footer__rows">
          <p className="label footer__h">Noor ul Ain</p>
          <ul className="footer__row">
            {NAV.map(([l, h]) => (
              <li key={l}><a href={h} onClick={(e) => go(e, h)}>{l}</a></li>
            ))}
          </ul>
          <p className="label footer__h">Connect</p>
          <ul className="footer__row">
            <li><a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href={`mailto:${PROFILE.email}`}>Email</a></li>
            <li><a href={PROFILE.resume} target="_blank" rel="noreferrer">Resume</a></li>
          </ul>
          <p className="label footer__h">Core stack</p>
          <ul className="footer__row">
            {STACK.map((s) => <li key={s}><span>{s}</span></li>)}
          </ul>
        </div>

        <div className="footer__bottom">
          <span className="label">© {new Date().getFullYear()} Noor ul Ain · Agentic AI &amp; Full Stack Developer</span>
          <a href="#top" className="cta" onClick={(e) => go(e, 0)}>
            <span className="label">Back to top</span>
            <span className="cta__circle" aria-hidden>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
