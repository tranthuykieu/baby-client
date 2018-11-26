import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Button,
  Row,Col,
  Container
} from "reactstrap";
import logo from '../img/logo.png';


var height = {
  height: "12vh",
  width: "100%",
  zIndex: "3"
};

var logo_icon = {
  display: "block",
  width: "80px",
  height: "50px",
  textAlign: "center",
  marginLeft: "auto",
  marginRight: "auto"
}

var header = {
  textAlign: "center",
  fontSize: "2rem"
}

var floatright = {
  float: "right"
}

var inline = {
  display: "inline",
  margin: "10px"
}

var main_nav = {
  height: "9vh",
  padding: "10px"
}


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar style={height} color="light" light expand="md">
          
          <NavbarBrand href="/">BabioService</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href='/login'> Login </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/register'><Button color="danger">Join us</Button>{' '}</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar> 
      
      </div>
    );
  }
}
