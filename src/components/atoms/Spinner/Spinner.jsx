import React from 'react';
// import PropTypes from 'prop-types';
import style from './style.scss';

export class Spinner extends React.Component {
  render() {
    const divs = [];
    for (let i = 0; i < 12; i++) {
      divs.push(<div key={i}></div>);
    }
    return (
      <div className={style.spinnerLayout}>
        <div className={style['lds-spinner']}>{divs}</div>
      </div>
    );
  }
}
