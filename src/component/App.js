import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from '../component/Pages/Home';
import Details from '../component/Pages/Details';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
