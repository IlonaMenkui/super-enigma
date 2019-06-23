import React from 'react'

import { PARAMS as params } from '../../App.constants'
import { MovieList } from '../../components/MovieList/MovieList'

import { Paper } from '@material-ui/core'

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
                        adult: movie.adult,
                        overview: movie.overview
                    }
                })
                this.setState({ movies })
            })
    }

    render() {
        return (
            <Paper className="movies-wrap">
                <h1>Popular movies:</h1>
                {this.state.movies.map(movie => <MovieList title={movie.title} adult={movie.adult} overview={movie.overview} />)}
            </Paper>
        )
    }
}
