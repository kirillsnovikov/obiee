import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import { Icon } from '../../atoms/Icon';

export const IconActionPanel = ({ actions }) => {
  return (
    <div className={style.panel}>
      {actions.map(item => {
        return <ActionItem {...item} key={item.icon.id} />;
      })}
    </div>
  );
};

const ActionItem = ({ icon, action }) => {
  return (
    <div className={style.item} onClick={action}>
      <Icon icon={icon} />
    </div>
  );
};

IconActionPanel.propTypes = {
  actions: PropTypes.array.isRequired
};
