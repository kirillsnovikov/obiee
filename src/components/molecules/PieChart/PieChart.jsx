import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import { Pie } from '../../../lib/charts';
import { Svg, SvgFigure } from '../../atoms/Svg';
import { Text } from '../../atoms/Text';
import { cn } from '@bem-react/classname';
import Tooltip from '../Tooltip';
import Portal from '../../../hoc/Portal';

export const PieChart = ({ data, size }) => {
  const { pie, title, type } = data;
  const chart = new Pie(pie, size);
  const paths = chart.paths;
  const radius = size / 2;
  const pointSize = 7;
  const pointRadius = pointSize / 2;
  const block = cn('pie');
  const chartClassName = block({
    type: type ? type : 'vertical'
  })
    .split(' ')
    .map(name => style[name])
    .join(' ');
  return (
    <div className={chartClassName}>
      <div className={style.pie__chart}>
        <div className={style.pie__body}>
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
              {paths.map((path, i) => {
                console.log(path);
                let { slice, data } = path;
                let tooltipId = `${i}_pie-tooltip`;
                return (
                  <React.Fragment key={slice.fill}>
                    <g data-tip data-for={tooltipId}>
                      <SvgFigure figure={'path'} attrs={slice} />
                    </g>
                    <Portal>
                      <Tooltip tipId={tooltipId}>
                        <PieTooltip tooltip={data} />
                      </Tooltip>
                    </Portal>
                  </React.Fragment>
                );
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
        </div>
        <div className={style.pie__title}>
          <Text mod={{ color: 'secondary' }}>{title}</Text>
        </div>
      </div>
      <div className={style.pie__labels}>
        {paths.map(path => {
          let { data } = path;
          return (
            <div className={style.pie__label} key={data.color}>
              <div className={style.pie__point}>
                <Svg width={pointSize} height={pointSize}>
                  <SvgFigure
                    figure={'circle'}
                    attrs={{
                      cx: pointRadius,
                      cy: pointRadius,
                      r: pointRadius,
                      fill: data.color
                    }}
                  />
                </Svg>
              </div>
              <div className={style.pie__labelName}>
                <Text>{data.title.value}</Text>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PieTooltip = ({ tooltip }) => {
  const { title, data } = tooltip;
  return (
    <div className={style.pieTooltip}>
      <div className={style.pieTooltip__item}>
        <div className={style.pieTooltip__label}>
          <Text>{title.label}</Text>
        </div>
        <div className={style.pieTooltip__value}>
          <Text mod={{ type: 'bold' }}>{title.value}</Text>
        </div>
      </div>
      <div className={style.pieTooltip__item}>
        <div className={style.pieTooltip__label}>
          <Text>{data.label}</Text>
        </div>
        <div className={style.pieTooltip__value}>
          <Text mod={{ type: 'bold' }}>{data.value}</Text>
        </div>
      </div>
    </div>
  );
};

PieChart.propTypes = {
  data: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired
};
