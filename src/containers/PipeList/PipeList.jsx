import React from 'react';
import { connect } from 'react-redux';
import style from './style.scss';
import { PieChart } from '../../components/molecules/PieChart';

class PipeList extends React.Component {
  render() {
    const data = [5000, 300];
    const size = 200;
    return <PieChart data={data} size={size} />;
  }
}

export default PipeList;
