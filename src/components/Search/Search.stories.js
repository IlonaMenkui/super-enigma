/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Search from '.';

const searchQuery = 'find movie...';
const onHandleChange = action('change-input-value');
const onSearchClick = action('click-on-search-icon');
const onEnterPress = action('press-on-enter-key');

storiesOf('Search', module)
  .add('default', () => (
    <Search
      searchQuery={searchQuery}
      onHandleChange={onHandleChange}
      onSearchClick={onSearchClick}
      onEnterPress={onEnterPress}
    />
  ))
  .add('without search query', () => (
    <Search
      onHandleChange={onHandleChange}
      onSearchClick={onSearchClick}
      onEnterPress={onEnterPress}
    />
  ));
