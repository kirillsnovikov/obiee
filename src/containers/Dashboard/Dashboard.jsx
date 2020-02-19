import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/molecules/Card';
import { Spinner } from '../../components/atoms/Spinner';
import style from './style.scss';
import {
  getCards,
  getFunnelInThings,
  getFunnelInMlns,
  getTableData
} from '../../actions/DashboardActions';
import { FunnelPart } from '../../components/organisms/FunnelPart';
import { TablePart } from '../../components/organisms/TablePart';
import { getActionFromBI } from '../../helpers/helper';

class Dashboard extends React.Component {
  componentDidMount() {
    const { getCards, getFunnelInMlns, getTableData } = this.props;
    getFunnelInMlns();
    getCards();
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
          <Cards data={cards} />
        </div>
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

const Cards = ({ data }) => {
  const { cards, loading } = data;
  return loading ? (
    <Spinner />
  ) : (
    cards.map((card, i) => {
      let action = () => {
        getActionFromBI(card.actionName);
      };
      return (
        <Card
          className={style.cards__card}
          data={card}
          key={card.id + i}
          action={action}
        />
      );
    })
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
    getCards: () => dispatch(getCards()),
    getFunnelInThings: () => dispatch(getFunnelInThings()),
    getFunnelInMlns: () => dispatch(getFunnelInMlns()),
    getTableData: () => dispatch(getTableData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
