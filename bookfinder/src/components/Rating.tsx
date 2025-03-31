import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

interface RatingProps {
  rating: number
  small?: boolean
}

const Rating: React.FC<RatingProps> = ({ rating, small = false }) => {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  // Tamanho dos ícones baseado na prop 'small'
  const iconSize = small ? 14 : 20

  // Estrelas cheias
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} size={iconSize} className="text-yellow-400" />)
  }

  // Meia estrela (se aplicável)
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" size={iconSize} className="text-yellow-400" />)
  }

  // Estrelas vazias
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} size={iconSize} className="text-yellow-400" />)
  }

  return (
    <div className="flex items-center gap-1">
      {stars}
      {!small && <span className="ml-1 text-gray-600 text-sm">{rating.toFixed(1)}</span>}
    </div>
  )
}

export default Rating