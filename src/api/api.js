import axios from 'axios';

import { PARAMS as params, STATIC_URL as imgUrl, MAX_TOTAL_RESULTS as maxTotalResults } from '../constants';
import noImg from '../static/images/no-img.png';

export const getMoviesWithoutGenres = ({ searchQuery, page, url }) => axios.get(
  url,
  {
    params: {
      api_key: params.API_KEY,
      query: searchQuery,
      page,
    },
  },
)
  .then(((res) => {
    const { results } = res.data;
    let { total_results: totalResults } = res.data;
    if (totalResults > maxTotalResults) {
      totalResults = maxTotalResults;
    }
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

const getAllGenres = cachedGenres => (cachedGenres.length !== 0 ? Promise.resolve(cachedGenres)
  : axios.get(
    params.GENRES_URL,
    {
      params: { api_key: params.API_KEY },
    },
  )
    .then((res) => {
      const { genres } = res.data;
      return genres;
    }));

export const getMovies = ({
  searchQuery, url, page, cachedGenres,
}) => getAllGenres(cachedGenres)
  .then(genres => getMoviesWithoutGenres({ searchQuery, page, url })
    .then(({ movies, totalResults }) => ({
      totalResults,
      movies: movies.map(movie => getMovieWithGenres(movie, genres)),
      genres,
    })));

export default getMovies;
