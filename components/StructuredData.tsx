import Script from 'next/script'
import logo from '../public/clicketpafLogo.webp'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Click et Paf",
    "url": "https://clicketpaf.fr",
    "logo": logo.src,
    "sameAs": [
      "https://www.facebook.com/clicketpaf",
      "https://www.twitter.com/clicketpaf",
      "https://www.linkedin.com/company/clicketpaf"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33-1-23-45-67-89",
      "contactType": "customer service"
    },
    "description": "Click et Paf offre des solutions web innovantes et sur mesure pour votre entreprise. Découvrez nos services de développement web et de marketing digital.",
    "keywords": "Click et Paf, click, et, paf, clicketpaf, clicket, etpaf, clickpaf, click&paf, click&, &paf, développement web, marketing digital, solutions web, France"
  }

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  )
}

