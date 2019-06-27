import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import {
  PopularPage,
  UpcomingPage,
  NowPlayingPage,
} from '../pages';
import Header from '../components/Header';
import { ROUTES } from '../app.constants';

import './app.css';

const history = createBrowserHistory();

function App() {
  return (
    <div className="wrapper">
      <div className="app">
        <Router history={history}>
          <Header history={history} />
          <Switch>
            <Route exact path={ROUTES.POPULAR} component={PopularPage} />
            <Route path={ROUTES.UPCOMING} component={UpcomingPage} />
            <Route path={ROUTES.NOW_PLAYING} component={NowPlayingPage} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
