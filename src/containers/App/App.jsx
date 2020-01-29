// https://xsltdev.ru/react/redux/konteineri-i-komponenti/

import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import WaterChart from '../../components/molecules/WaterChart';
import './App.css';

class App extends React.Component {
  render() {
    const { name, surname, age } = this.props.user;
    const { year, photos } = this.props.page;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            Привет из App, {name} {surname}!
          </p>
          <p>{photos}</p>
          <p>{year}</p>
          <p>Тебе уже {age} ?</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <WaterChart />
        </header>
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store); // посмотрим, что же у нас в store?
  return {
    user: store.user,
    page: store.page
  };
};

export default connect(mapStateToProps)(App);
