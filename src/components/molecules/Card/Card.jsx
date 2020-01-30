import React from 'react';
import { WaterChart } from '../WaterChart';
import PropTypes from 'prop-types';

export class Card extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {data.id}
        <WaterChart width={100} percentage={data.percentage} />
      </div>
    );
  }
}

Card.propTypes = {
  data: PropTypes.object.isRequired
};
