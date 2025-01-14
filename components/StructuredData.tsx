'use client'

import { useEffect } from 'react'

export default function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Click et Paf",
      "url": "https://fr.clicketpaf.online",
      "logo": "https://fr.clicketpaf.online/images/logo.png",
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
      "description": "Click et Paf offre des solutions web innovantes et sur mesure pour votre entreprise en France. Découvrez nos services de développement web et de marketing digital optimisés pour le marché français.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Rue de l'Innovation",
        "addressLocality": "Paris",
        "postalCode": "75001",
        "addressCountry": "FR"
      },
      "founder": {
        "@type": "Person",
        "name": "Pierre Dubois"
      },
      "foundingDate": "2005",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": 500
      },
      "areaServed": {
        "@type": "Country",
        "name": "France"
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}

