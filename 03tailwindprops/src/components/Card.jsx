import React from 'react'

const Card = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl bg-gray-300 m-1">
  <div>
    <img className="size-48 shadow-xl rounded-md bg " alt="" src="https://i.pcmag.com/imagery/articles/03xdeDG4m4n0gJG3CbFNIgm-17..v1661444591.png" />
  </div>
  <div className="flex items-center md:items-start bg-sky-300">
    <span className="text-2xl font-medium">className Warfare</span>
    <span className="font-medium text-sky-500">The Anti-Patterns</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
  )
}

export default Card