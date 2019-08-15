/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { storiesOf } from '@storybook/react';

import HeaderTab from '.';

const PATH = '.';
const TITLE = 'Popular';

storiesOf('HeaderTab', module)
  .add('default', () => <HeaderTab PATH={PATH} TITLE={TITLE} />);
