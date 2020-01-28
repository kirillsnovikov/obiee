import React from 'react';

const Svg = function(props) {
  console.log(props);
  return <svg viewBox={`0 0 100 100`}>{props.inner}</svg>;
};

export default Svg;
