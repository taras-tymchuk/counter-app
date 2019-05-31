import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counters from './components/counters';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(<Counters />, document.getElementById('root'));
serviceWorker.unregister();
