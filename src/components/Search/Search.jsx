import React from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import { MOVIES } from '../../constants/actions';
import { ENTER_KEY } from '../../constants/constants';
import {
  searching,
} from '../../actions/movies';

import './search.css';

@connect(
  ({ search }) => ({
    ...search,
  }),
  dispatch => ({
    searchMovies: payload => dispatch(searching(payload)),
  }),
)
export default class Search extends React.Component {
  searchClick = (searchQuery) => {
    if (searchQuery) {
      this.searchMovies(
        { searchQuery, isSearch: true },
      );
    }
  };

  render() {
    const { isSearch, searchQuery } = this.props;
    return (
      <div className="search-wrap">
        <InputBase
          placeholder="Search…"
          className="input"
          inputProps={{ 'aria-label': 'Search' }}
          onKeyPress={(e) => {
            if (e.charCode === ENTER_KEY) {
              this.searchClick(this.searchQuery);
            }
          }}
          onChange={(e) => {
            this.searchQuery = e.target.value;
            const { getActionDispatcher } = this.props;
            const dispatch = getActionDispatcher({
              payload: { isSearch },
              type: MOVIES.SEARCH_QUERY,
            });
            dispatch();
          }}
          value={searchQuery}
        />
        <div className="search-icon">
          <SearchIcon
            color="primary"
            onClick={() => this.searchClick(this.searchQuery)}
          />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  getActionDispatcher: PropTypes.func.isRequired,
  isSearch: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string.isRequired,
};
