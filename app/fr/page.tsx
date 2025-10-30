'use client';

import Image from 'next/image';
import Link from 'next/link';

function handleShare() {
  if (navigator.share) {
    navigator
      .share({
        title: '1 Bonne Nouvelle par Jour ! 🌱',
        text: "Une app gratuite, positive et sans pub pour lire 1 bonne nouvelle par jour !",
        url: 'https://1gooodnews.app',
      })
      .catch((error) => console.error('Erreur de partage :', error));
  } else {
    navigator.clipboard
      .writeText('https://1gooodnews.app')
      .then(() => alert('Lien copié dans le presse-papier !'))
      .catch(() => alert("Impossible de copier le lien"));
  }
}

export default function AccueilFR() {
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
        1 Bonne Nouvelle<br />
        <span style={{ fontSize: '32px' }}>par Jour !</span>
      </h1>

      {/* Petit logo “by” */}
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

      {/* Boutons de téléchargement */}
      <div
        style={{
          display: 'flex',
          gap: 20,
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 10,
        }}
      >
        {/* Bouton Google Play */}
        <a
          href="https://play.google.com/store/apps/details?id=TON.PACKAGE"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Disponible sur Google Play"
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
            alt="Disponible sur Google Play"
            width={150}
            height={40}
            style={{ objectFit: 'contain' }}
            priority
          />
        </a>

        {/* Bouton App Store */}
        <a
          href="https://apps.apple.com/app/idTON_APP_ID"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Télécharger sur l’App Store"
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
            alt="Télécharger sur l’App Store"
            width={150}
            height={40}
            style={{ objectFit: 'contain' }}
            priority
          />
        </a>
      </div>

      {/* Texte en dessous des boutons */}
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
        Téléchargez l'application ici :-) C'est <strong>gratuit</strong>, tout{' '}
        <strong>léger</strong>, sans pub, et juste pour le plaisir !
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

      {/* Section explicative */}
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
          alt="Illustration 1gooodnews"
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

{/* Bouton Partager la page */}
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
        📤 Partager cette page ? :-)
      </button>


        <p>
          <i style={{ fontSize: '18px' }}>
            Humanitaire, animaux, science<br /> environnement, technologie...
          </i>
          <br />
          <br />
          L’application <strong>1gooodnews</strong> vous partage chaque jour une
          bonne nouvelle réelle et vérifiée, issue du monde entier : des
          avancées humaines, scientifiques ou écologiques, des actes de bonté,
          et des sourires à offrir. 🌍💚
        </p>
      </section>

      {/* Bouton archives */}
      <Link
        href="/fr/archives"
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
        Voir les archives de bonnes nouvelles !
      </Link>

      {/* Liens de bas de page */}
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
          href="/fr/qui-sommes-nous"
          style={{ textDecoration: 'none', color: '#1F6E44' }}
        >
          Qui sommes-nous ?
        </Link>
        <Link
          href="/fr/contact"
          style={{ textDecoration: 'none', color: '#1F6E44' }}
        >
          Envoyez-nous une bonne nouvelle !
        </Link>
      </div>
    </main>
  );
}
