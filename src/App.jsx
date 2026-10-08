import { useEffect, useState } from "react";
import { initSmoothScroll, lockScroll, ScrollTrigger } from "./lib/scroll";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Manifesto from "./components/Manifesto";
import NameReveal from "./components/NameReveal";
import Work from "./components/Work";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Contributions from "./components/Contributions";
import Convinced from "./components/Convinced";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    return initSmoothScroll();
  }, []);

  useEffect(() => {
    lockScroll(!loaded);
    if (!loaded) return;
    document.documentElement.classList.add("is-loaded");

    // One-shot reveal for anything marked data-reveal
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -12% 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    const refresh = setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      io.disconnect();
      clearTimeout(refresh);
    };
  }, [loaded]);

  return (
    <>
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Intro />
        <Manifesto />
        <NameReveal />
        <Work />
        <Marquee />
        <Services />
        <Contributions />
        <Convinced />
        <Contact />
        <Certificates />
      </main>
      <Footer />
    </>
  );
}
