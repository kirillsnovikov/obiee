import {
  GET_PIPE_LIST_CHART_STARTED,
  GET_PIPE_LIST_CHART_SUCCESS,
  GET_PIPE_LIST_CHART_FIALURE
} from '../actions/PipeListActions';

const initialState = {
  title: '',
  type: '',
  pie: [],
  loading: false,
  error: null
};

export function pipeListChartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PIPE_LIST_CHART_STARTED:
      return { ...state, loading: true };
    case GET_PIPE_LIST_CHART_SUCCESS:
      return {
        ...state,
        title: action.payload.title,
        type: action.payload.type,
        pie: action.payload.pie,
        loading: false,
        error: action.payload.error
      };
    case GET_PIPE_LIST_CHART_FIALURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}
