import React from 'react';
import style from './style.scss';
import { cn } from '@bem-react/classname';
import { connect } from 'react-redux';
import {
  showTooltip,
  showTooltipOnHover,
  updateTooltip,
  hideTooltip
} from '../../../actions/TooltipActions';
import { arrayOfTips } from './helpers';
import { debounce } from '../../../helpers/helper';

class Tooltip extends React.Component {
  componentDidMount() {
    arrayOfTips(this.props.tipId).forEach(el => {
      this.addEventListeners(el);
    });
  }
  addEventListeners(el) {
    const { effect = 'float', delay = 0 } = this.props;
    el.addEventListener('mouseenter', this.props.showTooltip);
    if (effect === 'float') {
      el.addEventListener(
        'mousemove',
        debounce(this.props.updateTooltip, delay)
      );
    }
    el.addEventListener('mouseleave', this.props.hideTooltip);
  }
  render() {
    const { tooltip, children, tipId } = this.props;
    const { x, y, visible, id } = tooltip;
    const tooltipEl = document.getElementById(tipId);
    const styleTooltip =
      id === tipId
        ? {
            top: tooltipEl ? y - tooltipEl.clientHeight - 30 : null,
            left: tooltipEl ? x - tooltipEl.clientWidth / 2 : null
          }
        : null;
    const block = cn('tip');
    const classNames = block({
      visible: visible && id === tipId
    })
      .split(' ')
      .map(name => style[name])
      .join(' ');
    return (
      <span
        id={tipId}
        className={classNames}
        style={styleTooltip}
        onMouseEnter={this.props.showTooltipOnHover}
      >
        {children}
      </span>
    );
  }
}

const mapStateToProps = store => {
  return {
    tooltip: store.tooltip
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showTooltip: e => dispatch(showTooltip(e)),
    updateTooltip: e => dispatch(updateTooltip(e)),
    hideTooltip: () => dispatch(hideTooltip()),
    showTooltipOnHover: e => dispatch(showTooltipOnHover(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tooltip);
