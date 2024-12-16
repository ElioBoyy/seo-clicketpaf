import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/" className="text-xl font-bold text-gray-800">
              Click et Paf
            </Link>
          </li>
          <li>
            <ul className="flex space-x-4">
              <li><Link href="/#features" className="text-gray-600 hover:text-gray-800">Services</Link></li>
              <li><Link href="/#about" className="text-gray-600 hover:text-gray-800">À propos</Link></li>
              <li><Link href="/notre-histoire" className="text-gray-600 hover:text-gray-800">Notre Histoire</Link></li>
              <li><Link href="/projets-futurs" className="text-gray-600 hover:text-gray-800">Projets Futurs</Link></li>
              <li><Link href="/#contact" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

