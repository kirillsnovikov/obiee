import React from 'react';
import PropTypes from 'prop-types';

export class SvgFigure extends React.Component {
  render() {
    const { figure, attrs, children, className } = this.props;
    const Figure = figure;
    return (
      <Figure {...attrs} className={className}>
        {children}
      </Figure>
    );
  }
}

SvgFigure.propTypes = {
  figure: PropTypes.string.isRequired,
  attrs: PropTypes.object,
  className: PropTypes.string
};
