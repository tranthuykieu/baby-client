import React, { Component } from 'react';
import logo from '../img/logo.png';
import {Navbar,Nav,NavItem,NavbarBrand,NavLink,NavbarToggler,Collapse,Row, Col,Button } from 'reactstrap';


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
    padding: "10px",
    background: "#e2e2e2"
  }



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

    render(){
        return (
        <div>
          <div style={main_nav}>
                        <Nav navbar>
                            <Row>
                                <Col>
                                  <h1 style={header}> BabioService </h1>
                                </Col>
                                <Col>
                                    <img style={logo_icon} src={logo} alt="logo" />
                                </Col>
                                <Col style={inline}>
                                    <Button style={floatright} color="danger"> Log out</Button>
                                    <NavItem>
                                        <NavLink style={floatright} href="/">Welcome, username</NavLink>
                                        
                                    </NavItem>
                                    
                                </Col>
                            </Row>
                        </Nav>
                </div>
        </div>
        );
    }
}

export default NavMainPage;