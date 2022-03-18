
import pokemon from '../data/pokemon/pokemon.js';
import random from './random.js';
//import matchCards from './Match.js'; //Importar función match.

const App = () => {
const el = document.createElement('div');
el.className = 'App';
/*const displayPokemon = document.createElement('div');
  displayPokemon.className = 'pokemonkeBg';
  el.appendChild(displayPokemon);*/

 
 
 return el;

}

const  pokemonfunction= () => {
  const grid= document.createElement('div');
  grid.className = "grid"
//Duplicar cada item de la data y randomizarlos (general, para ser usado por cada mazo)
let doubleArray = pokemon.items.concat(pokemon.items); // Declara variable que dobla los items de Mononoke de Ghibli.js
 const randomCards = random(doubleArray);

 //Recorro los elementos del array y los encierro en un div
 for (let i = 0; i < randomCards.length; i++) {
   const card = document.createElement('div');
   card.className = 'card';
   card.id = randomCards[i].id;
   const  image =document.createElement('img');
    image.src=randomCards[i].image;
    card.appendChild(image);
   grid.appendChild(card);

   let frontCard = document.createElement("img");
   frontCard.src = randomCards[i].image;
   frontCard.className = 'frontCard';
   card.appendChild(frontCard);

   let backCard = document.createElement("img");
   backCard.src = '';
   backCard.className = 'backCard';
   card.appendChild(backCard);*/
 }
return grid;
 }
  export default pokemonfunction;