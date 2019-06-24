import React from 'react'

import { PARAMS as params, STATIC_URL as img_url } from '../../app.constants'
import { MovieList } from '../../components/MovieListItem/MovieListItem'

import { Paper } from '@material-ui/core'

import axios from 'axios'

import '../pages.css'
export default class NowPlayingPage extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/now_playing',
            {
                params: { api_key: params.api_key }
            })
            .then(res => {
                const movies = res.data.results.map(movie => {
                    return {
                        title: movie.title,
                        adult: movie.adult,
                        overview: movie.overview,
                        poster_path: `${img_url}${movie.poster_path.substring(1)}`
                    }
                })
                this.setState({ movies })
            })
    }

    render() {
        return (
            <main>
            <Paper className="movies-wrap">
                <h1>Now playing movies:</h1>
                {this.state.movies.map(movie => <MovieList title={movie.title} adult={movie.adult} overview={movie.overview} poster_path={movie.poster_path}/>)}
            </Paper>
            </main>
        )
    }
}
