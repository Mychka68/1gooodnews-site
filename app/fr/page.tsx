'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  MailIcon,
  CopyIcon,
} from '@/components/ui/SocialIcons'; // adapte le chemin si besoin
import SoftBurstWeb from "@/components/SoftBurstWeb";


export default function AccueilFR() {
  const [showShareBox, setShowShareBox] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = 'https://1gooodnews.app';
  const shareText = "🌱 Une app gratuite et positive : 1 Bonne Nouvelle par Jour ! Découvre-la ici → ";

  const [fire, setFire] = useState(false);

  const handleShare = () => {
    const shareData = {
      title: '1 Bonne Nouvelle par Jour ! 🌱',
      text: shareText,
      url: shareUrl,
    };

    if (navigator.share) {
      navigator.share(shareData).catch((error) => console.error('Erreur de partage :', error));
    } else {
      setShowShareBox(true);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`${shareText}${shareUrl}`)
      .then(() => setCopied(true))
      .catch(() => alert("Impossible de copier le lien"));
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', backgroundColor: '#fff', minHeight: '100vh', padding: '20px 20px 40px 20px' }}>
      <Image src="/logo_terre.png" alt="Logo 1gooodnews" width={160} height={160} style={{ marginBottom: 10, objectFit: 'contain' }} priority />

      <h1 style={{ fontSize: 42, fontWeight: 700, color: '#1F6E44', textAlign: 'center', lineHeight: '45px', fontFamily: 'Poppins, sans-serif', marginTop: 0, marginBottom: 8 }}>
        1 Bonne Nouvelle<br />
        <span style={{ fontSize: '32px' }}>par Jour !</span>
      </h1>

      <div style={{ marginTop: 0, marginBottom: 25 }}>
        <Image src="/logoby.png" alt="Logo by" width={160} height={30} style={{ objectFit: 'contain', display: 'block' }} />
      </div>

      {/* Boutons de téléchargement (inchangés) */}
      <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 10 }}>
        {/* Google Play */}
        <a href="https://play.google.com/store/apps/details?id=TON.PACKAGE" target="_blank" rel="noopener noreferrer" aria-label="Disponible sur Google Play" style={{ backgroundColor: '#4CAF50', borderRadius: 30, padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 150, height: 40, transition: 'background-color 0.3s ease' }}>
          <Image src="/logo-google-play.png" alt="Disponible sur Google Play" width={150} height={40} style={{ objectFit: 'contain' }} priority />
        </a>
        {/* App Store */}
        <a href="https://apps.apple.com/app/idTON_APP_ID" target="_blank" rel="noopener noreferrer" aria-label="Télécharger sur l’App Store" style={{ backgroundColor: '#4CAF50', borderRadius: 30, padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 150, height: 40, transition: 'background-color 0.3s ease' }}>
          <Image src="/logo-app-store.png" alt="Télécharger sur l’App Store" width={150} height={40} style={{ objectFit: 'contain' }} priority />
        </a>
      </div>

      <p style={{ fontStyle: 'italic', color: '#444', fontSize: 15, lineHeight: '22px', marginBottom: 15, marginTop: 15, maxWidth: 400 }}>
        En cours de construction - Téléchargez l'application ici :-) C'est <strong>gratuit</strong>, tout <strong>léger</strong>, sans pub, et juste pour le plaisir !
      </p>

      <hr style={{ width: '20%', height: '2px', backgroundColor: '#4CAF50', border: 'none', borderRadius: '2px', margin: '30px auto 40px auto', opacity: 0.4 }} />

      <section style={{ maxWidth: 500, marginBottom: 40, color: '#333', fontSize: 16, lineHeight: '24px' }}>
        <Image src="/image_accueil.png" alt="Illustration 1gooodnews" width={400} height={150} style={{ objectFit: 'cover', borderRadius: 25, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', marginBottom: 20, maxWidth: '95%', height: 'auto' }} />

        {/* Bouton Partager avec animation */}
<div style={{ position: "relative", display: "inline-block", marginBottom: 10 }}>
  <button
    onClick={() => {
      handleShare();
      setFire(true);
      setTimeout(() => setFire(false), 1200);
    }}
    style={{
      backgroundColor: "#FF9800",
      color: "#fff",
      border: "none",
      borderRadius: 30,
      padding: "10px 22px",
      fontSize: 14,
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    }}
  >
    📤 Partager cette page ? :-)
  </button>
  <SoftBurstWeb fire={fire} />
</div>


        {/* Menu de partage fallback */}
        {showShareBox && (
          <div
  style={{
  backgroundColor: '#fff5d1',           // Fond pastel doux
  padding: '24px',
  borderRadius: '50px',
  margin: '20px auto',
  maxWidth: '320px',
  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.1)',  // Ombre douce
  border: '2px solid #ffd591',          // ✅ Bord orange clair
  textAlign: 'left',
}}
>
            <p style={{ fontWeight: 'bold', marginBottom: 12, marginTop: 1 }}>Choisissez une plateforme :-)</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank"
  rel="noopener noreferrer"
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
    fontSize: '16px',
    color: '#000', // noir doux
    fontWeight: '500',
  }}><FacebookIcon /> Facebook</a>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText + shareUrl)}`} target="_blank"
  rel="noopener noreferrer"
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
    fontSize: '16px',
    color: '#000', // noir doux
    fontWeight: '500',
  }}><TwitterIcon /> Twitter</a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank"
  rel="noopener noreferrer"
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
    fontSize: '16px',
    color: '#000', // noir doux
    fontWeight: '500',
  }}><LinkedinIcon /> LinkedIn</a>
              <a href={`mailto:?subject=1 Bonne Nouvelle par Jour !&body=${encodeURIComponent(shareText + shareUrl)}`}target="_blank"
  rel="noopener noreferrer"
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
    fontSize: '16px',
    color: '#000', // noir doux
    fontWeight: '500',
  }}><MailIcon />Email</a>
              <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + shareUrl)}`} target="_blank"
  rel="noopener noreferrer"
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
    fontSize: '16px',
    color: '#000', // noir doux
    fontWeight: '500',
  }}><WhatsappIcon />WhatsApp</a>
              <button
  onClick={handleCopy}
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '16px',
    color: '#000',
    fontWeight: '500',
    cursor: 'pointer',
    padding: '0',
  }}
>
  <CopyIcon size={24} />
  Ou juste copier le lien :-)
</button>
              {copied && (
  <p style={{ color: '#4CAF50', marginTop: '10px', fontSize: '15px' }}>
    ✅ Lien copié. Merci du partage ! :-) 🌱
  </p>
)}
            </div>
          </div>
        )}

        <p>
          <i style={{ fontSize: '18px' }}>Humanitaire, animaux, science<br /> environnement, technologie...</i><br /><br />
          L’application <strong>1gooodnews</strong> vous partage chaque jour une bonne nouvelle réelle et vérifiée, issue du monde entier : des avancées humaines, scientifiques ou écologiques, des actes de bonté, et des sourires à offrir. 🌍💚
        </p>
      </section>

      <Link href="/fr/archives" style={{ backgroundColor: '#4CAF50', padding: '14px 24px', borderRadius: 30, marginBottom: 40, width: '100%', maxWidth: 300, color: '#fff', fontSize: 16, textAlign: 'center', textDecoration: 'none', display: 'inline-block', transition: 'background-color 0.3s ease' }}>Voir les archives de bonnes nouvelles !</Link>

      <div
  style={{
    display: 'flex',
    gap: 30,
    fontSize: 14,
    color: '#777',
    marginBottom: 40,
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}
>
  <Link href="/fr/qui-sommes-nous" style={{ textDecoration: 'none', color: '#1F6E44' }}>
    Qui sommes-nous ?
  </Link>

  <Link href="/fr/contact" style={{ textDecoration: 'none', color: '#1F6E44' }}>
    Envoyez-nous une bonne nouvelle !
  </Link>

  <Link href="/fr/confidentialite" style={{ textDecoration: 'none', color: '#1F6E44' }}>
    Politique de confidentialité
  </Link>
</div>
    </main>
  );
}
