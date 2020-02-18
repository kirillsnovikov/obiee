import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

export const Icon = ({ icon, size = 18 }) => {
  const { viewBox, id } = icon;
  return (
    <svg className={style.icon} viewBox={viewBox} width={size} height={size}>
      <use xlinkHref={`#${id}`} />
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
  size: PropTypes.number
};
