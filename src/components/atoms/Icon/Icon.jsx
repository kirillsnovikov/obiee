import React from 'react';
import PropTypes from 'prop-types';

export const Icon = ({ icon, size = 18 }) => {
  const { viewBox, id } = icon;
  return (
    <svg viewBox={viewBox} width={size} height={size}>
      <use xlinkHref={`#${id}`} />
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
  size: PropTypes.number
};
