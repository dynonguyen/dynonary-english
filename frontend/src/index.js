import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './utils/index.scss';
import { Provider } from 'react-redux';
import store from 'redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
