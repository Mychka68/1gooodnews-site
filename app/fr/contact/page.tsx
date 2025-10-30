'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ContactFR() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#fff',
        minHeight: '100vh',
        padding: '20px 20px 40px 20px',
      }}
    >
      {/* Logo principal */}
      <Image
        src="/logo_terre.png"
        alt="Logo 1gooodnews"
        width={160}
        height={160}
        style={{ marginBottom: 10, objectFit: 'contain' }}
        priority
      />

      {/* Titre principal */}
      <h1
        style={{
          fontSize: 30,
          fontWeight: 700,
          color: '#1F6E44',
          textAlign: 'center',
          lineHeight: '38px',
          fontFamily: 'Poppins, sans-serif',
          marginTop: 0,
          marginBottom: 20,
        }}
      >
        Envoyez-nous une<br />bonne nouvelle !
      </h1>

      {/* Illustration */}
      <Image
        src="/image_accueil.png"
        alt="Illustration contact"
        width={400}
        height={150}
        style={{
          objectFit: 'cover',
          borderRadius: 25,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          marginBottom: 30,
          maxWidth: '95%',
          height: 'auto',
        }}
      />

      {/* Texte principal */}
      <section
        style={{
          maxWidth: 500,
          color: '#333',
          fontSize: 16,
          lineHeight: '24px',
          marginBottom: 40,
        }}
      >
        <p>
          Une belle initiative ? Un projet inspirant ? Un acte de bonté ou une invention pleine d’espoir ?
        </p>
        <p>
          Écrivez-nous, même si c’est juste pour nous dire que Tatie Monique a passé une fabuleuse journée — ça compte aussi 💚
        </p>

        <p style={{ marginTop: 30 }}>
          📬 <a href="mailto:1gooodnews@gmail.com" style={{ color: '#1F6E44', textDecoration: 'underline' }}>
            1gooodnews@gmail.com
          </a>
        </p>

        <p style={{ marginTop: 25 }}>Merci pour votre partage ! 🌟</p>
      </section>

      {/* Bouton retour accueil */}
      <Link
        href="/fr"
        style={{
          backgroundColor: '#4CAF50',
          padding: '12px 24px',
          borderRadius: 30,
          marginBottom: 30,
          color: '#fff',
          fontSize: 16,
          textDecoration: 'none',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#43A047')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4CAF50')}
      >
        ⬅ Retour à l’accueil
      </Link>
    </main>
  );
}
