/*const random = function(pokeArray) {// Se le pasa el parámetro del conjunto de imágenes
    let shortArray = pokeArray.length - 1; //-1 para que no considere la posición 0
    let value = pokeArray.length; //
    while(shortArray > 0) { //Bucle que, antes de ejecutarse, evalúa como verdadera la condición shortArray > 0
        let finalValue = pokeArray[shortArray]; //Estableciendo propiedad de shortArray
        let randomArray = Math.floor(Math.random()* value);//Estableciendo el array randomizado mediante el método Math.floor y función Math.random 
        pokeArray[shortArray]= pokeArray [randomArray];//Se reasigna valor a array[shortArray]
        pokeArray[randomArray]= finalValue;//Se reasigna valor a array[randomArray]
        shortArray=shortArray-1;
        value=value -1;
    
    }
    return pokeArray;

}
  
export default random;*/

const random = (data) => {
    let gameCards = [];
  
    while(gameCards.length < 18) {
      for(let i = 0; i < 9; i++) {
        let j = Math.floor(Math.random() * 9);
        if(gameCards.indexOf(data[j]) === -1) {
          gameCards.push(data[j], data[j]);
          break;
        }
      }
    }
  
    for(let i = gameCards.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = gameCards[i];
      gameCards[i] = gameCards[j];
      gameCards[j] = temp;
    }
    return gameCards;
};

export default random;
