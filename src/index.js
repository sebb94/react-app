import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CarsList from './CarsList'
import 'tachyons'
import { cars } from './Cars'

ReactDOM.render(
  <React.StrictMode>
    <div id="main">
      <CarsList cars={cars}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

