export class Pie {
  constructor(data, size) {
    this._data = data;
    this._size = size;
  }
  opts = {
    colors: ['#ccc', '#ddd']
  };

  get paths() {
    const paths = [];
    const total = this._data.reduce((a, b) => a + b);
    const centerCoords = this._size / 2;
    const radius = centerCoords * 0.98;
    const delta = centerCoords - radius;
    let cumulativeAngle = 0;
    this._data.forEach(item => {
      // console.log(item);
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
      paths.push(path);
    });
    return paths;
  }
  _getCoordinatesForAngle(angle, radius, delta) {
    // const rad = radius * 0.9;
    const x = radius + Math.cos(angle) * radius + delta;
    const y = radius - Math.sin(angle) * radius + delta;
    console.log(x, y);
    return [x, y];
  }
  _relativeDegree(val) {
    let total = this._data.reduce((a, b) => a + b);
    return (2 * Math.PI * val) / total;
  }
}

// const slices = [
//   { percent: 0.1, color: 'Coral' },
//   { percent: 0.65, color: 'CornflowerBlue' },
//   { percent: 0.2, color: '#00ab6b' }
// ];
// let cumulativePercent = 0;

// function getCoordinatesForPercent(percent) {
//   const x = Math.cos(2 * Math.PI * percent);
//   const y = Math.sin(2 * Math.PI * percent);
//   return [x, y];
// }

// slices.forEach(slice => {
//   // destructuring assignment sets the two variables at once
//   const [startX, startY] = getCoordinatesForPercent(cumulativePercent);

//   // each slice starts where the last slice ended, so keep a cumulative percent
//   cumulativePercent += slice.percent;

//   const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

//   // if the slice is more than 50%, take the large arc (the long way around)
//   const largeArcFlag = slice.percent > 0.5 ? 1 : 0;

//   // create an array and join it just for code readability
//   const pathData = [
//     `M ${startX} ${startY}`, // Move
//     `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
//     `L 0 0` // Line
//   ].join(' ');

//   // create a <path> and append it to the <svg> element
//   const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//   pathEl.setAttribute('d', pathData);
//   pathEl.setAttribute('fill', slice.color);
//   svgEl.appendChild(pathEl);
// });
