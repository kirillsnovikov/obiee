import {
  GET_PIPE_LIST_HEADER_STARTED,
  GET_PIPE_LIST_HEADER_SUCCESS,
  GET_PIPE_LIST_HEADER_FIALURE
} from '../actions/PipeListActions';

const initialState = {
  header: {
    title: '',
    actionName: '',
    values: []
  },
  loading: false,
  error: null
};

export function headerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PIPE_LIST_HEADER_STARTED:
      return { ...state, loading: true };
    case GET_PIPE_LIST_HEADER_SUCCESS:
      return { ...state, loading: false, header: action.payload };
    case GET_PIPE_LIST_HEADER_FIALURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}
