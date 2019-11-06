import React from 'react';
import PropTypes from 'prop-types';

import {
  Label, LabelGroup, TitleLabel, Title,
} from '../MovieList/MovieListItem/style';

function checkReleaseDate(releaseDate) {
  if (releaseDate) {
    return releaseDate.replace(/-/g, '.');
  }
  return 'No release date';
}

const MovieFullDescription = ({
  genres, title, overview, voteAverage, releaseDate, popularity,
  originalLanguage, voteCount, originalTitle,
}) => (
  <LabelGroup>
    <TitleLabel>{title}</TitleLabel>
    <Label>
      <Title>Original title: </Title>
      {`${originalTitle} (${originalLanguage})`}
    </Label>
    <Label>
      <Title>Vote average (vote count): </Title>
      {`${voteAverage} (${voteCount})`}
    </Label>
    <Label>
      <Title>Popularity index: </Title>
      {popularity}
    </Label>
    <Label>
      <Title>Full date of release: </Title>
      {checkReleaseDate(releaseDate)}
    </Label>
    <Label marginBottom="25px">
      <Title>Overview: </Title>
      {overview}
    </Label>
    <Label>
      <Title>Genres: </Title>
      {genres}
    </Label>
  </LabelGroup>
);

MovieFullDescription.defaultProps = {
  releaseDate: 'No release date',
  voteAverage: 0,
  popularity: 0,
  originalTitle: 'No original title',
  originalLanguage: 'No original language',
  voteCount: 0,
  title: 'No title',
};


MovieFullDescription.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string,
  popularity: PropTypes.number,
  originalLanguage: PropTypes.string,
  voteCount: PropTypes.number,
  originalTitle: PropTypes.string,
  overview: PropTypes.string.isRequired,
  voteAverage: PropTypes.number,
  releaseDate: PropTypes.string,
};

export default MovieFullDescription;
