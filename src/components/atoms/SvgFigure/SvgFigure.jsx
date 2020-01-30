import React from 'react';
import PropTypes from 'prop-types';

const figures = {
  circle: 'circle',
  line: 'line',
  rect: 'rect'
};
export class SvgFigure extends React.Component {
  render() {
    const { figure, attrs } = this.props;
    console.log(attrs);
    const Figure = figures[figure];
    return <Figure {...attrs}></Figure>;
  }
}

SvgFigure.propTypes = {
  figure: PropTypes.string.isRequired,
  attrs: PropTypes.object
};
