import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

import './circular.css';

export class Circular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { visible } = this.props;
    return (
      <div className="circular-wrapp">
        <CircularProgress className="circular" style={{ display: visible ? '' : 'none' }} />
      </div>
    );
  }
}

Circular.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Circular;
