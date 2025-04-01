import React, { createContext, useContext, useState, useEffect } from 'react'
import { Book } from '../types/book'
import booksData from '../data/books.json'

interface BookContextType {
  books: Book[]
  filteredBooks: Book[]
  isLoading: boolean
  searchTerm: string
  filters: {
    genre: string
    maxRating: number // Alterado de 'rating' para 'maxRating'
  }
  setSearchTerm: (term: string) => void
  setFilters: (filters: { genre: string; maxRating: number }) => void // Atualizado aqui também
}

const BookContext = createContext<BookContextType | undefined>(undefined)

export const BookProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([])
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    genre: 'all',
    maxRating: 5 // Valor inicial 5 (mostra todos os livros)
  })

  useEffect(() => {
    // Simular carga de API
    const timer = setTimeout(() => {
      setBooks(booksData)
      setFilteredBooks(booksData)
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let result = [...books]
    
    // Aplicar filtro de busca
    if (searchTerm) {
      result = result.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    // Aplicar filtro de gênero
    if (filters.genre !== 'all') {
      result = result.filter(book => book.genre === filters.genre)
    }
    
    // Aplicar filtro de avaliação MÁXIMA (alterado)
    if (filters.maxRating < 5) { // Se não for 5 (valor máximo)
      result = result.filter(book => book.rating <= filters.maxRating)
    }
    
    setFilteredBooks(result)
  }, [searchTerm, filters, books])

  const value = {
    books,
    filteredBooks,
    isLoading,
    searchTerm,
    filters,
    setSearchTerm,
    setFilters
  }

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>
}

export const useBooks = () => {
  const context = useContext(BookContext)
  if (context === undefined) {
    throw new Error('useBooks must be used within a BookProvider')
  }
  return context
}