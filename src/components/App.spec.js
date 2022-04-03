import App from './App.js';
import random from './random.js'; 

//Test de app
describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });

  it("número de cartas en el juego", () => {
    let cards = App().getElementsByClassName("card");
    expect(cards).toHaveLength(18);
  }); 

  it("should return a new space",() => {
    
    const box =App().querySelector('#Box');
  expect(box instanceof HTMLElement).toBe(true);
  
  });
  


//Test de  random
describe("random", () => {
  it("debería ser una función", () => {
    expect(typeof random).toEqual('function');
  });

})});
