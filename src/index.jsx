import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

require('typeface-roboto')

import configureStore from './App/store/configureStore'

import './reset.css';
import 'antd/dist/antd.css';

import App from './App';
import { getDefaults } from './App/actions'
import './index.css';


const store = configureStore();

store.dispatch(getDefaults())

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
