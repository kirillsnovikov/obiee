import React from 'react';

const Svg = function(props) {
  console.log(props);
  const viewBox = [0, 0, 100, 100];
  return <svg viewBox={viewBox}>{props.inner}</svg>;
};

export default Svg;
