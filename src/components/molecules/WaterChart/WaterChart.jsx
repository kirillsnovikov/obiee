import React from 'react';
import { Svg } from './../../atoms/Svg';
import { SvgFigure } from '../../atoms/SvgFigure';
import PropTypes from 'prop-types';
import { Water } from '../../../lib/charts';
import { Gradient } from '../Gradient';
import style from './style.scss';

export class WaterChart extends React.Component {
  render() {
    const { width, pct, id } = this.props;
    const waveId = `clipWavefillgauge${id}`;
    const gradientId = `waveGradient_${id}`;
    const chart = new Water(pct, width);
    return (
      <Svg width={chart.size} height={chart.size}>
        <g>
          <defs>
            <SvgFigure
              figure={'clipPath'}
              attrs={{
                id: waveId
              }}
            >
              <SvgFigure
                figure={'path'}
                attrs={{
                  d: chart.wavePath
                }}
              >
                <SvgFigure
                  figure={'animateTransform'}
                  attrs={{
                    attributeName: 'transform',
                    type: 'translate',
                    from: '0 0',
                    to: `-${chart.waveWidth} 0`,
                    begin: '1s',
                    dur: '2s',
                    repeatCount: 'indefinite'
                  }}
                />
                <SvgFigure
                  figure={'animateTransform'}
                  attrs={{
                    attributeName: 'transform',
                    type: 'translate',
                    from: `0 ${chart.waveHeight}`,
                    to: `0 0`,
                    begin: '0s',
                    dur: '1s'
                  }}
                />
              </SvgFigure>
            </SvgFigure>
          </defs>
        </g>
        <g>
          <SvgFigure
            figure={'circle'}
            attrs={{
              cx: chart.chartCenterCoords,
              cy: chart.chartCenterCoords,
              r: chart.borderRadius,
              fill: 'none',
              stroke: chart.color,
              strokeWidth: chart.options.borderWidth
            }}
          />
          <SvgFigure
            figure={'circle'}
            className={style.bg}
            attrs={{
              cx: chart.chartCenterCoords,
              cy: chart.chartCenterCoords,
              r: chart.BGRadius
            }}
          />
          <g clipPath={`url(#${waveId})`}>
            <SvgFigure
              figure={'circle'}
              attrs={{
                cx: chart.chartCenterCoords,
                cy: chart.chartCenterCoords,
                r: chart.chartRadius,
                fill: `url(#${gradientId})`
              }}
            />
            <Gradient
              type={chart.color.type}
              stops={chart.color.stops}
              id={gradientId}
              rotate={chart.color.rotate}
            />
          </g>
          <SvgFigure
            figure={'text'}
            className={style.text}
            attrs={{
              x: '50%',
              y: '50%',
              dy: chart.fontSize / 3,
              fontSize: chart.fontSize
            }}
          >
            <SvgFigure figure={'tspan'} attrs={{ textAnchor: 'middle' }}>
              {`${pct}%`}
            </SvgFigure>
          </SvgFigure>
        </g>
      </Svg>
    );
  }
}

WaterChart.propTypes = {
  width: PropTypes.number.isRequired,
  pct: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};
