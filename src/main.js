import App from './components/App.js';
import {cards} from './components/App.js';
import pokemon from './data/pokemon/pokemon.js';
const start = document.getElementById("go"); 

start.addEventListener("click", () => {
  
  const windowinitial = document.querySelector(".windowinitial");
 const window= document.querySelector(".window");
  windowinitial.style.display = "none";
  window.style.display = "block";
});

document.getElementById('root').appendChild(App())
 
const cardsHtml=cards(pokemon.items);
document.getElementById('root').appendChild(cards(pokemon.items))










