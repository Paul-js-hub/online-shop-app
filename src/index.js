import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavHeader from './components/Header/index';

ReactDOM.render(
  <React.StrictMode>
    <NavHeader />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
