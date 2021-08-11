import React from 'react';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';

import Home from './component/Home'
import Detail from './component/Detail'


function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
