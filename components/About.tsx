export default function About({ id }: { id?: string }) {
  return (
    <section id={id} className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">À Propos de Nous</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-6">
            {"Chez Click et Paf, nous sommes spécialisés dans la création de sites web performants et optimisés pour le SEO qui génèrent des résultats pour les entreprises de toutes tailles. Notre équipe d'experts en développement et en marketing digital travaille ensemble pour fournir des solutions de pointe qui aident nos clients à réussir dans le paysage numérique français."}
          </p>
          <p className="text-gray-600 mb-6">
            {"Avec des années d'expérience dans l'industrie, nous comprenons l'importance de rester à la pointe des technologies web et des algorithmes des moteurs de recherche. Notre approche combine expertise technique et résolution créative de problèmes pour livrer des sites web qui non seulement ont fière allure, mais performent exceptionnellement bien dans les classements de recherche."}
          </p>
          <p className="text-gray-600">
            {"Que vous soyez une petite start-up ou une grande entreprise, nous avons les compétences et les connaissances pour vous aider à atteindre vos objectifs en ligne. Du développement web sur mesure aux stratégies de marketing digital complètes, nous sommes là pour vous aider à réussir dans le monde numérique français."}
          </p>
        </div>
      </div>
    </section>
  )
}

