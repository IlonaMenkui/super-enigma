import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './circular.css';

export class Circular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { circularVisibility } = this.props;
    return (
      <div className="circular-wrapp">
        <CircularProgress className="circular" style={{ display: circularVisibility }} />
      </div>
    );
  }
}

export default Circular;
