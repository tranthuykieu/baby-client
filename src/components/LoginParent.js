import React, { Component } from "react";
import {
  FormGroup,
  Form,
  Label,
  CardTitle,
  Input,
  Nav,
  Button
} from "reactstrap";
import Example from "./Nav";
import begin from "../img/begin.jpeg";

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

const button = {
  margin: "10px 0px 0px 0px"
};

class LoginParent extends Component {
  state = {
    parent: {}
  };

  _handleChange = (e) => {};

  _handleLogin = (e) => {};

  render() {
    return (
      <div>
        <Example />
        <div style={background1} className="login-container">
          <div className="login">
            <FormGroup>
              <CardTitle> PARENT LOGIN </CardTitle>
              <Form>
                <Nav>
                  <Label> Phone number: </Label>
                  <Input
                    onChange={this._handleChange}
                    type="number"
                    if=""
                    required
                  />
                </Nav>
                <Nav>
                  <Label> Password: </Label>
                  <Input
                    onChange={this.handleChange}
                    type="password"
                    required
                  />
                </Nav>
                <Button style={button} color="danger">
                  {" "}
                  Login{" "}
                </Button>
              </Form>
            </FormGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginParent;
