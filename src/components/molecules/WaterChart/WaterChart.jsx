import React from 'react';
import Svg from './../../atoms/Svg';
import { SvgFigure } from '../../atoms/SvgFigure';
import PropTypes from 'prop-types';
import MyWaterChart from './myWaterChart';

export class WaterChart extends React.Component {
  render() {
    const { width, percentage } = this.props;
    const viewBox = [0, 0, width, width];
    const configChart = new MyWaterChart(percentage);
    console.log(configChart);
    return (
      <Svg
        viewBox={viewBox}
        width={width}
        height={width}
        inner={
          <SvgFigure
            figure={'circle'}
            attrs={{ cx: width / 2, cy: width / 2, r: width / 2 }}
          />
        }
      />
    );
  }
}

WaterChart.propTypes = {
  width: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired
};
