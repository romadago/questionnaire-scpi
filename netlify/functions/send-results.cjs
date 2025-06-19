// Fichier : netlify/functions/send-results.cjs

// On utilise la syntaxe require, plus robuste pour les fonctions Netlify.
const { Resend } = require('resend');

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = JSON.parse(event.body);
    const { email, quizTitle, score, maxScore, resultLabel, resultDescription, fullAnswers } = data;

    // --- Génération du tableau HTML des réponses ---
    let answersHtml = '';
    if (fullAnswers && Array.isArray(fullAnswers) && fullAnswers.length > 0) {
      answersHtml = `
        <h3 style="color: #333;">Détail de vos réponses :</h3>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
          <thead style="background-color: #eee;">
            <tr>
              <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Question</th>
              <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Votre réponse</th>
            </tr>
          </thead>
          <tbody>
            ${fullAnswers.map(item => `
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;">${item.question}</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${item.answer}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    }
    
    // --- Email pour le client ---
    const emailToClient = {
      from: 'Aeternia Patrimoine <contact@aeterniapatrimoine.fr>',
      to: [email],
      subject: `Vos résultats au questionnaire : ${quizTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>Bonjour,</h2>
          <p>Merci d'avoir participé à notre questionnaire "<strong>${quizTitle}</strong>".</p>
          <p>Voici votre profil d'investisseur :</p>
          <div style="background-color: #f4f4f4; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #0056b3;">${resultLabel} (${score}/${maxScore} points)</h3>
            <p><em>${resultDescription}</em></p>
          </div>
          <br>
          ${answersHtml}
          <br>
          <p>N'hésitez pas à prendre rendez-vous pour discuter de vos résultats.</p>
          <p>Cordialement,<br><strong>L'équipe Aeternia Patrimoine</strong></p>
        </div>
      `,
    };

    // --- Email de notification pour vous ---
    const emailToAdmin = {
      from: 'Notification Questionnaire <noreply@aeterniapatrimoine.fr>',
      to: ['contact@aeterniapatrimoine.fr'],
      subject: `Nouveau résultat - Questionnaire "${quizTitle}"`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>Nouveau prospect !</h2>
          <p>Un nouveau prospect a terminé le questionnaire "<strong>${quizTitle}</strong>".</p>
          <ul>
            <li><strong>Email du prospect :</strong> ${email}</li>
            <li><strong>Profil de risque :</strong> ${resultLabel}</li>
            <li><strong>Score :</strong> ${score}/${maxScore}</li>
          </ul>
          <br>
          ${answersHtml}
        </div>
      `,
    };

    // --- Envoi des deux emails ---
    await Promise.all([
        resend.emails.send(emailToClient),
        resend.emails.send(emailToAdmin)
    ]);

    return { statusCode: 200, body: JSON.stringify({ message: 'Email envoyé avec succès !' }) };

  } catch (error) {
    console.error("Erreur dans la fonction Netlify :", error);
    return { statusCode: 500, body: JSON.stringify({ error: "Une erreur est survenue." }) };
  }
};
