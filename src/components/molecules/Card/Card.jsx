import React from 'react';
import { WaterChart } from '../WaterChart';
import { StackChart } from '../StackChart';
import { Button } from '../../atoms/Button';
import { Subtitle } from '../../atoms/Text';
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
          data: data.plan
        },
        {
          type: 'right',
          name: 'Факт, млн.',
          data: data.fact
        },
        {
          type: 'right',
          name: 'Pipe, млн.',
          data: data.pipe
        }
      ],
      height: 100,
      pointSize: 7
    };
    return (
      <div className={`${style.card} ${className}`}>
        <div className={style.card__top}>
          <span className={style.title}>
            <Subtitle mod={'type_bold'}>{data.title}</Subtitle>
          </span>
          <Button type={'empty'} link={'#'}>
            Подробнее
          </Button>
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
