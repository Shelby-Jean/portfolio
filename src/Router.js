import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
    </Switch>
  )
}

export default Router;