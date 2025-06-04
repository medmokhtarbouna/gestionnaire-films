// src/api.js
import axios from "axios";

const API_KEY = "4919451b6a70c32e62139503487e4e29";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=fr-FR`);
  return response.data.results;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=fr-FR`);
  return response.data;
};

export const searchMovies = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=fr-FR&query=${query}`
  );
  return response.data.results;
};