import React from 'react'

import './MovieListItem.css'

export const MovieList = ({ title, adult, overview, poster_path }) => (
    <div className='wrap'>
        <div className='poster'>
            <img src={poster_path} alt={poster_path}></img>
        </div>
        <div className='title'>
            <h3>{title}</h3>
            <p>{adult}</p>
            <p>{overview}</p>
        </div>
    </div>
)
