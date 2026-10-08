import { useEffect, useRef, useState } from "react";
import { gsap, scrollTo } from "../lib/scroll";
import { PROFILE } from "../data";

const ROLES = ["agentic AI", "full stack", "RAG systems", "open source", "multi-agent"];

export default function Hero() {
  const root = useRef(null);
  const [role, setRole] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRole((r) => (r + 1) % ROLES.length), 2200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: root.current, start: "top top", end: "bottom top", scrub: true };
      gsap.to(".hero__media img", { yPercent: 12, scale: 1.08, ease: "none", scrollTrigger: st });
      gsap.to(".hero__copy", { yPercent: -30, opacity: 0, ease: "none", scrollTrigger: st });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="hero" id="top">
      <div className="hero__media">
        <img src={PROFILE.photo} alt="Portrait of Noor ul Ain" />
      </div>

      <div className="hero__copy">
        <h1 className="hero__title">
          <span className="line"><span>I build AI agents and products</span></span>
          <span className="line"><span>that keep working long after</span></span>
          <span className="line line--serif"><em>the demo ends.</em></span>
        </h1>
      </div>

      <div className="hero__ticker" aria-live="polite">
        <span className="label">Developer</span>
        <span className="hero__role">
          <em key={role}>{ROLES[role]}</em>
        </span>
      </div>

      <button className="hero__down" onClick={() => scrollTo("#about")} aria-label="Scroll to about">
        <span />
      </button>
    </section>
  );
}
