import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './Container/Functional/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css'
import{ Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
