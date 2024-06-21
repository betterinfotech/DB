import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import db_logo from './db_logo.jpg';
import './App.css';
import CountryList from './components/CountryList.js';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
        setFilteredCountries(response.data);
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  const handleRowClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="App">
      <table>
        <tr>
          <th><img src={db_logo} alt="dblogo" width="230" height="140" /></th>
          <th><h1>CIMS - Country Information Management System</h1></th>
          <th><img src={logo} className="App-logo" alt="logo" width="80" height="80" /></th>
        </tr>
      </table>
      <div style={{ flex: 1 }}>
        <CountryList countries={filteredCountries} onRowClick={handleRowClick} />
      </div>
    </div>
  );
};

export default App;
