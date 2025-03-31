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
    rating: number
  }
  setSearchTerm: (term: string) => void
  setFilters: (filters: { genre: string; rating: number }) => void
}

const BookContext = createContext<BookContextType | undefined>(undefined)

export const BookProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([])
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    genre: 'all',
    rating: 0
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
    
    // Aplicar filtro de avaliação
    if (filters.rating > 0) {
      result = result.filter(book => book.rating >= filters.rating)
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