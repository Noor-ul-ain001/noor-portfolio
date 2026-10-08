import { PROFILE } from "../data";

export default function Contact() {
  return (
    <section className="contact light" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <h2 id="contact-title" className="contact__title" data-reveal>
          <em>Soon,</em> <mark><em>your project</em></mark> <em>here?</em>
        </h2>
        <p className="contact__lede" data-reveal>
          Open to new opportunities, freelance work and collaborations. Tell me what you're building, I usually reply
          within a day.
        </p>
        <a className="contact__mail" href={`mailto:${PROFILE.email}`} data-reveal>
          {PROFILE.email}
          <span aria-hidden>↗</span>
        </a>
        <div className="contact__links" data-reveal>
          <a className="pill" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="pill" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="pill pill--dark" href={PROFILE.resume} target="_blank" rel="noreferrer">Download resume</a>
        </div>
      </div>
    </section>
  );
}
