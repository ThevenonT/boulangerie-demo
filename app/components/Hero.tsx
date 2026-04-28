import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920"
        alt="Étal d'une boulangerie artisanale rempli de pains et viennoiseries"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink/70"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center text-cream-soft py-24 sm:py-32">
        <span className="inline-block text-gold uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold mb-5">
          Maison fondée en 1985
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Boulangerie Artisanale
          <span className="block text-gold mt-2">depuis 1985</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-cream/90 max-w-xl mx-auto">
          Pains au levain, viennoiseries pur beurre et pâtisseries faites
          maison chaque matin avec passion.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#produits"
            className="inline-flex items-center justify-center min-h-12 px-7 rounded-full bg-gold text-ink font-semibold hover:bg-gold-dark transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-cream focus-visible:outline-offset-2"
          >
            Découvrir nos produits
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center min-h-12 px-7 rounded-full border-2 border-cream-soft text-cream-soft font-semibold hover:bg-cream-soft hover:text-brown transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}
