import React from 'react';
import PropTypes from 'prop-types';
import { SvgFigure } from '../../atoms/Svg';

export class Gradient extends React.Component {
  render() {
    const { type, stops, id, rotate } = this.props;
    const stopEls = stops.map((stop, i) => (
      <SvgFigure figure={'stop'} attrs={stop} key={`${stop.stopColor}_${i}`} />
    ));
    let attrs = {
      id: id,
      gradientTransform: `rotate(${rotate})`
    };
    return (
      <SvgFigure figure={type} attrs={attrs}>
        {stopEls}
      </SvgFigure>
    );
  }
}

Gradient.propTypes = {
  type: PropTypes.string.isRequired,
  stops: PropTypes.array.isRequired,
  id: PropTypes.string,
  rotate: PropTypes.string
};
