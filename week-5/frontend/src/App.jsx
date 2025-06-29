import { useState } from 'react'
import './App.css'
import { BuisnessCard } from './compoents/buinsessCard'
import { AddCard } from './compoents/AddCard'

function App() {

  const [cardDetails, setCardDetails] = useState([
    {
      name : "Tejas Jodand",
      designation : "Software Engineer",
      intrests : ["MERN","DSA","WebDev", "Devops"],
      links : {
        linkdin : "https://www.linkedin.com/in/tejas-jogdand-84a5581b9/",
        github : "https://github.com/Tejas-Jogdand",
        x : "http://x.com/TejasJogdand5"
      }
    },
    {
      name : "Tejas Jodand",
      designation : "Software Engineer",
      intrests : ["MERN","DSA","WebDev", "Devops"],
      links : {
        linkdin : "https://www.linkedin.com/in/tejas-jogdand-84a5581b9/",
        github : "https://github.com/Tejas-Jogdand",
        x : "http://x.com/TejasJogdand5"
      }
    },
    {
      name : "Tejas Jodand",
      designation : "Software Engineer",
      intrests : ["MERN","DSA","WebDev", "Devops"],
      links : {
        linkdin : "https://www.linkedin.com/in/tejas-jogdand-84a5581b9/",
        github : "https://github.com/Tejas-Jogdand",
        x : "http://x.com/TejasJogdand5"
      }
    },
    {
      name : "Tejas Jodand",
      designation : "Software Engineer",
      intrests : ["MERN","DSA","WebDev", "Devops"],
      links : {
        linkdin : "https://www.linkedin.com/in/tejas-jogdand-84a5581b9/",
        github : "https://github.com/Tejas-Jogdand",
        x : "http://x.com/TejasJogdand5"
      }
    },
    {
      name : "Tejas Jodand",
      designation : "Software Engineer",
      intrests : ["MERN","DSA","WebDev", "Devops"],
      links : {
        linkdin : "https://www.linkedin.com/in/tejas-jogdand-84a5581b9/",
        github : "https://github.com/Tejas-Jogdand",
        x : "http://x.com/TejasJogdand5"
      }
    }
  ])

  return (
   <div>
      <AddCard cardDetails={cardDetails} setCardDetails={setCardDetails}></AddCard>
      <BuisnessCard cardDetails = {cardDetails} setCardDetails = {setCardDetails}></BuisnessCard>
   </div>
  )
}

export default App
