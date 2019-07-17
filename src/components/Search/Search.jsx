import React from 'react';

import PropTypes from 'prop-types';

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import { MOVIES } from '../../constants/actions';

import './search.css';

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchQuery = null;
  }

  searchClick = (searchQuery) => {
    if (searchQuery) {
      const { getActionDispatcher } = this.props;
      const dispatch = getActionDispatcher({ payload: { searchQuery, isSearch: true }, type: MOVIES.SEARCH });
      dispatch();
    }
  };

  render() {
    return (
      <div className="search-wrap">
        <InputBase
          placeholder="Search…"
          className="input"
          inputProps={{ 'aria-label': 'Search' }}
          onChange={(e) => {
            this.searchQuery = e.target.value;
          }}
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
};
export default Search;
