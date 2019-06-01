import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import rootReducer from './redux/reducers';
import dotenv from 'dotenv';
import * as serviceWorker from './serviceWorker';

export const store = createStore(rootReducer);
dotenv.config();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
