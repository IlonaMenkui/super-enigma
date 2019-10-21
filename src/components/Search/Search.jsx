import React, { useCallback } from 'react';

import PropTypes from 'prop-types';

import searchImg from '../../static/images/searchicon.png';
import * as styles from './search';

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
    <styles.SearchWrap>
      <styles.SearchInput
        placeholder="Search…"
        inputProps={{ 'aria-label': 'Search' }}
        onKeyPress={memoizedEnterPress}
        onChange={memoizedHandleChange}
        value={searchQuery}
      />
      <styles.SearchIcon
        src={searchImg}
        onClick={memoizedSearchClick}
      />
    </styles.SearchWrap>
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
