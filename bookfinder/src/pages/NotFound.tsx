import { Link } from 'react-router-dom'
import { FaHome, FaSearch } from 'react-icons/fa'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Página não encontrada</h2>
        <p className="text-gray-600 mb-6">
          A página que você está procurando pode ter sido removida ou não existe.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link 
            to="/" 
            className="btn btn-primary gap-2"
          >
            <FaHome /> Página Inicial
          </Link>
          <Link 
            to="/" 
            className="btn btn-outline gap-2"
          >
            <FaSearch /> Explorar Livros
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound