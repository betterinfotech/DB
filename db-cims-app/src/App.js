/*
History
Date        Who          WHAT
21-JUN-2024 Shane Wilson Intial version
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FavoritesProvider } from './FavoritesContext';
import CountryList from './components/CountryList';
import SearchBar from './components/SearchBar';
import Favorites from './components/Favorites';
import CountryDetail from './components/CountryDetail';
import db_logo from './db_logo.jpg';
import logo from './logo.svg';
import './App.css';

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

  // Allow to search on country name, lanaguage or currency.
  const handleSearch = (term) => {
    const lowercasedTerm = term.toLowerCase();
    const filtered = countries.filter(country =>
      country.name.common.toLowerCase().includes(lowercasedTerm) ||
      (country.languages && Object.values(country.languages).some(language => language.toLowerCase().includes(lowercasedTerm))) ||
      (country.currencies && Object.values(country.currencies).some(currency => currency.name.toLowerCase().includes(lowercasedTerm)))
    );
    setFilteredCountries(filtered);
  };

  const handleRowClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <FavoritesProvider>
      <div>
        <img src={db_logo} alt="dblogo" width="130" height="80" />
        <h1>CIMS - Country Information Management System</h1>

        <SearchBar onSearch={handleSearch} />
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <CountryList countries={filteredCountries} onRowClick={handleRowClick} />
          </div>

          <div style={{ flex: 1 }}>
            {selectedCountry && <CountryDetail country={selectedCountry} />}
          </div>
        </div>

        <Favorites />
      </div>

      <img src={logo} className="App-logo" alt="logo" width="80" height="80" />

    </FavoritesProvider>

  );
};

export default App;
