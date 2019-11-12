import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '@material-ui/core';

import './header-tab.css';

const HeaderTab = ({ TITLE }, index) => (
  <Tab key={index} className="tab" label={TITLE} />
);

HeaderTab.propTypes = {
  TITLE: PropTypes.string.isRequired,
};

export default HeaderTab;
