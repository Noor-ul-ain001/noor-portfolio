import { useEffect, useRef } from "react";
import { gsap } from "../lib/scroll";
import { PROFILE } from "../data";

export default function Convinced() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".conv__img",
        { scale: 1.25, yPercent: -6 },
        { scale: 1, yPercent: 6, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true } },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="conv" aria-labelledby="conv-title">
      <img className="conv__img" src={PROFILE.photo} alt="" aria-hidden />
      <div className="conv__inner">
        <h2 id="conv-title" className="conv__title" data-reveal>
          Still not convinced <span className="lime">?</span>
        </h2>
        <a className="cta cta--light" href={PROFILE.resume} target="_blank" rel="noreferrer" data-reveal>
          <span className="label">Read my resume</span>
          <span className="cta__circle" aria-hidden>↗</span>
        </a>
      </div>
    </section>
  );
}
