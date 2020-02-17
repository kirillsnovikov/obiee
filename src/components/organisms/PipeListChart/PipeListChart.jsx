import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import { PieChart } from '../../molecules/PieChart';
import { Spinner } from '../../atoms/Spinner';
import { IconActionPanel } from '../../molecules/IconActionPanel';
import refresh from '../../../assets/icons/mdi-refresh.svg';
import print from '../../../assets/icons/mdi-print.svg';
import export1 from '../../../assets/icons/application-export1.svg';

export const PipeListChart = ({ data, getPipeListChart }) => {
  const { loading } = data;
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

  return (
    <div className={style.chart}>
      <div className={style.header}>
        <IconActionPanel actions={actions} />
      </div>
      {loading ? <Spinner /> : <PieChart data={data} size={230} />}
    </div>
  );
};

PipeListChart.propTypes = {
  data: PropTypes.object.isRequired,
  getPipeListChart: PropTypes.func
};
