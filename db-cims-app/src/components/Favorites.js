import React, { useContext } from 'react';
import FavoritesContext from '../FavoritesContext';

const Favorites = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.map(country => (
        <div key={country.cca3}>
          <h2>{country.name.common}</h2>
          <button onClick={() => removeFavorite(country)}>Remove from Favorites</button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
