import { stages } from "../content";
import { Reveal } from "./Reveal";

export function Approach() {
  return (
    <section className="band band--plum" id="approach" aria-labelledby="approach-title">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Our approach</p>
          <h2 id="approach-title">
            Every great experience begins <em>with a vision.</em>
          </h2>
        </Reveal>
        <ol className="steps">
          {stages.map((stage, index) => (
            <li key={stage.number}>
              <Reveal delay={index * 0.08}>
                <span className="steps__num">{stage.number}</span>
                <h3>{stage.title}</h3>
                <p>{stage.copy}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
