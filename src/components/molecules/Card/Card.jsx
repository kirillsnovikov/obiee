import React from 'react';
import { WaterChart } from '../WaterChart';
import PropTypes from 'prop-types';
import style from './style.scss';

export class Card extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className={style.card}>
        {data.id}
        <WaterChart width={100} pct={data.pct} id={data.id} />
      </div>
    );
  }
}

Card.propTypes = {
  data: PropTypes.object.isRequired
};
