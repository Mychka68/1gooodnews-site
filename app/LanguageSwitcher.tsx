'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.startsWith('/fr') ? 'fr' : 'en';

  const translationsMap: Record<string, string> = {
    '/fr': '/en',
    '/fr/qui-sommes-nous': '/en/about-us',
    '/fr/contact': '/en/contact',
    '/fr/archives': '/en/archives',
    '/en': '/fr',
    '/en/about-us': '/fr/qui-sommes-nous',
    '/en/contact': '/fr/contact',
    '/en/archives': '/fr/archives',
  };

  const switchTo = (locale: string) => {
    if (locale === currentLocale) return;

    const newPath = translationsMap[pathname] || `/${locale}`;
    router.push(newPath);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#e8f5e9',
        border: '1px solid #4CAF50',
        borderRadius: '30px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <button
        onClick={() => switchTo('fr')}
        style={{
          backgroundColor: currentLocale === 'fr' ? '#4CAF50' : 'transparent',
          color: currentLocale === 'fr' ? '#fff' : '#1F6E44',
          border: 'none',
          padding: '8px 16px',
          fontWeight: '600',
          cursor: 'pointer',
        }}
      >
        FR
      </button>
      <button
        onClick={() => switchTo('en')}
        style={{
          backgroundColor: currentLocale === 'en' ? '#4CAF50' : 'transparent',
          color: currentLocale === 'en' ? '#fff' : '#1F6E44',
          border: 'none',
          padding: '8px 16px',
          fontWeight: '600',
          cursor: 'pointer',
        }}
      >
        EN
      </button>
    </div>
  );
}
