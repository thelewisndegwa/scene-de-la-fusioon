import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 90]);

  const lines = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 26 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <motion.div className="hero__media" style={{ y }}>
        <img
          src="/images/hero.jpg"
          alt="A chandelier-lit banquet hall dressed with round tables and gold chairs"
          fetchPriority="high"
        />
      </motion.div>
      <div className="hero__shade" aria-hidden="true" />

      <div className="hero__content">
        <motion.p
          className="eyebrow"
          {...lines}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
        >
          Bespoke events
        </motion.p>
        <h1 id="hero-title">
          <motion.span
            className="hero__line"
            {...lines}
            transition={{ duration: 0.9, ease, delay: 0.28 }}
          >
            Where every event
          </motion.span>
          <motion.span
            className="hero__line"
            {...lines}
            transition={{ duration: 0.9, ease, delay: 0.4 }}
          >
            becomes a scene
          </motion.span>
          <motion.span
            className="hero__line hero__line--gold"
            {...lines}
            transition={{ duration: 0.9, ease, delay: 0.52 }}
          >
            worth remembering.
          </motion.span>
        </h1>
        <motion.p
          className="hero__lede"
          {...lines}
          transition={{ duration: 0.9, ease, delay: 0.66 }}
        >
          We bring creativity, precision and people together to create
          exceptional events and meaningful brand experiences.
        </motion.p>
        <motion.div
          className="hero__actions"
          {...lines}
          transition={{ duration: 0.9, ease, delay: 0.78 }}
        >
          <a className="btn btn--line" href="#services">
            Discover what we do
          </a>
          <a className="btn btn--solid" href="#contact">
            Let's create together
          </a>
        </motion.div>
      </div>

      <a className="hero__scroll" href="#about">
        <span>Scroll</span>
        <i aria-hidden="true" />
      </a>
    </section>
  );
}
