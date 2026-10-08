import { useEffect, useRef, useState } from "react";
import { CONTRIBUTIONS, PROFILE } from "../data";

const PR_URL = `https://github.com/${CONTRIBUTIONS.repo}/pulls?q=is%3Apr+author%3ANoor-ul-ain001`;

function useCountUp(target, ref) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const step = (t) => {
        const k = Math.min(1, (t - t0) / 1800);
        setN(Math.round(target * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target, ref]);
  return n;
}

export default function Contributions() {
  const ref = useRef(null);
  const closed = useCountUp(CONTRIBUTIONS.closed, ref);

  return (
    <section className="oss" ref={ref} aria-labelledby="oss-title">
      <div className="oss__ghost" aria-hidden>OPEN SOURCE</div>
      <div className="oss__grid">
        <div className="oss__left" data-reveal>
          <span className="label lime">Testimonial</span>
          <h2 id="oss-title" className="oss__title">
            GitHub merged {CONTRIBUTIONS.merged} of her PRs
          </h2>
          <em className="oss__aside">(and they don't look unhappy about it)</em>
        </div>

        <div className="oss__count" data-reveal>
          <span className="oss__num">{closed}</span>
          <span className="label">Closed pull requests</span>
          <span className="oss__repo"><em>{CONTRIBUTIONS.repo}</em></span>
        </div>

        <div className="oss__right" data-reveal>
          <ul className="oss__stats label">
            <li><b className="lime">{CONTRIBUTIONS.merged}</b> merged</li>
            <li><b>{CONTRIBUTIONS.closed - CONTRIBUTIONS.merged}</b> closed</li>
            <li><b>{CONTRIBUTIONS.open}</b> open</li>
          </ul>
          <a className="cta cta--light" href={PR_URL} target="_blank" rel="noreferrer">
            <span className="label">See for yourself</span>
            <span className="cta__circle" aria-hidden>↗</span>
          </a>
          <a className="label link-u muted" href={PROFILE.github} target="_blank" rel="noreferrer">
            github.com/Noor-ul-ain001
          </a>
        </div>
      </div>
    </section>
  );
}
