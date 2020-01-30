import { combineReducers } from 'redux';
import { pageReducer } from './page';
import { userReducer } from './user';
import { cardsReducer } from './cards';

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  cards: cardsReducer
});
