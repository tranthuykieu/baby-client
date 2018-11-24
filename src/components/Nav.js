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
  Button
} from "reactstrap";

var height = {
  height: "12vh"
};

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
<<<<<<< HEAD
                <Link to={"/login"}>
                  <NavLink> Login </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Button color="danger">Join us</Button>{" "}
                </NavLink>
=======
                <NavLink href='/login'> Login </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/register'><Button color="danger">Join us</Button>{' '}</NavLink>
>>>>>>> c1709b6ae8f7f26db73a83ac0d10ae096ef4d7b0
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
