import React from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Search from '../../components/Search';
import { ENTER_KEY } from '../../constants';
import { search } from '../../actions/movies';

@connect(
  ({ searchQuery }) => ({ searchQuery }),
  { applySearchFilter: search },
)
export default class SearchContainer extends React.PureComponent {
   state = {
     searchQuery: '',
   };

   componentDidUpdate(prevProps) {
     const { searchQuery: prevSearchQuery } = prevProps;
     const { searchQuery } = this.props;
     if (prevSearchQuery !== searchQuery && !searchQuery) {
       this.setState({ searchQuery: '' });
     }
   }

  onSearchClick = () => {
    const { applySearchFilter } = this.props;
    const { searchQuery } = this.state;
    applySearchFilter({ searchQuery, page: 1 });
  };

  onEnterPress = e => {
    const { searchQuery } = this.state;
    if (e.charCode === ENTER_KEY) {
      this.onSearchClick(searchQuery);
    }
  }

  onHandleChange = e => {
    this.setState({ searchQuery: e.target.value });
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <Search
        onHandleChange={this.onHandleChange}
        onSearchClick={this.onSearchClick}
        onEnterPress={this.onEnterPress}
        searchQuery={searchQuery}
      />
    );
  }
}

SearchContainer.propTypes = {
  applySearchFilter: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};
