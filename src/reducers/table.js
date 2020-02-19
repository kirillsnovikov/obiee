import {
  GET_TABLE_DATA_STARTED,
  GET_TABLE_DATA_SUCCESS,
  GET_TABLE_DATA_FIALURE
} from '../actions/DashboardActions';

const initialState = {
  loading: false,
  table: {
    columns: [],
    data: [],
    config: {}
  },
  error: null
};

export function tableReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TABLE_DATA_STARTED:
      return { ...state, loading: true };
    case GET_TABLE_DATA_SUCCESS:
      return { ...state, loading: false, table: action.payload };
    case GET_TABLE_DATA_FIALURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}
