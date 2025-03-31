import { useBooks } from '../contexts/BookContext'

const FilterPanel = () => {
  const { filters, setFilters, books } = useBooks()
  
  const genres = ['all', ...new Set(books.map(book => book.genre))]

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h3 className="font-bold text-lg mb-4">Filtrar Livros</h3>
      
      <div className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Gênero</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={filters.genre}
            onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
          >
            {genres.map(genre => (
              <option key={genre} value={genre}>
                {genre === 'all' ? 'Todos' : genre}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="label">
            <span className="label-text">Avaliação Mínima</span>
          </label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={filters.rating}
            onChange={(e) => setFilters({ ...filters, rating: parseFloat(e.target.value) })}
            className="range range-primary"
          />
          <div className="flex justify-between text-xs px-2">
            <span>0</span>
            <span>{filters.rating}</span>
            <span>5</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterPanel