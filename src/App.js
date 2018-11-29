import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";
import MainPage from "./components/MainPage";

import Login from "./components/login/Login";
import LoginParent from "./components/login/LoginParent";
import LoginSister from "./components/login/LoginSister";

import Register from "./components/register/Register";
import RegisterParent from "./components/register/RegisterParent";
import RegisterSister from "./components/register/RegisterSister";

import Profile from "./components/Profile";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route path="/profile/:sisterID" component={Profile} />

        <Route path="/login" component={Login} />
        <Route path="/parent/login" component={LoginParent} />
        <Route path="/sister/login" component={LoginSister} />

        <Route path="/register" component={Register} />
        <Route path="/parent/register" component={RegisterParent} />
        <Route path="/sister/register" component={RegisterSister} />

        <Route path="/mainpage" component={MainPage} />
      </Switch>
    );
  }
}

export default App;
