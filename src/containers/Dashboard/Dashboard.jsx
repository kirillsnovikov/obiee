import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/molecules/Card';
import { Spinner } from '../../components/atoms/Spinner';
import style from './style.scss';
import {
  loadCards,
  getFunnelInThings,
  getFunnelInMlns,
  getTableData
} from '../../actions/DashboardActions';
import { FunnelPart } from '../../components/organisms/FunnelPart';
import { TablePart } from '../../components/organisms/TablePart';
import { Icon } from '../../components/atoms/Icon';

class Dashboard extends React.Component {
  componentDidMount() {
    const { loadCards, getFunnelInMlns, getTableData } = this.props;
    getFunnelInMlns();
    loadCards();
    getTableData();
  }
  render() {
    const {
      cards,
      funnel,
      table,
      getFunnelInThings,
      getFunnelInMlns
    } = this.props;
    return (
      <section className={style.dashboard}>
        <div className={style.cards}>
          <Cards cards={cards} />
        </div>
        <Icon />
        <div className={style.funnelTable}>
          <div className={style.funnel}>
            <FunnelPart
              funnel={funnel}
              getFunnelInThings={getFunnelInThings}
              getFunnelInMlns={getFunnelInMlns}
            />
          </div>
          <div className={style.table}>
            <TablePart table={table} />
          </div>
        </div>
      </section>
    );
  }
}

const Cards = props => {
  return props.cards.loading ? (
    <Spinner />
  ) : (
    props.cards.cards.map((card, i) => (
      <Card className={style.cards__card} data={card} key={card.id + i} />
    ))
  );
};

const mapStateToProps = store => {
  return {
    cards: store.cards,
    funnel: store.funnel,
    table: store.table
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCards: () => dispatch(loadCards()),
    getFunnelInThings: () => dispatch(getFunnelInThings()),
    getFunnelInMlns: () => dispatch(getFunnelInMlns()),
    getTableData: () => dispatch(getTableData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
