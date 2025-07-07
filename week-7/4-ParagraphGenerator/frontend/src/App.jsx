import { useState } from 'react'
import { ParaGenerator } from './component/ParaGenerator'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ParaGenerator></ParaGenerator>
    </>
  )
}

export default App
