import { gallery } from "../content";
import { Reveal } from "./Reveal";

export function Gallery() {
  return (
    <section className="band band--ink" id="showcase" aria-labelledby="gallery-title">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Visual showcase</p>
          <h2 id="gallery-title">
            Moments <em>worth remembering.</em>
          </h2>
        </Reveal>
        <div className="mosaic">
          {gallery.map((item) => (
            <figure key={item.src + item.label} className={item.className}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
