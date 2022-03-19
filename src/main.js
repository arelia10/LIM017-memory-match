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
