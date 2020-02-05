import React from 'react';
import { Svg } from './../../atoms/Svg';
import { SvgFigure } from '../../atoms/SvgFigure';
import PropTypes from 'prop-types';
import style from './style.scss';

export class Funnel extends React.Component {
  render() {
    const { data, width, height } = this.props;
    const figures = data.map(attr => (
      <g key={attr.path.fill}>
        <SvgFigure figure={'path'} attrs={attr.path} />
        <SvgFigure
          className={style.text}
          figure={'text'}
          attrs={attr.text}
        >{`${attr.data}%`}</SvgFigure>
      </g>
    ));
    return (
      <Svg width={width} height={height}>
        {figures}
      </Svg>
    );
  }
}

Funnel.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};
