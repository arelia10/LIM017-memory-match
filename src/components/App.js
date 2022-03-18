
import pokemon from '../data/pokemon/pokemon.js';
import random from './random.js';
//import matchCards from './Match.js'; //Importar función match.
const App = () => {
  const App = (id,bgColor,image,flipBack) => {
    const el = document.createElement('div');
    el.className = 'Card';
    el.id = id;
    el.style.backgroundColor = bgColor;
    el.style.backgroundImage = 'url("'+image+'")';
    el.classList.add(flipBack);  
  return el;
 
  }

}

const  pokemonfunction= () => {
  const grid= document.createElement('div');
  grid.className = "grid"
//Duplicar cada item de la data y randomizarlos (general, para ser usado por cada mazo)
let doubleArray = pokemon.items.concat(pokemon.items); // Declara variable que dobla los items de Mononoke de Ghibli.js
 const randomCards = random(doubleArray);

 //Recorro los elementos del array y los encierro en un div
 for (let i = 0; i < randomCards.length; i++) {
  // const card = document.createElement('div');
   const cardsHtml=`<div class="card" id="${randomCards[i].id}">
    <img src="${randomCards[i].image}"> 
    <img class="flip-card-inner">
    <img class="frontCard">
    <img src="./imagenes/back.png" class="backCard">
    </div>`
   /*card.className = 'card';
  card.id = randomCards[i].id;
   const  image =document.createElement('img');
    image.src=randomCards[i].image;
    image.style.background="color:white" ;
    card.appendChild(image);*/
   grid.innerHTML+=cardsHtml;
    

   

   /*let backCard = document.createElement("img");
   backCard.src = './imagenes/back.png';
   backCard.className = 'backCard';
   card.appendChild(backCard);*/
 }
return grid;
 }
  export default pokemonfunction;