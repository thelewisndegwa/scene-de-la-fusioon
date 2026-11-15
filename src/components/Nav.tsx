import { useEffect, useState } from "react";
import { navLinks } from "../content";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const marker = window.scrollY + 120;
      let next: (typeof navLinks)[number]["id"] = "home";
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= marker) next = link.id;
      }
      setCurrent(next);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav${scrolled || open ? " is-solid" : ""}`}>
      <a className="nav__logo" href="#home" onClick={close}>
        <img src="/brand/logo-lockup.png" alt="Scène de la Fusion" />
      </a>

      <nav className="nav__desk" aria-label="Primary">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            aria-current={current === link.id ? "true" : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a className="nav__cta" href="#contact">
        Let's create together
      </a>

      <button
        className="nav__toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <div
        id="mobile-menu"
        className={`nav__sheet${open ? " is-open" : ""}`}
        inert={!open}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a className="nav__sheet-cta" href="#contact" onClick={close}>
            Let's create together
          </a>
        </nav>
      </div>
    </header>
  );
}
