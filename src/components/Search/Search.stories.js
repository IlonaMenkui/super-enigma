/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Search from '.';

const searchQuery = 'find movie...';

storiesOf('Search', module)
  .add('default', () => <Search />)
  .add('with search query', () => <Search searchQuery={searchQuery} />)
  .add('with onHandleChange func', () => <Search onHandleChange={action('change-input-value')} />)
  .add('with onSearchClick func', () => <Search onSearchClick={action('click-on-search-icon')} />)
  .add('with onEnterPress func', () => <Search onEnterPress={action('press-on-enter-key')} />)
  .add('with all props', () => (
    <Search
      searchQuery={searchQuery}
      onHandleChange={action('change-input-value')}
      onSearchClick={action('click-on-search-icon')}
      onEnterPress={action('press-on-enter-key')}
    />
  ));
