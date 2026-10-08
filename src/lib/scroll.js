import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

const state = { lenis: null };

/** Lenis drives the page; ScrollTrigger reads from it on every Lenis tick. */
export function initSmoothScroll() {
  const lenis = new Lenis({
    lerp: 0.075, // lower = silkier glide
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.6,
    anchors: { offset: 0, duration: 1.6 },
  });
  const raf = (time) => lenis.raf(time * 1000);

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);
  state.lenis = lenis;

  return () => {
    gsap.ticker.remove(raf);
    lenis.destroy();
    state.lenis = null;
  };
}

export function scrollTo(target, opts = {}) {
  if (state.lenis) state.lenis.scrollTo(target, { duration: 1.6, ...opts });
  else if (typeof target === "number") window.scrollTo({ top: target, behavior: "smooth" });
  else document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
}

export function lockScroll(locked) {
  if (!state.lenis) return;
  if (locked) state.lenis.stop();
  else state.lenis.start();
}
