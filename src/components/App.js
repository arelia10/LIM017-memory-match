
import pokemon from '../data/pokemon/pokemon.js';
import random from './random.js';

 // Importar función shuffle
//import matchCards from './Match.js'; //Importar función match.

const App = () => {
const el = document.createElement('div');
el.className = 'App';
/*const displayPokemon = document.createElement('div');
  displayPokemon.className = 'pokemonkeBg';
  el.appendChild(displayPokemon);*/

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
   el.appendChild(card);





 }
 return el;

}
  export default App;