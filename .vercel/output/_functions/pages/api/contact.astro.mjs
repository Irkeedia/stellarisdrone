import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const MISSION_LABELS = {
  inspection: "Inspection (toiture / terrain)",
  commercial: "Captation commerciale",
  evenement: "Couverture événementielle",
  autre: "Autre besoin"
};
const POST = async ({ request }) => {
  const resend = new Resend(undefined                              );
  const ownerEmail = "contact@stellarisdrone.com";
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ success: false, message: "Requête invalide." }), { status: 400 });
  }
  const { name, email, phone, mission, message } = body;
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return new Response(JSON.stringify({ success: false, message: "Champs requis manquants." }), { status: 400 });
  }
  const missionLabel = MISSION_LABELS[mission] || mission || "Non précisé";
  const notifHtml = `
<div style="font-family:'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;border:1px solid #262626;border-radius:16px;overflow:hidden">
  <div style="background:linear-gradient(135deg,#b8860b,#d4a537);padding:24px 32px">
    <h1 style="margin:0;font-size:20px;color:#0a0a0a;font-weight:700">🚁 Nouvelle demande — Stellaris Drone</h1>
  </div>
  <div style="padding:32px">
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:10px 0;color:#a8a29e;font-size:13px;width:120px;vertical-align:top">Nom</td><td style="padding:10px 0;color:#e7e5e4;font-size:14px;font-weight:600">${escapeHtml(name)}</td></tr>
      <tr><td style="padding:10px 0;color:#a8a29e;font-size:13px;vertical-align:top">Email</td><td style="padding:10px 0;color:#e7e5e4;font-size:14px"><a href="mailto:${escapeHtml(email)}" style="color:#d4a537;text-decoration:none">${escapeHtml(email)}</a></td></tr>
      <tr><td style="padding:10px 0;color:#a8a29e;font-size:13px;vertical-align:top">Téléphone</td><td style="padding:10px 0;color:#e7e5e4;font-size:14px">${phone ? escapeHtml(phone) : "—"}</td></tr>
      <tr><td style="padding:10px 0;color:#a8a29e;font-size:13px;vertical-align:top">Prestation</td><td style="padding:10px 0;color:#e7e5e4;font-size:14px">${escapeHtml(missionLabel)}</td></tr>
    </table>
    <div style="margin-top:20px;padding:16px;background:#141414;border-radius:12px;border:1px solid #262626">
      <p style="margin:0 0 8px;color:#a8a29e;font-size:12px;text-transform:uppercase;letter-spacing:1px">Message</p>
      <p style="margin:0;color:#e7e5e4;font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>
  </div>
</div>`;
  const confirmHtml = `
<div style="font-family:'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;border:1px solid #262626;border-radius:16px;overflow:hidden">
  <div style="background:linear-gradient(135deg,#b8860b,#d4a537);padding:28px 32px;text-align:center">
    <h1 style="margin:0;font-size:22px;color:#0a0a0a;font-weight:700">Stellaris Drone</h1>
    <p style="margin:6px 0 0;font-size:13px;color:#0a0a0a;opacity:0.7">Captation aérienne par drone · Aude, Occitanie</p>
  </div>
  <div style="padding:32px">
    <h2 style="margin:0 0 16px;font-size:18px;color:#e7e5e4;font-weight:600">Bonjour ${escapeHtml(name.split(" ")[0])},</h2>
    <p style="margin:0 0 16px;color:#a8a29e;font-size:14px;line-height:1.7">
      Votre demande a bien été reçue. Je la consulte et je reviens vers vous <strong style="color:#e7e5e4">sous 24h</strong> avec une réponse personnalisée.
    </p>
    <div style="margin:24px 0;padding:16px;background:#141414;border-radius:12px;border:1px solid #262626">
      <p style="margin:0 0 8px;color:#a8a29e;font-size:12px;text-transform:uppercase;letter-spacing:1px">Récapitulatif</p>
      <p style="margin:0 0 4px;color:#e7e5e4;font-size:13px"><strong>Prestation :</strong> ${escapeHtml(missionLabel)}</p>
      <p style="margin:0;color:#a8a29e;font-size:13px;line-height:1.6;white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>
    <p style="margin:24px 0 0;color:#a8a29e;font-size:14px;line-height:1.7">
      À très vite,<br>
      <strong style="color:#d4a537">Mathieu Toffolon</strong><br>
      <span style="font-size:12px;color:#78716c">Télépilote certifié DGAC · Narbonne</span>
    </p>
  </div>
  <div style="padding:16px 32px;border-top:1px solid #262626;text-align:center">
    <p style="margin:0;color:#57534e;font-size:11px">© 2026 Stellaris Drone — stellarisdrone.com</p>
  </div>
</div>`;
  try {
    const [notifResult, confirmResult] = await Promise.all([
      resend.emails.send({
        from: `Stellaris Drone <${undefined                           || "onboarding@resend.dev"}>`,
        to: ownerEmail,
        replyTo: email,
        subject: `Nouvelle demande — ${escapeHtml(name)} · ${escapeHtml(missionLabel)}`,
        html: notifHtml
      }),
      resend.emails.send({
        from: `Stellaris Drone <${undefined                           || "onboarding@resend.dev"}>`,
        to: email,
        subject: "Votre demande a bien été reçue — Stellaris Drone",
        html: confirmHtml
      })
    ]);
    if (notifResult.error || confirmResult.error) {
      console.error("Resend error:", notifResult.error || confirmResult.error);
      return new Response(JSON.stringify({ success: false, message: "Erreur lors de l'envoi." }), { status: 500 });
    }
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return new Response(JSON.stringify({ success: false, message: "Erreur serveur." }), { status: 500 });
  }
};
function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
