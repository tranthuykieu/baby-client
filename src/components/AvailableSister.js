import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class AvailableSister extends Component {
  render() {
    console.log(this.props.hashAvatar);
    return (
      <div className='sister-show container ml-5%'>
        
        <Row className='shadow'>
          <Col>
          <div className='sister-image-container'>
            <img className='sister-image'
              
              src={"http://" + this.props.hashAvatar}
              alt={this.props.firstname}
            />
          </div>
          </Col>
        
          <Col className='sister-info-container m-auto'>
              <Col className="sister-info">
                  <h5>
                    {"Name: "} {" "} {this.props.firstname} {" "} {this.props.lastname}
                  </h5>
              </Col>

              <Col className="sister-info">
                  {this.props.city}
              </Col>

              <Col className="sister-info">
                  Experience: {this.props.experience}
              </Col>

              <Col className="sister-info">
                  Availability: {this.props.availability}
              </Col>

              <Col className="sister-info">
                  Billing Rate: {this.props.billingRate}
              </Col>
          
          </Col>
          
        </Row>

          
        
      </div>
    );
  }
}

export default AvailableSister;
