import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './containers/Dashboard';
import PipeList from './containers/PipeList';
import { store } from './store/configureStore';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const pageIds = {
  'dashboard-root': Dashboard,
  'pipelist-root': PipeList
};

Object.keys(pageIds).forEach(pageId => {
  let root = document.getElementById(pageId);
  if (root !== null) {
    let Page = pageIds[pageId];
    ReactDOM.render(
      <Provider store={store}>
        <Page />
      </Provider>,
      root
    );
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
