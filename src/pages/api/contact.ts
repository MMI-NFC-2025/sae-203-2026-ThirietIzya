import type { APIRoute } from 'astro';
import PocketBase from 'pocketbase';
import { addContact } from '../../../backend/backend.mjs';

// you can also create a .env and use PB_URL there
const PB_URL = 'http://127.0.0.1:8090';

export const POST: APIRoute = async ({ request }) => {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Méthode non autorisée' }), { status: 405 });
  }

  try {
    const data = await request.json();
    // form uses english names, map them to pb field names
    const {
      name: nom,
      email,
      subject: sujet,
      message,
      phone: telephone,
      newsletter,
    } = data;

    if (!nom || !email || !sujet || !message) {
      return new Response(JSON.stringify({ error: 'Tous les champs sont requis' }), { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Adresse email invalide' }), { status: 400 });
    }

    // forward mapped data to helper
    const record = await addContact({ nom_complet: nom, email, sujet, message, telephone, newsletter });

    console.log('Message de contact sauvegardé:', record?.id);

    return new Response(
      JSON.stringify({ success: true, message: 'Votre message a été envoyé avec succès!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('Erreur lors du traitement du formulaire:', error);
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), { status: 500 });
  }
};