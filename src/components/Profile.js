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
  marginRight: "auto"
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
              <h1 style={user_name}>
                {sister.firstname} {sister.lastname}
              </h1>
              <p>
                {sister.city}, {sister.district}, {sister.address}
              </p>
              <p>Tel: {sister.phoneNumber} </p>
              <p> Email: {sister.email} </p>
            </Col>
            <Col>
              <h3>Experience</h3>
              <p>{sister.experience}</p>
              <h3>Billing Rate</h3>
              <p>{sister.billingRate}</p>
            </Col>
            <Col>
              <h3>Availability </h3>
              <p> {sister.availability} </p>
            </Col>
            <Col>
              <Button style={floatright} outline button="sencondary">
                {" "}
                Edit{" "}
              </Button>
            </Col>
          </Row>
        </Container>

        <Container>
          <h3>Overview </h3>
          <p>{sister.note}</p>
        </Container>
      </div>
    );
  }
}

export default Profile;
