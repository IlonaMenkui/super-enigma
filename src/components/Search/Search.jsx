import React from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import { MOVIES } from '../../constants/actions';

import './search.css';

class Search extends React.Component {
  searchClick = (searchQuery) => {
    if (searchQuery) {
      const { getActionDispatcher } = this.props;
      const dispatch = getActionDispatcher({
        payload:
        { searchQuery, isSearch: true },
        type: MOVIES.SEARCH,
      });
      dispatch();
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

const mapStateToProps = ({ search }) => ({
  ...search,
});

const mapDispatchToProps = dispatch => ({
  getActionDispatcher: action => () => dispatch(action),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

Search.propTypes = {
  getActionDispatcher: PropTypes.func.isRequired,
  isSearch: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string,
};
