import Image from "next/image";

type Product = {
  name: string;
  description: string;
  image: string;
  alt: string;
};

const products: Product[] = [
  {
    name: "Pain de campagne",
    description: "Levain naturel, mie alvéolée, croûte croustillante.",
    image:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&q=80",
    alt: "Miche de pain de campagne dorée",
  },
  {
    name: "Baguette tradition",
    description: "Façonnée à la main, fermentation longue 24h.",
    image:
      "https://images.unsplash.com/photo-1568471173242-461f0a730452?w=600&q=80",
    alt: "Baguettes traditionnelles dorées",
  },
  {
    name: "Croissant pur beurre",
    description: "Beurre AOP, pâte feuilletée à 81 plis.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
    alt: "Croissant doré et feuilleté",
  },
  {
    name: "Pain au chocolat",
    description: "Deux barres de chocolat noir, feuilletage maison.",
    image:
      "https://images.unsplash.com/photo-1600624177270-a83d63d1660b?w=600&q=80",
    alt: "Pain au chocolat doré",
  },
  {
    name: "Tarte aux pommes",
    description: "Pommes du verger, pâte sablée, compote maison.",
    image:
      "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=600&q=80",
    alt: "Tarte aux pommes de saison",
  },
  {
    name: "Éclair au chocolat",
    description: "Pâte à choux, crème pâtissière, glaçage chocolat.",
    image:
      "https://images.unsplash.com/photo-1612203985729-70726954388c?w=600&q=80",
    alt: "Éclair au chocolat brillant",
  },
];

export default function Products() {
  return (
    <section id="produits" className="bg-cream-soft py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold-dark uppercase tracking-[0.25em] text-xs font-semibold">
            Notre savoir-faire
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brown mt-3">
            Nos produits
          </h2>
          <p className="mt-4 text-ink-soft">
            Chaque pièce est façonnée à la main dans notre fournil, avec des
            ingrédients sélectionnés auprès de producteurs locaux.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((p) => (
            <li
              key={p.name}
              className="group bg-cream rounded-2xl overflow-hidden border border-line hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-brown">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {p.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
