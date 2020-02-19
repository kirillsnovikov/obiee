import {
  GET_CARDS_STARTED,
  GET_CARDS_SUCCESS,
  GET_CARDS_FIALURE
} from '../actions/DashboardActions';

const initialState = {
  loading: false,
  cards: [],
  error: null
};

export function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS_STARTED:
      return { ...state, loading: true };

    case GET_CARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        cards: action.payload
      };

    case GET_CARDS_FIALURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
}
