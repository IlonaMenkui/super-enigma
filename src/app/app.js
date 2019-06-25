import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import {
  PopularPage,
  UpcomingPage,
  NowPlayingPage
} from '../pages'
import Header from '../components/Header'

import './app.css'

const history = createBrowserHistory()

function App() {
  return (
    <div className="wrapper">
    <div className="app">
      <Router history={history}>
      <Header history={history}/>
        <Switch>
          <Route exact path="/" component={PopularPage}/>
          <Route path="/upcoming" component={UpcomingPage}/>
          <Route path="/nowplaying" component={NowPlayingPage}/>
        </Switch>
      </Router>
    </div>
    </div>
  );
}

export default App
