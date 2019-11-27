import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import ModalContainer from '../../../containers/ModalContainer';
import MovieFullDescription from '../../MovieFullDescription';
import noImg from '../../../static/images/no-img.png';
import { STATIC_URL as imgUrl } from '../../../constants';

import {
  MovieWrapper, Label, LabelGroup, ChipWrapper, Chip, PosterImage, TitleLabel, DateLabel,
  ModalPosterImage, PosterWrapper,
} from './style';

function MovieListItem({
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

  function getReleaseDate() {
    if (releaseDate) {
      return new Date(releaseDate).getFullYear();
    }
    return 'No release date';
  }

  function getOverview() {
    if (overview) {
      return overview;
    }
    return 'No overview';
  }

  function getGenres() {
    if (genres.length) {
      return genres.join(', ');
    }
    return 'No genres';
  }

  const posterPathUrl = posterPath === null ? noImg : `${imgUrl}${posterPath && posterPath.substring(1)}`;
  return (
    <MovieWrapper>
      <PosterWrapper>
        <PosterImage src={posterPathUrl} onClick={memoizedSetStateOpen} />
      </PosterWrapper>
      <ModalContainer
        onClose={memoizedSetStateClose}
        open={open}
        modalContent={(
          <MovieWrapper>
            <ModalPosterImage src={posterPathUrl} />
            <MovieFullDescription
              popularity={popularity}
              originalLanguage={originalLanguage}
              voteCount={voteCount}
              originalTitle={originalTitle}
              genres={getGenres()}
              title={title}
              overview={getOverview()}
              voteAverage={voteAverage}
              releaseDate={releaseDate}
            />
          </MovieWrapper>
        )}
      />
      <LabelGroup>
        <TitleLabel>{title}</TitleLabel>
        <DateLabel>{getReleaseDate()}</DateLabel>
        <Label marginBottom="25px">{getOverview()}</Label>
        <Label color="gray">{getGenres(genres)}</Label>
      </LabelGroup>
      <ChipWrapper>
        <Chip>
          <Label size="12px">{voteAverage}</Label>
        </Chip>
      </ChipWrapper>
    </MovieWrapper>
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
