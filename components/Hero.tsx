export default function Hero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Bienvenue chez Click et Paf
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Découvrez nos solutions innovantes pour le développement web et le marketing digital
        </p>
        <div className="text-center">
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
            Commencez maintenant
          </a>
        </div>
      </div>
    </section>
  )
}

