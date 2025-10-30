// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore les fichiers publics (images, css, etc.)
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon.ico') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  // Si on est à la racine, rediriger automatiquement vers /fr ou /en
  if (pathname === '/') {
    const acceptLanguage = request.headers.get('accept-language');
    const locale = acceptLanguage?.startsWith('fr') ? 'fr' : 'en';
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return;
}
