import { contact, navLinks } from "../content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <a className="footer__logo" href="#home">
          <img src="/brand/logo-lockup.png" alt="Scène de la Fusion" />
        </a>
        <nav aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="footer__contact">
          <a href={contact.mailto}>{contact.email}</a>
          <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
            {contact.instagramHandle}
          </a>
          <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            {contact.phoneDisplay}
          </a>
        </div>
        <p className="footer__statement">
          Where every event becomes a scene worth remembering.
        </p>
      </div>
      <p className="footer__legal">
        © 2026 SCÈNE DE LA FUSION. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
