import { useEffect, useRef } from "react";
import { gsap } from "../lib/scroll";
import { PROFILE } from "../data";

/* Her portrait clipped inside the name, zooming out as you scroll, then the promise headline. */
export default function NameReveal() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal__word",
        { scale: 2.4 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: ".reveal", start: "top top", end: "bottom bottom", scrub: true },
        },
      );
      gsap.to(".reveal__word", {
        opacity: 0.25,
        ease: "none",
        scrollTrigger: { trigger: ".reveal", start: "bottom 130%", end: "bottom 60%", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
      <section className="reveal" aria-hidden>
        <div className="reveal__sticky">
          <div className="reveal__word" style={{ backgroundImage: `url(${PROFILE.photo})` }}>
            NOOR
          </div>
        </div>
      </section>

      <section className="promise">
        <p className="paren label paren--tight" data-reveal>The promise</p>
        <h2 className="promise__title" data-reveal>
          Become the obvious choice, <em>not an option.</em>
        </h2>
        <span className="label promise__sub" data-reveal>Selected work</span>
        <span className="promise__line" aria-hidden />
      </section>
    </div>
  );
}
