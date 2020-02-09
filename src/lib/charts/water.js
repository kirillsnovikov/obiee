export class Water {
  constructor(percentage, width) {
    this._pct = percentage;
    this._size = Math.round(width);
    this._chartBGSize = Math.round((this._size * 90) / 100);
    this._waterChartSize = Math.round((this._size * 80) / 100);
  }

  get size() {
    return this._size & 1 ? this._size - 1 : this._size;
  }
  get fontSize() {
    return Math.round(this._size / 6.25);
  }
  get chartCenterCoords() {
    return this.size / 2;
  }
  get borderRadius() {
    return (this.size - 2) / 2;
  }
  get BGRadius() {
    return this._chartBGSize / 2;
  }
  get chartRadius() {
    return this._waterChartSize / 2;
  }
  get waveWidth() {
    return (this._waterChartSize * 3) / this.options.waveCnt;
  }
  get waveHeight() {
    return (this._waterChartSize * this._pct) / 100;
  }
  get wavePath() {
    let width = this._waterChartSize * 6;
    let bezierX = this.waveWidth / 4;
    let startX = this.chartCenterCoords - this.chartRadius;
    let startY = this.chartCenterCoords + this.chartRadius;
    let bezierY = Math.abs(Math.abs(this._pct / 50 - 1) - 1) * 12.5;
    let dy = startY - this.waveHeight;
    let path = `M ${startX} ${dy}`;

    for (let i = 1; i <= this.options.waveCnt + 2; i++) {
      let dx1 = this.waveWidth * i + startX;
      let dx = dx1 - this.waveWidth;

      let qx = dx + bezierX;
      let qy = dy - bezierY;
      let tx = dx1 - this.waveWidth / 2;
      let ty = dy;
      path += ` Q ${qx} ${qy}, ${tx} ${ty} T ${dx1} ${dy}`;
    }
    path += ` L ${startX + width} ${startY}, ${startX} ${startY} Z`;
    return path;
  }
  get color() {
    let gradient = this.options.percentColors.find(grade => {
      return this._pct <= grade.pct;
    }).gradient;
    gradient.stops[gradient.stops.length - 1].offset = this._pct / 100;
    return gradient;
  }

  options = {
    borderWidth: 0.3,
    percentColors: [
      {
        pct: 20,
        gradient: {
          type: 'linearGradient',
          rotate: `270 0.5 0.5`,
          stops: [
            {
              stopColor: '#EC232F',
              offset: 0
            },
            {
              stopColor: '#EB6B52',
              offset: 1
            }
          ]
        }
      },
      {
        pct: 70,
        gradient: {
          type: 'linearGradient',
          rotate: `270 0.5 0.5`,
          stops: [
            {
              stopColor: '#FFE568',
              offset: 0
            },
            {
              stopColor: '#FECB2F',
              offset: 1
            }
          ]
        }
      },
      {
        pct: 100,
        gradient: {
          type: 'linearGradient',
          rotate: `270 0.5 0.5`,
          stops: [
            {
              stopColor: '#AECA0C',
              offset: 0
            },
            {
              stopColor: '#49AE48',
              offset: 1
            }
          ]
        }
      }
    ],
    waveCnt: 2
  };
}
