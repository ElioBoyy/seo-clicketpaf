export default function Features({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Optimisation SEO</h3>
            <p className="text-gray-600">Nous assurons que votre site web se classe en tête des résultats des moteurs de recherche, générant un trafic organique pour votre entreprise.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Design Responsive</h3>
            <p className="text-gray-600">Nos sites web sont magnifiques et fonctionnent parfaitement sur tous les appareils, des ordinateurs de bureau aux smartphones.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Optimisation des Performances</h3>
            <p className="text-gray-600">Nous optimisons votre site web pour la vitesse, garantissant des temps de chargement rapides et une expérience utilisateur fluide.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

