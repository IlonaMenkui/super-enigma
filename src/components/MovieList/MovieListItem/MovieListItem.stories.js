/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { storiesOf } from '@storybook/react';

import MovieListItem from '.';

const genres = ['Action', 'Romantic'];
const title = 'Movie title';
const overview = 'Some overwiew';
const releaseDate = '2019-08-01';

storiesOf('MovieListItem', module)
  .add('default', () => <MovieListItem />)
  .add('with genres', () => (<MovieListItem genres={genres} />))
  .add('with title', () => <MovieListItem title={title} />)
  .add('with overview', () => <MovieListItem overview={overview} />)
  .add('with releaseDate', () => <MovieListItem releaseDate={releaseDate} />)
  .add('with all props', () => (
    <MovieListItem
      genres={genres}
      title={title}
      overview={overview}
      releaseDate={releaseDate}
    />
  ));
