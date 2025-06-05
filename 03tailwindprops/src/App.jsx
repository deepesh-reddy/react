import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name:'Reddy',
    age:22,
    address:{
      city:'Tirupati',
      state:'Andhra Pradesh',
      country:'India'
    }
  }
  let newArray = [1,2,3,4,5,6,7,8,9]

  const url = "https://i.pcmag.com/imagery/articles/03xdeDG4m4n0gJG3CbFNIgm-17..v1661444591.png"
  return (
    <>
      <h1 className = 'text-3xl bg-green-500 p-3 rounded-md' >Vite with tailwind</h1>
      <Card username = "Deepesh" link = {url} myArr = {newArray} />
      <Card username="json" post="Staff Engg." />
      <Card />
    </>
  )
}

export default App
