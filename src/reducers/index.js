import { combineReducers } from 'redux';
import { pageReducer } from './page';
import { userReducer } from './user';
import { cardsReducer } from './cards';
import { funnelReducer } from './funnel';
import { tableReducer } from './table';
import { headerReducer } from './header';
import { pipeListChartReducer } from './pipeListChart';
import { pipeListTableReducer } from './pipeListTable';
import { tooltipReducer } from './tooltip';

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  cards: cardsReducer,
  funnel: funnelReducer,
  table: tableReducer,
  header: headerReducer,
  pipeListChart: pipeListChartReducer,
  pipeListTable: pipeListTableReducer,
  tooltip: tooltipReducer
});
