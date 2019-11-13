import React, { useCallback } from 'react';

import PropTypes from 'prop-types';

import searchImg from '../../static/images/searchicon.png';
import { SearchWrapper, SearchIcon, SearchInput } from './style';

function Search({
  searchQuery, onHandleChange, onSearchClick, onEnterPress,
}) {
  const memoizedEnterPress = useCallback(
    e => {
      onEnterPress(e);
    },
    [onEnterPress],
  );

  const memoizedHandleChange = useCallback(
    e => {
      onHandleChange(e);
    },
    [onHandleChange],
  );

  const memoizedSearchClick = useCallback(
    () => {
      onSearchClick();
    },
    [onSearchClick],
  );

  return (
    <SearchWrapper>
      <SearchInput
        placeholder="Search…"
        inputProps={{ 'aria-label': 'Search' }}
        onKeyPress={memoizedEnterPress}
        onChange={memoizedHandleChange}
        value={searchQuery}
      />
      <SearchIcon
        src={searchImg}
        onClick={memoizedSearchClick}
      />
    </SearchWrapper>
  );
}

export default Search;

Search.defaultProps = {
  searchQuery: '',
};

Search.propTypes = {
  searchQuery: PropTypes.string,
  onSearchClick: PropTypes.func.isRequired,
  onEnterPress: PropTypes.func.isRequired,
  onHandleChange: PropTypes.func.isRequired,
};
