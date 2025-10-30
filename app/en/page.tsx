'use client';

import Image from 'next/image';
import Link from 'next/link';

function handleShare() {
  if (navigator.share) {
    navigator
      .share({
        title: '1 Good News a Day! 🌱',
        text: "A free, ad-free, heartwarming app to read 1 good news every day!",
        url: 'https://1gooodnews.app',
      })
      .catch((error) => console.error('Sharing error:', error));
  } else {
    navigator.clipboard
      .writeText('https://1gooodnews.app')
      .then(() => alert('Link copied to clipboard!'))
      .catch(() => alert("Couldn't copy the link"));
  }
}

export default function HomeEN() {
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
          fontSize: 42,
          fontWeight: 700,
          color: '#1F6E44',
          textAlign: 'center',
          lineHeight: '45px',
          fontFamily: 'Poppins, sans-serif',
          marginTop: 0,
          marginBottom: 8,
        }}
      >
        1 Good News<br />
        <span style={{ fontSize: '32px' }}>a Day!</span>
      </h1>

      {/* "by" logo */}
      <div style={{ marginTop: 0, marginBottom: 25 }}>
        <Image
          src="/logoby.png"
          alt="Logo by"
          width={160}
          height={30}
          style={{
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>

      {/* Download buttons */}
      <div
        style={{
          display: 'flex',
          gap: 20,
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 10,
        }}
      >
        {/* Google Play */}
        <a
          href="https://play.google.com/store/apps/details?id=TON.PACKAGE"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Available on Google Play"
          style={{
            backgroundColor: '#4CAF50',
            borderRadius: 30,
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 150,
            height: 40,
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = '#43A047')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = '#4CAF50')
          }
        >
          <Image
            src="/logo-google-play.png"
            alt="Available on Google Play"
            width={150}
            height={40}
            style={{ objectFit: 'contain' }}
            priority
          />
        </a>

        {/* App Store */}
        <a
          href="https://apps.apple.com/app/idTON_APP_ID"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download on the App Store"
          style={{
            backgroundColor: '#4CAF50',
            borderRadius: 30,
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 150,
            height: 40,
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = '#43A047')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = '#4CAF50')
          }
        >
          <Image
            src="/logo-app-store.png"
            alt="Download on the App Store"
            width={150}
            height={40}
            style={{ objectFit: 'contain' }}
            priority
          />
        </a>
      </div>

      {/* Text below buttons */}
      <p
        style={{
          fontStyle: 'italic',
          color: '#444',
          fontSize: 15,
          lineHeight: '22px',
          marginBottom: 15,
          marginTop: 15,
          maxWidth: 400,
        }}
      >
        Site under construction - Download the app here :-) It’s <strong>free</strong>, super{' '}
        <strong>lightweight</strong>, ad-free, and just for the joy!
      </p>

      <hr
        style={{
          width: '20%',
          height: '2px',
          backgroundColor: '#4CAF50',
          border: 'none',
          borderRadius: '2px',
          margin: '30px auto 40px auto',
          opacity: 0.4,
        }}
      />

      {/* About section */}
      <section
        style={{
          maxWidth: 500,
          marginBottom: 40,
          color: '#333',
          fontSize: 16,
          lineHeight: '24px',
        }}
      >
        <Image
          src="/image_accueil.png"
          alt="1gooodnews illustration"
          width={400}
          height={150}
          style={{
            objectFit: 'cover',
            borderRadius: 25,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            marginBottom: 20,
            maxWidth: '95%',
            height: 'auto',
          }}
        />

{/* Share Button */}
      <button
        onClick={handleShare}
        style={{
          backgroundColor: '#FF9800',
          color: '#fff',
          border: 'none',
          borderRadius: 30,
          padding: '10px 22px',
          fontSize: 14,
          marginBottom: 10,
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = '#F57C00')
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = '#FF9800')
        }
      >
        📤 Share this page ? :-)
      </button>

        <p>
          <i style={{ fontSize: '18px' }}>
            Humanitarian, animals, science,<br /> environment, technology...
          </i>
          <br />
          <br />
          The <strong>1gooodnews</strong> app shares a real, verified good news
          story from around the world every day — human progress, ecological
          wins, scientific breakthroughs, or just pure kindness and smiles. 🌍💚
        </p>
      </section>

      {/* Archives button */}
      <Link
        href="/en/archives"
        style={{
          backgroundColor: '#4CAF50',
          padding: '14px 24px',
          borderRadius: 30,
          marginBottom: 40,
          width: '100%',
          maxWidth: 300,
          color: '#fff',
          fontSize: 16,
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = '#43A047')
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = '#4CAF50')
        }
      >
        Browse good news archives!
      </Link>

      {/* Footer links */}
      <div
        style={{
          display: 'flex',
          gap: 30,
          fontSize: 14,
          color: '#777',
          marginBottom: 40,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Link
          href="/en/about-us"
          style={{ textDecoration: 'none', color: '#1F6E44' }}
        >
          About us
        </Link>
        <Link
          href="/en/contact"
          style={{ textDecoration: 'none', color: '#1F6E44' }}
        >
          Submit a good news!
        </Link>
      </div>
    </main>
  );
}
