export const ROUTES = {
  POPULAR: '/',
  UPCOMING: '/upcoming',
  NOW_PLAYING: '/nowplaying',
};

export const HEADER_TABS = [{
  TITLE: 'popular',
  PATH: ROUTES.POPULAR,
},
{
  TITLE: 'upcoming',
  PATH: ROUTES.UPCOMING,
},
{
  TITLE: 'now playing',
  PATH: ROUTES.NOW_PLAYING,
},
];

export const MOVIE_TYPE = {
  POPULAR: 'popular',
  UPCOMING: 'upcoming',
  NOW_PLAYING: 'now_playing',
};

export const BASE_URL = 'https://api.themoviedb.org/3/';

export const PARAMS = {
  URL: `${BASE_URL}movie/`,
  GENRES_URL: `${BASE_URL}genre/movie/list`,
  API_KEY: 'ab7c9fc53125a8e8d9fd23c8704f80e5',
};

export const STATIC_URL = 'https://image.tmdb.org/t/p/w200/';
