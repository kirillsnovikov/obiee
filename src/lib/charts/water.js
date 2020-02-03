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
    return Math.round((this._chartSize * 15) / 100);
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
    return (this._waterChartSize * 2) / this.options.waveCnt;
  }
  get wavePath() {
    let width = this._waterChartSize * 2;
    let bezierX = this.waveWidth / 4;
    let startX = this.chartCenterCoords - this.chartRadius;
    let startY = this.chartCenterCoords + this.chartRadius;
    let bezierY = Math.abs(Math.abs(this._pct / 50 - 1) - 1) * 12.5;
    let dy = startY - (this._waterChartSize * this._pct) / 100;
    let path = `M ${startX} ${dy}`;

    for (let i = 1; i <= this.options.waveCnt; i++) {
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
    return this.options.percentColors.find(grade => {
      return this._pct <= grade.pct;
    }).color;
  }

  options = {
    borderWidth: 0.3,
    percentColors: [
      { pct: 20, color: '#EC232F' },
      { pct: 70, color: '#FECB2F' },
      { pct: 100, color: '#49AE48' }
    ],
    waveCnt: 2
  };
}
