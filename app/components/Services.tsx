import type { ReactNode } from "react";

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
};

const iconClass = "h-7 w-7";

const services: Service[] = [
  {
    title: "Révision complète",
    description: "Vidange, filtres, bougies, courroies.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClass}
        aria-hidden="true"
      >
        <path d="M14.7 6.3a4 4 0 0 0-5 5L4 17v3h3l5.7-5.7a4 4 0 0 0 5-5l-2.6 2.6-3-3z" />
      </svg>
    ),
  },
  {
    title: "Pneumatiques",
    description: "Montage, équilibrage, permutation.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClass}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 4v5M12 15v5M4 12h5M15 12h5" />
      </svg>
    ),
  },
  {
    title: "Électronique auto",
    description: "Diagnostic OBD, batterie, alternateur.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClass}
        aria-hidden="true"
      >
        <rect x="6" y="7" width="12" height="10" rx="2" />
        <path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 10h3M3 14h3M18 10h3M18 14h3" />
      </svg>
    ),
  },
  {
    title: "Carrosserie",
    description: "Petites réparations et retouches.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClass}
        aria-hidden="true"
      >
        <path d="M5 13l2-5h10l2 5" />
        <path d="M5 13h14v5H5z" />
        <circle cx="8" cy="18" r="1.5" />
        <circle cx="16" cy="18" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Climatisation",
    description: "Recharge et contrôle du circuit.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClass}
        aria-hidden="true"
      >
        <path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9" />
      </svg>
    ),
  },
  {
    title: "Contrôle technique",
    description: "Préparation et accompagnement.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClass}
        aria-hidden="true"
      >
        <path d="M12 3l7 3v5c0 4.5-2.9 8.5-7 10-4.1-1.5-7-5.5-7-10V6z" />
        <path d="M9 12l2 2 4-5" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-light py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-red uppercase tracking-[0.2em] text-xs font-extrabold">
            Nos services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-night mt-3">
            Entretien, diagnostic et réparation automobile
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Une prise en charge claire, des interventions expliquées et des
            pièces garanties pour rouler sereinement.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service) => (
            <li
              key={service.title}
              className="rounded-lg border border-line bg-panel p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 inline-flex h-13 w-13 items-center justify-center rounded-md bg-red/10 text-red">
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-night">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
