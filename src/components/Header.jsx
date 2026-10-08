import { useEffect, useState } from "react";
import { lockScroll, scrollTo } from "../lib/scroll";
import { PROFILE, PROJECTS, CERTIFICATES } from "../data";

const ISSUERS = [...new Set(CERTIFICATES.map((c) => c.issuer))];
const AI_PROJECTS = PROJECTS.filter((p) => ["AI Agents", "RAG"].includes(p.category));

const MENU = [
  { label: "Work", href: "#work", kind: "shots", shots: PROJECTS, caption: `${PROJECTS.length} projects, all live.` },
  { label: "Services", href: "#services", kind: "shots", shots: AI_PROJECTS, caption: "Agents, RAG & full stack." },
  { label: "About", href: "#about", kind: "photo", caption: "Who is behind the code." },
  { label: "Certificates", href: "#certificates", kind: "certs", caption: `${CERTIFICATES.length} certificates, ${ISSUERS.length} issuers.` },
  { label: "Contact", href: "#contact", kind: "contact", caption: "Let's talk about yours." },
];

/* Browser-framed screenshot that cycles through a set of projects while its panel is open. */
function ShotPreview({ shots, active }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!active || shots.length < 2) return;
    const t = setInterval(() => setI((n) => (n + 1) % shots.length), 1600);
    return () => clearInterval(t);
  }, [active, shots.length]);

  const current = shots[i];
  return (
    <div className="mprev">
      <div className="mprev__bar" aria-hidden>
        <i /><i /><i />
        <span>{current.live.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
      </div>
      <div className="mprev__screen">
        {shots.map((s, n) => (
          <img key={s.index} src={s.image} alt="" className={n === i ? "is-on" : ""} loading="lazy" />
        ))}
      </div>
      <p className="mprev__name label">
        <b className="lime">{current.index}</b> {current.title}
      </p>
    </div>
  );
}

function PanelPreview({ item, active }) {
  if (item.kind === "shots") return <ShotPreview shots={item.shots} active={active} />;
  if (item.kind === "certs")
    return (
      <ul className="mcerts">
        {ISSUERS.map((iss) => (
          <li key={iss}>
            <span className="label">{iss}</span>
            <em>{CERTIFICATES.find((c) => c.issuer === iss).title}</em>
          </li>
        ))}
      </ul>
    );
  if (item.kind === "contact") return <p className="mcontact"><em>{PROFILE.email}</em></p>;
  return null;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > window.innerHeight * 1.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    lockScroll(open);
    if (!open) setActive(0);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => scrollTo(href), open ? 450 : 0);
  };

  return (
    <>
      <header className="header">
        <a href="#top" className="logo" onClick={(e) => go(e, 0)} aria-label="Noor ul Ain, back to top">
          NOOR<span className="logo__dot">.</span>
        </a>
        <button
          className={`burger ${compact ? "is-compact" : ""}`}
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="menu"
        >
          <span className="burger__label label">Menu</span>
          <span className="burger__lines" aria-hidden>
            <i />
            <i />
          </span>
        </button>
      </header>

      <div id="menu" className={`menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="menu__top">
          <a href="#top" className="logo logo--sm" onClick={(e) => go(e, 0)} tabIndex={open ? 0 : -1}>
            NOOR<span className="logo__dot">.</span>
          </a>
          <span className="label menu__title">[ Menu ]</span>
          <button className="menu__close" onClick={() => setOpen(false)} aria-label="Close menu" tabIndex={open ? 0 : -1}>
            <span aria-hidden>×</span>
          </button>
        </div>

        <nav className="menu__panels" aria-label="Main" onMouseLeave={() => setActive(0)}>
          {MENU.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={`menu__panel menu__panel--${item.kind} ${active === i ? "is-active" : ""}`}
              style={{ "--i": i }}
              onClick={(e) => go(e, item.href)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              tabIndex={open ? 0 : -1}
            >
              {item.kind === "photo" && <img className="menu__photo" src={PROFILE.photo} alt="" loading="lazy" />}
              <div className="menu__inner">
                <span className="menu__num label">{String(i + 1).padStart(2, "0")}</span>
                <span className="menu__label">
                  <span className="menu__arrow" aria-hidden>↗</span>
                  {item.label}
                </span>
                <div className="menu__preview">
                  <div className="menu__preview-in">
                    <PanelPreview item={item} active={open && active === i} />
                  </div>
                </div>
              </div>
              <em className="menu__caption">{item.caption}</em>
            </a>
          ))}
        </nav>

        <div className="menu__bottom">
          <div className="menu__socials">
            <a className="label" href={PROFILE.github} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>GitHub ↗</a>
            <a className="label" href={PROFILE.linkedin} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>LinkedIn ↗</a>
            <a className="label" href={PROFILE.resume} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>Resume ↗</a>
          </div>
          <a className="menu__mail" href={`mailto:${PROFILE.email}`} tabIndex={open ? 0 : -1}>
            <em>{PROFILE.email}</em>
          </a>
        </div>
      </div>
    </>
  );
}
