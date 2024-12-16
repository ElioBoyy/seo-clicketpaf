import { Metadata } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import StructuredData from '../components/StructuredData'

import logo from '../public/clicketpafLogo.webp'

export const metadata: Metadata = {
  title: 'Click et Paf | Solutions Web Innovantes',
  description: 'Click et Paf offre des solutions web innovantes et sur mesure pour votre entreprise. Découvrez nos services de développement web et de marketing digital.',
  keywords: 'Click et Paf, click, et, paf, clicketpaf, clicket, etpaf, clickpaf, click&paf, click&, &paf, développement web, marketing digital, solutions web, France',
  openGraph: {
    title: 'Click et Paf | Solutions Web Innovantes',
    description: 'Click et Paf offre des solutions web innovantes et sur mesure pour votre entreprise. Découvrez nos services de développement web et de marketing digital.',
    url: 'https://clicketpaf.fr',
    siteName: 'Click et Paf',
    images: [
      {
        url: logo.src,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Click et Paf | Solutions Web Innovantes',
    description: 'Click et Paf offre des solutions web innovantes et sur mesure pour votre entreprise. Découvrez nos services de développement web et de marketing digital.',
    images: [logo.src],
  },
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Features id="features" />
        <About id="about" />
        <Contact id="contact" />
      </main>
      <Footer />
    </>
  )
}

