import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store from './Redux/store-redux'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from "react-router-dom";
console.log('index')
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
    <App store={store}/>
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);




