// src/api/omdb.js
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export const fetchMovies = async (searchTerm) => {
  try {
    const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
    const data = await response.json();
    if (data.Response === 'True') {
      return data;
    } else {
      throw new Error(data.Error);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
