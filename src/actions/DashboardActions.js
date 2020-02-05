import { random } from '../helpers/helper';

export const SET_CARDS = 'SET_CARDS';
export const SET_CARDS_SUCCESS = 'SET_CARDS_SUCCESS';
export const SET_CARDS_FIALURE = 'SET_CARDS_FIALURE';
export const SET_CARDS_STARTED = 'SET_CARDS_STARTED';
export const SET_FUNNEL_SUCCESS = 'SET_FUNNEL_SUCCESS';
export const SET_FUNNEL_FIALURE = 'SET_FUNNEL_FIALURE';
export const SET_FUNNEL_STARTED = 'SET_FUNNEL_STARTED';
export const SET_TABLE_SUCCESS = 'SET_TABLE_SUCCESS';
export const SET_TABLE_FIALURE = 'SET_TABLE_FIALURE';
export const SET_TABLE_STARTED = 'SET_TABLE_STARTED';

export function loadCards() {
  return dispatch => {
    dispatch(loadCardsStarted());

    setTimeout(() => {
      let res = [];
      for (let i = 0; i < 3; i++) {
        let card = {
          id: i + 1,
          title: 'Прирост портфеля под управлением',
          pct: random(0, 100),
          plan: random(40, 60),
          fact: random(70, 100),
          pipe: random(5, 30),
          confirm: random(5, 20)
        };
        res.push(card);
      }

      dispatch(loadCardsSuccess(res));
    }, 1000);
  };
}

export function loadFunnel() {
  return dispatch => {
    dispatch(loadFunnelStarted());

    setTimeout(() => {
      let funnel = [];
      for (let i = 0; i < 3; i++) {
        let layer = {
          order: i + 1,
          name: `NAME_${i + 1}`,
          data: random(0, 100),
          color: `#${random(0, 255).toString(16)}${random(0, 255).toString(
            16
          )}${random(0, 255).toString(16)}`
        };
        funnel.push(layer);
      }

      dispatch(loadFunnelSuccess(funnel));
    }, 2200);
  };
}

const loadCardsSuccess = cards => ({
  type: SET_CARDS_SUCCESS,
  payload: cards
});

const loadCardsStarted = () => ({
  type: SET_CARDS_STARTED
});

const loadFunnelSuccess = cards => ({
  type: SET_FUNNEL_SUCCESS,
  payload: cards
});

const loadFunnelStarted = () => ({
  type: SET_FUNNEL_STARTED
});
