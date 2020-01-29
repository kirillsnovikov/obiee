import React from 'react';

const CircleSvg = function(props) {
  console.log(props);
  return <circle cx={props.cx} cy={props.cy} r={props.radius}></circle>;
};

export default CircleSvg;
