// app/[locale]/layout.tsx
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { notFound } from 'next/navigation';
import '../globals.css';

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }];
}

export default function LocaleLayout({ children, params: { locale } }: any) {
  let messages;
  try {
    messages = require(`../../messages/${locale}.json`);
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
            <a href="/fr" style={{ marginRight: '1rem' }}>FR</a>
            <a href="/en">EN</a>
          </div>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
