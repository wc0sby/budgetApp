import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css'
import {getTransaction} from './Fetch/index'
import{ Provider } from 'react-redux'
import store from './store'

window.onload = ()=>{
  setTimeout(load, 10);
}
debugger
const trx = getTransaction()

const load = ()=>{
ReactDOM.render(
  <Provider store={store}>
    <App 
      transaction = {trx}
    />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
}