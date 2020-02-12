import React from 'react';
import PropTypes from 'prop-types';

export const Svg = ({ children, width, height, viewBox, className }) => (
  <svg className={className} width={width} height={height} viewBox={viewBox}>
    {children}
  </svg>
);

export const SvgFigure = ({ figure, attrs, children, className }) => {
  const Figure = figure;
  return (
    <Figure {...attrs} className={className}>
      {children}
    </Figure>
  );
};

Svg.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.array,
  className: PropTypes.string
};

SvgFigure.propTypes = {
  figure: PropTypes.string.isRequired,
  attrs: PropTypes.object,
  className: PropTypes.string
};
