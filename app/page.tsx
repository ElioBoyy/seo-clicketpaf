import type { Metadata } from 'next'
import Hero from '../components/Hero'
import Features from '../components/Features'
import About from '../components/About'
import Contact from '../components/Contact'

export const metadata: Metadata = {
  title: 'Accueil | Solutions Web Innovantes en France',
  description: 'Découvrez les solutions web innovantes et sur mesure de Click et Paf pour votre entreprise en France. Experts en développement web et marketing digital.',
  openGraph: {
    title: 'Click et Paf | Solutions Web Innovantes en France',
    description: 'Découvrez les solutions web innovantes et sur mesure de Click et Paf pour votre entreprise en France. Experts en développement web et marketing digital.',
    url: 'https://fr.clicketpaf.online',
    siteName: 'Click et Paf',
    images: [
      {
        url: 'https://fr.clicketpaf.online/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Click et Paf - Solutions Web Innovantes',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Click et Paf | Solutions Web Innovantes en France',
    description: 'Découvrez les solutions web innovantes et sur mesure de Click et Paf pour votre entreprise en France. Experts en développement web et marketing digital.',
    images: ['https://fr.clicketpaf.online/images/twitter-image.jpg'],
  },
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Contact />
    </main>
  )
}

