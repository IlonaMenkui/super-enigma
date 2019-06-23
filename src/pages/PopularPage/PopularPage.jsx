import React from 'react'

import { PARAMS as params } from '../../App.constants'

import axios from 'axios'

export default class PopularPage extends React.Component {
    constructor() {
        super()
        // this.axios = axios.create({
        //     baseURL: 'https://api.themoviedb.org/3',
        // })
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
                        title: movie.title
                    }
                })
                this.setState({ movies })
            })
    }

    render() {
        return (
            <div>
                <h1>Popular movies:</h1>
                {this.state.movies.map(movie => <h4>{movie.title}</h4>)}
            </div>
        )
    }
}
