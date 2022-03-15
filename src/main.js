//import App from './components/App.js';
import pokemonfunction from './components/App.js';
//import pokemon from './data/pokemon/pokemon.js';
const start = document.getElementById("go"); 

start.addEventListener("click", () => {
  
  const windowinitial = document.querySelector(".windowinitial");
 const level= document.querySelector(".level");
  windowinitial.style.display = "none";
  level.style.display = "block";
});
/*const easy = document.getElementById("go1"); 
easy.addEventListener("click",()=>{

const window= document.querySelector(".window");
const  level= document.querySelector(".level");
window.style.display="none";
level.style.display="block";
});*/


document.getElementById('root').appendChild(pokemonfunction())

//const cardsHtml=cards(pokemon.items);
//document.getElementById('sizecard').appendChild(cards(pokemon.items))