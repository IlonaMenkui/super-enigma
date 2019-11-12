/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';
import { ButtonWrapper } from './Tab/style';

const HeaderTabs = ({ title, value }) => (
  <ButtonWrapper>
    <Tab title={title} value={value} />
  </ButtonWrapper>
);

HeaderTabs.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default HeaderTabs;
