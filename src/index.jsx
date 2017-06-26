import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

require('typeface-roboto')

import configureStore from './app/store/configureStore'

import './reset.css';
import 'antd/dist/antd.css';

import App from './app';
import { getDefaults } from './app/actions'
import './index.css';


const store = configureStore();

store.dispatch(getDefaults())

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
