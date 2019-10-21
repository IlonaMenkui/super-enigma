import React from 'react';
import PropTypes from 'prop-types';

import ButtonBase from '@material-ui/core/ButtonBase';

import SimpleModal from '../../Modal';

import * as styles from './movie-list-item';

const MovieListItem = ({
  genres, title, overview, posterPath, voteAverage, releaseDate, popularity,
  originalLanguage, voteCount, originalTitle,
}) => (
  <styles.MovieWrap>
    <ButtonBase>
      <SimpleModal
        popularity={popularity}
        originalLanguage={originalLanguage}
        voteCount={voteCount}
        originalTitle={originalTitle}
        genres={genres}
        title={title}
        overview={overview}
        posterPath={posterPath}
        voteAverage={voteAverage}
        releaseDate={releaseDate}
      />
    </ButtonBase>
    <styles.TextWrap>
      <styles.Text size="25px">{title}</styles.Text>
      <styles.Text color="gray" size="11px" marginBottom="20px">
        {releaseDate ? new Date(releaseDate).getFullYear() : 'No release date'}
      </styles.Text>
      <styles.Text marginBottom="25px">
        {overview || 'No overview'}
      </styles.Text>
      <styles.Text color="gray">
        {genres.length ? `Genres: ${genres.join(', ')}` : 'No genres'}
      </styles.Text>
    </styles.TextWrap>
    <styles.ChipWrap>
      <styles.Chip>
        <styles.Text size="12px">{voteAverage}</styles.Text>
      </styles.Chip>
    </styles.ChipWrap>
  </styles.MovieWrap>
);

MovieListItem.defaultProps = {
  genres: [],
  overview: 'No overview',
  voteAverage: 0,
  popularity: 0,
  originalTitle: 'No original title',
  originalLanguage: 'No original language',
  voteCount: 0,
  title: 'No title',
};

MovieListItem.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  overview: PropTypes.string,
  posterPath: PropTypes.string.isRequired,
  voteAverage: PropTypes.number,
  releaseDate: PropTypes.string.isRequired,
  popularity: PropTypes.number,
  originalLanguage: PropTypes.string,
  voteCount: PropTypes.number,
  originalTitle: PropTypes.string,
};

export default MovieListItem;
