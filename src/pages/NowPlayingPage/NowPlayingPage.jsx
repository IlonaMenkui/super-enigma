import React from 'react'

import { MOVIE_TYPE as type } from '../../app.constants.js'
import { MovieListItem } from '../../components/MovieListItem/MovieListItem'

import { Paper, Typography } from '@material-ui/core'

import { getMovies } from '../../api/api'

import '../pages.css'

export default class NowPlayingPage extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        getMovies(type.NOW_PLAYING)
            .then(movies => {
                this.setState({ movies })
            })
    }

    render() {
        return (
            <main className="movies-wrap">
                <Paper>
                    <Typography className='heading' variant='h4'>Now playing movies:</Typography>
                    {this.state.movies.map(movie => <MovieListItem
                        title={movie.title}
                        genres={movie.genres}
                        imdb_id={movie.imdb_id}
                        overview={movie.overview}
                        poster_path={movie.poster_path} />)}
                </Paper>
            </main>
        )
    }
}
