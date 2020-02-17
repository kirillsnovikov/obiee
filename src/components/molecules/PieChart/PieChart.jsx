import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import { Pie } from '../../../lib/charts';
import { Svg, SvgFigure } from '../../atoms/Svg';
import { Text } from '../../atoms/Text';
import { cn } from '@bem-react/classname';
import withTooltip from '../../../hoc/withTooltip';
import { Tooltip } from '../../molecules/Tooltip';

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

  const tooltips = paths.map((path, i) => {
    let { data } = path;
    let tooltipId = `${i}_pie-tooltip`;
    return <Tooltip id={tooltipId} tooltip={data} key={data.color} />;
  });
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
                let { slice } = path;
                let tooltipId = `${i}_pie-tooltip`;
                return (
                  <g data-for={tooltipId} key={slice.fill}>
                    <SvgFigure figure={'path'} attrs={slice} />
                  </g>
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
      {tooltips}
    </div>
  );
};

const PieTooltip = ({ tooltip }) => {
  const { title, data } = tooltip;
  // console.log(tooltip, 'TOOLTIPpropsprop');
  return (
    <div className={style.pieTooltip}>
      <div className={style.pieTooltip__item}>
        <div className={style.pieTooltip__label}>{title.label}</div>
        <div className={style.pieTooltip__value}>{title.value}</div>
      </div>
      <div className={style.pieTooltip__item}>
        <div className={style.pieTooltip__label}>{data.label}</div>
        <div className={style.pieTooltip__value}>{data.value}</div>
      </div>
    </div>
  );
};

const Slice = ({ wrapped }) => {
  console.log(wrapped, 'SLICEpropsprop');
  return <SvgFigure {...wrapped} />;
};

const SliceWithTooltip = withTooltip(Slice, PieTooltip);

PieChart.propTypes = {
  data: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired
};
