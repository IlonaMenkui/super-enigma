import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import {TabLatestMovies} from './TabLatestMovies'
import {TabNowPlayingMovies} from './TabNowPlayingMovies'
import {TabPopularMovies} from './TabPopularMovies'

export const Header = () => {
  return (
    <Paper>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <TabLatestMovies/>
        <TabNowPlayingMovies/>
        <TabPopularMovies/>
      </Tabs>
    </Paper>
  )
}

export default Header