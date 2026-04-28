const prices = [
  { service: "Vidange moteur", price: "à partir de 49€" },
  { service: "Révision complète", price: "à partir de 129€" },
  { service: "Diagnostic électronique OBD", price: "à partir de 39€" },
  { service: "Montage pneumatiques", price: "à partir de 18€ / pneu" },
  { service: "Recharge climatisation", price: "à partir de 79€" },
  { service: "Préparation contrôle technique", price: "sur devis" },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-start">
          <div>
            <span className="text-red uppercase tracking-[0.2em] text-xs font-extrabold">
              Tarifs indicatifs
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-night">
              Des prix lisibles avant intervention
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Les montants varient selon le modèle, les pièces nécessaires et
              l’état du véhicule. Un devis gratuit confirme toujours le tarif.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-line bg-panel shadow-sm">
            <table className="w-full">
              <caption className="sr-only">
                Tarifs indicatifs des prestations automobiles
              </caption>
              <thead className="bg-night text-white">
                <tr>
                  <th scope="col" className="px-5 py-4 text-left font-display text-base">
                    Prestation
                  </th>
                  <th scope="col" className="px-5 py-4 text-right font-display text-base">
                    Tarif
                  </th>
                </tr>
              </thead>
              <tbody>
                {prices.map((row) => (
                  <tr key={row.service} className="border-t border-line">
                    <th
                      scope="row"
                      className="px-5 py-4 text-left text-sm sm:text-base font-semibold text-night"
                    >
                      {row.service}
                    </th>
                    <td className="px-5 py-4 text-right text-sm sm:text-base text-muted tabular-nums">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
