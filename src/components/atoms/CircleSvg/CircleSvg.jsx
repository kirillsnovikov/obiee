import React from 'react';

const CircleSvg = function(props) {
  console.log(props);
  return <circle dx={props.dx} dy={props.dy} r={props.radius}></circle>;
};

export default CircleSvg;
