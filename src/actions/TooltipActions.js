export const SHOW_TOOLTIP = 'SHOW_TOOLTIP';
export const SHOW_TOOLTIP_ON_HOVER = 'SHOW_TOOLTIP_ON_HOVER';
export const UPDATE_TOOLTIP = 'UPDATE_TOOLTIP';
export const HIDE_TOOLTIP = 'HIDE_TOOLTIP';

export const showTooltip = el => {
  return {
    type: SHOW_TOOLTIP,
    payload: {
      id:
        el.target.getAttribute('data-for') ||
        el.currentTarget.getAttribute('id'),
      visible: true
    }
  };
};

export const showTooltipOnHover = el => {
  return {
    type: SHOW_TOOLTIP_ON_HOVER,
    payload: el.target.getAttribute('data-for') || el.target.getAttribute('id')
  };
};

export const updateTooltip = el => {
  return {
    type: UPDATE_TOOLTIP,
    payload: {
      x: el.x,
      y: el.y
    }
  };
};

export const hideTooltip = () => ({
  type: HIDE_TOOLTIP,
  payload: false
});
