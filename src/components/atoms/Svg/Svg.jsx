import React from 'react';

export class Svg extends React.Component {
  render() {
    const { children, width, height, viewBox } = this.props;
    return (
      <svg width={width} height={height} viewBox={viewBox}>
        {children}
      </svg>
    );
  }
}
