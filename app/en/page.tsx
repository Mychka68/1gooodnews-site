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
} from '@/components/ui/SocialIcons';
import SoftBurstWeb from '@/components/SoftBurstWeb';

export default function HomeEN() {
  const [showShareBox, setShowShareBox] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fire, setFire] = useState(false);

  const shareUrl = 'https://1gooodnews.app';
  const shareText =
    "🌱 A free, positive, ad-free app to read 1 good news a day! Discover it here → ";

  const handleShare = () => {
    const shareData = {
      title: '1 Good News a Day! 🌱',
      text: shareText,
      url: shareUrl,
    };

    if (navigator.share) {
      navigator.share(shareData).catch((error) => console.error('Sharing error:', error));
    } else {
      setShowShareBox(true);
    }

    // ✨ trigger the animation
    setFire(true);
    setTimeout(() => setFire(false), 1200);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(`${shareText}${shareUrl}`)
      .then(() => setCopied(true))
      .catch(() => alert("Couldn't copy the link"));
  };

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
      {/* 🌍 Logo */}
      <Image
        src="/logo_terre.png"
        alt="1gooodnews Logo"
        width={160}
        height={160}
        style={{ marginBottom: 10, objectFit: 'contain' }}
        priority
      />

      {/* 🌿 Title */}
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

      {/* by logo */}
      <div style={{ marginTop: 0, marginBottom: 25 }}>
        <Image
          src="/logoby.png"
          alt="Logo by"
          width={160}
          height={30}
          style={{ objectFit: 'contain', display: 'block' }}
        />
      </div>

      {/* 📱 Download buttons */}
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
        Under construction – Download the app here :-) It’s <strong>free</strong>, super{' '}
        <strong>light</strong>, ad-free, and just for fun!
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

      {/* 🌸 Section */}
      <section
        style={{
          maxWidth: 500,
          marginBottom: 40,
          color: '#333',
          fontSize: 16,
          lineHeight: '24px',
          textAlign: 'center',
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

        {/* 💛 Share button with animation */}
        <div
          style={{
            marginTop: 20,
            textAlign: 'center',
            position: 'relative',
            display: 'block',
          }}
        >
          <div style={{ display: 'inline-block', position: 'relative' }}>
            <button
              onClick={handleShare}
              style={{
                backgroundColor: '#FF9800',
                color: '#fff',
                border: 'none',
                borderRadius: 30,
                padding: '10px 22px',
                fontSize: 14,
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
            >
              📤 Share this page? :-)
            </button>
            {fire && <SoftBurstWeb fire />}
          </div>

          {/* 💬 Share fallback box */}
          {showShareBox && (
            <div
              style={{
                backgroundColor: '#fff5d1',
                padding: '24px',
                borderRadius: '50px',
                margin: '20px auto',
                maxWidth: '320px',
                boxShadow: '0 6px 24px rgba(0, 0, 0, 0.1)',
                border: '2px solid #ffd591',
                textAlign: 'left',
              }}
            >
              <p style={{ fontWeight: 'bold', marginBottom: 12, marginTop: 1 }}>
                Choose your platform :-)
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    textDecoration: 'none',
                    fontSize: '16px',
                    color: '#000',
                    fontWeight: '500',
                  }}
                >
                  <FacebookIcon /> Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    shareText + shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    textDecoration: 'none',
                    fontSize: '16px',
                    color: '#000',
                    fontWeight: '500',
                  }}
                >
                  <TwitterIcon /> Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    textDecoration: 'none',
                    fontSize: '16px',
                    color: '#000',
                    fontWeight: '500',
                  }}
                >
                  <LinkedinIcon /> LinkedIn
                </a>
                <a
                  href={`mailto:?subject=1 Good News a Day!&body=${encodeURIComponent(
                    shareText + shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    textDecoration: 'none',
                    fontSize: '16px',
                    color: '#000',
                    fontWeight: '500',
                  }}
                >
                  <MailIcon /> Email
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    shareText + shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    textDecoration: 'none',
                    fontSize: '16px',
                    color: '#000',
                    fontWeight: '500',
                  }}
                >
                  <WhatsappIcon /> WhatsApp
                </a>
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
                  <CopyIcon size={24} /> Or just copy the link :-)
                </button>
                {copied && (
                  <p
                    style={{
                      color: '#4CAF50',
                      marginTop: '10px',
                      fontSize: '15px',
                    }}
                  >
                    ✅ Link copied. Thank you for sharing! :-) 🌱
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* 💬 Description */}
        <p>
          <i style={{ fontSize: '18px' }}>
            Humanitarian, animals, science,<br /> environment, technology...
          </i>
          <br />
          <br />
          The <strong>1gooodnews</strong> app shares one real, verified good news
          every day — from scientific progress and environmental protection to
          simple acts of kindness. 🌍💚
        </p>
      </section>

      {/* 📚 Archives */}
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
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#43A047')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4CAF50')}
      >
        Browse good news archives!
      </Link>

      {/* Footer */}
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
        <Link href="/en/about-us" style={{ textDecoration: 'none', color: '#1F6E44' }}>
          About us
        </Link>

        <Link href="/en/contact" style={{ textDecoration: 'none', color: '#1F6E44' }}>
          Submit a good news!
        </Link>
        
        <Link href="/en/privacy" style={{ textDecoration: 'none', color: '#1F6E44' }}>
          Privacy
        </Link>
      </div>
    </main>
  );
}
