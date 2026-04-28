import Image from "next/image";

const values = [
  {
    title: "Artisanal",
    description:
      "Pétrissage et façonnage à la main, sans additif ni conservateur.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="w-6 h-6"
      >
        <path d="M12 2v4" />
        <path d="M5 8c0-2 3-3 7-3s7 1 7 3v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z" />
        <path d="M9 12h6M9 16h6" />
      </svg>
    ),
  },
  {
    title: "Local",
    description:
      "Farine de notre meunier, beurre AOP, œufs et fruits du verger voisin.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="w-6 h-6"
      >
        <path d="M12 21s-7-6-7-12a7 7 0 0 1 14 0c0 6-7 12-7 12z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Qualité",
    description:
      "Levain naturel, fermentation longue, cuisson au feu de bois.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="w-6 h-6"
      >
        <path d="M12 2l2.6 5.4 5.9.9-4.3 4.2 1 5.9L12 15.6 6.8 18.4l1-5.9L3.5 8.3l5.9-.9z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="a-propos" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80"
              alt="Artisan boulanger façonnant un pain dans son fournil"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <span className="text-gold-dark uppercase tracking-[0.25em] text-xs font-semibold">
              Notre histoire
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brown mt-3">
              Trois générations d&apos;artisans
            </h2>
            <div className="mt-6 space-y-4 text-ink-soft leading-relaxed">
              <p>
                Depuis 1985, notre famille perpétue la tradition du pain
                artisanal à Louhans. Du choix des farines à la cuisson au feu
                de bois, chaque étape est réalisée avec patience et respect du
                produit.
              </p>
              <p>
                Nous travaillons exclusivement avec des producteurs locaux et
                privilégions les ingrédients de saison. Notre levain a plus de
                trente ans : il donne à nos pains ce goût unique que vous ne
                trouverez nulle part ailleurs.
              </p>
            </div>

            <ul className="mt-10 grid sm:grid-cols-3 gap-5">
              {values.map((v) => (
                <li
                  key={v.title}
                  className="bg-cream-soft rounded-xl p-5 border border-line"
                >
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-brown text-gold mb-3">
                    {v.icon}
                  </div>
                  <h3 className="font-display font-semibold text-brown text-lg">
                    {v.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                    {v.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
