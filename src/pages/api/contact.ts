import type { APIRoute } from 'astro';
import { addContact } from '../../../backend/backend.mjs';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { nom_complet, email, telephone, sujet, message } = data;

    if (!nom_complet || !email || !sujet || !message) {
      return new Response(
        JSON.stringify({ error: 'Les champs nom, email, sujet et message sont requis.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Adresse email invalide.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // send exactly the field names PocketBase expects
    const record = await addContact({
      nom_complet,
      email,
      telephone: telephone || '',
      sujet,
      message,
    });

    console.log('Contact sauvegardé:', record?.id);

    return new Response(
      JSON.stringify({ success: true, message: 'Votre message a été envoyé avec succès !' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('Erreur formulaire contact:', error?.response?.data || error);
    return new Response(
      JSON.stringify({ error: 'Erreur serveur, veuillez réessayer.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};