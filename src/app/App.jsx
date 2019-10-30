import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from '../containers/Header';
import { ROUTES, MOVIE_TYPE as type } from '../constants';
import MoviePage from '../containers/MoviePage';
import { Wrapper, AppWrapper } from './styles';

const history = createBrowserHistory();

function App() {
  return (
    <Wrapper>
      <AppWrapper>
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
      </AppWrapper>
    </Wrapper>
  );
}

export default App;
