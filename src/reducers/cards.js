import {
  SET_CARDS,
  SET_CARDS_STARTED,
  SET_CARDS_SUCCESS,
  SET_CARDS_FIALURE
} from '../actions/DashboardActions';
// import { random } from '../helpers/helper';

const initialState = {
  // items: [{ id: 1 }, { id: 2 }, { id: 3 }]
  loading: false,
  cards: [],
  error: null
};
// initialState.cards.forEach(item => (item.pct = random(0, 100)));

export function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CARDS:
      return [...state, action.payload];

    case SET_CARDS_STARTED:
      return { ...state, loading: true };

    case SET_CARDS_SUCCESS:
      console.log(state, action);
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
