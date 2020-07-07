import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';

function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={"/"}>
            <Login />
          </Route>
          <Route exact path="/users/:id">
            <HomePage />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
