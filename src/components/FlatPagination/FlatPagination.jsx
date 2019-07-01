import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Pagination from 'material-ui-flat-pagination';

const theme = createMuiTheme();

export class FlatPagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { offset: 0 };
  }

  handleClick(e, offset) {
    this.props.onClickPage(e, offset);
    this.setState({ offset });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Pagination
        // The number of rows per page. Allow a number greater than or equal to 1.
          limit={10}
        // The number of rows to skip. Allow a number greater than or equal to 0.
          offset={this.state.offset}
        // The total number of rows. Allow a number greater than or equal to 0.
          total={this.props.totalResults}
          onClick={this.handleClick.bind(this)}
        />
      </MuiThemeProvider>
    );
  }
}

export default FlatPagination;
