import { SET_CARDS } from '../actions/DashboardActions';
import { random } from '../helpers/helper';

const initialState = {
  items: [{ id: 1 }, { id: 2 }, { id: 3 }]
};
initialState.items.forEach(item => (item.percentage = random(0, 100)));

export function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CARDS:
      return [...state, action.payload];

    default:
      return state;
  }
}
