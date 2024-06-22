/*
-------------------------------------------
CIMS - Country Information Management System
-------------------------------------------
About:
A React application to retrieve country information.
A basic search faciity is provided.  Users can click
a country for details and store that country in their 
favourites.

History
Date        Who          WHAT
----------- ------------ ------------------
21-JUN-2024 Shane Wilson Intial version
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
