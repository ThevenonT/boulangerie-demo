"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  vehicle: string;
  intervention: string;
  date: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  vehicle: "",
  intervention: "",
  date: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [sent, setSent] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    setForm(initialForm);
  }

  return (
    <section id="contact" className="bg-light py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-red uppercase tracking-[0.2em] text-xs font-extrabold">
            Contact
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-night">
            Demander un rendez-vous
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Décrivez votre besoin, votre véhicule et la date souhaitée. Le
            garage vous rappelle pour confirmer le créneau et le devis.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10">
          <form
            onSubmit={onSubmit}
            className="rounded-lg border border-line bg-white p-6 sm:p-8 shadow-sm"
            aria-label="Formulaire de demande de rendez-vous"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nom" htmlFor="name" required>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="input-field"
                  placeholder="Marie Dupont"
                />
              </Field>

              <Field label="Téléphone" htmlFor="phone" required>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  className="input-field"
                  placeholder="03 85 74 00 83"
                />
              </Field>

              <Field label="Véhicule" htmlFor="vehicle" required>
                <input
                  id="vehicle"
                  name="vehicle"
                  type="text"
                  required
                  value={form.vehicle}
                  onChange={(event) =>
                    updateField("vehicle", event.target.value)
                  }
                  className="input-field"
                  placeholder="Peugeot 308, Renault Clio..."
                />
              </Field>

              <Field
                label="Type d'intervention"
                htmlFor="intervention"
                required
              >
                <select
                  id="intervention"
                  name="intervention"
                  required
                  value={form.intervention}
                  onChange={(event) =>
                    updateField("intervention", event.target.value)
                  }
                  className="input-field"
                >
                  <option value="">Choisir une prestation</option>
                  <option>Révision complète</option>
                  <option>Pneumatiques</option>
                  <option>Diagnostic électronique</option>
                  <option>Carrosserie</option>
                  <option>Climatisation</option>
                  <option>Contrôle technique</option>
                </select>
              </Field>

              <Field label="Date souhaitée" htmlFor="date">
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={(event) => updateField("date", event.target.value)}
                  className="input-field"
                />
              </Field>

              <div className="sm:col-span-2">
                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                    className="input-field resize-y py-3"
                    placeholder="Voyant moteur allumé, bruit au freinage, révision annuelle..."
                  />
                </Field>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-red px-6 font-bold text-white transition-colors duration-200 hover:bg-red-dark focus-visible:outline-2 focus-visible:outline-red focus-visible:outline-offset-2 cursor-pointer"
            >
              Envoyer la demande
            </button>

            <p
              role="status"
              aria-live="polite"
              className={`mt-4 min-h-5 text-center text-sm font-semibold ${
                sent ? "text-red" : "text-transparent"
              }`}
            >
              {sent
                ? "Demande enregistrée pour la démo. Le garage vous rappellera."
                : "Statut du formulaire"}
            </p>
          </form>

          <aside className="rounded-lg bg-night p-6 sm:p-8 text-white shadow-xl">
            <h3 className="font-display text-2xl font-extrabold">
              Centre Auto Louhans
            </h3>
            <div className="mt-6 space-y-6 text-sm text-white/80">
              <div>
                <p className="font-bold text-white">Adresse</p>
                <address className="mt-2 not-italic leading-relaxed">
                  80 Rue du Jura
                  <br />
                  71500 Louhans
                </address>
              </div>
              <div>
                <p className="font-bold text-white">Téléphone</p>
                <a
                  href="tel:+33385740083"
                  className="mt-2 inline-block hover:text-white underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-red focus-visible:outline-offset-2 rounded-sm"
                >
                  03 85 74 00 83
                </a>
              </div>
              <div>
                <p className="font-bold text-white">Horaires</p>
                <ul className="mt-2 space-y-1">
                  <li>Lun-Ven 8h-12h / 14h-18h30</li>
                  <li>Sam 8h-12h</li>
                  <li>Dim fermé</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-5">
              <p className="font-bold text-white">Accès atelier</p>
              <div className="mt-4 grid gap-3 text-sm text-white/75">
                <div className="rounded-md bg-white/5 p-4">
                  <p className="font-semibold text-white">Rue du Jura</p>
                  <p className="mt-1">Garage accessible depuis le centre de Louhans.</p>
                </div>
                <div className="rounded-md bg-white/5 p-4">
                  <p className="font-semibold text-white">Parking client</p>
                  <p className="mt-1">Dépôt du véhicule possible dès l’ouverture.</p>
                </div>
                <div className="rounded-md bg-red p-4 text-white">
                  <p className="font-semibold">Devis gratuit en 24h</p>
                  <p className="mt-1 text-white/85">
                    Confirmation par téléphone avant intervention.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-sm font-bold text-night">
        {label}
        {required ? <span className="text-red"> *</span> : null}
      </span>
      {children}
    </label>
  );
}
