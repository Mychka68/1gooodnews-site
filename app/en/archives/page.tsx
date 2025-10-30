'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabase';
import { usePathname } from 'next/navigation';

// Web Share API
const shareArticle = async (title: string, text: string, url: string) => {
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
    } catch (err) {
      console.error('Sharing error:', err);
    }
  } else {
    alert("Web sharing is not supported on this device.");
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

export default function ArchivesPageEN() {
  const pathname = usePathname();
  const isFrench = pathname.startsWith('/fr');
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const pageSize = 10;

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
        console.error('Error:', error);
      } else {
        setArticles(data);
      }
      setLoading(false);
    };

    fetchArticles();
  }, [page]);

  const getPublicUrl = (path: string) => {
    const { data } = supabase.storage.from('image_url').getPublicUrl(path);
    return data.publicUrl;
  };

  return (
    <main style={{ padding: '40px 20px', fontFamily: 'Poppins, sans-serif' }}>
      <h1 style={{ fontSize: 30, color: '#1F6E44', marginBottom: 30 }}>
        Good News Archives!
      </h1>

      {loading ? (
        <p>Loading...</p>
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
                src={getPublicUrl(article.image_url)}
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

            <h2 style={{ color: '#4CAF50' }}>{article.title_en}</h2>
            <p>{article.content_en}</p>
            <a href={article.source1} target="_blank" rel="noopener noreferrer">
              Source 1
            </a>{' '}
            |{' '}
            <a href={article.source2} target="_blank" rel="noopener noreferrer">
              Source 2
            </a>

            {/* Share Button */}
            <div style={{ marginTop: 16 }}>
              <button
                onClick={() => {
                  shareArticle(
                    article.title_en,
                    `${article.content_en}\n\nFound on 1gooodnews.app`,
                    'https://1gooodnews.app'
                  );
                }}
                style={{
                  backgroundColor: '#1F6E44',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: 20,
                  cursor: 'pointer',
                }}
              >
                Share
              </button>
            </div>
          </div>
        ))
      )}

      {/* Pagination */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
        <button
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1}
          style={{
            padding: '8px 16px',
            borderRadius: 20,
            border: 'none',
            backgroundColor: '#4CAF50',
            color: '#fff',
          }}
        >
          ⬅️ Previous
        </button>
        <span style={{ alignSelf: 'center' }}>Page {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          style={{
            padding: '8px 16px',
            borderRadius: 20,
            border: 'none',
            backgroundColor: '#4CAF50',
            color: '#fff',
          }}
        >
          Next ➡️
        </button>
      </div>
    </main>
  );
}
