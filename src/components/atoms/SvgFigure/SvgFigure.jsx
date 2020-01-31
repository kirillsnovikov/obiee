import React from 'react';
import PropTypes from 'prop-types';

export class SvgFigure extends React.Component {
  render() {
    const { figure, attrs, children } = this.props;
    const Figure = figure;
    return <Figure {...attrs}>{children}</Figure>;
  }
}

SvgFigure.propTypes = {
  figure: PropTypes.string.isRequired,
  attrs: PropTypes.object
};
