import React from 'react';
import PropTypes from 'prop-types';

import {
  TextWrap, Text,
} from '../MovieList/MovieListItem/style';

const MovieFullDescription = ({
  genres, title, overview, voteAverage, releaseDate, popularity,
  originalLanguage, voteCount, originalTitle,
}) => (
  <TextWrap>
    <Text size="25px">
      {title}
    </Text>
    <Text>
      <b>Original title: </b>
      {`${originalTitle} (${originalLanguage})`}
    </Text>
    <Text>
      <b>Vote average (vote count): </b>
      {`${voteAverage} (${voteCount})`}
    </Text>
    <Text>
      <b>Popularity index: </b>
      {`${popularity}`}
    </Text>
    <Text>
      <b>Full date of release: </b>
      {releaseDate ? `${releaseDate.replace(/-/g, '.')}` : 'No release date'}
    </Text>
    <Text marginBottom="25px">
      <b>Overview: </b>
      {overview ? `${overview}` : 'No overview'}
    </Text>
    <Text>
      <b>Genres: </b>
      {genres.length ? `${genres.join(', ')}` : 'No genres'}
    </Text>
  </TextWrap>
);

MovieFullDescription.defaultProps = {
  genres: [],
  overview: 'No overview',
  releaseDate: 'No release date',
  voteAverage: 0,
  popularity: 0,
  originalTitle: 'No original title',
  originalLanguage: 'No original language',
  voteCount: 0,
  title: 'No title',
};


MovieFullDescription.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  popularity: PropTypes.number,
  originalLanguage: PropTypes.string,
  voteCount: PropTypes.number,
  originalTitle: PropTypes.string,
  overview: PropTypes.string,
  voteAverage: PropTypes.number,
  releaseDate: PropTypes.string,
};

export default MovieFullDescription;
