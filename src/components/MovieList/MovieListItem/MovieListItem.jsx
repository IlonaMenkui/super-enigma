import React from 'react';
import PropTypes from 'prop-types';

import ModalContainer from '../../../containers/ModalContainer';

import {
  MovieWrap, TextWrap, Text, ChipWrap, Chip,
} from './movie-list-item';

function MovieListItem({
  genres, title, overview, posterPath, voteAverage, releaseDate, popularity,
  originalLanguage, voteCount, originalTitle,
}) {
  return (
    <MovieWrap>
      <ModalContainer
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
      <TextWrap>
        <Text size="25px">{title}</Text>
        <Text color="gray" size="11px" marginBottom="20px">
          {releaseDate ? new Date(releaseDate).getFullYear() : 'No release date'}
        </Text>
        <Text marginBottom="25px">
          {overview || 'No overview'}
        </Text>
        <Text color="gray">
          {genres.length ? `Genres: ${genres.join(', ')}` : 'No genres'}
        </Text>
      </TextWrap>
      <ChipWrap>
        <Chip>
          <Text size="12px">{voteAverage}</Text>
        </Chip>
      </ChipWrap>
    </MovieWrap>
  );
}

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
