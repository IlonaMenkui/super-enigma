import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Pagiinon from '.';

const changePage = action('click-on-page');
const totalPages = 100;
const page = 3;

storiesOf('Pagination', module)
  .add('default', () => <Pagiinon onClickPage={changePage} page={page} totalPages={totalPages} />)
  .add('only with total results', () => <Pagiinon onClickPage={changePage} totalPages={totalPages} />)
  .add('with selected page', () => <Pagiinon onClickPage={changePage} page={page} totalPages={totalPages} />)
  .add('without any data', () => <Pagiinon onClickPage={changePage} />);
