import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/molecules/Card';
import style from './style.scss';
import { loadCards } from '../../actions/DashboardActions';

class Dashboard extends React.Component {
  componentDidMount() {
    const { loadCards } = this.props;
    loadCards();
  }
  render() {
    const cards = this.props.cards.cards.map((card, i) => (
      <Card data={card} key={card.id + i} />
    ));
    return (
      <section className={style.dashboard}>
        <div className={style.cards}>{cards}</div>
        <div className={style.funnel}></div>
        <div className={style.table}></div>
        <div onClick={this.props.loadCards}>reload</div>
      </section>
    );
  }
}

const mapStateToProps = store => {
  return {
    cards: store.cards,
    funnel: store.funnel,
    table: store.table
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCards: () => dispatch(loadCards())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
