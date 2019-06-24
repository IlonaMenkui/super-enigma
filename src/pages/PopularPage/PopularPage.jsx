import React from 'react'

import { PARAMS as params, STATIC_URL as img_url } from '../../App.constants'
import { MovieListItem } from '../../components/MovieListItem/MovieListItem'

import { Paper, Typography } from '@material-ui/core'

import axios from 'axios'

import '../pages.css'

export default class PopularPage extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/popular',
            {
                params: { api_key: params.api_key }
            })
            .then(res => {
                const movies = res.data.results.map(movie => {
                    return {
                        title: movie.title,
                        genres: movie.genres,
                        imdb_id: movie.imdb_id,
                        overview: movie.overview,
                        poster_path: `${img_url}${movie.poster_path.substring(1)}`
                    }
                })
                this.setState({ movies })
            })
    }

    render() {
        return (
            <main className="movies-wrap">
            <Paper>
            <Typography className='heading' variant='h4'>Popular movies:</Typography>
                {this.state.movies.map(movie => <MovieListItem
                title={movie.title}
                imdb_id={movie.imdb_id}
                overview={movie.overview}
                poster_path={movie.poster_path}/>)}
            </Paper>
            </main>
        )
    }
}
