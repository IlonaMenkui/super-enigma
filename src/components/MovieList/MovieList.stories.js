/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { storiesOf } from '@storybook/react';

import MovieList from '.';

const movies = [{
  vote_count: 576, id: 384018, video: false, vote_average: 6.5, title: 'Fast & Furious Presents: Hobbs & Shaw', popularity: 456.135, original_language: 'en', original_title: 'Fast & Furious Presents: Hobbs & Shaw', overview: "A spinoff of The Fate of the Furious, focusing on Johnson's US Diplomatic Security Agent Luke Hobbs forming an unlikely alliance only with Statham's Deckard Shaw.", release_date: '2019-08-01',
}];
const title = 'Page title';
const isLoading = false;

storiesOf('MovieList', module)
  .add('default', () => (
    <MovieList
      title={title}
      isLoading={isLoading}
      movies={movies}
    />
  ))
  .add('when isLoading is true', () => <MovieList title={title} isLoading />)
  .add('without movies', () => <MovieList title={title} isLoading={isLoading} />);
