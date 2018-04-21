import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import Provider from 'react-redux';
import { createStore } from 'redux';
import logger from 'redux-logger';
import axios from 'axios';


ReactDOM.render(<Provider store ={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
