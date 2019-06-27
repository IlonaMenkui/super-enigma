import axios from 'axios';
import { PARAMS as params, STATIC_URL as imgUrl } from '../app.constants';

const getMoviesWithoutGenres = type => axios.get(
  `${params.URL}${type}`,
  {
    params: { api_key: params.API_KEY },
  },
)
  .then(res => res.data.results.map(
    ({
      // eslint-disable-next-line camelcase
      title, genre_ids, vote_average, overview, poster_path,
    }) => ({
      title,
      genresIds: genre_ids,
      voteAverage: vote_average,
      overview,
      poster_path: `${imgUrl}${poster_path.substring(1)}`,
    }),
  ));

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

const getAllGenres = () => axios.get(
  params.GENRES_URL,
  {
    params: { api_key: params.API_KEY },
  },
)
  .then(res => res.data.genres);


export const getMovies = type => getAllGenres()
  .then(genres => getMoviesWithoutGenres(type)
    .then(movies => movies.map(movie => getMovieWithGenres(movie, genres))));
