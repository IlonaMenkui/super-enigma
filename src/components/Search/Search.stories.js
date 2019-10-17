import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import Search from '.';

const eventsFromObject = actions({
  onHandleChange: 'change-input-value',
  onSearchClick: 'click-on-search-icon',
  onEnterPress: 'press-on-enter-key',
});

const searchQuery = 'find movie...';

storiesOf('Search', module)
  .add('default', () => (
    <Search {...eventsFromObject} />
  ))
  .add('with search query', () => (
    <Search {...eventsFromObject} searchQuery={searchQuery} />
  ));
