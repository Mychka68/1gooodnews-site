'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabase';
import { usePathname } from 'next/navigation';
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  MailIcon,
  CopyIcon,
} from '@/components/ui/SocialIcons';

const shareUrl = 'https://1gooodnews.app';
const shareText = '🌱 1 Bonne Nouvelle par Jour !\n';

const shareArticle = async (title, text, url) => {
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
    } catch (err) {
      console.error('Erreur lors du partage :', err);
    }
  } else {
    alert("Le partage Web n'est pas pris en charge sur cet appareil.");
  }
};

type Article = {
  id: number;
  title_fr: string;
  title_en: string;
  content_fr: string;
  content_en: string;
  source1: string;
  source2: string;
  image_url: string;
  notified_at: string;
};

export default function ArchivesPage() {
  const pathname = usePathname();
  const isFrench = pathname.startsWith('/fr');
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [showShareBoxId, setShowShareBoxId] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const pageSize = 10;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const today = new Date().toISOString();
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .lt('notified_at', today)
        .order('publish_date', { ascending: false })
        .range((page - 1) * pageSize, page * pageSize - 1);

      if (error) {
        console.error('Erreur :', error);
      } else {
        setArticles(data);
      }
      setLoading(false);
    };

    fetchArticles();
  }, [page]);

  return (
    <main style={{ padding: '40px 20px', fontFamily: 'Poppins, sans-serif' }}>
      <h1 style={{ fontSize: 30, color: '#1F6E44', marginBottom: 30 }}>
        {isFrench ? 'Archives des Bonnes Nouvelles !' : 'Good News Archives !'}
      </h1>

      {loading ? (
        <p>Chargement...</p>
      ) : (
        articles.map((article) => (
          <div
            key={article.id}
            style={{
              marginBottom: 40,
              padding: 20,
              border: '1px solid #ddd',
              borderRadius: 12,
              backgroundColor: '#f9f9f9',
            }}
          >
            {article.image_url && (
              <img
                src={supabase.storage.from('image_url').getPublicUrl(article.image_url).data.publicUrl}
                alt="Illustration"
                style={{
                  width: '100%',
                  maxHeight: 300,
                  objectFit: 'cover',
                  marginBottom: 16,
                  borderRadius: 8,
                }}
              />
            )}

            <h2 style={{ color: '#4CAF50' }}>
              {isFrench ? article.title_fr : article.title_en}
            </h2>
            <p>{isFrench ? article.content_fr : article.content_en}</p>
            <a href={article.source1} target="_blank" rel="noopener noreferrer">
              Source 1
            </a>{' '}
            |{' '}
            <a href={article.source2} target="_blank" rel="noopener noreferrer">
              Source 2
            </a>

            <div style={{ marginTop: 16 }}>
              <button
                onClick={() => setShowShareBoxId(article.id)}
                style={{
                  backgroundColor: '#14641aff',
                  color: '#ffffffff',
                  border: 'none',
                  borderRadius: 30,
                  padding: '10px 22px',
                  fontSize: 14,
                  marginBottom: 10,
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                }}
              >
                📤 Partager :-)
              </button>

              {showShareBoxId === article.id && (
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
                    Choisissez une plateforme :-)
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', fontSize: '16px', color: '#000', fontWeight: '500' }}><FacebookIcon /> Facebook</a>
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText + shareUrl)}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', fontSize: '16px', color: '#000', fontWeight: '500' }}><TwitterIcon /> Twitter</a>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', fontSize: '16px', color: '#000', fontWeight: '500' }}><LinkedinIcon /> LinkedIn</a>
                    <a href={`mailto:?subject=1 Bonne Nouvelle par Jour !&body=${encodeURIComponent(shareText + shareUrl)}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', fontSize: '16px', color: '#000', fontWeight: '500' }}><MailIcon /> Email</a>
                    <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + shareUrl)}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', fontSize: '16px', color: '#000', fontWeight: '500' }}><WhatsappIcon /> WhatsApp</a>
                    <button onClick={handleCopy} style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: 'transparent', border: 'none', fontSize: '16px', color: '#000', fontWeight: '500', cursor: 'pointer', padding: '0' }}><CopyIcon size={24} /> Ou juste copier le lien :-)</button>
                    {copied && (<p style={{ color: '#4CAF50', marginTop: '10px', fontSize: '15px' }}>✅ Lien copié. Merci du partage ! :-) 🌱</p>)}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))
      )}

      <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
        <button onClick={() => setPage((prev) => Math.max(1, prev - 1))} disabled={page === 1} style={{ padding: '8px 16px', borderRadius: 20, border: 'none', backgroundColor: '#4CAF50', color: '#fff' }}>
          ⬅️ {isFrench ? 'Précédent' : 'Previous'}
        </button>
        <span style={{ alignSelf: 'center' }}>
          {isFrench ? 'Page' : 'Page'} {page}
        </span>
        <button onClick={() => setPage((prev) => prev + 1)} style={{ padding: '8px 16px', borderRadius: 20, border: 'none', backgroundColor: '#4CAF50', color: '#fff' }}>
          {isFrench ? 'Suivante' : 'Next'} ➡️
        </button>
      </div>
    </main>
  );
}
