import React, { createContext, useState, useEffect } from 'react';

// Create a context for managing favorite countries
const FavoritesContext = createContext();

// FavoritesProvider component to wrap the application and provide the context
export const FavoritesProvider = ({ children }) => {
  // State to store favorite countries
  const [favorites, setFavorites] = useState(() => {
    // Get the favorites from local storage or initialize with an empty array
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Update local storage whenever favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Function to add a country to favorites
  const addFavorite = (country) => {
    setFavorites([...favorites, country]);
  };

  // Function to remove a country from favorites
  const removeFavorite = (country) => {
    setFavorites(favorites.filter(fav => fav.cca3 !== country.cca3));
  };

  // Provide the favorites and functions to the context consumers
  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
