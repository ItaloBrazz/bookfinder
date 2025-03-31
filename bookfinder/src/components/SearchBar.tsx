import { useState, useEffect } from 'react'
import { useBooks } from '../contexts/BookContext'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('')
  const { setSearchTerm } = useBooks()
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(inputValue)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [inputValue, setSearchTerm])

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FiSearch className="text-gray-400" />
      </div>
      <input
        type="text"
        className="input input-bordered pl-10 w-full md:w-64"
        placeholder="Pesquisar livros..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  )
}

export default SearchBar