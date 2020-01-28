import React from 'react';
import Svg from './../../atoms/Svg';
import CircleSvg from './../../atoms/CircleSvg';

const WaterChart = function() {
  return <Svg inner={<CircleSvg dx="100" dy="100" radius="50" />} />;
};

export default WaterChart;
