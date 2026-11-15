import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { services } from "../content";
import { Reveal } from "./Reveal";

export function Services() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = services[active];

  return (
    <section className="band band--plum" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <div className="services">
          <div className="services__list">
            <Reveal>
              <p className="eyebrow">What we do</p>
              <h2 id="services-title">
                Thoughtfully curated. <em>Beautifully executed.</em>
              </h2>
            </Reveal>
            {services.map((service, index) => {
              const selected = index === active;
              return (
                <article
                  key={service.number}
                  className={`service${selected ? " is-active" : ""}`}
                >
                  <button
                    type="button"
                    aria-expanded={selected}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                  >
                    <span className="service__num">{service.number}</span>
                    <span className="service__title">{service.title}</span>
                  </button>
                  <div className="service__body">
                    <div>
                      <p>{service.copy}</p>
                      <img
                        className="service__mobile"
                        src={service.image}
                        alt={service.alt}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="services__visual" aria-hidden="true">
            <AnimatePresence mode="sync">
              <motion.img
                key={current.image}
                src={current.image}
                alt=""
                style={{
                  objectPosition: "focus" in current ? current.focus : "center",
                }}
                initial={reduce ? false : { opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
            <p>
              <span>{current.number}</span>
              {current.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
