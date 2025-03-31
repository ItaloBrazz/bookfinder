import { FaSpinner } from 'react-icons/fa'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <FaSpinner className="animate-spin text-4xl text-primary" />
    </div>
  )
}

export default Loading