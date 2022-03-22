import App from './components/App.js';
//import pokemonfunction from './components/App.js';
//import pokemon from './data/pokemon/pokemon.js';
let total= 120;
let min=0;
let seg=0;
const timer = document.getElementById("timer");


const start = document.getElementById("go"); 

start.addEventListener("click", () => {
  
  const windowinitial = document.querySelector(".windowinitial");
 const window= document.querySelector(".window");
  windowinitial.style.display = "none";
  window.style.display = "block";
});
const easy = document.getElementById("go1"); 
easy.addEventListener("click",()=>{

const window= document.querySelector(".window");
const  level= document.querySelector(".level");
window.style.display="none";
level.style.display="block";
timeStar(60)

});
const medium = document.getElementById("go2"); 
medium.addEventListener("click",()=>{
  const window= document.querySelector(".window");
  const  level= document.querySelector(".level");
  window.style.display="none";
  level.style.display="block";
  timeStar(45)});

const hard = document.getElementById("go3"); 
hard.addEventListener("click",()=>{
  const window= document.querySelector(".window");
  const  level= document.querySelector(".level");
  window.style.display="none";
  level.style.display="block";
  timeStar(30)});
document.getElementById(('root')).appendChild(App())

//const cardsHtml=cards(pokemon.items);
//document.getElementById('sizecard').appendChild(cards(pokemon.items))
function timeStar(total2){total=total2;
  
  min= 0;
  seg= 0;
  const cont =setInterval(function(){
    total--;

          min = Math.floor(total / 60);
          seg = total % 60;
          if(min<10){ min="0"+min;}
          if(seg<10){ seg="0"+seg;}
          timer.innerHTML = min+":"+seg;
          if(total===0){clearInterval(cont)
            alert("tu tiempo termino")
          }
  },1000);}
 
 //Declaro variables a utilizar
 let clickCard = [];
 let score = 0;
 let card =[];
 let scoreNum= []
 let winner=[]
 const flipCard = clickCard.length;
//Hacer flip a 2 cartas.
   
  if (clickCard.length < 2) {
    clickCard.push(card);
    card.classList.add("flipCard");

    setTimeout(() => {
      matchCards(clickCard);
    }, 1200);

  }

  
  card.addEventListener("click", flipCard);
  
  //Función Match
  const matchCards = (array) => {
    let matchPos = []; //Se crea variable con array abierto.
    if (array.length == 2 && array[0].id == array[1].id) { //Se comparan los id de los elementos clickeados.
      matchPos.push(array[0], array[1]); //Si son iguales se encierran los elementos en la variable.
     {matchPos.forEach(element => { //Se recorre el array y se cambian las clases de los elementos.
        element.classList.add("matchCards");
      })}
      score += 100;
      scoreNum.innerHTML = score;
      if (score == 600) {
        winner.classList.add('active');
      }
      array.length = 0; //Si hacen match se vacía el array (parámetro).
      return true;
    } else { //Si no hacen match...
      document.querySelectorAll(".flipCard").forEach(element => { //Se toman los elementos y se remueve el flip para que se volteen las cartas.
        element.classList.remove("flipCard");
      });
      array.length = 0; //Si no hacen match se vacía el array (parámetro).
      return false;
    }
      
  };



