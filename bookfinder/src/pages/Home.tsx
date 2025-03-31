import { useBooks } from '../contexts/BookContext'
import BookCard from '../components/BookCard'
import FilterPanel from '../components/FilterPanel'
import Loading from '../components/Loading'
import { useEffect } from 'react' // Importe o useEffect

const Home = () => {
  const { filteredBooks, isLoading } = useBooks()

  // Adicione este bloco para debug
  useEffect(() => {
    console.log('Livros filtrados:', filteredBooks)
    console.log('Estado de carregamento:', isLoading)
  }, [filteredBooks, isLoading])

  if (isLoading) return <Loading />

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-1">
        <FilterPanel />
      </div>
      <div className="md:col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        
        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold">Nenhum livro encontrado</h3>
            <p className="text-gray-600">Tente ajustar seus filtros de busca</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home