import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Example from "../Nav";

import begin from "../../img/begin.jpeg";

var background1 = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${begin})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat bottom",
  backgroundSize: "cover",
  opacity: "0.9",
  backgroundAttachment: "fixed"
};

const who = {
  color: "white"
};

const button = {
  margin: "2px"
};


class Login extends Component {
  render() {
    return (
      <div style={background1}>
        <Example />
        <div  className="login-container">
          <div>
            <h1 style={who}>Who you are ?</h1>
            <Link to={"/parent/login"}>
              <Button className='btn-navhome' style={button} color="primary">
                {" "}
                Parent's baby{" "}
              </Button>
            </Link>
            <Link to={"/sister/login"}>
              <Button className='btn-navhome' style={button} color="primary">
                {" "}
                Babysister{" "}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
