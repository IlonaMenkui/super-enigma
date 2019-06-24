import React from 'react'

import axios from 'axios'

export const MovieList = ({ title, adult, overview, poster_path }) => (
    <div>
        <h4>{title}</h4>
        <p>{adult}</p>
        <p>{overview}</p>
    </div>
)
