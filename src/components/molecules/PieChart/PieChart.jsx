import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import { Pie } from '../../../lib/charts';
import { Svg, SvgFigure } from '../../atoms/Svg';

export const PieChart = ({ data, size }) => {
  const chart = new Pie(data, size);
  const paths = chart.paths;
  // console.log(paths);
  // const radius = size / 2;
  const path = paths[0];
  console.log(path);
  return (
    <Svg className={style.svg} width={size} height={size}>
      {paths.map(path => (
        <SvgFigure
          figure={'path'}
          attrs={{
            d: path,
            stroke: 'white',
            strokeLinejoin: 'round',
            fill: 'green',
            strokeWidth: '2',
            fillOpacity: '0.5'
          }}
        />
      ))}
    </Svg>
  );
};

PieChart.propTypes = {
  data: PropTypes.array.isRequired,
  size: PropTypes.number.isRequired
};
