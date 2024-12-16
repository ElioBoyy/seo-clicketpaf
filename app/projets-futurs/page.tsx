import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import logo from '../../public/clicketpafLogo.webp'

export const metadata: Metadata = {
  title: 'Nos Projets Futurs | Click et Paf',
  description: 'Découvrez les projets innovants et ambitieux que Click et Paf prépare pour l\'avenir du développement web et du marketing digital.',
  openGraph: {
    title: 'Nos Projets Futurs | Click et Paf',
    description: 'Découvrez les projets innovants et ambitieux que Click et Paf prépare pour l\'avenir du développement web et du marketing digital.',
    url: 'https://clicketpaf.fr/projets-futurs',
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
}

export default function ProjetsFuturs() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Nos Projets Futurs</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{"ClickPaf AI : L'avenir de l'optimisation web"}</h2>
            <p>{"Notre projet phare pour les années à venir est le développement de ClickPaf AI, une plateforme révolutionnaire d'optimisation web basée sur l'intelligence artificielle. Cette technologie de pointe analysera en temps réel des millions de points de données pour fournir des recommandations d'optimisation ultra-précises et personnalisées pour chaque site web."}</p>
            <p>{"ClickPaf AI ne se contentera pas d'analyser le contenu et la structure des sites, mais prendra également en compte les tendances du marché, le comportement des utilisateurs et même les fluctuations économiques pour proposer des stratégies d'optimisation holistiques. Nous prévoyons de lancer une version bêta de ClickPaf AI d'ici la fin de l'année prochaine, avec un déploiement complet prévu pour 2025."}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Projet Quantum : Redéfinir la vitesse du web</h2>
            <p>{"Avec le Projet Quantum, Click et Paf vise à repousser les limites de la vitesse de chargement des sites web. Nous développons actuellement une nouvelle architecture de serveur qui utilise des principes de l'informatique quantique pour optimiser la distribution de contenu."}</p>
            <p>{"Notre objectif est ambitieux : réduire les temps de chargement moyens à moins de 100 millisecondes, quel que soit l'endroit où se trouve l'utilisateur dans le monde. Ce projet implique non seulement des avancées technologiques significatives, mais aussi des partenariats stratégiques avec des fournisseurs d'accès Internet et des centres de données du monde entier."}</p>
            <p>{"Les premiers tests du Projet Quantum sont prévus pour début 2024, avec un déploiement progressif au cours des trois années suivantes."}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">EcoWeb Initiative : Le développement web durable</h2>
            <p>{"Chez Click et Paf, nous sommes conscients de l'impact environnemental croissant du numérique. C'est pourquoi nous lançons l'EcoWeb Initiative, un projet ambitieux visant à rendre le développement web plus durable et écologique."}</p>
            <p>Ce projet comprend plusieurs volets :</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>{"Développement de nouvelles techniques de compression d'images et de vidéos pour réduire la consommation de bande passante sans compromettre la qualité."}</li>
              <li>{"Création d'un framework de développement “vert“ qui optimise automatiquement le code pour réduire la consommation d'énergie des appareils des utilisateurs."}</li>
              <li>{"Mise en place d'un programme de compensation carbone pour nos activités et celles de nos clients."}</li>
              <li>{"Recherche sur l'utilisation de l'énergie solaire pour alimenter les serveurs web."}</li>
            </ul>
            <p>{"Nous prévoyons de déployer les premiers outils issus de l'EcoWeb Initiative d'ici 2024, avec l'objectif ambitieux de réduire l'empreinte carbone moyenne des sites web que nous développons de 50% d'ici 2026."}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Académie Click et Paf : Former la prochaine génération</h2>
            <p>{"Reconnaissant le besoin croissant de professionnels qualifiés dans le domaine du développement web et du marketing digital, nous lançons l'Académie Click et Paf. Ce projet éducatif ambitieux vise à former la prochaine génération de talents numériques en France et au-delà."}</p>
            <p>{"L'Académie Click et Paf proposera :"}</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Des programmes de formation intensive en présentiel dans nos principaux bureaux en Europe.</li>
              <li>{"Des cours en ligne couvrant un large éventail de sujets, du développement web de base à l'intelligence artificielle avancée."}</li>
              <li>Des programmes de mentorat mettant en relation des étudiants prometteurs avec des professionnels expérimentés de Click et Paf.</li>
              <li>{"Des partenariats avec des universités pour intégrer nos cours dans leurs programmes d'études."}</li>
            </ul>
            <p>{"Nous prévoyons d'accueillir nos premiers étudiants à l'Académie Click et Paf à Paris dès septembre 2024, avec des expansions prévues à Londres, Berlin et Madrid dans les années suivantes."}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{"Projet Nexus : L'avenir de l'expérience utilisateur"}</h2>
            <p>{"Le Projet Nexus est notre vision à long terme de l'avenir de l'expérience utilisateur sur le web. Ce projet ambitieux vise à créer une nouvelle façon d'interagir avec le contenu en ligne, en fusionnant réalité augmentée, interfaces haptiques et intelligence artificielle."}</p>
            <p>Les principaux axes de recherche et développement du Projet Nexus incluent :</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>{"Développement d'interfaces web en réalité augmentée, permettant aux utilisateurs d'interagir avec le contenu dans leur environnement physique."}</li>
              <li>{"Création de technologies haptiques avancées pour permettre aux utilisateurs de “ressentir“ le contenu web."}</li>
              <li>{"Utilisation de l'IA pour personnaliser en temps réel l'expérience web en fonction du contexte et des émotions de l'utilisateur."}</li>
              <li>{"Exploration de nouvelles méthodes d'interaction basées sur la reconnaissance gestuelle et le suivi oculaire."}</li>
            </ul>
            <p>{"Le Projet Nexus est notre initiative de recherche la plus ambitieuse à ce jour. Nous prévoyons de présenter les premiers prototypes issus de ce projet lors de la conférence Web Summit 2026, avec l'objectif de commencer à intégrer ces technologies dans des projets clients d'ici 2028."}</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

