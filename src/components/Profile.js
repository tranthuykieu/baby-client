import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import NavMainPage from "../components/NavMainPage";
import axios from "axios";

var background = {
  background: "#f9f4f6",
  padding: "30px"
};

var logo_icon = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: "50%",
  height: "200px",
  width: "200px"
};

var user_name = {
  fontSize: "1.5rem"
};
var floatright = {
  float: "right"
};

class Profile extends Component {
  state = {
    sister: {}
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost:1998/api/sisters/" + this.props.match.params.sisterID
      )
      .then((data) => {
        console.log(data.data.sisterFound);
        this.setState({ sister: data.data.sisterFound });
      })
      .catch((err) => console.error(err));
  }

  render() {
    console.log(this.props.match.params.sisterID);
    const sister = this.state.sister;
    return (
      <div>
        <NavMainPage history={this.props.history} />
        <Container style={background}>
          <Row>
            <Col>
              <img
                style={logo_icon}
                src={"http://" + sister.hashAvatar}
                alt={sister.firstname}
                className="img-thumbnail"
              />
            </Col>

            <Col>
                <Col>
                  <h1 style={user_name}>
                    {sister.firstname} {sister.lastname}
                  </h1>
                  
                  <span className="font-weight-bold"> City:</span>  {sister.city}
                  <br />
                  <span className="font-weight-bold"> Address:</span> {sister.address},  {sister.district}
                  <br />
                  <span className="font-weight-bold"> Tel:</span> {sister.phoneNumber} 
                  <br/ >
                  <span className="font-weight-bold"> Email:</span> {sister.email}
                </Col>
                <Col>
                  <span className="font-weight-bold"> Experience:</span> {sister.experience} 
                  <br></br>
                  <span className="font-weight-bold"> Billing Rate:</span> {sister.billingRate}
                </Col>
                <Col>
                <span className="font-weight-bold"> Availability:</span> {sister.availability}
                </Col>
            </Col>
            
          </Row>

          <Row>
          
              {/* <Button style={floatright} outline button="sencondary">
                {" "}
                Edit{" "}
              </Button> */}
            
          </Row>

          <Row>
          <h3>Overview: </h3>
          <p>{sister.note}</p>
          </Row>


        </Container>

        
          
        
      </div>
    );
  }
}

export default Profile;
