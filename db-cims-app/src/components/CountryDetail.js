import React, { useContext } from 'react';
import FavoritesContext from '../FavoritesContext';

const CountryDetail = ({ country }) => {
  const { addFavorite, removeFavorite, favorites } = useContext(FavoritesContext);
  const isFavorite = favorites.some(fav => fav.cca3 === country.cca3);

  return (
    <div>
      <h2>{country.name.common}</h2>
      <img src={country.flags.png} alt="flag" style={{ width: '100px' }} />
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>Continent: {country.continents}</p>
      <p>Area (km2): {country.area}</p>
      <p>TMZ: {country.timezones}</p>
      <p>Currencies: {country.currencies ? Object.values(country.currencies).map(currency => currency.name).join(', ') : 'N/A'}</p>
      <button onClick={() => isFavorite ? removeFavorite(country) : addFavorite(country)}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default CountryDetail;
