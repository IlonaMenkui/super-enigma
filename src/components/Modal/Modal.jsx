import React from 'react';
import PropTypes from 'prop-types';

import * as movieStyles from '../MovieList/MovieListItem/movie-list-item';
import * as styles from './modal';

import { STATIC_URL as imgUrl } from '../../constants';
import noImg from '../../static/images/no-img.png';

function SimpleModal({
  open, genres, title, overview, posterPath, voteAverage, releaseDate, popularity,
  originalLanguage, voteCount, originalTitle, onClick, handleClose,
}) {
  const posterPathUrl = posterPath === null ? noImg : `${imgUrl}${posterPath && posterPath.substring(1)}`;
  return (
    <div>
      <img className="img" alt="poster" src={posterPathUrl} onClick={onClick} />
      <styles.Modal open={open}>
        <movieStyles.MovieWrap>
          <div><img className="img" alt="poster" src={posterPathUrl} /></div>
          <movieStyles.TextWrap>
            <movieStyles.Text size="25px">
              {title}
            </movieStyles.Text>
            <movieStyles.Text>
              <b>Original title: </b>
              {`${originalTitle} (${originalLanguage})`}
            </movieStyles.Text>
            <movieStyles.Text>
              <b>Vote average (vote count): </b>
              {`${voteAverage} (${voteCount})`}
            </movieStyles.Text>
            <movieStyles.Text>
              <b>Popularity index: </b>
              {`${popularity}`}
            </movieStyles.Text>
            <movieStyles.Text>
              <b>Full date of release: </b>
              {releaseDate ? `${releaseDate.replace(/-/g, '.')}` : 'No release date'}
            </movieStyles.Text>
            <movieStyles.Text marginBottom="25px">
              <b>Overview: </b>
              {overview ? `${overview}` : 'No overview'}
            </movieStyles.Text>
            <movieStyles.Text>
              <b>Genres: </b>
              {genres.length ? `${genres.join(', ')}` : 'No genres'}
            </movieStyles.Text>
          </movieStyles.TextWrap>
          <styles.CloseButton type="button" onClick={handleClose}>✖</styles.CloseButton>
        </movieStyles.MovieWrap>
      </styles.Modal>
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
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
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
