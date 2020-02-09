import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import { Text } from '../Text';
import { cn } from '@bem-react/classname';

export const Radio = props => {
  const { label, value, checked, onChange } = props;
  const block = cn('text');
  const text = block({ active: checked })
    .split(' ')
    .map(name => style[name])
    .join(' ');
  return (
    <label className={style.label}>
      <div className={text}>
        <Text mod={{ color: checked ? 'primary' : 'secondary', type: 'bold' }}>
          {label}
        </Text>
      </div>
      <input
        className={style.input}
        type={'radio'}
        checked={checked}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Radio.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number
  ]).isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string
};
