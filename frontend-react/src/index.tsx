import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as initializer from './app/initializer';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

initializer.init();
