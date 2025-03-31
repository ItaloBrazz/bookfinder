import { Link } from 'react-router-dom'
import SearchBar from './SearchBar.tsx'

const Header = () => {
  return (
    <header className="bg-primary text-primary-content shadow-lg">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="text-2xl font-bold">
          BookFinder
        </Link>
        <SearchBar />
        <nav className="flex gap-4">
          <Link to="/" className="btn btn-ghost btn-sm">Início</Link>
          <button className="btn btn-ghost btn-sm">Favoritos</button>
        </nav>
      </div>
    </header>
  )
}

export default Header