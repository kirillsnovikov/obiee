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
    let gap = this.height / 20;
    let dotRadius = this.dot / 2;
    let layerHeight = this.layers.length
      ? (this.height - (this.layers.length - 1) * gap) / this.layers.length
      : 0;
    let fontSize = layerHeight / 3.6;
    this.layers.forEach((layer, i) => {
      let startY = i * layerHeight + i * gap;
      let x1 = this.width - getCathetByAngleAndNearCathet(startY, this.angle);
      let endY = startY + layerHeight;
      let x2 = this.width - getCathetByAngleAndNearCathet(endY, this.angle);
      let path = `M ${startX} ${startY} L ${x1} ${startY} L ${x2} ${endY} L ${startX} ${endY} Z`;
      let attrs = {
        path: {
          d: path,
          fill: layer.color
        },
        text: {
          y: startY + layerHeight / 2 + fontSize / 4,
          x: this.width / 10,
          fontSize: fontSize
        },
        data: layer.data,
        label: {
          r: dotRadius,
          cy: dotRadius,
          cx: dotRadius,
          fill: layer.color
        },
        name: layer.name
      };
      paths.push(attrs);
    });
    return paths;
  }
}
