import { Reveal } from "./Reveal";

export function About() {
  return (
    <section className="band band--ivory" id="about" aria-labelledby="about-title">
      <div className="wrap about">
        <Reveal className="about__frame">
          <img
            src="/images/about.jpg"
            alt="A long formal table set with glassware, candles and flowers"
          />
        </Reveal>
        <div className="about__copy">
          <Reveal>
            <p className="eyebrow eyebrow--ink">A different kind of experience</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="about-title">
              More than events. We create moments that{" "}
              <em>move people.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="prose">
              <p>
                Scène de la Fusion is a bespoke BTL events and marketing company
                bringing together creativity, polish and on-the-ground precision.
              </p>
              <p>
                Every event is shaped around your vision, your audience and your
                goals.
              </p>
              <p>
                From intimate private celebrations to large-scale corporate
                experiences, we make every detail count.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
