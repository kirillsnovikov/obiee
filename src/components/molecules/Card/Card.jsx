import React from 'react';
import { WaterChart } from '../WaterChart';
import { StackChart } from '../StackChart';
import { Button } from '../../atoms/Button';
import PropTypes from 'prop-types';
import style from './style.scss';

export class Card extends React.Component {
  render() {
    const { data, className } = this.props;
    const stackConfig = {
      series: [
        {
          type: 'left',
          name: 'План, млн.',
          color: '#00cccc',
          data: data.plan
        },
        {
          type: 'right',
          name: 'Факт, млн.',
          color: '#cc00cc',
          data: data.fact
        },
        {
          type: 'right',
          name: 'Pipe, млн.',
          color: '#cccc00',
          data: data.pipe
        }
      ],
      height: 100,
      pointSize: 7
    };
    return (
      <div className={`${style.card} ${className}`}>
        <div className={style.card__top}>
          <span className={style.title}>{data.title}</span>
          <Button
            className={style.button}
            type={'empty'}
            goto={'#'}
            name={'Подробнее'}
          />
        </div>
        <div className={style.card__bottom}>
          <div className={style.card__stackChart}>
            <StackChart config={stackConfig} />
          </div>
          <WaterChart width={100} pct={data.pct} id={data.id} />
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string
};
