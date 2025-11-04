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
const shareText = 'A free, ad-free, heartwarming app to read 1 good news every day!\n';

export default function ArchivesPageEN() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [showShareBoxId, setShowShareBoxId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
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

      if (!error) setArticles(data);
      setLoading(false);
    };
    fetchArticles();
  }, [page]);

  const getPublicUrl = (path) => {
    const { data } = supabase.storage.from('image_url').getPublicUrl(path);
    return data.publicUrl;
  };

  const handleCopy = (id) => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    });
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
          <div key={article.id} style={{ marginBottom: 40, padding: 20, border: '1px solid #ddd', borderRadius: 12, backgroundColor: '#f9f9f9' }}>
            {article.image_url && (
              <img
                src={getPublicUrl(article.image_url)}
                alt="Illustration"
                style={{ width: '100%', maxHeight: 300, objectFit: 'cover', marginBottom: 16, borderRadius: 8 }}
              />
            )}

            <h2 style={{ color: '#4CAF50' }}>{article.title_en}</h2>
            <p>{article.content_en}</p>
            <a href={article.source1} target="_blank" rel="noopener noreferrer">Source 1</a> |{' '}
            <a href={article.source2} target="_blank" rel="noopener noreferrer">Source 2</a>

            {/* Share Button */}
            <div style={{ marginTop: 16 }}>
              <button
                onClick={() =>
                  setShowShareBoxId(
                    showShareBoxId === article.id ? null : article.id
                  )
                }
                style={{ backgroundColor: '#14641aff', color: '#fff', border: 'none', borderRadius: 30, padding: '10px 22px', fontSize: 14, marginBottom: 10, cursor: 'pointer' }}
              >
                📤 Share :-)
              </button>

              {showShareBoxId === article.id && (
                <div style={{ backgroundColor: '#fff5d1', padding: '24px', borderRadius: '50px', margin: '20px auto', maxWidth: '320px', boxShadow: '0 6px 24px rgba(0, 0, 0, 0.1)', border: '2px solid #ffd591', textAlign: 'left' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: 12, marginTop: 1 }}>Choose a platform :-)</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', fontSize: '16px', color: '#000', fontWeight: '500' }}><FacebookIcon /> Facebook</a>
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText + shareUrl)}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', fontSize: '16px', color: '#000', fontWeight: '500' }}><TwitterIcon /> Twitter</a>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', fontSize: '16px', color: '#000', fontWeight: '500' }}><LinkedinIcon /> LinkedIn</a>
                    <a href={`mailto:?subject=1 Good News a Day!&body=${encodeURIComponent(shareText + shareUrl)}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', fontSize: '16px', color: '#000', fontWeight: '500' }}><MailIcon /> Email</a>
                    <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + shareUrl)}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', fontSize: '16px', color: '#000', fontWeight: '500' }}><WhatsappIcon /> WhatsApp</a>
                    <button onClick={() => handleCopy(article.id)} style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: 'transparent', border: 'none', fontSize: '16px', color: '#000', fontWeight: '500', cursor: 'pointer', padding: '0' }}>
                      <CopyIcon size={24} /> Or just copy the link :-)
                    </button>
                    {copiedId === article.id && (
                      <p style={{ color: '#4CAF50', marginTop: '10px', fontSize: '15px' }}>
                        ✅ Link copied. Thanks for sharing! 🌱
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))
      )}

      {/* Pagination */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
        <button onClick={() => setPage((prev) => Math.max(1, prev - 1))} disabled={page === 1} style={{ padding: '8px 16px', borderRadius: 20, border: 'none', backgroundColor: '#4CAF50', color: '#fff' }}>
          ⬅️ Previous
        </button>
        <span style={{ alignSelf: 'center' }}>Page {page}</span>
        <button onClick={() => setPage((prev) => prev + 1)} style={{ padding: '8px 16px', borderRadius: 20, border: 'none', backgroundColor: '#4CAF50', color: '#fff' }}>
          Next ➡️
        </button>
      </div>
    </main>
  );
}
