import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import {
  PopularPage,
  LatestPage,
  NowPlayingPage
} from './pages/'
import Header from './components/Header'

import './App.css'

const history = createBrowserHistory()

function App() {
  return (
    <div className="App">
      <Router history={history}>
      <Header history={history}/>
        <Switch>
          <Route exact path="/" component={PopularPage}/>
          <Route path="/latest" component={LatestPage}/>
          <Route path="/nowplaying" component={NowPlayingPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App
