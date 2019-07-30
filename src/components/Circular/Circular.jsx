import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

import './circular.css';

const Circular = ({ visible }) => (
  <div className="circular-wrapp">
    <CircularProgress className="circular" style={{ display: visible ? '' : 'none' }} />
  </div>
);

Circular.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Circular;
