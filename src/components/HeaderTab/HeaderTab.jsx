import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '@material-ui/core';

import './header-tab.css';

const HeaderTab = ({ PATH, TITLE }, index) => (
  <Tab key={index} className="tab" label={TITLE} to={PATH} />
);

HeaderTab.propTypes = {
  PATH: PropTypes.string.isRequired,
  TITLE: PropTypes.string.isRequired,
};

export default HeaderTab;
