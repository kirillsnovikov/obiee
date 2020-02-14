import BIService from '../services/BIService';

export const GET_PIPE_LIST_HEADER_SUCCESS = 'GET_PIPE_LIST_HEADER_SUCCESS';
export const GET_PIPE_LIST_HEADER_FIALURE = 'GET_PIPE_LIST_HEADER_FIALURE';
export const GET_PIPE_LIST_HEADER_STARTED = 'GET_PIPE_LIST_HEADER_STARTED';
export const GET_PIPE_LIST_CHART_SUCCESS = 'GET_PIPE_LIST_CHART_SUCCESS';
export const GET_PIPE_LIST_CHART_FIALURE = 'GET_PIPE_LIST_CHART_FIALURE';
export const GET_PIPE_LIST_CHART_STARTED = 'GET_PIPE_LIST_CHART_STARTED';

export const getPipeListHeader = () => {
  return dispatch => {
    dispatch(getPipeListHeaderStarted());
    setTimeout(() => {
      let data = BIService.getPipeListHeader();
      dispatch(getPipeListHeaderSuccess(data));
    }, 300);
  };
};

export const getPipeListChart = () => {
  return dispatch => {
    dispatch(getPipeListChartStarted());
    setTimeout(() => {
      let data = BIService.getPipeListChart();
      dispatch(getPipeListChartSuccess(data));
    }, 300);
  };
};

const getPipeListHeaderStarted = () => ({
  type: GET_PIPE_LIST_HEADER_STARTED
});

const getPipeListHeaderSuccess = table => ({
  type: GET_PIPE_LIST_HEADER_SUCCESS,
  payload: table
});

const getPipeListChartStarted = () => ({
  type: GET_PIPE_LIST_CHART_STARTED
});

const getPipeListChartSuccess = chart => ({
  type: GET_PIPE_LIST_CHART_SUCCESS,
  payload: chart
});
