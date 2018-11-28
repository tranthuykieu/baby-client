import React, { Component } from 'react';
import Nav from '../components/Nav';
import '../CSS/style.css';
import { Container, Row, Col,Jumbotron,Card, CardImg, CardText, CardBody,
    CardTitle,} from 'reactstrap';

import landing2 from '../img/landing-2.jpg';
import begin from '../img/begin.jpeg';
import main1 from '../img/main-1.jpeg';
import main2 from '../img/main-2.jpeg';
import main3 from '../img/main-3.jpeg';
import overview from '../img/overview-1.jpg';
import paying from '../img/paying.jpeg';

var background = {
    width: "100%",
    height: "85vh",
    backgroundImage: `url(${landing2})`,
    backgroundPosition: "center top",
    backgroundRepeat:"no-repeat bottom",
    backgroundSize:"cover",
    opacity: "0.8"
};

var background1 = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${begin})`,
    backgroundPosition: "bottom",
    backgroundRepeat:"no-repeat bottom",
    backgroundSize:"cover",
    opacity: "0.9",
    backgroundAttachment: "fixed" 
}



class HomePage extends Component {

    render() {
        return (
            <div>
                <Nav />

                {/* main landing*/}
                <div classname="landing">
                    <div style={background}>
                    <h1 className="landing-cap">Trusted by family</h1>
                    <p className="para-cap">Taking care of your children at anytime</p>
                    <p className="para-cap">Education to future-proof your children</p>
                    <a >
                        {/* <button className="btn-explore" type="button"><span>Explore now</span></button> */}
                    </a>
                    </div>
                </div>

                    {/*solution landing*/}
                <div>
                    <Jumbotron>
                        <h1 className="title" >Children for any schedule</h1>
                        <Row>
                            <Col>
                                <Card>
                                    <CardImg top width="100%" src={main1}/>
                                    <CardBody>
                                    <CardTitle>Newborns and infants</CardTitle>
                                    
                                        <CardText className='text-homepage'>Babio Service is a leading authority on all things baby. With a cumulative 100+ years of infant experience, you can trust t hat your newborn or infant will be safe in our Infant Specialist's hands. Babio Service has experience with twins, preemies and multiples.
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <CardImg top width="100%" src={main2}/>
                                    <CardBody>
                                    <CardTitle>Children of all age</CardTitle>
                                    
                                        <CardText className='text-homepage'>We have babysitters and nannies with childcare experiences spanning a broad range; from experience only a mother possesses to versatile daycare experience. Babio Service are available 24 hours a day, 7 days a week, 365 days a year for registered families.
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <CardImg top width="100%" src={main3}/>
                                    <CardBody>
                                    <CardTitle>Special Needs</CardTitle>
                                    
                                        <CardText className='text-homepage'>Whatever special needs your child may have, Babio Service has a proven track record of providing care at a variety of levels. We have experienced staff ready to give loving care to children with a broad range of special needs such as cerebral palsy, autism, ADD/ADHD, and more.
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Jumbotron>
                </div>

                <div className="margin-section">
                    <Container>
                        <h1 className="title header">Overview</h1>
                        <Row>
                            <Col>
                                <div className="img-container">
                                    <img className="img-fix" src={overview} alt="overview"/>
                                </div>
                            </Col>
                            <Col>
                                <h5>An Established, Upscale Babysitting</h5>
                                <p className='text-homepage'>Here at Babio Service, we understand your worries when it comes to leaving your precious child. That is why we make sure to only employ babysitters and nannies with CPR, First Aid and AED certifications for your peace of mind. We are available seven days a week, including all holidays and even if your child is sick. Trust that Babio Service will provide you with experienced babysitters and nannies who will give personalized one-on-one care to your children. We don't settle for anything less than exceeding your expectations.</p>
                            </Col>
                        </Row>

                    </Container>
                </div>

                <div style={background1} className="reserving">

                    
                        <h1 className="reserve-title">Reserving a Babysitter</h1>
                        <p className="para">A busy parent doesn't have time to babysit a babysitter</p>
                        <p className="para">We look after your children</p>
                </div>

                <div >
                    <Container>
                        <h2 className="title header">Paying Your Babysitter</h2>
                        <Row>
                            <Col>
                                <h5>Do not worry about checks or cash</h5>
                                <p className='text-homepage'>We pay the sitters or nannies for you. Our parents are invoiced bi-weekly on the 1st and 15th of the month for all prior sitting and nanny charges and associated fees. The credit card on file will be billed the following day. There is no need to pay the sitters or nannies directly, unless you would like to give them a gratuity. Babio Service takes responsibility for all payroll, taxes and withholding so our parents don't have to worry about it.</p>
                            </Col>
                            <Col>
                                <div className="img-container">
                                    <img className="img-fix" src={paying} alt="overview"/>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>



                
            </div>
            
            
        
        )
        

    }
}

export default HomePage;