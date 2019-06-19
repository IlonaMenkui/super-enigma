import React from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import {TabLatestMovies} from './TabLatestMovies'
import {TabNowPlayingMovies} from './TabNowPlayingMovies'
import {TabPopularMovies} from './TabPopularMovies'
import styles from './Header.css'

export const Header = () => {
  return (
    <div className="tabs">
      <Tabs centered>
        <TabLatestMovies/>
        <TabNowPlayingMovies/>
        <TabPopularMovies/>
      </Tabs>
    </div>
  )
}

export default Header