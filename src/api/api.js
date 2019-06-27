import axios from 'axios';
import { PARAMS as params, STATIC_URL as imgUrl } from '../app.constants';

export const getMovies = type => axios.get(
  `${params.url}${type}`,
  {
    params: { api_key: params.api_key },
  },
)
  .then(res => res.data.results.map(
    ({
      title, genre_ids, vote_average, overview, poster_path,
    }) => ({
      title,
      genres: genre_ids,
      voteAverage: vote_average,
      overview,
      poster_path: `${imgUrl}${poster_path.substring(1)}`,
    }),
  ));
