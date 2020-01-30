import React from 'react';

const Svg = function(props) {
  // console.log('props', props);

  return (
    <svg width={props.width} height={props.height} viewBox={props.viewBox}>
      {props.inner}
    </svg>
  );
};

export default Svg;
