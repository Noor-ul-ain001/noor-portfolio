import { useEffect, useRef } from "react";

/* Ring that trails the pointer and swells over anything clickable. Hidden on touch devices via CSS. */
export default function Cursor() {
  const ring = useRef(null);
  const dot = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const pos = { x: innerWidth / 2, y: innerHeight / 2 };
    const ringPos = { ...pos };
    let raf;

    const move = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      dot.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      const hot = e.target.closest("a, button, [data-hover]");
      ring.current.classList.toggle("is-hot", !!hot);
    };
    const tick = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.18;
      ringPos.y += (pos.y - ringPos.y) * 0.18;
      ring.current.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", move);
    raf = requestAnimationFrame(tick);
    document.documentElement.classList.add("has-cursor");
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return (
    <div className="cursor" aria-hidden>
      <div ref={ring} className="cursor__ring" />
      <div ref={dot} className="cursor__dot" />
    </div>
  );
}
