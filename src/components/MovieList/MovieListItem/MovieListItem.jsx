import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ButtonBase from '@material-ui/core/ButtonBase';

import SimpleModal from '../../Modal';

import './movie-list-item.css';

const MovieWrap = styled.div`
  display: flex;
  align-items: flex-start;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-left: 15px;
`;
const Text = styled.div`
  font-size: ${props => props.size || '15px'};
  color: ${props => props.color || 'black'};
  margin-bottom: ${props => props.marginBottom || '0'};
`;

const Chip = styled.div`
  display: flex;
  width: 35px;
  height: 35px;
  margin-right: 15px;
  margin-left: 10px; 
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 50px;
`;

const ChipWrap = styled.div`
  margin-left: 20px;
`;

const MovieListItem = ({
  genres, title, overview, posterPath, voteAverage, releaseDate, popularity,
  originalLanguage, voteCount, originalTitle,
}) => (
  <MovieWrap>
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
