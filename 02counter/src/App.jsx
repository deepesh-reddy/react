import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter,setCounter] = useState(15)

  const addValue = ()=>{
    setCounter(counter+1)
  }
  const removeValue = ()=>{
    setCounter(counter-1)
  }


  return (
    <>
      <h1>React course </h1>
      <h2>Counter value : {counter} </h2>
      <button
      onClick={addValue}
      >Add value</button>{" "}
      <button
      onClick={removeValue}
      >remove value</button>
      <p>footer:{counter} </p>
    </>
  )
}

export default App
