import {
  GET_PIPE_LIST_TABLE_STARTED,
  GET_PIPE_LIST_TABLE_SUCCESS,
  GET_PIPE_LIST_TABLE_FIALURE
} from '../actions/PipeListActions';

const initialState = {
  loading: false,
  table: {
    columns: [],
    data: []
  },
  error: null
};

export function pipeListTableReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PIPE_LIST_TABLE_STARTED:
      return { ...state, loading: true };
    case GET_PIPE_LIST_TABLE_SUCCESS:
      return {
        ...state,
        loading: false,
        table: action.payload
      };
    case GET_PIPE_LIST_TABLE_FIALURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}
