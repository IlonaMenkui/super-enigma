import React from 'react';
import PropTypes from 'prop-types';

import { Paper, Tabs } from '@material-ui/core';

import { HEADER_TABS as tabs } from '../../constants/constants';
import HeaderTab from './HeaderTab/HeaderTab';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  componentWillMount() {
    const { history: { location } } = this.props;
    const { pathname } = location;
    const currentTabIndex = tabs.findIndex(({ PATH }) => pathname === PATH);
    const newState = {
      value: currentTabIndex,
    };
    this.setState(newState);
  }

  handleChange = (event, value) => {
    const { history } = this.props;
    history.push(tabs[value].PATH);
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return (
      <header>
        <Paper>
          <Tabs
            value={value}
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
    push: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Header;
