import React from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'

import './MovieListItem.css'

export const MovieListItem = ({ title, genres, overview, poster_path, imdb_id }) => (
      <Paper className='paper'>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase>
              <img className='img' alt="poster" src={poster_path} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid className='overview' item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  {title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {overview}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Genres: {genres}
                </Typography>
              </Grid>
              {/* <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid> */}
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{imdb_id}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
)