import axios from 'axios';
import { API_URL } from '../constants';

const getMovies = ({ searchQuery, page, url }) => axios.get(`${API_URL}/movies`,
  {
    params: {
      url,
      query: searchQuery,
      page,
    },
  })
  .then((({ data }) => {
    const movies = data;
    return { movies };
  }));

export default getMovies;
