import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './style';

const Tab = ({ title, value }) => (
  <Button key={value}>{title}</Button>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Tab;
