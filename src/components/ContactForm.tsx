import { useEffect, useState } from "react";
import type { FormEvent } from "react";

type SubmissionStatus = "idle" | "sending" | "success" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-stone-200 placeholder:text-stone-600 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-colors";
const labelClass = "block text-xs font-medium text-stone-400 uppercase tracking-wider";

export default function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [message, setMessage] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setMessage("Envoi en cours…");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const requesterName = formData.get("name")?.toString().trim();

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        const thanks = requesterName
          ? `Merci ${requesterName}, je reviens vers vous très vite.`
          : "Message envoyé. Je vous recontacte rapidement.";
        setMessage(thanks);
        setToastMessage(thanks);
        form.reset();
      } else {
        setStatus("error");
        setMessage("Une erreur est survenue. Réessayez ou écrivez-moi directement.");
      }
    } catch {
      setStatus("error");
      setMessage("Une erreur est survenue. Réessayez ou écrivez-moi directement.");
    }
  };

  useEffect(() => {
    if (!toastMessage) return;
    const timeout = setTimeout(() => setToastMessage(""), 8000);
    return () => clearTimeout(timeout);
  }, [toastMessage]);

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-5" aria-live="polite">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className={labelClass}>
            Nom / Entreprise
            <input type="text" name="name" placeholder="Votre nom" required className={inputClass} />
          </label>
          <label className={labelClass}>
            Email
            <input type="email" name="email" placeholder="nom@domaine.com" required className={inputClass} />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className={labelClass}>
            Téléphone
            <input type="tel" name="phone" placeholder="06 00 00 00 00" className={inputClass} />
          </label>
          <label className={labelClass}>
            Type de prestation
            <select name="mission" className={inputClass}>
              <option value="inspection">Inspection (toiture / terrain)</option>
              <option value="commercial">Captation commerciale</option>
              <option value="evenement">Couverture événementielle</option>
              <option value="autre">Autre besoin</option>
            </select>
          </label>
        </div>

        <label className={labelClass}>
          Votre projet en quelques mots
          <textarea
            name="message"
            rows={4}
            placeholder="Décrivez votre besoin, la zone d'intervention, les délais…"
            required
            className={inputClass + " resize-none"}
          />
        </label>

        <input type="hidden" name="access_key" value={import.meta.env.PUBLIC_WEB3FORMS_KEY} />
        <input type="hidden" name="subject" value="Nouvelle demande — Stellaris Drone" />

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-neutral-950 hover:bg-gold-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Envoi…" : "Envoyer ma demande"}
        </button>

        {message && (
          <p className={`text-xs ${status === "error" ? "text-red-400" : "text-stone-400"}`}>
            {message}
          </p>
        )}

        <p className="text-[11px] leading-relaxed text-stone-600">
          En soumettant ce formulaire, vous acceptez que Stellaris Drone traite vos
          informations pour répondre à votre demande. Aucune donnée n'est partagée
          avec des tiers.
        </p>
      </form>

      {toastMessage && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-neutral-950/60 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-sm rounded-3xl border border-neutral-800 bg-neutral-900 p-8 text-center shadow-2xl">
            <div className="mx-auto w-12 h-12 rounded-full bg-gold-400/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-stone-100" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif' }}>Demande envoyée</h4>
            <p className="mt-3 text-sm text-stone-400 leading-relaxed">{toastMessage}</p>
            <button
              type="button"
              onClick={() => setToastMessage("")}
              className="mt-6 px-6 py-2 rounded-full border border-neutral-700 text-sm text-stone-300 hover:border-gold-400/30 transition-colors"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}
