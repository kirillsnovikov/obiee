import React from 'react';
import { connect } from 'react-redux';
import style from './style.scss';
import {
  getPipeListHeader,
  getPipeListTable,
  getPipeListChart
} from '../../actions/PipeListActions';
import { PipeListHeader } from '../../components/molecules/PipeListHeader';
import { PipeListTable } from '../../components/organisms/PipeListTable';
import { PipeListChart } from '../../components/organisms/PipeListChart';

class PipeList extends React.Component {
  componentDidMount() {
    const {
      getPipeListHeader,
      getPipeListChart,
      getPipeListTable
    } = this.props;
    getPipeListHeader();
    getPipeListTable();
    getPipeListChart();
  }
  render() {
    const {
      header,
      pipeListChart,
      pipeListTable,
      getPipeListChart,
      getPipeListTable
    } = this.props;
    return (
      <div className={style.pipeList}>
        <div className={style.header}>
          <PipeListHeader data={header} />
        </div>
        <div className={style.table}>
          <PipeListTable
            data={pipeListTable}
            getPipeListTable={getPipeListTable}
          />
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
    pipeListChart: store.pipeListChart,
    pipeListTable: store.pipeListTable
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPipeListHeader: () => dispatch(getPipeListHeader()),
    getPipeListTable: () => dispatch(getPipeListTable()),
    getPipeListChart: () => dispatch(getPipeListChart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PipeList);
