import ScrubText from "./ScrubText";

export default function Intro() {
  return (
    <section className="intro" id="about">
      <div className="wrap">
        <p className="paren label" data-reveal>
          Agentic AI &amp; Full Stack Developer
        </p>
        <ScrubText
          className="intro__text"
          text="AI engineer, full-stack developer, open-source contributor: call me whatever you like. I design multi-agent pipelines, retrieval-augmented systems and production-grade web platforms. My work lives on GitHub and in production, used by real people. Between a working prototype and a system that holds up, the code was never the problem."
          accent="The hand-waving was."
        />
        <div className="intro__sign" data-reveal>
          <span className="label">Noor ul Ain, developer.</span>
          <em>Shipped, not just demoed.</em>
        </div>
      </div>
    </section>
  );
}
