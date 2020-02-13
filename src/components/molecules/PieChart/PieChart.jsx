import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import { Pie } from '../../../lib/charts';
import { Svg, SvgFigure } from '../../atoms/Svg';

export const PieChart = ({ data, size }) => {
  const chart = new Pie(data, size);
  const paths = chart.paths;
  const radius = size / 2;
  return (
    <Svg className={style.svg} width={size} height={size}>
      <g>
        <defs>
          <SvgFigure figure={'clipPath'} attrs={{ id: 'pie-chart' }}>
            <SvgFigure
              figure={'circle'}
              attrs={{
                r: radius,
                cx: radius,
                cy: radius,
                fill: 'none'
              }}
            >
              <SvgFigure
                figure={'animate'}
                attrs={{
                  attributeName: 'r',
                  from: '0',
                  to: radius,
                  dur: '0.5s'
                }}
              />
            </SvgFigure>
          </SvgFigure>
        </defs>
      </g>
      <g clipPath={`url(#pie-chart)`}>
        {paths.map(path => {
          let { slice } = path;
          return <SvgFigure figure={'path'} attrs={slice} key={slice.fill} />;
        })}
        <SvgFigure
          figure={'animate'}
          attrs={{
            attributeName: 'opacity',
            values: '0; 1',
            dur: '0.5s'
          }}
        />
      </g>
    </Svg>
  );
};

PieChart.propTypes = {
  data: PropTypes.array.isRequired,
  size: PropTypes.number.isRequired,
  type: PropTypes.string
};
