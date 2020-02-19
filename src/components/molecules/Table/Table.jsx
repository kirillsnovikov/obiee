import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../atoms/Text';
import style from './style.scss';
import { cn } from '@bem-react/classname';

export const Table = ({ columns, data, config }) => {
  let rowItemCn = cn('row', 'item');
  let rowCn = cn('table__row');
  rowCn = rowCn()
    .split(' ')
    .map(name => style[name])
    .join(' ');
  rowItemCn = rowItemCn(config.row)
    .split(' ')
    .map(name => style[name])
    .join(' ');
  const header = columns.map((column, k) => (
    <div
      className={style['table__header-item']}
      key={`${column.Display}_${k}`}
      style={{ flex: `${column.Width}px` }}
    >
      <Text mod={{ color: 'dark-light' }}>{column.Display}</Text>
    </div>
  ));
  const rows = data.map((row, i) => (
    <div className={rowCn} key={i}>
      {columns.map((column, k) => {
        // const className = (column.Type === 'label'
        //   ? rowItemCn({ type: 'label' })
        //   : rowItemCn()
        // )
        //   .split(' ')
        //   .map(name => style[name])
        //   .join(' ');
        return (
          <div
            className={rowItemCn}
            key={`${column.Name}_${k}`}
            style={{ flex: `${column.Width}px` }}
          >
            <Text mod={{ color: 'dark' }}>{row[column.Name]}</Text>
          </div>
        );
      })}
    </div>
  ));
  return (
    <React.Fragment>
      <div className={style.table}>
        <div className={style.table__header}>{header}</div>
        <div className={style.table__body}>{rows}</div>
      </div>
    </React.Fragment>
  );
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  config: PropTypes.object,
  data: PropTypes.array.isRequired
};
