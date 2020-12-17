import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import 'tachyons'
import { cars } from './Cars'

ReactDOM.render(
  <React.StrictMode>
    <div id="main">
    <Card name={cars[0].name} description={cars[0].description} file={cars[0].file}/> 
    <Card name={cars[1].name} description={cars[1].description} file={cars[1].file}/> 
    <Card name={cars[2].name} description={cars[2].description} file={cars[2].file}/> 
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

