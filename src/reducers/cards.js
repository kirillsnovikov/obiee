import {
  SET_CARDS_STARTED,
  SET_CARDS_SUCCESS,
  SET_CARDS_FIALURE
} from '../actions/DashboardActions';

const initialState = {
  loading: false,
  cards: [],
  error: null
};

export function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CARDS_STARTED:
      return { ...state, loading: true };

    case SET_CARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        cards: action.payload
      };

    case SET_CARDS_FIALURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
}
