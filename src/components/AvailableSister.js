import React, { Component } from "react";
import { Container } from "reactstrap";
// import user from "../img/user.png";

var container = {
  border: "0.4px black solid",
  display: "block",
  width: "50%",
  height: "180px",
  marginTop: "30px"
};

var div_image = {
  display: "inline-block",
  verticalAlign: "top",
  width: "100px",
  minHeight: "100px",
  maxHeight: "auto",
  margin: "5px",
  padding: "5px",
  float: "left"
};

var image = {
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  borderCollapse: "collapsed"
};

var div_info = {
  display: "inline-block"
};

class AvailableSister extends Component {
  render() {
    console.log(this.props.hashAvatar);
    return (
      <div>
        <Container style={container}>
          <div style={div_image}>
            <img
              style={image}
              src={"http://" + this.props.hashAvatar}
              alt={this.props.firstname}
            />
          </div>

          <div style={div_info} className="text ellipsis">
            <div>
              {" "}
              <h3>
                {" "}
                {this.props.firstname} | {this.props.city}
              </h3>{" "}
            </div>
            <div>
              {" "}
              {this.props.billingRate} | {"Experience: "}{" "}
              {this.props.experience}
            </div>
            <div> Availability: {this.props.availability}</div>
            <div className="text-concat">
              <p> {this.props.note} </p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default AvailableSister;
