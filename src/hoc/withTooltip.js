import React from 'react';
import ReactDOM from 'react-dom';

const tooltipRoot = document.body;
function createTooltip(state) {
  return { ...state };
}

const withTooltip = (Wrapped, Tooltip) => {
  return class extends React.Component {
    state = { isShow: false };
    render() {
      const { figure, attrs, tooltip } = this.props;
      const showTooltip = e => {
        const { screenX, screenY } = e;
        let state = {
          isShow: true,
          left: screenX,
          top: screenY
        };
        this.setState(createTooltip(state));
      };
      const closeTooltip = e => {
        this.setState(() => ({ isShow: false }));
      };
      return (
        <React.Fragment>
          <g onMouseEnter={showTooltip} onMouseLeave={closeTooltip}>
            <Wrapped wrapped={{ figure, attrs }} />
          </g>
          <Tooltip tooltip={tooltip} />
          {this.state.isShow ? (
            <TooltipWrapper top={this.state.top} left={this.state.left}>
              <Tooltip tooltip={tooltip} />
            </TooltipWrapper>
          ) : null}
        </React.Fragment>
      );
    }
  };
};

class TooltipWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    this.el.style.bottom = this.props.top + 'px';
    this.el.style.right = this.props.left + 'px';
    this.el.style.position = 'absolute';
    this.el.style['z-index'] = '1000px';
    tooltipRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    tooltipRoot.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default withTooltip;
