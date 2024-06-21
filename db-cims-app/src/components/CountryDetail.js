import React, { useContext } from 'react';
import FavoritesContext from '../FavoritesContext';

const CountryDetail = ({ country }) => {
  const { addFavorite, removeFavorite, favorites } = useContext(FavoritesContext);
  const isFavorite = favorites.some(fav => fav.cca3 === country.cca3);

  return (
    <div>
      <h2>{country.name.common}</h2>
      <img src={country.flags.png} alt="flag" style={{ width: '100px' }} />
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Languages: {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
      <p>Currencies: {country.currencies ? Object.values(country.currencies).map(currency => currency.name).join(', ') : 'N/A'}</p>
      <button onClick={() => isFavorite ? removeFavorite(country) : addFavorite(country)}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default CountryDetail;
