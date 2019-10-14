import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import { HireMe } from '../HireMe';
import { Portfolio } from '../Portfolio';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/hireMe' component={HireMe} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
