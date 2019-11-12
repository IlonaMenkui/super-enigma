/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

const HeaderTabs = ({
  title, value, onClickTab, index,
}) => (
  <Tab onClickTab={onClickTab} title={title} value={value} index={index} />
);

HeaderTabs.propTypes = {
  onClickTab: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default HeaderTabs;
