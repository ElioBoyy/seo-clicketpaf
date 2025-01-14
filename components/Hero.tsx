import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/clicketpafLogo.webp'

export default function Hero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bienvenue chez Click et Paf
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Découvrez nos solutions innovantes pour le développement web et le marketing digital en France
            </p>
            <Link href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              Commencez maintenant
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image 
              src={logo}
              alt="Click et Paf - Solutions Web Innovantes"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

