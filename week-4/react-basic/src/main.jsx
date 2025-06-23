import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

let id = 1;

function createChild(title,description, id) {
  const child = document.createElement('div');
  const titleDiv = document.createElement('div');
  const descriptionDiv = document.createElement('div');

  titleDiv.innerHTML = "Title: "+title;
  descriptionDiv.innerHTML = "Description: "+description;
  child.setAttribute('id',id);

  child.appendChild(titleDiv);
  child.appendChild(descriptionDiv);

  return child;
}

export default function addDiv(){
  const parent = document.getElementById('container');
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  parent.appendChild(createChild(title,description,id));
  parent
  id++;
}