import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import PopularPage from './components/pages/PopularPage/PopularPage'
import LatestPage from './components/pages/LatestPage/LatestPage'
import NowPlayingPage from './components/pages/NowPlayingPage/NowPlayingPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PopularPage}/>
          <Route path="/latest" component={LatestPage}/>
          <Route path="/nowplaying" component={NowPlayingPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
