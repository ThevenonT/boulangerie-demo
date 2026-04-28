"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    }, 600);
  }

  return (
    <section id="contact" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold-dark uppercase tracking-[0.25em] text-xs font-semibold">
            Nous écrire
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brown mt-3">
            Contactez-nous
          </h2>
          <p className="mt-4 text-ink-soft">
            Une question, une commande spéciale ou un événement ? Écrivez-nous,
            nous répondons sous 24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          <form
            onSubmit={onSubmit}
            noValidate
            className="bg-cream-soft rounded-2xl p-6 sm:p-8 border border-line space-y-5"
            aria-label="Formulaire de contact"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-ink mb-2"
              >
                Nom <span className="text-brown">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full min-h-12 px-4 rounded-lg bg-cream-soft border border-line text-ink placeholder:text-ink-soft/60 focus:border-brown focus:outline-2 focus:outline-gold focus:outline-offset-1 transition-colors"
                placeholder="Marie Dupont"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-ink mb-2"
              >
                Email <span className="text-brown">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full min-h-12 px-4 rounded-lg bg-cream-soft border border-line text-ink placeholder:text-ink-soft/60 focus:border-brown focus:outline-2 focus:outline-gold focus:outline-offset-1 transition-colors"
                placeholder="marie@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-ink mb-2"
              >
                Message <span className="text-brown">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-cream-soft border border-line text-ink placeholder:text-ink-soft/60 focus:border-brown focus:outline-2 focus:outline-gold focus:outline-offset-1 transition-colors resize-y"
                placeholder="Bonjour, je souhaiterais commander..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full inline-flex items-center justify-center min-h-12 px-6 rounded-full bg-brown text-cream-soft font-semibold hover:bg-brown-dark disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
            >
              {status === "sending" ? "Envoi…" : "Envoyer le message"}
            </button>

            <p
              role="status"
              aria-live="polite"
              className={`text-sm text-center min-h-5 ${
                status === "success" ? "text-brown-dark" : "text-transparent"
              }`}
            >
              {status === "success"
                ? "Merci ! Votre message a bien été envoyé."
                : "placeholder"}
            </p>
          </form>

          <div className="rounded-2xl overflow-hidden border border-line shadow-sm min-h-[400px] lg:min-h-full">
            <iframe
              title="Localisation de la boulangerie sur la carte"
              src="https://www.google.com/maps?q=Louhans,+France&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[400px] border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
