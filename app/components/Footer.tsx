const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#a-propos", label: "À propos" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-night text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-14">
        <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-start">
          <div>
            <a
              href="#"
              className="font-display text-2xl font-extrabold text-white"
            >
              Centre Auto <span className="text-red">Louhans</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Atelier de mécanique automobile, entretien et réparation à
              Louhans.
            </p>
          </div>

          <nav aria-label="Liens du pied de page">
            <h2 className="font-display text-base font-bold text-white">
              Navigation
            </h2>
            <ul className="mt-4 grid gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-red focus-visible:outline-offset-2 rounded-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic text-sm text-white/70 md:text-right">
            <p className="font-bold text-white">Centre Auto Louhans</p>
            <p className="mt-3">80 Rue du Jura, 71500 Louhans</p>
            <p>
              <a
                href="tel:+33385740083"
                className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-red focus-visible:outline-offset-2 rounded-sm"
              >
                03 85 74 00 83
              </a>
            </p>
          </address>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Centre Auto Louhans. Tous droits réservés.</p>
          <p>
            Site créé par{" "}
            <a
              href="https://www.malt.fr/profile/thomasthevenon1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-red underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-red focus-visible:outline-offset-2 rounded-sm"
            >
              Thomas Thevenon — Développeur Web Freelance
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
