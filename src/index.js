import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'tachyons'

ReactDOM.render(
  <React.StrictMode>
    <div id="main">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
