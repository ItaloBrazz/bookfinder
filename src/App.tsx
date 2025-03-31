import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BookProvider } from './contexts/BookContext';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails.tsx';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <BookProvider>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route index element={<Home />} />
              <Route path="book/:id" element={<BookDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BookProvider>
    </BrowserRouter>
  );
}

export default App;