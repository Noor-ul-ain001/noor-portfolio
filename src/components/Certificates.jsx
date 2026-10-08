import { useState } from "react";
import { CERTIFICATES } from "../data";

const ISSUERS = ["All", ...new Set(CERTIFICATES.map((c) => c.issuer))];

export default function Certificates() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? CERTIFICATES : CERTIFICATES.filter((c) => c.issuer === filter);

  return (
    <section className="certs light" id="certificates" aria-labelledby="certs-title">
      <div className="wrap">
        <div className="certs__head">
          <h2 id="certs-title" className="label">The certificates</h2>
          <div className="certs__tabs" role="tablist">
            {ISSUERS.map((i) => (
              <button key={i} role="tab" aria-selected={filter === i} className={`label ${filter === i ? "is-active" : ""}`} onClick={() => setFilter(i)}>
                {i}
              </button>
            ))}
          </div>
        </div>

        <ul className="certs__list">
          {list.map((c) => {
            const Tag = c.href ? "a" : "div";
            return (
              <li key={c.title}>
                <Tag className="cert" {...(c.href ? { href: c.href, target: "_blank", rel: "noreferrer" } : {})}>
                  <span className="cert__badge" aria-hidden>{c.issuer.slice(0, 2)}</span>
                  <span className="cert__body">
                    <span className="label cert__issuer">
                      {c.issuer}
                      {c.href && <span className="lime-dark"> · Verified ↗</span>}
                    </span>
                    <span className="cert__title">{c.title}</span>
                  </span>
                  <span className="label cert__date">{c.issued}</span>
                </Tag>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
