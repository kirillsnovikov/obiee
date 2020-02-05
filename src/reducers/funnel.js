import {
  SET_FUNNEL_STARTED,
  SET_FUNNEL_SUCCESS,
  SET_FUNNEL_FIALURE
} from '../actions/DashboardActions';

const initialState = {
  loading: false,
  funnel: [],
  error: null
};

export function funnelReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FUNNEL_STARTED:
      return { ...state, loading: true };
    case SET_FUNNEL_SUCCESS:
      return { ...state, loading: false, funnel: action.payload };
    case SET_FUNNEL_FIALURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}
