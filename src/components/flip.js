let clickCard = [];
let score = 0;
//Hacer flip a 2 cartas.
const flipCard = () => {
  if (clickCard.length < 2) {
    clickCard.push(card);
    card.classList.add("flipCard");

    setTimeout(() => {
      matchCards(clickCard);
    }, 2000);
  }
};
card.addEventListener("click", flipCard);

//Función Match
const matchCards = (array) => {
  let matchPos = []; //Se crea variable con array abierto.
  if (array.length == 2 && array[0].id == array[1].id) {
    //Se comparan los id de los elementos clickeados.
    matchPos.push(array[0], array[1]); //Si son iguales se encierran los elementos en la variable.
    {
      matchPos.forEach((element) => {
        //Se recorre el array y se cambian las clases de los elementos.
        element.classList.add("matchCards");
      });
    }
    score += 100;
    // scoreNum.innerHTML = score;
    if (score == 900) {
      winner.classList.add("active");
    }
    array.length = 0; //Si hacen match se vacía el array (parámetro).
    return true;
  } else {
    //Si no hacen match...
    document.querySelectorAll(".flipCard").forEach((element) => {
      //Se toman los elementos y se remueve el flip para que se volteen las cartas.
      element.classList.remove("flipCard");
    });
    array.length = 0; //Si no hacen match se vacía el array (parámetro).
    return false;
  }
  return matchCards;
};
