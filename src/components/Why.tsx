import { reasons } from "../content";
import { Reveal } from "./Reveal";

export function Why() {
  return (
    <section className="band band--ivory" id="why" aria-labelledby="why-title">
      <div className="wrap why">
        <div className="why__intro">
          <Reveal>
            <p className="eyebrow eyebrow--ink">Why choose us</p>
            <h2 id="why-title">
              Your vision. Our attention to <em>every detail.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="why__frame">
              <img
                src="/images/why.jpg"
                alt="A bartender pouring a drink over a clear cube of ice"
              />
            </figure>
          </Reveal>
        </div>
        <ol className="why__list">
          {reasons.map((reason) => (
            <li key={reason.number}>
              <span>{reason.number}</span>
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
