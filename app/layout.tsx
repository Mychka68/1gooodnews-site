import './globals.css'
import LanguageSwitcher from './LanguageSwitcher'

export const metadata = {
  title: '1gooodnews',
  description: '1 Bonne Nouvelle par Jour',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0 }}>
        {/* Le sélecteur de langue reste disponible en haut à droite si besoin */}
        <LanguageSwitcher />

        {/* Contenu des pages */}
        {children}
      </body>
    </html>
  )
}
