import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Dashboard from './Dashboard';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import NavBar from './NavBar';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div className="bodyContainer">
      <NavBar />
      <Dashboard />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
