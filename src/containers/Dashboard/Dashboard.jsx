import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/molecules/Card';
import { Spinner } from '../../components/atoms/Spinner';
import style from './style.scss';
import {
  loadCards,
  getFunnelInThings,
  getFunnelInMlns
} from '../../actions/DashboardActions';
import { FunnelPart } from '../../components/organisms/FunnelPart';

class Dashboard extends React.Component {
  componentDidMount() {
    const { loadCards, getFunnelInMlns } = this.props;
    getFunnelInMlns();
    loadCards();
  }
  render() {
    const { cards, funnel, table, getFunnelInThings, loadCards } = this.props;
    return (
      <section className={style.dashboard}>
        <div className={style.cards}>
          <Cards cards={cards} />
          <div onClick={loadCards}>reload</div>
        </div>
        <div className={style.funnelTable}>
          <div className={style.funnel}>
            <FunnelPart funnel={funnel} getFunnelInThings={getFunnelInThings} />
          </div>
          <div className={style.table}>
            <TablePart table={table} />
          </div>
        </div>
        <Spinner />
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

const TablePart = props => {
  return props.table.loading ? <Spinner /> : <div>table</div>;
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
    getFunnelInMlns: () => dispatch(getFunnelInMlns())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
