import React from 'react';

import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

export class SimpleModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    const { open } = this.state;
    const {
      genres, title, overview, voteAverage, releaseDate,
    } = this.props;
    return (
      <div>
        <Button onClick={() => this.setState({ open: true })}>Open Modal</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={() => this.setState({ open: false })}
        >
          <div>
            <Typography variant="h6" id="modal-title">
              {title}
              <Typography variant="body2" color="textSecondary">
                {releaseDate}
              </Typography>
              <Typography variant="caption">
                {voteAverage}
              </Typography>
            </Typography>
            <Typography variant="body2" gutterBottom>
              {overview}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {`Genres: ${genres.join(', ')}`}
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SimpleModal;
