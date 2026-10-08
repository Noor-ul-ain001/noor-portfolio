import { useEffect, useRef } from "react";
import { ScrollTrigger } from "../lib/scroll";

const STATEMENTS = [
  { big: "It's not about writing more code.", small: "It's about owning what ships.", align: "left" },
  { big: "It's about systems that hold up.", small: "Real users, real data, real load.", align: "right" },
  { big: "And code someone can read tomorrow.", small: "Clean architecture. Honest handoffs.", align: "center" },
];

export function Asterisk({ className = "" }) {
  const rays = 8;
  return (
    <svg className={className} viewBox="-100 -100 200 200" aria-hidden>
      {Array.from({ length: rays }, (_, i) => (
        <rect key={i} x="-9" y="-100" width="18" height="200" transform={`rotate(${(180 / rays) * i + 7})`} />
      ))}
    </svg>
  );
}

export default function Manifesto() {
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    const blocks = [...el.querySelectorAll(".mani__item")];
    const star = el.querySelector(".mani__star");

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: "bottom bottom",
      onUpdate: ({ progress }) => {
        star.style.transform = `translate(-50%, -50%) rotate(${progress * 140}deg) scale(${0.9 + progress * 0.35})`;
        const seg = Math.min(progress * blocks.length, blocks.length - 0.0001);
        const idx = Math.floor(seg);
        const local = seg - idx;
        blocks.forEach((b, i) => {
          b.classList.toggle("is-active", i === idx);
          const words = b.querySelectorAll(".w");
          const lit = i < idx ? words.length : i > idx ? 0 : local * words.length * 1.6;
          words.forEach((w, j) => (w.style.opacity = Math.min(1, Math.max(0.15, lit - j))));
        });
      },
    });
    return () => st.kill();
  }, []);

  return (
    <section ref={root} className="mani" aria-label="Manifesto">
      <div className="mani__sticky">
        <Asterisk className="mani__star" />
        {STATEMENTS.map((s, i) => (
          <div key={i} className={`mani__item mani__item--${s.align}`}>
            <h2 className="mani__big">
              {s.big.split(" ").map((w, j) => (
                <span key={j} className="w">{w} </span>
              ))}
            </h2>
            <p className="mani__small"><em>{s.small}</em></p>
          </div>
        ))}
        <span className="label mani__label">Manifesto</span>
      </div>
    </section>
  );
}
