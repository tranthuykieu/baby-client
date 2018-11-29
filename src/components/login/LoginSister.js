import React, { Component } from "react";
import axios from "axios";
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

class LoginSister extends Component {
  state = {
    sister: {
      phoneNumber: "",
      password: ""
    },
    userid: "",
    username: ""
  };

  _onChangeHandler = (e) => {
    console.log("Value from event: " + e.target.value);
    var preSister = this.state.sister;
    if (e.target.id === "1") preSister.phoneNumber = e.target.value;
    if (e.target.id === "2") preSister.password = e.target.value;
    this.setState({ sister: preSister });
  };

  _onSubmit = (e) => {
    e.preventDefault();
    console.log("phone number: " + this.state.sister.phoneNumber);
    console.log("password " + this.state.sister.password);
    axios
      .post("http://localhost:1998/api/sister/login", this.state.sister)
      .then((res) => {
        console.log("Login successful");
        console.log(res);
        this.setState({ userid: res.data.sisterId });
        axios
          .get("http://localhost:1998/api/sisters/" + this.state.userid)
          .then((data) => {
            console.log(this.state.userid);
            console.log(data.data.sisterFound);
            this.props.history.push(
              "/mainpage/" + data.data.sisterFound.firstname
            );
          })
          .catch((err) => console.error(err));
        // const sister = res;
      })
      .catch((err) => {
        alert("Login fail !");
      });
  };

  render() {
    return (
      <div style={background1}>
        <Example />
        <div className="login-container">
          <div className="login">
            <FormGroup>
              <CardTitle> BABYSITTER LOGIN </CardTitle>
              <Form>
                <Nav>
                  <Label> Phone number: </Label>
                  <Input
                    onChange={this._onChangeHandler}
                    type="number"
                    if=""
                    id="1"
                    required
                  />
                </Nav>
                <Nav>
                  <Label> Password: </Label>
                  <Input
                    onChange={this._onChangeHandler}
                    type="password"
                    id="2"
                    required
                  />
                </Nav>
                <Button
                  onClick={this._onSubmit}
                  style={button}
                  color="primary"
                  type="submit"
                >
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

export default LoginSister;
