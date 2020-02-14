import React from 'react';
import { connect } from 'react-redux';
import style from './style.scss';
import {
  getPipeListHeader,
  getPipeListChart
} from '../../actions/PipeListActions';
import { PipeListHeader } from '../../components/molecules/PipeListHeader';
import { PipeListChart } from '../../components/organisms/PipeListChart';

class PipeList extends React.Component {
  componentDidMount() {
    const { getPipeListHeader, getPipeListChart } = this.props;
    getPipeListHeader();
    getPipeListChart();
  }
  render() {
    const { header, pipeListChart, getPipeListChart } = this.props;
    return (
      <div className={style.pipeList}>
        <div className={style.header}>
          <PipeListHeader data={header} />
        </div>
        <div className={style.table}>
          <div className={style.table__header}></div>
          <div className={style.table__body}></div>
        </div>
        <div className={style.chart}>
          <PipeListChart
            data={pipeListChart}
            getPipeListChart={getPipeListChart}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    header: store.header,
    pipeListChart: store.pipeListChart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPipeListHeader: () => dispatch(getPipeListHeader()),
    getPipeListChart: () => dispatch(getPipeListChart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PipeList);
