import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

import { STATIC_URL as imgUrl } from '../../constants';
import noImg from '../../static/images/no-img.png';
import './modal.css';

function SimpleModal({
  genres, title, overview, posterPath, voteAverage, releaseDate, popularity,
  originalLanguage, voteCount, originalTitle,
}) {
  const [open, setOpen] = useState(false);

  const memoizedSetStateOpen = useCallback(
    () => {
      setOpen(true);
    },
    [setOpen],
  );

  const memoizedSetStateClose = useCallback(
    () => {
      setOpen(false);
    },
    [setOpen],
  );

  const posterPathUrl = posterPath === null ? noImg : `${imgUrl}${posterPath && posterPath.substring(1)}`;

  return (
    <div>
      <img className="img" alt="poster" src={posterPathUrl} onClick={memoizedSetStateOpen} />
      <Modal
        onClose={memoizedSetStateClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
      >
        <div className="modal-paper">
          <div><img className="img" alt="poster" src={posterPathUrl} /></div>
          <div className="text-wrap">
            <Typography gutterBottom variant="h4">
              {title}
            </Typography>
            <Typography variant="subtitle2">
              <b>Original title: </b>
              {`${originalTitle} (${originalLanguage})`}
            </Typography>
            <Typography variant="subtitle2">
              <b>Vote average (vote count): </b>
              {`${voteAverage} (${voteCount})`}
            </Typography>
            <Typography variant="subtitle2">
              <b>Popularity index: </b>
              {`${popularity}`}
            </Typography>
            <Typography variant="subtitle2">
              <b>Full date of release: </b>
              {releaseDate ? `${releaseDate.replace(/-/g, '.')}` : 'No release date'}
            </Typography>
            <Typography variant="subtitle2">
              <b>Overview: </b>
              {overview ? `${overview}` : 'No overview'}
            </Typography>
            <Typography variant="subtitle2">
              <b>Genres: </b>
              {genres.length ? `${genres.join(', ')}` : 'No genres'}
            </Typography>
          </div>
        </div>
      </Modal>
    </div>
  );
}

SimpleModal.defaultProps = {
  genres: [],
  overview: 'No overview',
  releaseDate: 'No release date',
  voteAverage: 0,
  popularity: 0,
  originalTitle: 'No original title',
  originalLanguage: 'No original language',
  voteCount: 0,
  title: 'No title',
  posterPath: null,
};


SimpleModal.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  posterPath: PropTypes.string,
  popularity: PropTypes.number,
  originalLanguage: PropTypes.string,
  voteCount: PropTypes.number,
  originalTitle: PropTypes.string,
  overview: PropTypes.string,
  voteAverage: PropTypes.number,
  releaseDate: PropTypes.string,
};

export default SimpleModal;
