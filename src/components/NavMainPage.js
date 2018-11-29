import React, { Component } from "react";
import axios from "axios";
import logo from "../img/logo.png";
import { Nav, Row, Col, Button, Input } from "reactstrap";

var header = {
  textAlign: "center",
  fontSize: "2rem"
};

var floatright = {
  float: "right"
};

var main_nav = {
  height: "9vh",
  padding: "10px",
  background: "#e2e2e2"
};

class NavMainPage extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);


    this.state = {
      isOpen: false
    };
  }
  toggleNav() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  _onLogout = (e) => {
    axios.get("http://localhost:1998/api/parent/logout").then((res) => {
      this.props.history.push("/");
    });
  };


  render() {
    return (
      <div className="">
        <div style={main_nav}>
          <Nav navbar>
            <Row>
              <Col>
                <h1 style={header}> BabioService </h1>
              </Col>

              <Col>
                <Input type="text" placeholder="Search..." />
              </Col>

              <Col>
                <Col>
                  <Button
                    onClick={this._onLogout}
                    style={{ float: "right" }}
                    color="primary"
                  >
                    {" "}
                    Log out
                  </Button>
                </Col>
              </Col>
            </Row>
          </Nav>
        </div>
      </div>
    );
  }
}

export default NavMainPage;
