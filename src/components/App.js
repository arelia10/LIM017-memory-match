//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

import pokemon from '../data/pokemon/pokemon.js';

const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.textContent = 'Hola mundo!';

  return el;
};
export const cards=(pokemonArray)=>{
  //tomar data de card  y por cada data de arreglo generar un html de tarjeta combinarlo y devolverlo
  let html =" "
  
  for (let i = 0; i < pokemonArray.length; i++) {
      const  pokemonElement = pokemonArray[i];
      const   htmlDiv=`<div><img src="${pokemonElement.image}"></div>`;
      html+=htmlDiv;
  }
  return html;
  
  }
  
  export default App;
  
