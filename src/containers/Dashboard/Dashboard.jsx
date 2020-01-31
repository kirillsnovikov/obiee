import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/molecules/Card';
import style from './style.scss';

class Dashboard extends React.Component {
  render() {
    console.log(style);
    const cards = this.props.cards.items.map((card, i) => (
      <Card data={card} key={card.id + i} />
    ));
    return (
      <section className={style.dashboard}>
        <div className={style.cards}>{cards}</div>
        <div className={style.funnel}></div>
        <div className={style.table}></div>
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

export default connect(mapStateToProps)(Dashboard);
