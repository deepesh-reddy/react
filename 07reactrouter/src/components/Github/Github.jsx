import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/deepesh-reddy')
    //     .then((response) => response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github followers : {data.followers}
        <img src={data.avatar_url} width = '300px' alt="" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response  = await fetch('https://api.github.com/users/deepesh-reddy')
    return response.json()
}