import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import { Table } from '../../molecules/Table';
import { Spinner } from '../../atoms/Spinner';

export class TablePart extends React.Component {
  render() {
    const { table } = this.props;
    return table.loading ? (
      <Spinner />
    ) : (
      <div className={style['table-part']}>
        <div className={style.top}></div>
        <div className={style.body}>
          <Table columns={table.table.columns} data={table.table.data} />
        </div>
      </div>
    );
    // return <div>111</div>;
  }
}

TablePart.propTypes = {
  table: PropTypes.object.isRequired
};
