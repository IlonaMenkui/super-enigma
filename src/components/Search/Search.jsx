import React, { useCallback } from 'react';

import PropTypes from 'prop-types';

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import './search.css';

function Search({
  searchQuery, onHandleChange, onSearchClick, onEnterPress,
}) {
  const memoizedEnterPress = useCallback(
    (e) => {
      onEnterPress(e);
    },
    [onEnterPress],
  );

  const memoizedHandleChange = useCallback(
    (e) => {
      onHandleChange(e);
    },
    [onHandleChange],
  );

  return (
    <div className="search-wrap">
      <InputBase
        placeholder="Search…"
        className="input"
        inputProps={{ 'aria-label': 'Search' }}
        onKeyPress={e => memoizedEnterPress(e)}
        onChange={e => memoizedHandleChange(e)}
        value={searchQuery}
      />
      <div className="search-icon">
        <SearchIcon
          color="primary"
          onClick={() => onSearchClick()}
        />
      </div>
    </div>
  );
}

export default Search;

Search.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchClick: PropTypes.func.isRequired,
  onEnterPress: PropTypes.func.isRequired,
  onHandleChange: PropTypes.func.isRequired,
};
