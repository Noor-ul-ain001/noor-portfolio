import { useEffect, useRef } from "react";
import { ScrollTrigger } from "../lib/scroll";

/* Words brighten one by one as the block scrolls through the viewport. `accent` is appended in lime italics. */
export default function ScrubText({ text, accent, as: Tag = "p", className = "", start = "top 85%", end = "bottom 50%" }) {
  const ref = useRef(null);

  useEffect(() => {
    const words = ref.current.querySelectorAll(".w");
    const paint = (progress) => {
      const lit = progress * words.length * 1.15;
      words.forEach((el, i) => {
        el.style.opacity = Math.min(1, Math.max(0.16, lit - i));
      });
    };
    const st = ScrollTrigger.create({ trigger: ref.current, start, end, onUpdate: (s) => paint(s.progress) });
    paint(st.progress);
    return () => st.kill();
  }, [start, end]);

  const split = (str, cls = "") =>
    str.split(" ").map((w, i) => (
      <span key={cls + i} className={`w ${cls}`}>
        {w}{" "}
      </span>
    ));

  return (
    <Tag ref={ref} className={className}>
      {split(text)}
      {accent && <em className="accent">{split(accent, "w--accent")}</em>}
    </Tag>
  );
}
