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
  state = {
    parent: {
      phoneNumber: "",
      password: ""
    },
    userid: "",
    username: ""
  };
  _onFindUser = (e) => {};
  _onChangeHandler = (e) => {
    var preParent = this.state.parent;
    if (e.target.id === "1") preParent.phoneNumber = e.target.value;
    if (e.target.id === "2") preParent.password = e.target.value;
    this.setState({ parent: preParent });
  };

  _onSubmit = (e) => {
    e.preventDefault();
    console.log("phone number: " + this.state.parent.phoneNumber);
    console.log("password " + this.state.parent.password);
    axios
      .post("http://localhost:1998/api/parent/login", this.state.parent)
      .then((res) => {
        console.log("Login successful");
        console.log(res);
        this.setState({ userid: res.data.parentId });
        axios
          .get("http://localhost:1998/api/parents/" + this.state.userid)
          .then((data) => {
            console.log(data.data.parentFound);
            this.props.history.push(
              "/mainpage/" + data.data.parentFound.firstname
            );
          })
          .catch((err) => console.error(err));
        // const parent = res;
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
              <CardTitle> PARENT LOGIN </CardTitle>
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
