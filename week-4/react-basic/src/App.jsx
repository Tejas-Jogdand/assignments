import { useState } from 'react'
import './App.css'
import addDiv from './main.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="title"/>
        <br />
        <label htmlFor="description">Description: </label>
        <input type="text" id="description" name="description"/>
        <br /> <br />
        <button onClick={addDiv} >Submit</button>
        <br /><br />
        <div id="container"></div>
      </div>
    </>
  )
}

export default App
