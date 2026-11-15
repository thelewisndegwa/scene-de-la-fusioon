import { occasions } from "../content";
import { Reveal } from "./Reveal";

export function Experiences() {
  return (
    <section
      className="band band--ivory"
      id="experiences"
      aria-labelledby="experiences-title"
    >
      <div className="wrap">
        <Reveal>
          <p className="eyebrow eyebrow--ink">Experiences we bring to life</p>
          <h2 id="experiences-title">
            Every occasion. <em>One exceptional standard.</em>
          </h2>
          <p className="lede lede--ink">
            From an intimate private celebration to a high-profile corporate
            launch or a large campaign rally, the same attention to detail,
            professionalism and style.
          </p>
        </Reveal>

        <div className="occasions">
          {occasions.map((occasion) => (
            <article
              key={occasion.title}
              className={`occasion occasion--${occasion.title.toLowerCase()}`}
            >
              <img src={occasion.image} alt={occasion.alt} />
              <h3 className={occasion.tone === "italic" ? "is-italic" : undefined}>
                {occasion.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
