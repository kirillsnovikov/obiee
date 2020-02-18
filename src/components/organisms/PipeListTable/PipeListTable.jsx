import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import { IconActionPanel } from '../../molecules/IconActionPanel';
import { Spinner } from '../../atoms/Spinner';
import { Table } from '../../molecules/Table';
import refresh from '../../../assets/icons/mdi-refresh.svg';
import print from '../../../assets/icons/mdi-print.svg';
import export1 from '../../../assets/icons/application-export1.svg';

export const PipeListTable = ({ data, getPipeListTable }) => {
  const { loading, table } = data;
  const actions = [
    {
      icon: refresh,
      action: getPipeListTable
    },
    {
      icon: print,
      action: getPipeListTable
    },
    {
      icon: export1,
      action: getPipeListTable
    }
  ];

  return (
    <div className={style.table}>
      <div className={style.table__header}>
        <IconActionPanel actions={actions} />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className={style.table__body}>
          <Table columns={table.columns} data={table.data} />
        </div>
      )}
    </div>
  );
};

PipeListTable.propTypes = {
  data: PropTypes.object.isRequired,
  getPipeListTable: PropTypes.func
};
