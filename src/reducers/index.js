import { combineReducers } from 'redux';
import { pageReducer } from './page';
import { userReducer } from './user';
import { cardsReducer } from './cards';
import { funnelReducer } from './funnel';
import { tableReducer } from './table';

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  cards: cardsReducer,
  funnel: funnelReducer,
  table: tableReducer
});
