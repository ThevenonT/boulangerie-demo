import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1920"
        alt="Atelier automobile moderne avec une voiture en intervention"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-night/95 via-night/70 to-night/35"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 text-white py-28 sm:py-36">
        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold shadow-sm backdrop-blur">
          <span aria-hidden="true" className="mr-2 text-red">
            ★
          </span>
          5,0 — 32 avis Google
        </span>
        <h1 className="mt-6 max-w-3xl font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[0.95]">
          Votre garage de confiance à Louhans
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed">
          Mécanique générale, entretien, révision — Devis gratuit en 24h.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center min-h-12 px-7 rounded-md bg-red text-white font-bold hover:bg-red-dark transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            Prendre rendez-vous
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center min-h-12 px-7 rounded-md border-2 border-white text-white font-bold hover:bg-white hover:text-night transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-red focus-visible:outline-offset-2"
          >
            Voir nos services
          </a>
        </div>
      </div>
    </section>
  );
}
