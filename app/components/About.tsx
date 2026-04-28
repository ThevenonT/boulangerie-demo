import Image from "next/image";

const argumentsList = [
  "Devis gratuit et transparent",
  "Techniciens certifiés avec 15 ans d’expérience",
  "Pièces d'origine garanties",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="a-propos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
              alt="Mécanicien inspectant un véhicule dans un atelier"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <span className="text-red uppercase tracking-[0.2em] text-xs font-extrabold">
              Pourquoi nous choisir
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-night">
              Un atelier local, précis et transparent
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              Centre Auto Louhans accompagne les automobilistes pour l’entretien
              courant comme pour les réparations plus techniques. Chaque
              intervention est expliquée avant validation, avec une priorité :
              remettre votre véhicule sur la route sans mauvaise surprise.
            </p>

            <ul className="mt-8 grid gap-4">
              {argumentsList.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-line bg-light p-4"
                >
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-red text-white">
                    <CheckIcon />
                  </span>
                  <span className="font-semibold text-night">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
