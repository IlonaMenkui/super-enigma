import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import './search.css';

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="search">
        <InputBase
          placeholder="Search…"
          className="input"
          inputProps={{ 'aria-label': 'Search' }}
        />
        <div className="search-icon">
          <SearchIcon color="primary" onClick={()=>{}} />
        </div>
      </div>
    );
  }
}

export default Search;
