import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import { Text, Subtitle } from '../../atoms/Text';
import { Spinner } from '../../atoms/Spinner';

export const PipeListHeader = ({ data }) => {
  const { header, loading } = data;
  const { title, values } = header;
  return (
    <div className={style.header}>
      <div className={style.header__back}>назад</div>
      <div className={style.header__body}>
        {loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <div className={style.bodyTitle}>
              <Subtitle mod={{ type: 'bold' }}>{title}</Subtitle>
            </div>
            <div className={style.bodyContent}>
              <GroupList values={values} />
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

const GroupList = ({ values }) => {
  return values.map(value => {
    const { title, labels } = value;
    return (
      <div className={style.listItem} key={title}>
        <div className={style.listItem__title}>
          <Text mod={{ size: 'l', type: 'bold' }}>{title}</Text>
        </div>
        <div className={style.labels}>
          <LabelList labels={labels} />
        </div>
      </div>
    );
  });
};

const LabelList = ({ labels }) => {
  return labels.map(item => {
    const { label, value } = item;
    return (
      <LabelListItem label={label} value={value} key={`${label}_${value}`} />
    );
  });
};

const LabelListItem = ({ label, value }) => {
  return (
    <div className={style.label}>
      <div className={style.label__name}>
        <Text mod={{ size: 'm' }}>{label}</Text>
      </div>
      <Text mod={{ size: 'm', color: 'secondary', type: 'bold' }}>{value}</Text>
    </div>
  );
};

PipeListHeader.propTypes = {
  data: PropTypes.object.isRequired
};
