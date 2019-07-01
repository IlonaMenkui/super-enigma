import axios from 'axios';
import { PARAMS as params, STATIC_URL as imgUrl } from '../app.constants';

let cachedGenres = null;

const getMoviesWithoutGenres = (type, page) => axios.get(
  `${params.URL}${type}`,
  {
    params: { api_key: params.API_KEY, page },
  },
)
  .then((res) => {
    // eslint-disable-next-line camelcase
    const { total_results, results } = res.data;
    const movies = results.map(
      ({
        // eslint-disable-next-line camelcase
        title, genre_ids, vote_average, overview, poster_path,
      }) => ({
        title,
        genresIds: genre_ids,
        voteAverage: vote_average,
        overview,
        // eslint-disable-next-line camelcase
        poster_path: `${imgUrl}${poster_path && poster_path.substring(1)}`,
      }),
    );
    return { totalResults: total_results, movies };
  });

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


export const getMovies = (type, page) => getAllGenres()
  .then(genres => getMoviesWithoutGenres(type, page)
    .then(({ movies, totalResults }) => ({
      totalResults,
      movies: movies.map(movie => getMovieWithGenres(movie, genres)),
    })));

export default getMovies;
