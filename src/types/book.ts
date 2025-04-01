export interface Book {
    id: string
    title: string
    author: string
    description: string
    genre: string
    rating: number
    publishedYear: number
    coverImage: string
    pages: number
    language: string
    price: number
    reviews: {
      user: string
      comment: string
      rating: number
    }[]
  }