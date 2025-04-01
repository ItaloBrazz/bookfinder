import { useBooks } from '../contexts/BookContext'

const FilterPanel = () => {
  const { filters, setFilters, books } = useBooks()
  
  const genres = ['all', ...new Set(books.map(book => book.genre))]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
      <h3 className="font-bold text-xl mb-5 text-gray-800">Filtrar Livros</h3>
      
      <div className="space-y-5">
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Gênero
          </label>
          <select
            className="select w-full bg-gray-50 border border-gray-300 text-gray-800
                      focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
            value={filters.genre}
            onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
          >
            {genres.map(genre => (
              <option 
                key={genre} 
                value={genre}
                className="text-gray-800"
              >
                {genre === 'all' ? 'Todos os Gêneros' : genre}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Avaliação Máxima: {filters.maxRating}
          </label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={filters.maxRating}
            onChange={(e) => setFilters({ ...filters, maxRating: parseFloat(e.target.value) })}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
                      [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
                      [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:bg-blue-600"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>0</span>
            <span>5</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterPanel