import { getCathetByAngleAndNearCathet } from '../../helpers/helper';

export class FunnelVertical {
  constructor(config) {
    this.height = config.height;
    this.width = config.width;
    this.angle = config.angle;
    this.dot = config.dot;
    this.layers = config.layers;
  }

  get attrs() {
    let paths = [];
    let startX = 0;
    let dotRadius = this.dot / 2;
    let layerHeight = this.layers.length
      ? (this.height - (this.layers.length - 1) * this.options.gap) /
      this.layers.length
      : 0;
    let fontSize = layerHeight / 3.6;
    this.layers.forEach((layer, i) => {
      let startY = i * layerHeight + i * this.options.gap;
      let x1 = this.width - getCathetByAngleAndNearCathet(startY, this.angle);
      let endY = startY + layerHeight;
      let x2 = this.width - getCathetByAngleAndNearCathet(endY, this.angle);
      let path = `M ${startX} ${startY} L ${x1} ${startY} L ${x2} ${endY} L ${startX} ${endY} Z`;
      let attrs = {
        path: {
          d: path
        },
        rect: {
          x: startX,
          y: startY,
          width: x1,
          height: layerHeight,
          fill: this.options.layerColors[i]
        },
        text: {
          y: startY + layerHeight / 2 + fontSize / 4,
          x: this.width / 10,
          fontSize: fontSize
        },
        label: {
          r: dotRadius,
          cy: dotRadius,
          cx: dotRadius,
          fill: this.options.layerColors[i]
        },
        data: layer.data,
        name: layer.name,
        layerWidth: x1
      };
      paths.push(attrs);
    });
    return paths;
  }

  options = {
    layerColors: ['#E0E4A9', '#2340CA', '#4994F1'],
    gap: 10
  };
}
