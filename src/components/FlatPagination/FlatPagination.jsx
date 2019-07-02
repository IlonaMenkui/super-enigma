import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Pagination from 'material-ui-flat-pagination';

import { PAGE_COUNT } from '../../app.constants';

const theme = createMuiTheme();

export class FlatPagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { offset: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, offset) {
    const { onClickPage } = this.props;
    onClickPage(e, offset);
    this.setState({ offset });
  }

  render() {
    const { totalResults } = this.props;
    const { offset } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Pagination
        // The number of rows per page. Allow a number greater than or equal to 1.
          limit={PAGE_COUNT}
        // The number of rows to skip. Allow a number greater than or equal to 0.
          offset={offset}
        // The total number of rows. Allow a number greater than or equal to 0.
          total={totalResults}
          onClick={this.handleClick}
        />
      </MuiThemeProvider>
    );
  }
}

export default FlatPagination;
