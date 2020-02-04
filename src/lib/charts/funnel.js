export class Funnel {
  constructor(config) {
    this._config = config;
    this._gap = config.height / 20;
  }

  get paths() {
    let paths = [];
    this._config.layers.forEach(layer => {});
    return paths;
  }
}
