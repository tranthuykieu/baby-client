import React, { Component } from "react";
import axios from 'axios';
import {
  FormGroup,
  Form,
  Label,
  CardTitle,
  Input,
  Nav,
  Button
} from "reactstrap";

import Example from "../Nav";
import begin from "../../img/begin.jpeg";
// axios.defaults.withCredentials = true;


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

  _onChangePhoneNumber = (e) => {
    this.setState({ phoneNumber: e.target.value })
    console.log(this.state);
    // this.props.setSiginValue(e.target.value);
  }

  _oncChangePassword = (e) => {
    this.setState({ password: e.target.value })
    console.log(this.state);
  }

  _onSubmit = (e) => { 
    e.preventDefault();
    axios.post('http://localhost:1998/api/parent/login', this.state )
    .then(res => {
      console.log('Login successful');
      console.log(res);
      this.props.history.push('/mainpage');
    })
    .catch(err => {
      alert('Login fail !');
    });
  }

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
                    onChange={this._onChangePhoneNumber}
                    type="number"
                    if=""
                    required
                  />
                </Nav>
                <Nav>
                  <Label> Password: </Label>
                  <Input
                    onChange={this._oncChangePassword}
                    type="password"
                    required
                  />
                </Nav>

                <Button onClick={this._onSubmit} style={button} color="danger" type='submit'>
                  
                  Login
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
