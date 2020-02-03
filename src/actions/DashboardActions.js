import { random } from '../helpers/helper';

export const SET_CARDS = 'SET_CARDS';
export const SET_CARDS_SUCCESS = 'SET_CARDS_SUCCESS';
export const SET_CARDS_FIALURE = 'SET_CARDS_FIALURE';
export const SET_CARDS_STARTED = 'SET_CARDS_STARTED';

// export function setCards(card) {
//   return {
//     type: SET_CARDS,
//     payload: card
//   };
// }

export function loadCards() {
  return dispatch => {
    dispatch(loadCardsStarted());

    // const promise = new Promise(resolve => {
    let res = [];
    for (let i = 0; i < 3; i++) {
      let card = {
        id: i + 1,
        pct: random(0, 100),
        plan: random(40, 60),
        fact: random(70, 100),
        pipe: random(0, 30),
        confirm: random(0, 20)
      };
      res.push(card);
    }
    console.log('ddd', res);
    // setTimeout(() => {
    // resolve(res);
    // }, 1000);
    // });

    // promise.then(res => {
    dispatch(loadCardsSuccess(res));
    // });
  };
}

const loadCardsSuccess = cards => ({
  type: SET_CARDS_SUCCESS,
  payload: cards
});

const loadCardsStarted = () => ({
  type: SET_CARDS_STARTED
});
