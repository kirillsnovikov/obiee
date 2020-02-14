import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import { PieChart } from '../../molecules/PieChart';
import { Spinner } from '../../atoms/Spinner';
import { IconActionPanel } from '../../molecules/IconActionPanel';
import refresh from '../../../assets/icons/mdi-refresh.svg';
import print from '../../../assets/icons/mdi-print.svg';
import export1 from '../../../assets/icons/application-export1.svg';
import { cn } from '@bem-react/classname';

export const PipeListChart = ({ data, getPipeListChart }) => {
  const { pie, loading, type } = data;
  const actions = [
    {
      icon: refresh,
      action: getPipeListChart
    },
    {
      icon: print,
      action: getPipeListChart
    },
    {
      icon: export1,
      action: getPipeListChart
    }
  ];
  const block = cn('pie');
  const chartClassName = block({
    type: type ? type : 'vertical'
  })
    .split(' ')
    .map(name => style[name])
    .join(' ');
  console.log(chartClassName);
  return (
    <div className={style.chart}>
      <div className={style.header}>
        <IconActionPanel actions={actions} />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className={chartClassName}>
          <div className={style.pie__chart}>
            <div className={style.pie__body}>
              <PieChart data={pie} size={230} />
            </div>
            <div className={style.pie__title}>titiitit</div>
          </div>
          <div className={style.pie__labels}></div>
        </div>
      )}
    </div>
  );
};

PipeListChart.propTypes = {
  data: PropTypes.object.isRequired,
  getPipeListChart: PropTypes.func
};
