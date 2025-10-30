'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function QuiSommesNousFR() {
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

      {/* Titre */}
      <h1
        style={{
          fontSize: 38,
          fontWeight: 700,
          color: '#1F6E44',
          textAlign: 'center',
          lineHeight: '44px',
          fontFamily: 'Poppins, sans-serif',
          marginTop: 0,
          marginBottom: 20,
        }}
      >
        Qui sommes-nous ?
      </h1>

      {/* Illustration */}
      <Image
        src="/image_accueil.png"
        alt="Illustration de l'équipe"
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
          "Nous", en réalité, c'est juste une petite nana, en pyjama sur son canapé, qui a créé cette appli par un lundi pluvieux, avec l'envie de se donner le sourire tous les matins :-) 💚
          <br /><br />
          <strong>1gooodNews</strong>est née d’une envie toute simple : 
           montrer que, partout dans le monde, des choses belles, utiles et bienveillantes se passent chaque jour —
           et qu'il suffit de les regarder :-)
          <br /><br />
          La sélection quotidienne repose sur une veille manuelle, en fonction de l'élan qui me porte dans l'instant :-) 
          <br /><br />
          Merci d’être là, et de vous accorder, comme moi, ce petit espace de respiration dans votre journée 🌱
          <br /><br />
        </p>
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
