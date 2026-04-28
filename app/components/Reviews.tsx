type Review = {
  name: string;
  date: string;
  body: string;
  initials: string;
};

const reviews: Review[] = [
  {
    name: "Marie Dubois",
    date: "Il y a 2 semaines",
    initials: "MD",
    body: "La meilleure baguette de Louhans, sans hésitation. Croûte parfaite, mie alvéolée, on sent vraiment le savoir-faire artisanal. Et l'accueil est toujours chaleureux !",
  },
  {
    name: "Pierre Martin",
    date: "Il y a 1 mois",
    initials: "PM",
    body: "Les croissants sont une tuerie — beurre AOP, feuilletage parfait, ça vaut le détour. Je m'arrête tous les samedis matin sur le chemin du marché.",
  },
  {
    name: "Sophie Lambert",
    date: "Il y a 3 jours",
    initials: "SL",
    body: "Tarte aux pommes commandée pour un anniversaire : un délice ! Pâte sablée fondante et pommes parfaitement caramélisées. Toute la famille a adoré.",
  },
];

function StarRating() {
  return (
    <div
      className="flex items-center gap-0.5 text-gold"
      role="img"
      aria-label="Note 5 sur 5"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l2.6 5.4 5.9.9-4.3 4.2 1 5.9L12 15.6 6.8 18.4l1-5.9L3.5 8.3l5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-cream-soft py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold-dark uppercase tracking-[0.25em] text-xs font-semibold">
            Ils en parlent
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brown mt-3">
            Avis de nos clients
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3">
            <StarRating />
            <span className="text-sm font-semibold text-ink">
              4,9 / 5 — 248 avis Google
            </span>
          </div>
        </div>

        <ul className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((r) => (
            <li
              key={r.name}
              className="bg-cream rounded-2xl p-6 sm:p-7 border border-line flex flex-col"
            >
              <StarRating />
              <blockquote className="mt-4 text-ink leading-relaxed flex-1">
                <p>&ldquo;{r.body}&rdquo;</p>
              </blockquote>
              <div className="mt-6 pt-5 border-t border-line flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="w-11 h-11 rounded-full bg-brown text-cream-soft flex items-center justify-center font-display font-semibold"
                >
                  {r.initials}
                </div>
                <div>
                  <p className="font-semibold text-ink text-sm">{r.name}</p>
                  <p className="text-xs text-ink-soft">{r.date}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
