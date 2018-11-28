import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
      <div className='container-navhome'>
        <Navbar  style={height} color="" light expand="md">
          <NavbarBrand href="/" className='logo-home'> BabioService</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/login"> 
                  <Button className='btn-navhome' color="">Login</Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/register">
                  <Button  className='btn-navhome' color="" >Join us</Button>{" "}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
