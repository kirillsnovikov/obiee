import React from 'react';
import { connect } from 'react-redux';
import style from './style.scss';
import { PieChart } from '../../components/molecules/PieChart';
import { getPipeListHeader } from '../../actions/PipeListActions';
import { PipeListHeader } from '../../components/molecules/PipeListHeader';

class PipeList extends React.Component {
  componentDidMount() {
    const { getPipeListHeader } = this.props;
    getPipeListHeader();
  }
  render() {
    const data = [100, 500, 250, 400, 700, 50, 220, 340, 300];
    const size = 230;
    const { header } = this.props;
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
          <div className={style.chart__header}></div>
          <div className={style.chart__body}>
            <PieChart data={data} size={size} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    header: store.header
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPipeListHeader: () => dispatch(getPipeListHeader())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PipeList);
