import App from './components/App.js';
import pokemon from './data/pokemon/pokemon.js';
import webdev from './data/webdev/webdev.js';
/*const  image=document.getElementById('image');
image.innerHTML=`${pokemon.items}`
console.log(image.innerHTML=`${pokemon.items}`)
document.getElementById('root').appendChild(App());*/
const start = document.getElementById("go"); 

start.addEventListener("click", () => {
  
  const windowinitial = document.querySelector(".windowinitial");
 const window= document.querySelector(".window");
  windowinitial.style.display = "none";
  window.style.display = "block";

});
