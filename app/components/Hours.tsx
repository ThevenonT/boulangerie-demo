const schedule = [
  { day: "Lundi", hours: "Fermé", closed: true },
  { day: "Mardi", hours: "06h30 — 13h00 · 15h30 — 19h00" },
  { day: "Mercredi", hours: "06h30 — 13h00 · 15h30 — 19h00" },
  { day: "Jeudi", hours: "06h30 — 13h00 · 15h30 — 19h00" },
  { day: "Vendredi", hours: "06h30 — 13h00 · 15h30 — 19h30" },
  { day: "Samedi", hours: "06h30 — 19h30" },
  { day: "Dimanche", hours: "07h00 — 13h00" },
];

export default function Hours() {
  return (
    <section id="horaires" className="bg-brown text-cream-soft py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
            Venez nous voir
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Horaires & adresse
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="bg-brown-dark/40 rounded-2xl border border-cream/10 overflow-hidden">
            <table className="w-full">
              <caption className="sr-only">Horaires d&apos;ouverture</caption>
              <tbody>
                {schedule.map((row) => (
                  <tr
                    key={row.day}
                    className="border-b border-cream/10 last:border-0"
                  >
                    <th
                      scope="row"
                      className="text-left font-display font-semibold text-base sm:text-lg px-5 sm:px-7 py-4"
                    >
                      {row.day}
                    </th>
                    <td
                      className={`text-right text-sm sm:text-base px-5 sm:px-7 py-4 tabular-nums ${
                        row.closed ? "text-cream/60 italic" : "text-cream-soft"
                      }`}
                    >
                      {row.hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-gold">
                Notre boutique
              </h3>
              <address className="not-italic mt-3 space-y-1 text-cream/90">
                <p>12 Rue du Four</p>
                <p>71500 Louhans</p>
              </address>
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-gold">
                Téléphone
              </h3>
              <p className="mt-3">
                <a
                  href="tel:+33385000000"
                  className="text-cream/90 hover:text-cream underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm"
                >
                  03 85 XX XX XX
                </a>
              </p>
            </div>
            <p className="text-sm text-cream/70 pt-2 border-t border-cream/10">
              Commandes spéciales (gâteaux, pièces montées) à passer 48h à
              l&apos;avance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
