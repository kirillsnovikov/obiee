import { random } from '../helpers/helper';
import BIService from '../services/BIService';

export const SET_CARDS_SUCCESS = 'SET_CARDS_SUCCESS';
export const SET_CARDS_FIALURE = 'SET_CARDS_FIALURE';
export const SET_CARDS_STARTED = 'SET_CARDS_STARTED';
export const GET_FUNNEL_IN_THINGS_SUCCESS = 'GET_FUNNEL_IN_THINGS_SUCCESS';
export const GET_FUNNEL_IN_THINGS_FIALURE = 'GET_FUNNEL_IN_THINGS_FIALURE';
export const GET_FUNNEL_IN_THINGS_STARTED = 'GET_FUNNEL_IN_THINGS_STARTED';
export const GET_FUNNEL_IN_MLNS_SUCCESS = 'GET_FUNNEL_IN_MLNS_SUCCESS';
export const GET_FUNNEL_IN_MLNS_FIALURE = 'GET_FUNNEL_IN_MLNS_FIALURE';
export const GET_FUNNEL_IN_MLNS_STARTED = 'GET_FUNNEL_IN_MLNS_STARTED';
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

export const getFunnelInThings = () => {
  return dispatch => {
    dispatch(getFunnelInThingsStarted());
    setTimeout(() => {
      let data = BIService.getFunnelInThings();
      dispatch(getFunnelInThingsSuccess(data));
    }, 1000);
  };
};

export const getFunnelInMlns = () => {
  return dispatch => {
    dispatch(getFunnelInMlnsStarted());
    setTimeout(() => {
      let data = BIService.getFunnelInMlns();
      dispatch(getFunnelInMlnsSuccess(data));
    }, 1000);
  };
};

const loadCardsSuccess = cards => ({
  type: SET_CARDS_SUCCESS,
  payload: cards
});

const loadCardsStarted = () => ({
  type: SET_CARDS_STARTED
});

const getFunnelInThingsSuccess = funnel => ({
  type: GET_FUNNEL_IN_THINGS_SUCCESS,
  payload: funnel
});

const getFunnelInThingsStarted = () => ({
  type: GET_FUNNEL_IN_THINGS_STARTED
});

const getFunnelInMlnsSuccess = funnel => ({
  type: GET_FUNNEL_IN_MLNS_SUCCESS,
  payload: funnel
});

const getFunnelInMlnsStarted = () => ({
  type: GET_FUNNEL_IN_MLNS_STARTED
});
