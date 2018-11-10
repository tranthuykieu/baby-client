import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import RegisterParent from './components/RegisterParent';
import RegisterSister from './components/RegisterSister';
import MainPage from './components/MainPage';

import './App.css';



class App extends Component {
  render() {
    return (
      
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/parent/register' component={RegisterParent} />
        <Route path='/sister/register' component={RegisterSister} />
        <Route path='/mainpage' component={MainPage} />
      </Switch>
    );
  }
}

export default App;
