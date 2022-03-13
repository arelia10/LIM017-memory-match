
import pokemon from '../data/pokemon/pokemon.js';

const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.textContent = 'Hola mundo!';

  const box = document.createElement('div');
  box.className = 'Box';
  el.appendChild(box);
  //Contenedor de las cartas (también general)
  const cardsBox = document.createElement('div');
  cardsBox.className = 'cardsBox';
  box.appendChild(cardsBox);
  //const doubleArray= pokemon.items.concat(pokemon.items)
  //const randomArray=randon(doubleArray)

 
  
  
  return el;
};

export const cards=(pokemonArray)=>{
  //tomar data de card  y por cada data de arreglo generar un html de tarjeta combinarlo y devolverlo
    const html = document.createElement('div');
  
  
    for (let i = 0; i < pokemonArray.length; i++) {
      const  pokemonElement = pokemonArray[i];
      const  image =document.createElement('img');
      image.src=pokemonElement.image;
      html.appendChild(image);
   image.style.id=pokemonElement.image;
  
  }
  return html;
  
  }
  
  export default App;