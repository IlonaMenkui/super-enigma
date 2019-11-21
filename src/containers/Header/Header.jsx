import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { HEADER_TABS as tabs } from '../../constants';
import HeaderTab from '../../components/HeaderTab';
import {
  reset,
  setPage as setPageAction,
} from '../../actions/movies';

import TabsWrapper from './style';

@connect(
  ({ searchQuery }) => ({ searchQuery }),
  {
    resetSearchMovies: reset,
    setPage: setPageAction,
  },
)
export class Header extends React.PureComponent {
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
    const {
      history, resetSearchMovies, searchQuery, setPage,
    } = this.props;
    history.push(tabs[value].PATH);
    this.setState({ value });
    if (searchQuery) {
      resetSearchMovies();
    } else {
      setPage({ page: 1 });
    }
  }

  render() {
    const { value } = this.state;
    return (
      <header>
        <TabsWrapper>
          {tabs.map((tab, index) => (
            <HeaderTab
              onClickTab={this.handleChange}
              value={value}
              index={index}
              title={tab.TITLE}
            />
          ))}
        </TabsWrapper>
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
  resetSearchMovies: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Header;
