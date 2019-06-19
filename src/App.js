import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import {
  PopularPage,
  LatestPage,
  NowPlayingPage
} from './components/pages/'

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
