'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsEN() {
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
        alt="1gooodnews Logo"
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
        About us
      </h1>

      {/* Illustration */}
      <Image
        src="/image_accueil.png"
        alt="Team illustration"
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
          “Us”, actually, is just one little woman, in her pajamas on her couch, who created this app on a rainy Monday — simply wanting to give herself a smile every morning :-) 💚
          <br /><br />
          <strong>1gooodNews</strong>was born from a very simple wish:
          to show that, all around the world, beautiful, useful, and kind things happen every single day —
          and that all it takes is to notice them :-)
          <br /><br />
          The daily selection is based on manual curation, guided by whatever inspires me in the moment :-)
          <br /><br />
          Thank you for being here, and for giving yourself, like I do, this little breath of fresh air in your day 🌱          <br /><br />
        </p>
      </section>

      {/* Bouton retour accueil */}
      <Link
        href="/en"
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
        ⬅ Back to homepage
      </Link>
    </main>
  );
}
