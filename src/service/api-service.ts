import { IResponse, IResponseById,ICast, IResponseReviews } from "../interfaces";

const KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/";

export async function fetchTrendingMovies(page: number = 1) {
  const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}&language=uk-UA&page=${page}`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `Error Status ${response.status}`;
    throw new Error(message);
  }
  const data: IResponse = await response.json();
  return data;
}

export async function fetchQueryMovies(query: string, page: number = 1) {
  const url = `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&language=uk-UA&page=${page}`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `Error Status ${response.status}`;
    throw new Error(message);
  }
  const data: IResponse = await response.json();
  return data;
}

export async function fetchMovieById(movieId: string) {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=uk-UA`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `Error Status ${response.status}`;
    throw new Error(message);
  }
  const data: IResponseById = await response.json();
  return data;
}

export async function fetchCast(movieId: string) {
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=uk-UA`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `Error Status ${response.status}`;
    throw new Error(message);
  }
  const data:ICast =await response.json();
  return data;
}
export async function fetchReviews(movieId: string) {
  const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `Error Status ${response.status}`;
    throw new Error(message);
  }
  const data: IResponseReviews = await response.json();
  return data;
}
