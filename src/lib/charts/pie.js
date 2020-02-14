export class Pie {
  constructor(data, size) {
    this._data = data;
    this._size = size;
  }
  opts = {
    stroke: 'rgb(255, 255, 255)',
    strokeWidth: '2',
    strokeLinejoin: 'round'
  };

  get paths() {
    const result = [];
    const total = this._data
      .map(item => item.data.value)
      .reduce((a, b) => a + b, 0);
    const { stroke, strokeWidth, strokeLinejoin } = this.opts;
    const centerCoords = this._size / 2;
    const radius = centerCoords * 0.98;
    const delta = centerCoords - radius;
    let cumulativeAngle = 0;
    this._data.forEach(item => {
      let { color, data } = item;
      let [startX, startY] = this._getCoordinatesForAngle(
        cumulativeAngle,
        radius,
        delta
      );
      cumulativeAngle += (2 * Math.PI * data.value) / total;
      let isLarge = data.value > total / 2 ? 1 : 0;
      let [endX, endY] = this._getCoordinatesForAngle(
        cumulativeAngle,
        radius,
        delta
      );
      let path =
        this._data.length > 1
          ? [
              `M ${startX} ${startY}`,
              `A ${radius} ${radius} 0 ${isLarge} 0 ${endX} ${endY}`,
              `L ${centerCoords} ${centerCoords}`,
              `Z`
            ].join(' ')
          : [
              `M ${startX} ${startY}`,
              `A ${radius} ${radius} 0 ${isLarge} 1 ${startX} ${startY - 0.01}`
            ].join(' ');
      let attrs = {
        slice: {
          d: path,
          fill: color,
          stroke,
          strokeWidth,
          strokeLinejoin
        }
      };
      result.push(attrs);
    });
    return result;
  }
  _getCoordinatesForAngle(angle, radius, delta) {
    const x = radius + Math.cos(angle) * radius + delta;
    const y = radius - Math.sin(angle) * radius + delta;
    return [x, y];
  }
  _relativeDegree(val) {
    let total = this._data.reduce((a, b) => a + b);
    return (2 * Math.PI * val) / total;
  }
}
