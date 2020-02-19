import BIService from '../services/BIService';

export const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS';
export const GET_CARDS_FIALURE = 'GET_CARDS_FIALURE';
export const GET_CARDS_STARTED = 'GET_CARDS_STARTED';
export const GET_FUNNEL_IN_THINGS_SUCCESS = 'GET_FUNNEL_IN_THINGS_SUCCESS';
export const GET_FUNNEL_IN_THINGS_FIALURE = 'GET_FUNNEL_IN_THINGS_FIALURE';
export const GET_FUNNEL_IN_THINGS_STARTED = 'GET_FUNNEL_IN_THINGS_STARTED';
export const GET_FUNNEL_IN_MLNS_SUCCESS = 'GET_FUNNEL_IN_MLNS_SUCCESS';
export const GET_FUNNEL_IN_MLNS_FIALURE = 'GET_FUNNEL_IN_MLNS_FIALURE';
export const GET_FUNNEL_IN_MLNS_STARTED = 'GET_FUNNEL_IN_MLNS_STARTED';
export const GET_TABLE_DATA_SUCCESS = 'GET_TABLE_DATA_SUCCESS';
export const GET_TABLE_DATA_FIALURE = 'GET_TABLE_DATA_FIALURE';
export const GET_TABLE_DATA_STARTED = 'GET_TABLE_DATA_STARTED';

export function getCards() {
  return dispatch => {
    dispatch(getCardsStarted());
    setTimeout(() => {
      let data = BIService.getCards();
      dispatch(getCardsSuccess(data));
    }, 1500);
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

export const getTableData = () => {
  return dispatch => {
    dispatch(getTableDataStarted());
    setTimeout(() => {
      let data = BIService.getTableData();
      dispatch(getTableDataSuccess(data));
    }, 2000);
  };
};

const getCardsSuccess = cards => ({
  type: GET_CARDS_SUCCESS,
  payload: cards
});

const getCardsStarted = () => ({
  type: GET_CARDS_STARTED
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

const getTableDataStarted = () => ({
  type: GET_TABLE_DATA_STARTED
});
const getTableDataSuccess = table => ({
  type: GET_TABLE_DATA_SUCCESS,
  payload: table
});
