const footerLinks = [
  { href: "#produits", label: "Produits" },
  { href: "#horaires", label: "Horaires" },
  { href: "#a-propos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="w-5 h-5"
      >
        <path d="M22 12a10 10 0 1 0-11.6 9.9V14.9H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="w-5 h-5"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="w-5 h-5"
      >
        <path d="M16.5 2c.4 2.5 1.9 4.4 4.5 4.6v3.1c-1.6 0-3.1-.5-4.5-1.4v6.5a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.2a2.9 2.9 0 1 0 2 2.7V2h3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream-soft">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <a
              href="#"
              className="font-display text-2xl font-bold text-cream-soft"
            >
              La Boulangerie<span className="text-gold">.</span>
            </a>
            <p className="mt-4 text-sm text-cream/70 leading-relaxed max-w-xs">
              Boulangerie artisanale à Louhans depuis 1985. Pains au levain,
              viennoiseries pur beurre, pâtisseries maison.
            </p>
          </div>

          <nav aria-label="Liens du pied de page">
            <h2 className="font-display text-base font-semibold text-gold">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-cream/80 hover:text-cream transition-colors focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-base font-semibold text-gold">
              Suivez-nous
            </h2>
            <ul className="mt-4 flex gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-cream/5 text-cream-soft hover:bg-gold hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
            <address className="not-italic mt-6 text-sm text-cream/70 space-y-1">
              <p>12 Rue du Four, 71500 Louhans</p>
              <p>
                <a
                  href="tel:+33385000000"
                  className="hover:text-cream-soft transition-colors"
                >
                  03 85 XX XX XX
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
          <p className="text-xs text-cream/60">
            © {new Date().getFullYear()} La Boulangerie. Tous droits réservés.
          </p>
          <p className="text-xs text-cream/60">
            Site créé par{" "}
            <a
              href="https://www.malt.fr/profile/thomasthevenon1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-cream-soft underline-offset-4 hover:underline transition-colors focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm"
            >
              Thomas Thevenon — Développeur Web Freelance
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
