import React from 'react';
import PropTypes from 'prop-types';
// import style from './style.scss';

export const Table = props => {
  const { columns, data } = props;
  const header = columns.map((column, k) => (
    <div key={`${column.Display}_${k}`}>{column.Display}</div>
  ));
  const rows = data.map((row, i) => (
    <div key={i}>
      {columns.map((column, k) => {
        return <div key={`${column.Name}_${k}`}>{row[column.Name]}</div>;
      })}
    </div>
  ));
  return (
    <React.Fragment>
      <div>{header}</div>
      <div>{rows}</div>
    </React.Fragment>
  );
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
};
