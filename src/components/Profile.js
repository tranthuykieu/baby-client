import React, { Component } from 'react';
import { Container,Row,Col,Button } from 'reactstrap';
import user_icon from '../img/user.png';

var background = {
    background: "#f9f4f6",
    padding: "30px"
}

var logo_icon = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
}

var user_name = {
    fontSize: "1.5rem"
}

var floatright = {
    float: "right"
  }

class Profile extends Component {
    render(){
        return(
            <div>
                <Container style={background}>
                    <Row>
                        <Col>
                            <img style={logo_icon} src={user_icon} alt="user_icon" />
                        </Col>
                        <Col>
                            <h1 style={user_name}> Vu Hoang Minh</h1>
                            <p>Hanoi, Viet Nam</p>
                            <p>Tel: 0964823741 </p>
                            <p> Email: ginjewel103@gmail.com </p>
                        </Col>
                        <Col>
                            <p>Experience 15 years</p> 
                            <p>Billing Rate $50-$75/week </p>
                        </Col>
                        <Col >
                            <Button style={floatright} outline button="sencondary"> Edit </Button>
                        </Col>
                    </Row>
                </Container>
                
                <Container>
                    <h3>Overview </h3>
                    <p>My experience is 15 yrs as a nanny/ house manager where I took care of calling maintenance, laundry, errand, cooking, etc. After having my own children I started my own cleaning business for more flexibility. I am open to price per a job depending how many bedrooms and baths in the home or a rate of $50-$75$/week. I bring my own supplies except vacuum( unless previously requested). And I try to stay as natural as possible. I am flexible if you need extra done. I would first come meet you and evaluate how long it takes so you are not over charged and we are a good fit Reference and background check available upon request. </p>
                    <h3>Availability </h3>
                    <p> 20-40hr/hr </p>

                </Container>
            </div>
        );
    }
}

export default Profile;