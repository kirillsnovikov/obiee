export function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function createSVG(tag, attributes, styles) {
  styles = styles || {};
  var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (var attrName in attributes) {
    el.setAttribute(attrName, attributes[attrName]);
  }
  for (var styleName in styles) {
    el.style[styleName] = styles[styleName];
  }
  return el;
}

export function getCathet(cathet, hypotenuse) {
  return parseFloat(
    Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(cathet, 2)).toFixed(3)
  );
}

export function getCathetByAngleAndNearCathet(cathet, angle) {
  var rad = (angle * Math.PI) / 180;
  return parseFloat((Math.tan(rad) * cathet).toFixed(3));
}

export function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

export function randomRGB() {
  return `rgb(${random(120, 255)}, ${random(120, 255)}, ${random(120, 255)})`;
}

export function throttle(f, t) {
  return function(args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (
      previousCall === undefined || // function is being called for the first time
      this.lastCall - previousCall > t // throttle time has elapsed
    ) {
      f(args);
    }
  };
}

export function debounce(f, t) {
  return function(args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && this.lastCall - previousCall <= t) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => f(args), t);
  };
}
