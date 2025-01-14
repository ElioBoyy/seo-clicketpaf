import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Click et Paf</h3>
            <p className="mt-2 text-sm text-gray-400">Fournisseur de solutions web exceptionnelles</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <ul className="inline-flex space-x-4">
              <li><Link href="/politique-de-confidentialite" className="hover:text-gray-300">Politique de confidentialité</Link></li>
              <li><Link href="/conditions-utilisation" className="hover:text-gray-300">{"Conditions d'utilisation"}</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Click et Paf. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

