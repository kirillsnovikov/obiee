import {
  GET_FUNNEL_IN_THINGS_STARTED,
  GET_FUNNEL_IN_THINGS_SUCCESS,
  GET_FUNNEL_IN_THINGS_FIALURE,
  GET_FUNNEL_IN_MLNS_STARTED,
  GET_FUNNEL_IN_MLNS_SUCCESS,
  GET_FUNNEL_IN_MLNS_FIALURE
} from '../actions/DashboardActions';

const initialState = {
  header: '',
  types: [],
  body: {},
  funnel: [],
  loading: false,
  error: null
};

export function funnelReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FUNNEL_IN_THINGS_STARTED:
    case GET_FUNNEL_IN_MLNS_STARTED:
      return { ...state, loading: true };
    case GET_FUNNEL_IN_THINGS_SUCCESS:
    case GET_FUNNEL_IN_MLNS_SUCCESS:
      return {
        ...state,
        header: action.payload.header,
        types: action.payload.types,
        body: action.payload.body,
        funnel: action.payload.funnel,
        loading: action.payload.loading,
        error: action.payload.error
      };
    case GET_FUNNEL_IN_THINGS_FIALURE:
    case GET_FUNNEL_IN_MLNS_FIALURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}
