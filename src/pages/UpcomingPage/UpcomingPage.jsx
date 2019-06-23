import React from 'react'

import { PARAMS as params } from '../../App.constants'
import { MovieList } from '../../components/MovieList/MovieList'
    
import axios from 'axios'


export default class UpcomingPage extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/upcoming',
            {
                params: { api_key: params.api_key }
            })
            .then(res => {
                const movies = res.data.results.map(movie => {
                    return {
                        title: movie.title
                    }
                })
                this.setState({ movies })
            })
    }

    render() {
        return (
            <div>
                <h1>Upcoming movies:</h1>
                {this.state.movies.map(movie => <MovieList title={movie.title}/>)}
            </div>
        )
    }
}
