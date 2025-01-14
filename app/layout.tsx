import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StructuredData from '../components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://fr.clicketpaf.online'),
  title: {
    default: 'Click et Paf | Solutions Web Innovantes en France',
    template: '%s | Click et Paf'
  },
  description: 'Click et Paf offre des solutions web innovantes et sur mesure pour votre entreprise en France. Experts en développement web et marketing digital.',
  keywords: ['Click et Paf', 'développement web', 'marketing digital', 'solutions web', 'France', 'SEO', 'performance web', 'design responsive'],
  authors: [{ name: 'Click et Paf Team' }],
  creator: 'Click et Paf',
  publisher: 'Click et Paf',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <StructuredData />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

