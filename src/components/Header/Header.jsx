import React from 'react';
import PropTypes from 'prop-types';

import { Paper, Tabs } from '@material-ui/core';

import { HEADER_TABS as tabs } from '../../app.constants';
import HeaderTab from './HeaderTab/HeaderTab';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.history = props.history;
  }

  componentWillMount() {
    const { pathname } = this.history.location;
    const currentTabIndex = tabs.findIndex(({ path }) => pathname === path);
    const newState = {
      value: currentTabIndex,
    };
    this.setState(newState);
  }

  handleChange = (event, value) => {
    this.history.push(tabs[value].path);
    this.setState({ value });
  }

  render() {
    return (
      <header>
        <Paper>
          <Tabs
            value={this.state.value}
            centered
            onChange={this.handleChange}
            indicatorColor="primary"
          >
            {tabs.map(HeaderTab)}
          </Tabs>
        </Paper>
      </header>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Header;
