import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/molecules/Card';
import style from './style.scss';

class Dashboard extends React.Component {
  render() {
    // const { cards } = this.props;
    console.log('style', style);
    const cards = this.props.cards.items.map((card, i) => (
      <Card data={card} key={card.id + i} />
    ));
    return <section className={style.test}>{cards}</section>;
  }
}

const mapStateToProps = store => {
  console.log('store', store);
  return {
    cards: store.cards,
    funnel: store.funnel,
    table: store.table
  };
};

export default connect(mapStateToProps)(Dashboard);
