import React from 'react';
import Svg from './../../atoms/Svg';
import CircleSvg from './../../atoms/CircleSvg';

const width = 75;
const viewBox = [0, 0, width, width];

const WaterChart = function() {
  return (
    <Svg
      viewBox={viewBox}
      width={width}
      height={width}
      inner={<CircleSvg cx={width / 2} cy={width / 2} radius={width / 2} />}
    />
  );
};

export default WaterChart;
