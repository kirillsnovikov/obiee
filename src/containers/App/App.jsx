// https://xsltdev.ru/react/redux/konteineri-i-komponenti/

import React from 'react';
import { connect } from 'react-redux';
import Dashboard from '../Dashboard';
import { User } from '../../components/molecules/User';
import { Page } from '../../components/molecules/Page';
import { setYear } from '../../actions/PageActions';
import style from './App.css';

class App extends React.Component {
  render() {
    const { user, page, setYearAction } = this.props;

    return (
      <div className={style.App}>
        <Dashboard />
        <header className={style['App-header']}>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <User name={user.name} />
          <Page photos={page.photos} year={page.year} setYear={setYearAction} />
        </header>
      </div>
    );
  }
}

const mapStateToProps = store => {
  // console.log(store); // посмотрим, что же у нас в store?
  return {
    user: store.user,
    page: store.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setYearAction: year => dispatch(setYear(year)) // [1]
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
