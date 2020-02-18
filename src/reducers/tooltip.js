import {
  SHOW_TOOLTIP,
  SHOW_TOOLTIP_ON_HOVER,
  UPDATE_TOOLTIP,
  HIDE_TOOLTIP
} from '../actions/TooltipActions';

const initialState = {
  id: null,
  visible: false,
  x: null,
  y: null
};

export function tooltipReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_TOOLTIP:
      return {
        ...state,
        visible: action.payload.visible,
        id: action.payload.id
      };
    case SHOW_TOOLTIP_ON_HOVER:
      return {
        ...state,
        id: action.payload
      };
    case UPDATE_TOOLTIP:
      return {
        ...state,
        x: action.payload.x,
        y: action.payload.y
      };

    case HIDE_TOOLTIP:
      return { ...state, visible: action.payload };
    default:
      return state;
  }
}
