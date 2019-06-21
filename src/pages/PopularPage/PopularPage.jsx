import React from 'react'

import axios from 'axios';

//api key:
//ab7c9fc53125a8e8d9fd23c8704f80e5
//example:
//https://api.themoviedb.org/3/movie/550?api_key=ab7c9fc53125a8e8d9fd23c8704f80e5

export default class PopularPage extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
    <div>
        <h1>Popular movies:</h1>
    </div>
        )
    }
}

/*
state = {
        persons: []
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }
    
    render() {
        return (
    <div>
        <h1>Popular movies:</h1>
        <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    </div>
        )
    }
*/