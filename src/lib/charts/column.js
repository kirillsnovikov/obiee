/**
 * config = {
 *   series: [
 *     {
 *       type: 'left',
 *       name: 'План, млн.',
 *       color: '#cccccc',
 *       data: 30
 *     },
 *     {
 *       type: 'right',
 *       name: 'Факт, млн.',
 *       color: '#cccccc',
 *       data: 80
 *     },
 *     {
 *       type: 'right',
 *       name: 'Pipe, млн.',
 *       color: '#cccccc',
 *       data: 30
 *     }
 *   ],
 *  height: 100
 * }
 *
 */

export class StackPrcColumn {
  constructor(config) {
    this._series = config.series;
    this._absSize = config.height;
  }

  get width() {
    return this._absSize / 5;
  }

  get gap() {
    return this._absSize / 20;
  }

  get rects() {
    let res = [];
    res = res.concat(this._calculateRect('left'));
    res = res.concat(this._calculateRect('right'));
    return res;
  }

  get totalWidth() {
    return this.width * 2 + this.gap;
  }

  _calculateRect(type) {
    let res = [];
    this._typeCol(type).forEach((col, i) => {
      let relativeSize = this.relativeSize;
      let height = col.data * relativeSize;
      let x = type === 'left' ? 0 : this.width + this.gap;
      let y = i > 0 ? res[i - 1].y - height : this._absSize - height;
      res.push({
        x: x,
        y: y,
        width: this.width,
        height: height,
        fill: col.color,
        name: col.name,
        data: col.data
      });
    });
    return res;
  }

  get relativeSize() {
    let left = this._typeSize('left');
    let right = this._typeSize('right');
    let maxSize = left >= right ? left : right;
    return +(this._absSize / maxSize).toFixed(2);
  }

  _typeSize(type) {
    let sum = 0;
    this._typeCol(type).forEach(el => {
      sum += el.data;
    });
    return sum;
  }

  _typeCol(type) {
    return this._series.filter(ser => {
      return ser.type === type;
    });
  }
}
