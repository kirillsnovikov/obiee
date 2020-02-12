import React from 'react';
import { Svg, SvgFigure } from './../../atoms/Svg';
import PropTypes from 'prop-types';
import { StackPrcColumn } from '../../../lib/charts';
import { Gradient } from '../Gradient';
import style from './style.scss';
import { Text } from '../../atoms/Text';

export class StackChart extends React.Component {
  render() {
    const { config } = this.props;
    const chart = new StackPrcColumn(config);
    const rects = chart.attrs.map((attr, i) => {
      let rect = attr.rect;
      let gradient = attr.gradient;
      return (
        <g key={`${i}_${rect.color}`}>
          <SvgFigure figure={'rect'} attrs={rect}>
            <SvgFigure
              figure={'animate'}
              attrs={{
                attributeName: 'height',
                from: `0`,
                to: `${rect.height}`,
                begin: '0',
                dur: '1s'
              }}
            />
            <SvgFigure
              figure={'animate'}
              attrs={{
                attributeName: 'opacity',
                values: '0; 1',
                dur: '2s'
              }}
            />
            <SvgFigure
              figure={'animateTransform'}
              attrs={{
                attributeName: 'transform',
                type: 'translate',
                from: `0 ${rect.height}`,
                to: `0 0`,
                begin: '0',
                dur: '1s'
              }}
            />
          </SvgFigure>
          <Gradient
            type={gradient.config.type}
            stops={gradient.config.stops}
            id={gradient.id}
            rotate={gradient.config.rotate}
          />
        </g>
      );
    });
    const labels = chart.attrs.map((attr, i) => {
      let rect = attr.rect;
      let circleAttrs = {
        r: config.pointSize / 2,
        cx: config.pointSize / 2,
        cy: config.pointSize / 2,
        fill: rect.fill
      };
      return (
        <div className={style.item} key={`${i}_${rect.data}`}>
          <div className={style.label}>
            <Svg height={config.pointSize} width={config.pointSize}>
              <SvgFigure figure={'circle'} attrs={circleAttrs} />
            </Svg>
            <span className={style.label__name}>
              <Text>{`${rect.name}:`}</Text>
            </span>
          </div>
          <Text mod={{ type: 'bold' }}>{rect.data}</Text>
        </div>
      );
    });
    return (
      <div className={style.stackChart}>
        <Svg width={chart.totalWidth} height={config.height}>
          <g>{rects}</g>
        </Svg>
        <div className={style.labels}>{labels}</div>
      </div>
    );
  }
}

StackChart.propTypes = {
  config: PropTypes.object.isRequired
};
