import React from 'react';
import PropTypes from 'prop-types';

import HelpIcon from '@material-ui/icons/Help';

import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

import './modal.css';

export class SimpleModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    const {
      genres, title, overview, posterPath, voteAverage, releaseDate, popularity,
      originalLanguage, voteCount, originalTitle,
    } = this.props;
    const { open } = this.state;
    return (
      <div>
        <HelpIcon fontSize="small" className="title" color="action" onClick={() => this.setState({ open: true })} />
        <Modal
          onClose={() => this.setState({ open: false })}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
        >
          <div className="modal-paper">
            <div><img className="img" alt="poster" src={posterPath} /></div>
            <div className="text-wrap">
              <Typography gutterBottom variant="h5">
                {title}
              </Typography>
              <Typography variant="subtitle2">
                {`Original title: ${originalTitle} (${originalLanguage})`}
                <Typography variant="subtitle2">
                  {`Vote average (vote count): ${voteAverage} (${voteCount})`}
                  <Typography variant="subtitle2">
                    {`Popularity index: ${popularity}`}
                  </Typography>
                </Typography>
                {`Date of release: ${releaseDate}`}
                <Typography variant="subtitle2">
                  {`Overview: ${overview}`}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  {`Genres: ${genres.join(', ')}`}
                </Typography>
              </Typography>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  releaseDate: PropTypes.number.isRequired,
  popularity: PropTypes.number.isRequired,
  originalLanguage: PropTypes.string.isRequired,
  voteCount: PropTypes.number.isRequired,
  originalTitle: PropTypes.string.isRequired,
};

export default SimpleModal;
