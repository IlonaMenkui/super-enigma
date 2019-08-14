/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { storiesOf } from '@storybook/react';

import HeaderTab from '.';

storiesOf('HeaderTab', module)
  .add('default', () => <HeaderTab />)
  .add('with title', () => <HeaderTab TITLE="hello" />)
  .add('with path', () => <HeaderTab PATH="/hello" />)
  .add('with all props', () => <HeaderTab TITLE="Hello" PATH="/hello" />);
