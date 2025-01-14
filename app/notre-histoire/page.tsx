import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notre Histoire | Évolution des Solutions Web en France',
  description: 'Découvrez l\'histoire fascinante de Click et Paf, de nos humbles débuts à notre position actuelle de leader dans le développement web et le marketing digital en France.',
  openGraph: {
    title: 'Notre Histoire | Click et Paf - Évolution des Solutions Web en France',
    description: 'Découvrez le parcours de Click et Paf, des débuts modestes à leader du développement web et marketing digital en France.',
    url: 'https://fr.clicketpaf.online/notre-histoire',
    siteName: 'Click et Paf',
    images: [
      {
        url: 'https://fr.clicketpaf.online/images/notre-histoire-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Click et Paf - Notre Histoire',
      },
    ],
    locale: 'fr_FR',
    type: 'article',
  },
}

export default function NotreHistoire() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Notre Histoire</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Les Débuts Modestes</h2>
          <p>{"C'était en 2005, dans un petit appartement parisien, que deux amis passionnés de technologie, Pierre Dubois et Marie Leclerc, ont donné naissance à Click et Paf. À l'époque, l'idée d'une agence web entièrement dédiée à l'optimisation des performances et au SEO était encore nouvelle en France. Pierre, un développeur talentueux, et Marie, une experte en marketing digital, ont uni leurs forces avec une vision audacieuse : révolutionner la façon dont les entreprises françaises abordaient leur présence en ligne."}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Les Années de Croissance</h2>
          <p>{"Les premières années ont été difficiles. Click et Paf a commencé par travailler avec de petites entreprises locales, gagnant progressivement en réputation grâce à leur approche innovante et leurs résultats impressionnants. En 2008, ils ont décroché leur premier gros contrat avec une chaîne de boulangeries nationale, propulsant l'entreprise vers de nouveaux sommets."}</p>
          <p>{"Entre 2010 et 2015, Click et Paf a connu une croissance exponentielle. L'entreprise est passée de 5 à 50 employés, a ouvert des bureaux à Lyon et Marseille, et a commencé à attirer l'attention des grandes entreprises françaises. Leur approche unique, combinant développement web de pointe et stratégies de marketing digital innovantes, a fait de Click et Paf un nom incontournable dans l'industrie."}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{"L'Expansion Internationale"}</h2>
          <p>{"En 2016, Click et Paf a fait son premier pas vers l'international en ouvrant un bureau à Bruxelles. Cette expansion a marqué le début d'une nouvelle ère pour l'entreprise. Au cours des années suivantes, Click et Paf a étendu sa présence à travers l'Europe, ouvrant des bureaux à Londres, Berlin et Madrid."}</p>
          <p>{"L'année 2018 a vu Click et Paf remporter plusieurs prix prestigieux, dont le \"Prix de l'Innovation Digitale\" au salon VivaTech à Paris. Cette reconnaissance a cimenté la position de l'entreprise comme leader dans le domaine du développement web et du marketing digital en Europe."}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{"Aujourd'hui et Demain"}</h2>
          <p>{"Aujourd'hui, Click et Paf compte plus de 500 employés répartis dans 10 pays. L'entreprise est reconnue comme un leader mondial dans le domaine du développement web et du marketing digital, tout en restant fidèle à ses racines françaises et à sa vision initiale : aider les entreprises à prospérer dans le monde numérique."}</p>
          <p>{"Alors que nous regardons vers l'avenir, Click et Paf continue d'innover et de repousser les limites de ce qui est possible dans le monde digital. Nous sommes fiers de notre histoire, reconnaissants envers nos clients qui nous ont fait confiance au fil des ans, et excités par les possibilités infinies qui nous attendent."}</p>
        </section>
      </div>
    </main>
  )
}

