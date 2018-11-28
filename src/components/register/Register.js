import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Nav from "../Nav";
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
  margin: "10px",
  
};

class Register extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div style={background1} className="login-container">
          <div>
            <h1 style={who}>Who you are ?? </h1>
            <Link to={"/parent/register"}>
              <Button className='btn-navhome' style={button} color="">
                {" "}
                Parent{" "}
              </Button>
            </Link>
            <Link to={"/sister/register"}>
              <Button className='btn-navhome' style={button} color="rgb(114, 174, 202)">
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

export default Register;
