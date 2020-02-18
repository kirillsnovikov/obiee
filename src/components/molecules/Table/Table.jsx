import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../atoms/Text';
import style from './style.scss';
import { cn } from '@bem-react/classname';

export const Table = ({ columns, data }) => {
  const block = cn('row', 'item');
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
    <div className={style.table__row} key={i}>
      {columns.map((column, k) => {
        const className = (column.Type === 'label'
          ? block({ type: 'label' })
          : block()
        )
          .split(' ')
          .map(name => style[name])
          .join(' ');
        return (
          <div
            className={className}
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
  data: PropTypes.array.isRequired
};
