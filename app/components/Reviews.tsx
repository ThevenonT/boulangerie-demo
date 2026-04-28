type Review = {
  name: string;
  date: string;
  body: string;
  initials: string;
};

const reviews: Review[] = [
  {
    name: "Marie L.",
    date: "Il y a 2 semaines",
    initials: "ML",
    body: "Accueil chaleureux, travail rapide et prix honnêtes. Je recommande !",
  },
  {
    name: "Julien M.",
    date: "Il y a 1 mois",
    initials: "JM",
    body: "Diagnostic précis, réparation faite le jour même. Excellent !",
  },
  {
    name: "Sophie R.",
    date: "Il y a 3 jours",
    initials: "SR",
    body: "Garage sérieux, on m'a bien expliqué les travaux à faire. Top !",
  },
];

function StarRating() {
  return (
    <div
      className="flex items-center gap-0.5 text-red"
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
    <section id="avis" className="bg-night text-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-start">
          <div>
            <span className="text-red uppercase tracking-[0.2em] text-xs font-extrabold">
              Avis clients
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Une réputation locale solide
            </h2>
            <div className="mt-6 inline-flex flex-col gap-2 rounded-lg border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl font-extrabold">
                  5,0
                </span>
                <StarRating />
              </div>
              <p className="text-sm text-white/70">5,0/5 — 32 avis Google</p>
            </div>
          </div>

          <ul className="grid md:grid-cols-3 gap-5">
            {reviews.map((review) => (
              <li
                key={review.name}
                className="rounded-lg border border-white/10 bg-white p-6 text-ink shadow-xl"
              >
                <div className="flex items-center justify-between gap-3">
                  <StarRating />
                  <span className="text-xs font-semibold text-muted">
                    Google
                  </span>
                </div>
                <blockquote className="mt-4 min-h-24 text-sm leading-relaxed text-ink">
                  <p>&ldquo;{review.body}&rdquo;</p>
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <div
                    aria-hidden="true"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-night text-sm font-bold text-white"
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-night">
                      {review.name}
                    </p>
                    <p className="text-xs text-muted">{review.date}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
