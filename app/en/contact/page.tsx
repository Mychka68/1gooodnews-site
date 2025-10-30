'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ContactEN() {
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
      {/* Main logo */}
      <Image
        src="/logo_terre.png"
        alt="1gooodnews Logo"
        width={160}
        height={160}
        style={{ marginBottom: 10, objectFit: 'contain' }}
        priority
      />

      {/* Main title */}
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
        Send us some<br />good news!
      </h1>

      {/* Illustration */}
      <Image
        src="/image_accueil.png"
        alt="Contact illustration"
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

      {/* Main text */}
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
          A great initiative? An inspiring project? A small act of kindness or a hopeful invention?
        </p>
        <p>
          Send it our way! Even if it’s just that Auntie Monique had a fabulous day — we’d love to hear it too 💚
        </p>

        <p style={{ marginTop: 30 }}>
          📬 <a href="mailto:1gooodnews@gmail.com" style={{ color: '#1F6E44', textDecoration: 'underline' }}>
            1gooodnews@gmail.com
          </a>
        </p>

        <p style={{ marginTop: 25 }}>Thanks for sharing! 🌟</p>
      </section>

      {/* Back to homepage */}
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
