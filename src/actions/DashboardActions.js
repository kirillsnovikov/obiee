export const SET_CARDS = 'SET_CARDS';

export function setCards(card) {
  return {
    type: SET_CARDS,
    payload: card
  };
}
