import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './style';

const Tab = ({
  title, value, onClickTab, index,
}) => (
  <Button onClick={() => onClickTab(1, index)} key={value}>
    {title}
    -
    {index}
    -
    {value}
  </Button>
);

Tab.propTypes = {
  onClickTab: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default Tab;
