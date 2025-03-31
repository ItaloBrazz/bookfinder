import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' // Importe o Link
import { Book } from '../types/book'
import Rating from './Rating'

interface BookCardProps {
  book: Book
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <figure className="px-4 pt-4">
        <img 
          src={book.coverImage} 
          alt={book.title} 
          className="h-48 w-full object-contain"
          loading="lazy"
        />
      </figure>
      <div className="card-body p-4">
        <h3 className="card-title text-lg font-bold truncate">{book.title}</h3>
        <p className="text-gray-600 text-sm">{book.author}</p>
        <div className="flex justify-between items-center mt-2">
          <Rating rating={book.rating} />
          <span className="badge badge-outline">{book.genre}</span>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link 
            to={`/book/${book.id}`} 
            className="btn btn-primary btn-sm"
          >
            Detalhes
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default BookCard