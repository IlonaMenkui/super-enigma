import React from 'react'

import { MovieListItem } from './MovieListItem/MovieListItem'

import { Paper, Typography } from '@material-ui/core'

import './movie-list.css'

const MovieList = ({movies, page_title}) => (<main className="movies-wrap">
    <Paper>
        <Typography className='heading' variant='h4'>{page_title}</Typography>
        {movies.map(movie => <MovieListItem
            title={movie.title}
            genres={movie.genres}
            imdb_id={movie.imdb_id}
            overview={movie.overview}
            poster_path={movie.poster_path} />)}
    </Paper>
</main>
)

export default MovieList