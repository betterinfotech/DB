/*
History
Date        Who          WHAT
21-JUN-2024 Shane Wilson Intial version
*/

const FAVORITES_KEY = 'favorites';

export const loadFavorites = () => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

export const saveFavorites = (favorites) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};
