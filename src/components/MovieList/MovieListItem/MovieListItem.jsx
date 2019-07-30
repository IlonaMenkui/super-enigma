import React from 'react';
import PropTypes from 'prop-types';

import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import { SimpleModal } from '../../Modal/Modal';

import './movie-list-item.css';

const MovieListItem = ({
  genres, title, overview, posterPath, voteAverage, releaseDate, popularity,
  originalLanguage, voteCount, originalTitle,
}) => (
  <Grid container spacing={2}>
    <Grid item>
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
    </Grid>
    <Grid item xs={12} sm container>
      <Grid className="overview" item xs container direction="column" spacing={2}>
        <Grid item xs>
          <Typography gutterBottom variant="h5">
            <div className="title-wrap">
              <div>{title}</div>
            </div>
            <Typography variant="body2" color="textSecondary">
              {releaseDate ? new Date(releaseDate).getFullYear() : 'No release date'}
            </Typography>
          </Typography>
          <Typography variant="body2" gutterBottom>
            {overview || 'No overview'}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {genres[0] !== undefined ? `Genres: ${genres.join(', ')}` : 'No genres'}
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Chip className="chip" label={voteAverage} variant="outlined" />
      </Grid>
    </Grid>
  </Grid>
);

MovieListItem.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  releaseDate: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
  originalLanguage: PropTypes.string.isRequired,
  voteCount: PropTypes.number.isRequired,
  originalTitle: PropTypes.string.isRequired,
};

export default MovieListItem;
