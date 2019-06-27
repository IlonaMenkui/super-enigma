export const ROUTES = {
  POPULAR: '/',
  UPCOMING: '/upcoming',
  NOW_PLAYING: '/nowplaying',
}

export const HEADER_TABS = [{
  title: 'popular',
  path: ROUTES.POPULAR,
},
{
  title: 'upcoming',
  path: ROUTES.UPCOMING,
},
{
  title: 'now playing',
  path: ROUTES.NOW_PLAYING,
},
];

export const MOVIE_TYPE = {
  POPULAR: 'popular',
  UPCOMING: 'upcoming',
  NOW_PLAYING: 'now_playing',
};

export const PARAMS = {
  url: 'https://api.themoviedb.org/3/movie/',
  genres_url: 'https://api.themoviedb.org/3/genre/movie/list',
  api_key: 'ab7c9fc53125a8e8d9fd23c8704f80e5',
};

export const STATIC_URL = 'https://image.tmdb.org/t/p/w200/';
