import axios from 'axios';

import { PARAMS as params, STATIC_URL as imgUrl } from '../constants/constants';
import noImg from '../static/images/no-img.png';

let cachedGenres = null;

export const getMoviesWithoutGenres = (searchQuery, page, type) => axios.get(
  type !== undefined ? `${params.URL}${type}` : `${params.SEARCH_URL}`,
  {
    params: {
      api_key: params.API_KEY,
      query: searchQuery || undefined,
      page,
    },
  },
)
  .then(((res) => {
    const { total_results: totalResults, results } = res.data;
    const movies = results.map(
      ({
        title, genre_ids: genresIds, vote_average: voteAverage, overview, poster_path: posterPath,
        release_date: releaseDate, popularity,
        original_language: originalLanguage, vote_count: voteCount, original_title: originalTitle,
      }) => ({
        title,
        genresIds,
        voteAverage,
        overview,
        popularity,
        originalLanguage,
        voteCount,
        originalTitle,
        releaseDate,
        posterPath: posterPath === null ? noImg : `${imgUrl}${posterPath && posterPath.substring(1)}`,
      }),
    );
    return { totalResults, movies };
  }));

const getMovieWithGenres = (movie, genres) => {
  const { genresIds } = movie;
  const genreNames = genres
    .filter(({ id }) => genresIds.includes(id))
    .map(({ name }) => name);
  return {
    ...movie,
    genres: genreNames,
  };
};

const getAllGenres = () => (cachedGenres ? Promise.resolve(cachedGenres) : axios.get(
  params.GENRES_URL,
  {
    params: { api_key: params.API_KEY },
  },
)
  .then((res) => {
    const { genres } = res.data;
    cachedGenres = genres;
    return genres;
  }));

export const getSearchMovies = (searchQuery, page) => getAllGenres()
  .then(genres => getMoviesWithoutGenres(searchQuery, page)
    .then(({ movies, totalResults }) => ({
      totalResults,
      movies: movies.map(movie => getMovieWithGenres(movie, genres)),
    })));

export const getMovies = (type, page) => getAllGenres()
  .then(genres => getMoviesWithoutGenres(undefined, page, type)
    .then(({ movies, totalResults }) => ({
      totalResults,
      movies: movies.map(movie => getMovieWithGenres(movie, genres)),
    })));

export default getMovies;
