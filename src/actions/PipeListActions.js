import BIService from '../services/BIService';

export const GET_PIPE_LIST_HEADER_SUCCESS = 'GET_PIPE_LIST_HEADER_SUCCESS';
export const GET_PIPE_LIST_HEADER_FIALURE = 'GET_PIPE_LIST_HEADER_FIALURE';
export const GET_PIPE_LIST_HEADER_STARTED = 'GET_PIPE_LIST_HEADER_STARTED';

export const getPipeListHeader = () => {
  return dispatch => {
    dispatch(getPipeListHeaderStarted());
    setTimeout(() => {
      let data = BIService.getPipeListHeader();
      console.log(data, 'data');
      dispatch(getPipeListHeaderSuccess(data));
    }, 1000);
  };
};

const getPipeListHeaderStarted = () => ({
  type: GET_PIPE_LIST_HEADER_STARTED
});

const getPipeListHeaderSuccess = table => ({
  type: GET_PIPE_LIST_HEADER_SUCCESS,
  payload: table
});
