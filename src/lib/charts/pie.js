import { random } from '../../helpers/helper';

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
    const total = this._data.reduce((a, b) => a + b);
    const { stroke, strokeWidth, strokeLinejoin } = this.opts;
    const centerCoords = this._size / 2;
    const radius = centerCoords * 0.98;
    const delta = centerCoords - radius;
    let cumulativeAngle = 0;
    this._data.forEach((item, i) => {
      let [startX, startY] = this._getCoordinatesForAngle(
        cumulativeAngle,
        radius,
        delta
      );
      cumulativeAngle += (2 * Math.PI * item) / total;
      let isLarge = item > total / 2 ? 1 : 0;
      let [endX, endY] = this._getCoordinatesForAngle(
        cumulativeAngle,
        radius,
        delta
      );
      let path = [
        `M ${startX} ${startY}`,
        `A ${radius} ${radius} 0 ${isLarge} 0 ${endX} ${endY}`,
        `L ${centerCoords} ${centerCoords}`,
        `Z`
      ].join(' ');
      let attrs = {
        slice: {
          d: path,
          fill: `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`,
          stroke,
          strokeWidth,
          strokeLinejoin
        }
      };
      result.push(attrs);
    });
    result.push();
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
