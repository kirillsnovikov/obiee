/**
 * config = {
 *   series: [
 *     {
 *       type: 'left',
 *       name: 'План, млн.',
 *       data: 30
 *     },
 *     {
 *       type: 'right',
 *       name: 'Факт, млн.',
 *       data: 80
 *     },
 *     {
 *       type: 'right',
 *       name: 'Pipe, млн.',
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
    this._colors = config.colors;
  }

  get width() {
    return this._absSize / 5;
  }

  get gap() {
    return this._absSize / 20;
  }

  get attrs() {
    let res = [];
    Object.keys(this.config.types).forEach((type, i) => {
      res = res.concat(this._calculateRect(type, i));
    });
    return res;
  }

  get totalWidth() {
    return this.width * 2 + this.gap;
  }

  _calculateRect(type, typeNum) {
    let relativeSize = this.relativeSize;
    let res = [];
    this._typeCol(type).forEach((col, i) => {
      let height = col.data * relativeSize;
      let gradId = `gradient_${type}_${i}`;
      let x = typeNum === 0 ? 0 : this.width * typeNum + this.gap;
      let y = i > 0 ? res[i - 1].rect.y - height : this._absSize - height;
      let attrs = {
        rect: {
          x: x,
          y: y,
          width: this.width,
          height: height,
          fill: `url(#${gradId})`,
          name: col.name,
          data: col.data
        },
        gradient: {
          id: gradId,
          config: this.config.types[type].gradients[i]
        }
      };
      res.push(attrs);
    });
    return res;
  }

  get relativeSize() {
    let maxSize = Math.max.apply(
      null,
      Object.keys(this.config.types).map(key => this._typeSize(key))
    );
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

  config = {
    types: {
      left: {
        gradients: [
          {
            type: 'linearGradient',
            rotate: '0',
            stops: [
              {
                stopColor: '#C7C7C9',
                offset: 0
              },
              {
                stopColor: '#C7C7C9',
                offset: 1
              }
            ]
          }
        ]
      },
      right: {
        gradients: [
          {
            type: 'linearGradient',
            rotate: '0',
            stops: [
              {
                stopColor: '#0A28AB',
                offset: 0
              },
              {
                stopColor: '#213FC5',
                offset: 1
              }
            ]
          },
          {
            type: 'linearGradient',
            rotate: '0',
            stops: [
              {
                stopColor: '#2C87EC',
                offset: 0
              },
              {
                stopColor: '#3F93F0',
                offset: 1
              }
            ]
          }
        ]
      }
    }
  };
}
