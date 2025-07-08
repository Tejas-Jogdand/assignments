import { useRef, useState } from 'react'
import { RecoilRoot } from 'recoil'
import { GithubCard } from './component/GithubCard'
import './App.css'

function App() {
  console.log('App rendered');
  const [id, setId] = useState('tejas-jogdand');
  return (
    <>
      <RecoilRoot>
        <InputId setId={setId}/>
        <br />
        <GithubCard id={id} />
      </RecoilRoot>
    </>
  )
}

function InputId({setId}) {

  console.log('InputId rendered');

  const inputRef = useRef()

  function handleChange(){
    setId(inputRef.current.value)
  }

  return (
    <div className='inputId'>
      <h2>GitHub Profile API</h2>
      <input ref={inputRef} type="text" name="profileId" id="profileId" placeholder='Enter your github id'/>
      <br />
      <button onClick={handleChange}>Fetch</button>
    </div>
  )
}

export default App
