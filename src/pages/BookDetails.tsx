import { useParams } from 'react-router-dom';
import { useBooks } from '../contexts/BookContext';
import Rating from '../components/Rating';
import NotFound from './NotFound';
import { useEffect } from 'react';

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { books } = useBooks();
  
  useEffect(() => {
    console.log('ID do livro:', id);
    console.log('Livros disponíveis:', books);
  }, [id, books]);

  const book = books.find(b => b.id === id);
  
  if (!book) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-md">
        {/* Cover Section */}
        <div className="flex justify-center items-start">
          <img 
            src={book.coverImage} 
            alt={`Capa do livro ${book.title}`} 
            className="max-h-[500px] rounded-lg shadow-lg object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/placeholder-book.jpg';
            }}
          />
        </div>
        
        {/* Info Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{book.title}</h1>
            <h2 className="text-2xl text-gray-700 mb-4">por {book.author}</h2>
          </div>
          
          {/* Rating */}
          <div className="flex items-center gap-3">
            <Rating rating={book.rating} />
            <span className="text-xl text-gray-800 font-medium">
              {book.rating.toFixed(1)}/5.0
            </span>
          </div>
          
          {/* Info Badges */}
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
              {book.genre}
            </span>
            <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
              {book.pages} páginas
            </span>
            <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
              {book.language}
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
              {book.publishedYear}
            </span>
          </div>
          
          {/* Description */}
          <div className="py-4 border-t border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Sinopse</h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              {book.description}
            </p>
          </div>
          
          {/* Price and Purchase */}
          <div className="bg-gray-50 p-5 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Preço</h3>
              <p className="text-3xl font-bold text-indigo-600">
                R$ {book.price.toFixed(2)}
              </p>
            </div>
            <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300">
              Adicionar ao Carrinho
            </button>
          </div>
          
          {/* Reviews */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Avaliações</h3>
            
            {book.reviews.length > 0 ? (
              book.reviews.map((review, index) => (
                <div 
                  key={`review-${index}`} 
                  className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">{review.user}</span>
                    <Rating rating={review.rating} small />
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                <p className="text-gray-600">
                  Nenhuma avaliação ainda. Seja o primeiro a avaliar!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;