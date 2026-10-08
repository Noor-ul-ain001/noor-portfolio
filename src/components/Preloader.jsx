import { useEffect, useState } from "react";
import { PROFILE, PROJECTS } from "../data";

const MIN_MS = 2600; // never flash: the intro always plays at least this long
const ASSETS = [PROFILE.photo, ...PROJECTS.map((p) => p.image)];

function preload(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = img.onerror = resolve;
    img.src = src;
  });
}

/* Full-screen loader page: counts 0→100 against real asset loading, then wipes away in two curtains. */
export default function Preloader({ onDone }) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState("loading"); // loading → leaving
  const total = ASSETS.length + 1; // +1 for web fonts

  useEffect(() => {
    let alive = true;
    let done = 0; // per-run counter, so StrictMode's double mount can't double-count
    const bump = () => (done += 1);
    ASSETS.forEach((src) => preload(src).then(bump));
    document.fonts.ready.then(bump);

    const t0 = performance.now();
    let shown = 0;
    let timer;
    // setTimeout rather than rAF so the count still finishes in a background tab
    const tick = () => {
      if (!alive) return;
      const now = performance.now();
      const timeCap = Math.min(1, (now - t0) / MIN_MS); // pace by time…
      const loadCap = done / total; // …but never ahead of what has actually loaded
      const target = Math.min(timeCap, loadCap) * 100;
      shown += (target - shown) * 0.08;
      if (target === 100 && shown > 99.5) shown = 100;
      setCount(Math.floor(shown));
      if (shown < 100) timer = setTimeout(tick, 16);
      else setTimeout(() => alive && setPhase("leaving"), 350);
    };
    timer = setTimeout(tick, 16);

    // Safety net: never trap the visitor if an asset hangs
    const bail = setTimeout(() => (done = total), 9000);
    return () => {
      alive = false;
      clearTimeout(timer);
      clearTimeout(bail);
    };
  }, [total]);

  useEffect(() => {
    if (phase !== "leaving") return;
    // Let the hero start its entrance while the back curtain is still lifting
    const reveal = setTimeout(() => document.documentElement.classList.add("is-loaded"), 700);
    const t = setTimeout(onDone, 1500);
    return () => {
      clearTimeout(reveal);
      clearTimeout(t);
    };
  }, [phase, onDone]);

  return (
    <div className={`loader is-${phase}`} role="status" aria-label={`Loading, ${count}%`}>
      <div className="loader__curtain loader__curtain--back" />
      <div className="loader__curtain loader__curtain--front">
        <div className="loader__top">
          <span className="label">Noor ul Ain</span>
          <span className="label loader__muted">Portfolio · {new Date().getFullYear()}</span>
        </div>

        <div className="loader__center">
          <div className="loader__eyes" style={{ backgroundImage: `url(${PROFILE.photo})` }} />
          <div className="loader__word" aria-hidden>
            {"NOOR".split("").map((c, i) => (
              <span key={i} style={{ "--i": i }}>{c}</span>
            ))}
          </div>
          <div className="loader__tag">
            <em>Agentic AI &amp; Full Stack Developer</em>
          </div>
        </div>

        <div className="loader__bottom">
          <span className="loader__count" aria-hidden>
            {String(count).padStart(3, "0")}
            <small>%</small>
          </span>
          <span className="label loader__muted loader__status">
            {count < 100 ? "Loading the work" : "Ready"}
          </span>
        </div>

        <div className="loader__bar" aria-hidden>
          <span style={{ transform: `scaleX(${count / 100})` }} />
        </div>
      </div>
    </div>
  );
}
