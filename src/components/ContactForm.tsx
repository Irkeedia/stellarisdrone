import { useEffect, useState } from "react";
import type { FormEvent } from "react";

type SubmissionStatus = "idle" | "sending" | "success" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = "8d1b3a1c-e865-4d8f-8593-f993f7a8874f";

export default function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [message, setMessage] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setMessage("Envoi en cours...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);
    const requesterName = formData.get("name")?.toString().trim();

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        const personalizedThanks = requesterName ? `Merci ${requesterName}, je reviens vers vous très vite.` : "Message envoyé. Merci, je vous recontacte rapidement.";
        setMessage(personalizedThanks);
        setToastMessage(personalizedThanks);
        form.reset();
      } else {
        console.error("Web3Forms error", data);
        setStatus("error");
        setMessage("Une erreur est survenue. Merci de réessayer ou de m'écrire directement.");
      }
    } catch (error) {
      console.error("Submission error", error);
      setStatus("error");
      setMessage("Une erreur est survenue. Merci de réessayer ou de m'écrire directement.");
    }
  };

  useEffect(() => {
    if (!toastMessage) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setToastMessage("");
    }, 8000);

    return () => window.clearTimeout(timeout);
  }, [toastMessage]);

  return (
    <>
      <form onSubmit={onSubmit} className="mt-6 space-y-5" aria-live="polite">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col text-sm text-gray-300">
          Nom
          <input
            type="text"
            name="name"
            placeholder="Entreprise / Nom"
            required
            className="mt-2 rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          />
        </label>
        <label className="flex flex-col text-sm text-gray-300">
          Email
          <input
            type="email"
            name="email"
            placeholder="nom@domaine.com"
            required
            className="mt-2 rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          />
        </label>
      </div>
      <label className="flex flex-col text-sm text-gray-300">
        Téléphone (optionnel)
        <input
          type="tel"
          name="phone"
          placeholder="07 81 73 01 14"
          className="mt-2 rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
        />
      </label>
      <label className="flex flex-col text-sm text-gray-300">
        Type de mission
        <select
          name="mission"
          className="mt-2 rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
        >
          <option className="bg-black" value="inspection">
            Inspection / toiture
          </option>
          <option className="bg-black" value="cartographie">
            Cartographie légère / terrain
          </option>
          <option className="bg-black" value="creative">
            Photo / vidéo immobilière
          </option>
          <option className="bg-black" value="portrait">
            Portrait / projet personnel
          </option>
          <option className="bg-black" value="autre">
            Autre besoin
          </option>
        </select>
      </label>
      <label className="flex flex-col text-sm text-gray-300">
        Détails supplémentaires
        <textarea
          name="message"
          rows={4}
          placeholder="Zone d’intervention, contraintes, délais…"
          required
          className="mt-2 rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
        />
      </label>
      <input type="hidden" name="subject" value="Nouvelle demande via le site Stellaris Drone" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Envoi..." : "Envoyer la demande"}
      </button>
      {message && (
        <p className="text-xs leading-relaxed text-gray-300">
          {message}
        </p>
      )}
      <p className="text-xs leading-relaxed text-gray-400">
        En soumettant ce formulaire, vous acceptez que Stellaris Drone traite vos informations pour vous répondre. Aucune donnée n’est partagée avec des tiers sans votre accord.
      </p>
      </form>
      {toastMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="relative w-full max-w-sm rounded-3xl border border-white/15 bg-black/90 p-6 text-white shadow-2xl">
            <button
              type="button"
              onClick={() => setToastMessage("")}
              className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/10 p-1 text-xs font-semibold uppercase tracking-[0.25em] text-gray-200 transition hover:bg-white/20"
              aria-label="Fermer le message"
            >
              ×
            </button>
            <h4 className="text-lg font-semibold">Merci !</h4>
            <p className="mt-3 text-sm leading-relaxed text-gray-200">{toastMessage}</p>
          </div>
        </div>
      )}
    </>
  );
}
