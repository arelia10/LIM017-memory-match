
import pokemon from '../data/pokemon/pokemon.js';
import random from './random.js';
//import matchCards from './Match.js'; //Importar función match.
const App = () => {
  const el = document.createElement('div');
  el.className = 'App';
  //Declaro variables a utilizar
  let clickCard = [];
  let score = 0;

 


  //Cuadrícula para mostrar puntaje (general)
  const scoreBox = document.createElement('div');
  scoreBox.className = 'scoreBox';
 el.appendChild(scoreBox);

  //Mostrar el puntaje
  const theScore = document.createElement('p');
  theScore.className = 'theScore';
  theScore.innerHTML = 'Tu puntaje es: ';
  const scoreNum = document.createElement('span');
  scoreNum.className = 'scoreNum';
  theScore.appendChild(scoreNum);
  scoreBox.appendChild(theScore);
  const monoGif = document.createElement('img');
  monoGif.className = 'monoGif';
  //monoGif.src = './img/gifMono.gif';
  scoreBox.appendChild(monoGif);
  const replayBut = document.createElement('img');
  replayBut.className = 'replayBut';
  //replayBut.src = './img/returnImg.png';
  scoreBox.appendChild(replayBut);

  //Cuadrícula para distribuir las cartas 
  const grid = document.createElement('div');
  grid.className = 'grid';
  el.appendChild(grid);

  //Se crea div con mensaje ganador.
  const winner = document.createElement('div');
  winner.className = 'winner';
  winner.id = 'winner';
  const winnerBox = document.createElement('div');
  winnerBox.className = 'winnerBox';
  winner.id = 'winner';
  const winnerText = document.createElement('p');
  winnerText.className = 'winnerText';
  winnerText.innerHTML = '¡GANASTE!';
  const winBut = document.createElement('img');
  winBut.className = 'winBut';
  //winBut.src = './img/botonotravez.png';
  winner.appendChild(winnerBox);
  winnerBox.appendChild(winnerText);
  winnerBox.appendChild(winBut);
 el.appendChild(winner);




  //Duplicar cada item de la data y randomizarlos (general, para ser usado por cada mazo)
  let doubleArray = pokemon.items.concat(pokemon.items); // Declara variable que dobla los items de Mononoke de Ghibli.js
  const randomCards = random(doubleArray);

  //Recorro los elementos del array y los encierro en un div
  for (let i = 0; i < randomCards.length; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    card.id = randomCards[i].id;
    grid.appendChild(card);

    //Encierro las imagenes en el div anterior
    let frontCard = document.createElement("img");
    frontCard.src = randomCards[i].image;
    frontCard.className = 'frontCard';
    card.appendChild(frontCard);

    let backCard = document.createElement("img");
    backCard.src = './imagenes/back.png';
    backCard.className = 'backCard';
    card.appendChild(backCard);
  }
  return el;

};
export default App;