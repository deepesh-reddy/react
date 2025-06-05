import React from 'react'

const Card = ({username = "Sai",post = "Not Assigned Yet" , link = "Image", myArr = {}}) => {
  // console.log(props);  
  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl bg-gray-300 mt-1">
  <div>
    <img className="size-48 shadow-xl rounded-md bg " alt="" src={link} />
  </div>
  <div className="flex items-center md:items-start bg-sky-300">
    <span className="text-2xl font-medium">{username || "" } </span>
    <span className="font-medium text-sky-500">{post}</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. {myArr[5]}</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
  )
}

export default Card