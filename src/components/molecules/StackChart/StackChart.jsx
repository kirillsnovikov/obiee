import React from 'react';
import { Svg } from './../../atoms/Svg';
import { SvgFigure } from '../../atoms/SvgFigure';
import PropTypes from 'prop-types';
import { StackPrcColumn } from '../../../lib/charts';
import { Gradient } from '../Gradient';
import style from './style.scss';

export class StackChart extends React.Component {
  render() {
    const { config } = this.props;
    const chart = new StackPrcColumn(config);
    const rects = chart.attrs.map((attr, i) => {
      let rect = attr.rect;
      let gradient = attr.gradient;
      return (
        <g key={`${i}_${rect.color}`}>
          <SvgFigure figure={'rect'} attrs={rect} />
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
            <div className={style.label__dot}>
              <Svg height={config.pointSize} width={config.pointSize}>
                <SvgFigure figure={'circle'} attrs={circleAttrs} />
              </Svg>
            </div>
            <div className={style.label__name}>{`${rect.name}:`}</div>
          </div>
          <div className={style.value}>{rect.data}</div>
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
