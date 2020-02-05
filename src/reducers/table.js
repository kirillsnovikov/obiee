import {
  SET_TABLE_STARTED,
  SET_TABLE_SUCCESS,
  SET_TABLE_FIALURE
} from '../actions/DashboardActions';

const initialState = {
  loading: false,
  table: [],
  error: null
};

export function tableReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TABLE_STARTED:
      return { ...state, loading: true };
    case SET_TABLE_SUCCESS:
      return { ...state, loading: false, table: action.payload };
    case SET_TABLE_FIALURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}
