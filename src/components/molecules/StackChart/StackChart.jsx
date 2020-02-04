import React from 'react';
import { Svg } from './../../atoms/Svg';
import { SvgFigure } from '../../atoms/SvgFigure';
import PropTypes from 'prop-types';
import { StackPrcColumn } from '../../../lib/charts';
import style from './style.scss';

export class StackChart extends React.Component {
  render() {
    const { config } = this.props;
    const chart = new StackPrcColumn(config);
    // console.log(style);
    const rects = chart.rects.map((rect, i) => (
      <SvgFigure figure={'rect'} attrs={rect} key={`${i}_${rect.color}`} />
    ));
    const labels = chart.rects.map((rect, i) => {
      let circleAttrs = {
        r: config.pointSize / 2,
        cx: config.pointSize / 2,
        cy: config.pointSize / 2,
        fill: rect.fill
      };
      return (
        <div className={style.stackChart__item} key={`${i}_${rect.data}`}>
          {/* <div className={style.labels__item}> */}
          <Svg height={config.pointSize} width={config.pointSize}>
            <SvgFigure figure={'circle'} attrs={circleAttrs} />
          </Svg>
          <div className={style.labels__name}>{`${rect.name}:`}</div>
          <div className={style.labels__data}>{rect.data}</div>
          {/* </div> */}
        </div>
      );
    });
    return (
      <div className={style.stackChart}>
        <Svg
          className={style.stackChart__chart}
          width={chart.totalWidth}
          height={config.height}
        >
          <g>{rects}</g>
        </Svg>
        <div className={style.stackChart__labels}>{labels}</div>
      </div>
    );
  }
}

StackChart.propTypes = {
  config: PropTypes.object.isRequired
};
