/* eslint-disable import/extensions */
import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Header } from '../containers/Header.jsx';
import { ROUTES, MOVIE_TYPE as type } from '../constants';
import MoviePage from '../containers/MoviePage.jsx';

import './app.css';

const history = createBrowserHistory();

function App() {
  return (
    <div className="wrapper">
      <div className="app">
        <Router history={history}>
          <Header history={history} />
          <Switch>
            <Route
              exact
              path={ROUTES.POPULAR}
              render={() => <MoviePage title="Popular movies:" type={type.POPULAR} />}
            />
            <Route
              path={ROUTES.UPCOMING}
              render={() => <MoviePage title="Upcoming movies:" type={type.UPCOMING} />}
            />
            <Route
              path={ROUTES.NOW_PLAYING}
              render={() => <MoviePage title="Now playing movies:" type={type.NOW_PLAYING} />}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
