import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import Login from './components/Login'

import './App.css';

class App extends Component {
  render() {
    return (
      
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={Login} />
      </Switch>
    );
  }
}

export default App;
